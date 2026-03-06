import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          businessType: z.string().min(1, "Business type is required"),
          projectDetails: z.string().min(10, "Project details must be at least 10 characters"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Send notification to owner
          await notifyOwner({
            title: "New Website Inquiry",
            content: `New project inquiry from ${input.name}\n\nEmail: ${input.email}\nBusiness Type: ${input.businessType}\n\nProject Details:\n${input.projectDetails}`,
          });

          return {
            success: true,
            message: "Thank you! We'll be in touch within 24 hours.",
          };
        } catch (error) {
          console.error("Failed to submit contact form:", error);
          return {
            success: false,
            message: "Failed to submit form. Please try again.",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
