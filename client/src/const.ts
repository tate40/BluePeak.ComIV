export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
// Uses string concatenation instead of new URL() for better Vercel compatibility
export const getLoginUrl = (returnPath?: string) => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  
  // Use window.location.origin for dynamic origin detection
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const redirectUri = `${origin}/api/oauth/callback`;
  const state = btoa(returnPath ? `${redirectUri}?return=${returnPath}` : redirectUri);

  // Build URL using string concatenation for Vercel compatibility
  const params = new URLSearchParams();
  params.set("appId", appId);
  params.set("redirectUri", redirectUri);
  params.set("state", state);
  params.set("type", "signIn");

  return `${oauthPortalUrl}/app-auth?${params.toString()}`;
};
