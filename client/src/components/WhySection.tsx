/*
 * Design: Dark Premium Agency — Why Work With Me Section
 * Light background for rhythm contrast
 * 6 differentiators in a 3-column grid with icon + title + description
 */

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: "Deep Industry Research",
    desc: "Before designing a single page, I study your niche: what your competitors are doing, what your customers search for, and what trust signals matter most in your industry.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Conversion-First Design",
    desc: "Every layout, headline, button color, and CTA placement is chosen to move visitors toward one action: contacting you. No fluff, no filler.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: "Mobile Optimization",
    desc: "Every site is designed mobile-first, tested across devices, and built to perform flawlessly for the 70%+ of users browsing on their phones.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Fast Load Speed",
    desc: "Slow sites lose leads. I optimize every image, script, and resource so your site loads in under 2 seconds and scores high on Google's Core Web Vitals.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "SEO-Ready Structure",
    desc: "Clean semantic HTML, proper heading hierarchy, schema markup, and optimized meta tags — your site is built to rank from day one.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "You Work Directly With Me",
    desc: "No account managers, no offshore handoffs. You get direct access to the designer building your site — fast communication, clear timelines, and real accountability.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="py-24 bg-[oklch(0.96_0.003_80)]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="section-label mb-4" style={{ color: "oklch(0.50 0.17 162)" }}>
            Why Work With Me
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[oklch(0.12_0.008_260)] leading-tight tracking-tight mb-4">
            What Sets My Work Apart
          </h2>
          <p className="text-lg text-[oklch(0.40_0.008_260)] max-w-2xl mx-auto">
            I'm not a generalist. I'm a specialist who builds websites that work as hard as you do.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="fade-up p-7 rounded-2xl bg-white border border-[oklch(0.88_0.005_260)] shadow-sm hover:shadow-lg transition-all duration-300 group"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{
                  background: "oklch(0.70 0.17 162 / 0.10)",
                  color: "oklch(0.50 0.17 162)",
                }}
              >
                {reason.icon}
              </div>
              <h3 className="font-bold text-lg text-[oklch(0.12_0.008_260)] mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-[oklch(0.45_0.008_260)] leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
