/*
 * Design: BluePeak Studio — About section
 * Clean, simple, focused on the studio's mission
 * Light background with navy text
 */

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight mb-8">
            About The Studio
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            BluePeak Studio creates website concepts for real-world industries. Each layout focuses on clarity, reliability, and ease of use for businesses that depend on their online presence. Our goal: a website that works.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            We believe your website should be a tool that generates leads, builds trust, and makes your business easier to find. No fluff. No unnecessary animations. Just professional design that delivers results.
          </p>
        </div>
      </div>
    </section>
  );
}
