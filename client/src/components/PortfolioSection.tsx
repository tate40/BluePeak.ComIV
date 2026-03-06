/*
 * Design: BluePeak Studio — Interactive portfolio grid
 * 6 niche website design concepts
 * Hover: Image zoom, dark overlay, "Preview Design" button
 * Modern, high-end card styling
 */

import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    niche: "Church",
    title: "Faith Community Website",
    description: "A welcoming online home for your congregation with service schedules, event calendar, and community resources.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-church-H8ZxS9FYDXDkY3bm4BCEfE.webp",
    color: "#3b82f6",
  },
  {
    id: 2,
    niche: "Law Firm",
    title: "Legal Services Website",
    description: "Professional online presence showcasing your expertise, practice areas, and client testimonials to attract new clients.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-lawfirm-9oMbkJ5SJ2AtFASCPkkPef.webp",
    color: "#8b5cf6",
  },
  {
    id: 3,
    niche: "Roofing",
    title: "Roofing Company Website",
    description: "Showcase your roofing projects, services, and customer reviews to generate quality leads in your service area.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-roofing-new-d74KCzjxffhcw8ukHYDyfj.webp",
    color: "#f97316",
  },
  {
    id: 4,
    niche: "Accounting",
    title: "Accounting Firm Website",
    description: "Build client trust with a professional site highlighting your services, expertise, and secure client portal access.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-accounting-V5SnqHxDoseDBycvheze9b.webp",
    color: "#06b6d4",
  },
  {
    id: 5,
    niche: "Consulting",
    title: "Consulting Business Website",
    description: "Establish authority and credibility with a modern site showcasing your case studies, insights, and service offerings.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-consulting-new-edsLQU8AYzebwrFDHFatXu.webp",
    color: "#ec4899",
  },
  {
    id: 6,
    niche: "Local Service",
    title: "Service Business Website",
    description: "Connect with local customers through a professional site with service listings, booking options, and reviews.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-homeservices-PXFxNXddj8KdhsKrriDSfk.webp",
    color: "#10b981",
  },
];

export default function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0.08 }
    );

    const section = document.getElementById("portfolio");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-gray-50" style={{backgroundColor: '#11b881'}}>
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 fade-up" style={{ opacity: isVisible ? 1 : 0 }}>
          <div className="section-label mb-4">PORTFOLIO</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight mb-6">
            Website Designs for All Industries
          </h2>
          <p className="text-lg text-gray-600" style={{color: '#ffffff'}}>
            Each design concept demonstrates how we approach different business types with tailored solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white h-96">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-60" : "opacity-0"
                  }`}
                />

                {/* Content Overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                  <button className="bg-[#10b981] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#059669] transition-colors duration-200 w-full">
                    Preview Design
                  </button>
                </div>

                {/* Niche Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.niche}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
