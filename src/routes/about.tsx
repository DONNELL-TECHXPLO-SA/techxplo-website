import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — TechXplo" },
      {
        name: "description",
        content:
          "TechXplo is a technology consultancy bridging industry needs with cutting-edge solutions. Learn our story, values, and mission.",
      },
    ],
  }),
});

function About() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-black">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 bg-brand-accent rounded-sm flex items-center justify-center">
              <div className="size-4 bg-black rotate-45" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight uppercase">
              Tech<span className="text-brand-accent">Xplo</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/about"
              className="text-xs font-mono tracking-widest uppercase text-brand-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Services
            </Link>
            <Link
              to="/partners"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Partners
            </Link>
            <Link
              to="/work"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="text-xs font-mono tracking-widest uppercase text-brand-accent transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex px-5 py-2 border border-brand-accent text-brand-accent text-xs font-mono uppercase tracking-widest hover:bg-brand-accent hover:text-black transition-all"
            >
              Get In Touch
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative size-10 flex items-center justify-center bg-brand-card border border-brand-border hover:border-brand-accent transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="size-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-brand-border bg-brand-bg/95 backdrop-blur-md">
            <div className="px-6 py-6 flex flex-col gap-6">
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="text-xs font-mono tracking-widest uppercase text-brand-accent transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileOpen(false)}
                className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
              >
                Services
              </Link>
              <Link
                to="/partners"
                onClick={() => setMobileOpen(false)}
                className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
              >
                Partners
              </Link>
              <Link
                to="/work"
                onClick={() => setMobileOpen(false)}
                className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
              >
                Work
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-xs font-mono tracking-widest uppercase text-brand-accent transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="sm:hidden px-5 py-2 border border-brand-accent text-brand-accent text-xs font-mono uppercase tracking-widest hover:bg-brand-accent hover:text-black transition-all text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* About */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight">
                About Us
              </h2>
              <p className="text-stone-500 font-mono text-xs mt-3 tracking-widest">[ OUR STORY ]</p>
            </div>
            <div className="hidden md:block h-px bg-brand-border flex-grow mx-12 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <div>
              <p className="text-stone-300 md:text-lg leading-relaxed mb-6">
                TechXplo is a technology consultancy focused on bridging the gap between industry
                needs and cutting-edge solutions. We achieve this by integrating seasoned
                professionals into real-world projects within the workspace.
              </p>
              <p className="text-stone-400 leading-relaxed">
                We are a thriving community of innovators driving meaningful impact through
                technology. At the core of everything we do are the values that guide our mission
                and shape our approach.
              </p>
            </div>
            <div className="md:border-l border-brand-border md:pl-12">
              <blockquote className="font-display text-xl md:text-3xl font-bold italic text-brand-accent leading-tight">
                "Our mission is to empower the next generation of tech innovators."
              </blockquote>
              <div className="mt-6 space-y-4">
                {[
                  {
                    label: "Inclusion & Diversity",
                    desc: "We embrace diversity and create an inclusive space for everyone to thrive.",
                  },
                  {
                    label: "Constant Innovation",
                    desc: "We're dedicated to fostering talent, creativity, and meaningful connections.",
                  },
                  {
                    label: "Servant Leadership",
                    desc: "We lead through service, putting our community's needs first to empower.",
                  },
                ].map((p) => (
                  <div key={p.label}>
                    <div className="text-sm font-mono font-bold text-white uppercase tracking-widest">
                      {p.label}
                    </div>
                    <div className="text-stone-400 text-sm mt-1">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 border-t border-brand-border pt-12">
            {[
              {
                v: "Innovation",
                d: "We embrace creativity and push boundaries to spark new ideas.",
              },
              { v: "Collaboration", d: "Success is built on teamwork and diverse perspectives." },
              { v: "Growth", d: "Continuous personal and professional learning." },
              { v: "Impact", d: "Creating meaningful, sustainable change." },
            ].map((val) => (
              <div
                key={val.v}
                className="text-center p-4 md:p-6 border border-brand-border bg-brand-card/40 break-words"
              >
                <div className="font-display text-lg md:text-xl font-bold text-brand-accent uppercase mb-2">
                  {val.v}
                </div>
                <div className="text-stone-400 text-xs md:text-sm">{val.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-border py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-brand-accent rounded-sm flex items-center justify-center">
                <div className="size-3 bg-black rotate-45" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight uppercase">
                Tech<span className="text-brand-accent">Xplo</span>
              </span>
            </Link>
            <p className="text-stone-500 text-xs font-mono uppercase leading-loose tracking-wider">
              TechXplo. Johannesburg · South Africa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <div className="text-xs font-mono text-white mb-6 uppercase tracking-widest">
                Directory
              </div>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-mono text-white mb-6 uppercase tracking-widest">
                Contact
              </div>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:admin@techxplo.co.za"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+27678530148"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Phone
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Visit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-stone-600 tracking-widest">
          <span>© 2026 TechXplo. All rights reserved.</span>
          <span>V2026.01 // STABLE</span>
        </div>
      </footer>
    </div>
  );
}
