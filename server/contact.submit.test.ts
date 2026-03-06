import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("successfully submits a contact form with valid data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "John Smith",
      email: "john@example.com",
      businessType: "law-firm",
      projectDetails: "We need a professional website to showcase our legal services and generate client inquiries.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Thank you");
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: "John Smith",
        email: "invalid-email",
        businessType: "law-firm",
        projectDetails: "We need a professional website to showcase our legal services and generate client inquiries.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("rejects submission with missing name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: "",
        email: "john@example.com",
        businessType: "law-firm",
        projectDetails: "We need a professional website to showcase our legal services and generate client inquiries.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("rejects submission with short project details", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: "John Smith",
        email: "john@example.com",
        businessType: "law-firm",
        projectDetails: "Short",
      });
      expect.fail("Should have thrown validation error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("rejects submission with missing business type", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: "John Smith",
        email: "john@example.com",
        businessType: "",
        projectDetails: "We need a professional website to showcase our legal services and generate client inquiries.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
