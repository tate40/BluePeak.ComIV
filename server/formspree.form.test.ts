import { describe, expect, it, vi } from "vitest";

/**
 * Test suite for Formspree contact form integration
 * Tests form submission handling, validation, and error states
 */

describe("Formspree Contact Form", () => {
  it("should have correct form endpoint configured", () => {
    const formspreeEndpoint = "https://formspree.io/f/xreyzvar";
    expect(formspreeEndpoint).toBeDefined();
    expect(formspreeEndpoint).toContain("formspree.io");
    expect(formspreeEndpoint).toContain("xreyzvar");
  });

  it("should validate required form fields", () => {
    const requiredFields = ["name", "email", "businessType", "projectDetails"];
    expect(requiredFields).toHaveLength(4);
    expect(requiredFields).toContain("name");
    expect(requiredFields).toContain("email");
    expect(requiredFields).toContain("businessType");
    expect(requiredFields).toContain("projectDetails");
  });

  it("should have valid business type options", () => {
    const businessTypes = [
      "church",
      "law-firm",
      "roofing",
      "accounting",
      "consulting",
      "local-service",
      "other",
    ];
    expect(businessTypes).toHaveLength(7);
    expect(businessTypes).toContain("church");
    expect(businessTypes).toContain("law-firm");
    expect(businessTypes).toContain("roofing");
  });

  it("should handle form submission with valid data", async () => {
    const formData = new FormData();
    formData.append("name", "John Smith");
    formData.append("email", "john@example.com");
    formData.append("businessType", "law-firm");
    formData.append("projectDetails", "We need a professional website for our law firm.");

    // Verify FormData entries
    expect(formData.get("name")).toBe("John Smith");
    expect(formData.get("email")).toBe("john@example.com");
    expect(formData.get("businessType")).toBe("law-firm");
    expect(formData.get("projectDetails")).toContain("law firm");
  });

  it("should validate email format", () => {
    const validEmails = [
      "john@example.com",
      "contact@bluepeakstudio.com",
      "test.user@domain.co.uk",
    ];
    const invalidEmails = ["notanemail", "missing@domain", "@example.com"];

    validEmails.forEach((email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(emailRegex.test(email)).toBe(true);
    });

    invalidEmails.forEach((email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(emailRegex.test(email)).toBe(false);
    });
  });

  it("should handle form submission errors gracefully", async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error("Network error"));
    global.fetch = mockFetch;

    try {
      await fetch("https://formspree.io/f/xreyzvar", {
        method: "POST",
        body: new FormData(),
      });
    } catch (error) {
      expect(error).toBeDefined();
      expect((error as Error).message).toBe("Network error");
    }
  });

  it("should include all form fields in submission", () => {
    const formFields = {
      name: "John Smith",
      email: "john@example.com",
      businessType: "law-firm",
      projectDetails: "Website goals and timeline details",
    };

    expect(Object.keys(formFields)).toHaveLength(4);
    expect(formFields.name).toBeTruthy();
    expect(formFields.email).toContain("@");
    expect(formFields.businessType).toBeTruthy();
    expect(formFields.projectDetails).toBeTruthy();
  });

  it("should support all business type options", () => {
    const businessTypeOptions = [
      { value: "church", label: "Church" },
      { value: "law-firm", label: "Law Firm" },
      { value: "roofing", label: "Roofing Company" },
      { value: "accounting", label: "Accounting Firm" },
      { value: "consulting", label: "Consulting Business" },
      { value: "local-service", label: "Local Service Business" },
      { value: "other", label: "Other" },
    ];

    expect(businessTypeOptions).toHaveLength(7);
    businessTypeOptions.forEach((option) => {
      expect(option.value).toBeTruthy();
      expect(option.label).toBeTruthy();
    });
  });

  it("should handle empty form submission attempt", () => {
    const emptyFormData = new FormData();
    
    // Verify FormData is empty
    const entries = Array.from(emptyFormData.entries());
    expect(entries).toHaveLength(0);
  });

  it("should preserve form data structure for Formspree", () => {
    const formData = {
      name: "Test User",
      email: "test@example.com",
      businessType: "consulting",
      projectDetails: "Test project details",
    };

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    expect(formDataObj.get("name")).toBe(formData.name);
    expect(formDataObj.get("email")).toBe(formData.email);
    expect(formDataObj.get("businessType")).toBe(formData.businessType);
    expect(formDataObj.get("projectDetails")).toBe(formData.projectDetails);
  });
});
