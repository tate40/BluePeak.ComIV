/*
 * Design: BluePeak Studio — Footer
 * Clean, minimal design with navigation and contact
 */

export default function Footer() {
  const links = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Benefits", href: "#benefits" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#10b981] flex items-center justify-center">
              <span className="text-[#0f172a] font-extrabold text-sm leading-none">BP</span>
            </div>
            <span className="font-bold text-lg tracking-tight">BluePeak Studio</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200 font-[Space_Grotesk]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="text-sm text-gray-300">
            <a href="mailto:nexslevel.media@gmail.com" className="hover:text-white transition-colors duration-200">
              nexslevel.media@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-xs text-gray-400 font-[Space_Grotesk]">
            © {new Date().getFullYear()} BluePeak Studio. All rights reserved. · Premium website design for real businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
