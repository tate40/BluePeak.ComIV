/*
 * Design: BluePeak Studio — Premium hero section
 * Clean white background with navy text
 * Large, readable headline
 * Dual CTAs: Browse Designs + Start a Project
 */

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center fade-up" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(28px)" }}>
          {/* Subheadline */}
          <div className="section-label mb-6 text-[#10b981]">
            PROFESSIONAL WEBSITE DESIGN
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] leading-tight tracking-tight mb-8">
            Professional Websites Built for Real Businesses
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Clean, fast, and reliable websites designed for organizations that depend on their online presence — from churches and law firms to contractors and accounting firms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#portfolio"
              className="bg-[#10b981] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-[#059669] hover:shadow-lg hover:scale-105"
            >
              Browse Website Designs
            </a>
            <a
              href="#contact"
              className="bg-white text-[#0f172a] font-semibold px-8 py-4 rounded-lg border-2 border-[#0f172a] transition-all duration-200 hover:bg-gray-50 hover:shadow-lg"
            >
              Start a Project
            </a>
          </div>

          {/* Trust statement */}
          <p className="text-sm text-gray-500 font-[Space_Grotesk]">
            Trusted by churches, law firms, roofing companies, accounting firms, and local service businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
