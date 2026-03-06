/*
 * Design: Dark Premium Agency — Testimonials Section
 * Dark background, frosted glass testimonial cards
 * 3 testimonials from different niche clients
 */

const testimonials = [
  {
    quote: "Our website leads tripled in the first 90 days. The design immediately built trust with potential clients — we've had multiple people say they hired us specifically because our site looked so professional.",
    name: "Michael Harrington",
    role: "Managing Partner",
    company: "Harrington & Associates Law",
    niche: "Law Firm",
    rating: 5,
  },
  {
    quote: "We went from getting maybe 2–3 online inquiries a month to 15+ free estimate requests. The new site pays for itself every week. Best investment we've made in marketing.",
    name: "Derek Sullivan",
    role: "Owner",
    company: "Summit Roofing Co.",
    niche: "Roofing",
    rating: 5,
  },
  {
    quote: "Our congregation has grown by 200 members since the site launched. The online giving portal alone has increased donations by 40%. The site truly reflects who we are as a church.",
    name: "Pastor James Williams",
    role: "Senior Pastor",
    company: "Grace Community Church",
    niche: "Church",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="oklch(0.80 0.18 80)" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[oklch(0.09_0.005_260)] relative overflow-hidden">
      {/* Mesh blob */}
      <div
        className="mesh-blob"
        style={{
          width: "500px",
          height: "500px",
          background: "oklch(0.70 0.17 162)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.06,
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="section-label mb-4">Client Results</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Real results from real business owners who invested in conversion-focused design.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="fade-up glass-card rounded-2xl p-7 flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <StarRating count={t.rating} />

              <blockquote className="mt-5 mb-6 text-white/80 leading-relaxed text-base flex-1">
                "{t.quote}"
              </blockquote>

              <div className="pt-5 border-t border-white/10 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: "oklch(0.70 0.17 162 / 0.2)",
                    color: "oklch(0.70 0.17 162)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-white/50 font-[Space_Grotesk]">
                    {t.role} · {t.company}
                  </div>
                </div>
                <div className="ml-auto">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "oklch(0.70 0.17 162 / 0.15)",
                      color: "oklch(0.70 0.17 162)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {t.niche}
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
