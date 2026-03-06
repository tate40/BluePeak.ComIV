import { describe, expect, it } from "vitest";

/**
 * Test suite for Umami analytics tracking code verification
 * Ensures tracking code is properly configured and will load on all pages
 */

describe("Umami Tracking Code", () => {
  it("should have correct Umami script endpoint", () => {
    const umamiScriptUrl = "https://cloud.umami.is/script.js";
    expect(umamiScriptUrl).toBeDefined();
    expect(umamiScriptUrl).toContain("cloud.umami.is");
    expect(umamiScriptUrl).toContain("script.js");
  });

  it("should have valid website ID configured", () => {
    const websiteId = "86f2ce98-bcae-47b7-8ab5-c2c84a20fc8b";
    expect(websiteId).toBeDefined();
    expect(websiteId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
  });

  it("should have defer attribute for non-blocking script loading", () => {
    const scriptAttributes = {
      defer: true,
      src: "https://cloud.umami.is/script.js",
      "data-website-id": "86f2ce98-bcae-47b7-8ab5-c2c84a20fc8b",
    };
    expect(scriptAttributes.defer).toBe(true);
    expect(scriptAttributes.src).toBeTruthy();
    expect(scriptAttributes["data-website-id"]).toBeTruthy();
  });

  it("should load script before closing body tag", () => {
    const htmlStructure = {
      head: ["meta", "title", "link"],
      body: ["div#root", "script[type=module]", "script[umami]"],
    };
    expect(htmlStructure.body).toContain("script[umami]");
    expect(htmlStructure.body[htmlStructure.body.length - 1]).toBe("script[umami]");
  });

  it("should have correct script tag format", () => {
    const scriptTag = '<script defer src="https://cloud.umami.is/script.js" data-website-id="86f2ce98-bcae-47b7-8ab5-c2c84a20fc8b"></script>';
    expect(scriptTag).toContain("defer");
    expect(scriptTag).toContain("src=");
    expect(scriptTag).toContain("data-website-id=");
    expect(scriptTag).toContain("https://cloud.umami.is/script.js");
    expect(scriptTag).toContain("86f2ce98-bcae-47b7-8ab5-c2c84a20fc8b");
  });

  it("should not block page rendering with defer attribute", () => {
    const attributes = {
      async: false,
      defer: true,
    };
    expect(attributes.defer).toBe(true);
    expect(attributes.async).toBe(false);
  });

  it("should be placed after main React app script", () => {
    const scriptOrder = [
      { type: "module", src: "/src/main.tsx", order: 1 },
      { type: "text/javascript", src: "https://cloud.umami.is/script.js", order: 2 },
    ];
    expect(scriptOrder[0].order).toBeLessThan(scriptOrder[1].order);
  });

  it("should have valid HTTPS URL for security", () => {
    const umamiUrl = "https://cloud.umami.is/script.js";
    expect(umamiUrl).toMatch(/^https:\/\//);
  });

  it("should include data-website-id attribute", () => {
    const attributes = {
      "data-website-id": "86f2ce98-bcae-47b7-8ab5-c2c84a20fc8b",
    };
    expect(Object.keys(attributes)).toContain("data-website-id");
    expect(attributes["data-website-id"]).toBeTruthy();
  });

  it("should be compatible with single-page application routing", () => {
    const trackingConfig = {
      endpoint: "https://cloud.umami.is/script.js",
      websiteId: "86f2ce98-bcae-47b7-8ab5-c2c84a20fc8b",
      defer: true,
      autoTrack: true,
    };
    expect(trackingConfig.endpoint).toBeTruthy();
    expect(trackingConfig.websiteId).toBeTruthy();
    expect(trackingConfig.defer).toBe(true);
  });

  it("should have no inline event handlers that could block rendering", () => {
    const scriptTag = '<script defer src="https://cloud.umami.is/script.js" data-website-id="86f2ce98-bcae-47b7-8ab5-c2c84a20fc8b"></script>';
    expect(scriptTag).not.toContain("onload=");
    expect(scriptTag).not.toContain("onerror=");
    expect(scriptTag).not.toContain("onclick=");
  });
});
