/*
 * Design: BluePeak Studio — Benefits section
 * 6 practical benefits in a clean grid
 * Icons + title + description
 * Light background
 */

import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Fully Custom Website Design",
    description: "No templates. No themes. Every site is built specifically for your business and industry.",
  },
  {
    title: "You Own and Control Your Website",
    description: "Your website is yours. No Hidden platform fees. No vendor lock-in. Complete ownership.",
  },
  {
    title: "Fast Loading and Mobile Friendly",
    description: "Optimized for speed and responsive design. Your site works perfectly on every device.",
  },
  {
    title: "Reliable Hosting and Security",
    description: "Professional hosting with SSL certificates, backups, and security monitoring included.",
  },
  {
    title: "Easy to Update and Manage",
    description: "Simple admin access. Update content, add photos, and manage all changes without coding.",
  },
  {
    title: "Human Support When You Need Help",
    description: "Direct support from our team. No chatbots. Real people helping you succeed.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-gray-50" style={{backgroundColor: '#11b881'}}>
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight mb-6">
            Why Choose BluePeak Studio
          </h2>
          <p className="text-lg text-gray-600" style={{color: '#ffffff'}}>
            Six practical reasons why our websites deliver real business results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="fade-up p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
