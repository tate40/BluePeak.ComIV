/*
 * Design: BluePeak Studio — CTA Section
 * Clean, simple call-to-action
 * Contact form embedded
 */

import ContactForm from "./ContactForm";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight mb-4">
              Need a Website Like These?
            </h2>
            <p className="text-lg text-gray-600">
              If you're looking for a professional website tailored to your business, let's start a project.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-sm">
            <ContactForm />
          </div>

          {/* Trust line */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>We respect your privacy. No spam, ever.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
