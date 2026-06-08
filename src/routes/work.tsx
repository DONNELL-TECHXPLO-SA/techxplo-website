import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import caseStudy from "@/assets/case-study.jpg";

export const Route = createFileRoute("/work")({
  component: Work,
  head: () => ({
    meta: [
      { title: "Our Work — TechXplo" },
      {
        name: "description",
        content:
          "Explore TechXplo's case studies. Digital transformation, cloud migration, and custom software solutions for Johannesburg enterprises.",
      },
    ],
  }),
});

function Work() {
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
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
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
              className="text-xs font-mono tracking-widest uppercase text-brand-accent transition-colors"
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
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
                className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
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
                className="text-xs font-mono tracking-widest uppercase text-brand-accent transition-colors"
              >
                Work
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
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

      {/* Case study / Showcase */}
      <section id="case" className="px-6 py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[4/3] md:aspect-[21/9] border border-brand-border overflow-hidden">
            <img
              src={caseStudy}
              alt="Dark data centre with green accent lighting"
              loading="lazy"
              width={1920}
              height={820}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/70 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <div className="max-w-xl">
                <div className="text-brand-accent font-mono text-xs mb-4 tracking-widest">
                  CASE STUDY // 001
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold uppercase mb-6 tracking-tight">
                  Digital transformation for a Johannesburg enterprise
                </h3>
                <p className="text-stone-300 text-sm md:text-base mb-8 leading-relaxed">
                  TechXplo modernized legacy systems for a leading Johannesburg enterprise —
                  migrating core operations to the cloud, deploying custom software solutions, and
                  reducing operational overhead by 40% within the first quarter.
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-7 py-3 bg-brand-accent text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Brief a similar project
                </Link>
              </div>
            </div>
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
