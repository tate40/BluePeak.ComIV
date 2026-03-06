/*
 * Design: BluePeak Studio — Contact form
 * Integrated with Formspree (https://formspree.io/f/xreyzvar)
 * Collects: Name, Email, Business Type, Project Details
 * Clean, simple form with validation and success feedback
 */

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch("https://formspree.io/f/xreyzvar", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        formElement.reset();

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to submit form. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[#0f172a] mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-200"
          placeholder="John Smith"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#0f172a] mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-200"
          placeholder="john@example.com"
        />
      </div>

      {/* Business Type */}
      <div>
        <label htmlFor="businessType" className="block text-sm font-semibold text-[#0f172a] mb-2">
          Business Type
        </label>
        <select
          id="businessType"
          name="businessType"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-200 appearance-none bg-white cursor-pointer"
        >
          <option value="">Select your business type...</option>
          <option value="church">Church</option>
          <option value="law-firm">Law Firm</option>
          <option value="roofing">Roofing Company</option>
          <option value="accounting">Accounting Firm</option>
          <option value="consulting">Consulting Business</option>
          <option value="local-service">Local Service Business</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="projectDetails" className="block text-sm font-semibold text-[#0f172a] mb-2">
          Tell Us About Your Project
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent resize-none transition-all duration-200"
          placeholder="What are your website goals? What's your timeline?"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#10b981] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
      >
        {isLoading ? "Sending..." : "Start Your Project"}
      </button>

      {/* Success Message */}
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-in fade-in">
          <p className="text-green-800 font-semibold">
            ✓ Thank you! We'll be in touch within 24 hours.
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg animate-in fade-in">
          <p className="text-red-800 font-semibold">
            ✗ {error}
          </p>
        </div>
      )}
    </form>
  );
}
