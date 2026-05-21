import { createFileRoute } from "@tanstack/react-router";
import heroBoard from "@/assets/hero-board.jpg";
import caseStudy from "@/assets/case-study.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Moore Tech Consulting — Apple, Microsoft & ICT Procurement, Sandton" },
      {
        name: "description",
        content:
          "Moore Tech Consulting is a Sandton-based ICT partner supplying Apple devices, Microsoft software, accessories and expert technical support for South African businesses and schools.",
      },
      { property: "og:title", content: "Moore Tech Consulting — Enterprise ICT, Sandton" },
      {
        property: "og:description",
        content:
          "Apple, Microsoft and ICT procurement, deployment and managed support. Authorised Microsoft and Rectron partner.",
      },
    ],
  }),
});

const services = [
  {
    n: "01",
    title: "Apple Devices",
    desc: "End-to-end procurement and deployment of Mac, iPad, iPhone and accessories for creative teams, enterprise fleets and education.",
    bullets: ["MAC FLEET ROLLOUTS", "EDUCATION PRICING"],
  },
  {
    n: "02",
    title: "Microsoft Software",
    desc: "Authorised Microsoft distributor — licensing, Microsoft 365 tenancy, Azure migration and Intune device management.",
    bullets: ["365 & AZURE LICENSING", "TENANT HARDENING"],
  },
  {
    n: "03",
    title: "Accessories & Network",
    desc: "Apple-certified cases, chargers, cables, audio, smart-home and the networking gear that keeps it all online.",
    bullets: ["APPLE-CERTIFIED STOCK", "SMB NETWORKING KIT"],
  },
  {
    n: "04",
    title: "Tech Support",
    desc: "Remote and scheduled on-site technical support across Johannesburg — break-fix, managed maintenance, and bulk device care.",
    bullets: ["ON-SITE SANDTON RESPONSE", "MANAGED IT CONTRACTS"],
  },
  {
    n: "05",
    title: "Business Procurement",
    desc: "Bulk discounts, device management services and scheduled on-site technical support for businesses of every size.",
    bullets: ["BULK SME DISCOUNTS", "DEVICE LIFECYCLE"],
  },
  {
    n: "06",
    title: "Education & Home",
    desc: "Seasonal educational pricing, student bundles and convenient home delivery for Microsoft and Apple ecosystems.",
    bullets: ["STUDENT BUNDLES", "HOME DELIVERY"],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-black">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="size-8 bg-brand-accent rounded-sm flex items-center justify-center">
              <div className="size-4 bg-black rotate-45" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight uppercase">
              Moore<span className="text-brand-accent">Tech</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors">Services</a>
            <a href="#partners" className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors">Partners</a>
            <a href="#case" className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors">Work</a>
            <a href="#contact" className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="px-5 py-2 border border-brand-accent text-brand-accent text-xs font-mono uppercase tracking-widest hover:bg-brand-accent hover:text-black transition-all"
          >
            Get In Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative pt-24 md:pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-brand-border rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-400">
                  EM Enterprise // Sandton, ZA
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-10">
                APPLE, MICROSOFT <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}
                >
                  & THE ICT STACK
                </span>{" "}
                <br />
                THAT RUNS BUSINESS.
              </h1>
              <p className="max-w-xl text-stone-400 text-lg leading-relaxed mb-10">
                Moore Tech Consulting is a Sandton-based ICT partner. We supply Mac and Microsoft
                hardware, licensing and accessories — then keep it all running with expert technical
                support for South African businesses, schools and creative professionals.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-7 py-3 bg-brand-accent text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Request a Quote
                </a>
                <a
                  href="#services"
                  className="px-7 py-3 border border-brand-border text-xs font-mono uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-colors"
                >
                  Explore Services
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col items-end">
              <div className="w-full aspect-square border border-brand-border bg-brand-card p-1 relative">
                <img
                  src={heroBoard}
                  alt="Macro shot of a high-performance computing board"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-brand-accent">
                  [SANDTON · LAT -26.10 · LON 28.05]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Client strip */}
      <section className="border-y border-brand-border bg-brand-card/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { l: "Years in ICT", v: "10+", a: "" },
            { l: "Active Clients", v: "120", a: "+" },
            { l: "Avg. Response", v: "30", a: "min" },
            { l: "Cert. Partners", v: "L1", a: "+" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`p-8 ${i < 3 ? "border-r border-brand-border" : ""}`}
            >
              <div className="text-xs font-mono text-stone-500 mb-2 uppercase tracking-widest">{s.l}</div>
              <div className="text-3xl md:text-4xl font-display font-bold">
                {s.v}
                <span className="text-brand-accent">{s.a}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client marquee */}
      <section aria-label="Our clients" className="border-b border-brand-border overflow-hidden py-8 bg-brand-bg">
        <p className="text-center text-[10px] font-mono uppercase tracking-[0.4em] text-stone-500 mb-6">
          Trusted by teams across South Africa
        </p>
        <div className="relative">
          <div className="flex w-max animate-marquee gap-16 items-center px-8">
            {[
              "2ROADS GROUP",
              "RECTRON",
              "MICROSOFT",
              "APPLE AUTHORISED",
              "GAUTENG EDU",
              "SANDTON SME",
              "JOZI CREATIVE CO.",
              "LIMPOPO ACADEMY",
              "2ROADS GROUP",
              "RECTRON",
              "MICROSOFT",
              "APPLE AUTHORISED",
              "GAUTENG EDU",
              "SANDTON SME",
              "JOZI CREATIVE CO.",
              "LIMPOPO ACADEMY",
            ].map((c, i) => (
              <span
                key={i}
                className="font-display text-xl font-bold tracking-tighter text-stone-500 whitespace-nowrap"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight">
                What We Do
              </h2>
              <p className="text-stone-500 font-mono text-xs mt-3 tracking-widest">
                [ CORE SERVICE DIRECTORY ]
              </p>
            </div>
            <div className="hidden md:block h-px bg-brand-border flex-grow mx-12 mb-4" />
            <a href="#contact" className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest">
              Brief Our Team
              <span className="size-8 border border-brand-border flex items-center justify-center group-hover:border-brand-accent group-hover:text-brand-accent transition-colors">
                →
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.n}
                className="group p-8 border border-brand-border bg-brand-card hover:border-brand-accent transition-all"
              >
                <div className="size-12 bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-black transition-colors">
                  <span className="font-mono font-bold">{s.n}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 uppercase">{s.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-8">{s.desc}</p>
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-[11px] font-mono text-stone-500 tracking-widest">
                      <span className="size-1 bg-brand-accent" /> {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partner blocks */}
      <section id="partners" className="grid lg:grid-cols-2 border-y border-brand-border scroll-mt-20">
        <div className="border-b lg:border-b-0 lg:border-r border-brand-border p-12 lg:p-20 flex flex-col justify-center">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em] mb-6">
            // PARTNER 001
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-bold uppercase mb-6 tracking-tight">
            Microsoft Partner
          </h3>
          <p className="text-stone-400 mb-8 max-w-md leading-relaxed">
            MooreTech is a certified Microsoft partner. Our team delivers tailored consulting,
            seamless implementation and ongoing support — so your business gets the full value of
            Microsoft 365, Azure and the modern workplace stack.
          </p>
          <ul className="space-y-3 mb-8">
            {["EXPERT CONSULTING", "SEAMLESS IMPLEMENTATION", "ONGOING MANAGED SUPPORT"].map((b) => (
              <li key={b} className="flex items-center gap-3 text-[11px] font-mono text-stone-500 tracking-widest">
                <span className="size-1 bg-brand-accent" /> {b}
              </li>
            ))}
          </ul>
          <a href="#contact" className="text-xs font-mono uppercase tracking-widest text-brand-accent hover:underline">
            Start a Microsoft project →
          </a>
        </div>
        <div className="p-12 lg:p-20 flex flex-col justify-center bg-brand-card/40">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em] mb-6">
            // PARTNER 002
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-bold uppercase mb-6 tracking-tight">
            Rectron Distribution
          </h3>
          <p className="text-stone-400 mb-8 max-w-md leading-relaxed">
            Through our Rectron partnership we extend distribution reach, integrate complementary
            services for resellers, and run joint go-to-market — solidifying access to South
            Africa's leading ICT supply chain.
          </p>
          <ul className="space-y-3 mb-8">
            {["EXPANDED RESELLER NETWORK", "INTEGRATED SERVICE STACK", "JOINT GTM & TRAINING"].map((b) => (
              <li key={b} className="flex items-center gap-3 text-[11px] font-mono text-stone-500 tracking-widest">
                <span className="size-1 bg-brand-accent" /> {b}
              </li>
            ))}
          </ul>
          <a href="#contact" className="text-xs font-mono uppercase tracking-widest text-brand-accent hover:underline">
            Talk procurement →
          </a>
        </div>
      </section>

      {/* Case study / Showcase */}
      <section id="case" className="px-6 py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[21/9] border border-brand-border overflow-hidden">
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
                  CASE STUDY // 042
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold uppercase mb-6 tracking-tight">
                  Fleet rollout for a Gauteng creative studio
                </h3>
                <p className="text-stone-300 text-sm md:text-base mb-8 leading-relaxed">
                  MooreTech procured, configured and deployed 64 Mac workstations with Microsoft
                  365 licensing across two Johannesburg offices — cutting onboarding time by 38%
                  and standing up managed support inside a week.
                </p>
                <a
                  href="#contact"
                  className="inline-block px-7 py-3 bg-brand-accent text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Brief a similar project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 border-t border-brand-border scroll-mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em]">
              // CONTACT
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mt-4 mb-6">
              Open a line.
            </h2>
            <p className="text-stone-400 leading-relaxed max-w-md">
              Briefs, quotes, support contracts. We respond inside one business day from our
              Sandton operations centre.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-brand-border border border-brand-border">
            {[
              { l: "Phone", v: "+27 74 964 1235", href: "tel:+27749641235" },
              { l: "Email", v: "info@mooretech.co.za", href: "mailto:info@mooretech.co.za" },
              { l: "Address", v: "5 Chaplin Road, Illovo, Sandton" },
              { l: "Hours", v: "Mon–Fri · 09:00 – 18:00 SAST" },
            ].map((c) => (
              <div key={c.l} className="bg-brand-bg p-8">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-500 mb-3">
                  {c.l}
                </div>
                {c.href ? (
                  <a href={c.href} className="text-lg font-display font-bold hover:text-brand-accent transition-colors break-words">
                    {c.v}
                  </a>
                ) : (
                  <p className="text-lg font-display font-bold">{c.v}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-border py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-brand-accent rounded-sm flex items-center justify-center">
                <div className="size-3 bg-black rotate-45" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight uppercase">
                Moore<span className="text-brand-accent">Tech</span>
              </span>
            </div>
            <p className="text-stone-500 text-xs font-mono uppercase leading-loose tracking-wider">
              EM Enterprise T/A Moore Tech Consulting. Sandton · Johannesburg · South Africa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <div className="text-xs font-mono text-white mb-6 uppercase tracking-widest">Directory</div>
              <ul className="space-y-4">
                <li><a href="#services" className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest">Services</a></li>
                <li><a href="#partners" className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest">Partners</a></li>
                <li><a href="#case" className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest">Work</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-mono text-white mb-6 uppercase tracking-widest">Contact</div>
              <ul className="space-y-4">
                <li><a href="mailto:info@mooretech.co.za" className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest">Email</a></li>
                <li><a href="tel:+27749641235" className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest">Phone</a></li>
                <li><a href="#contact" className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest">Visit</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-stone-600 tracking-widest">
          <span>© 2026 EM ENTERPRISE (PTY) LTD T/A MOORE TECH CONSULTING.</span>
          <span>V2026.01 // STABLE</span>
        </div>
      </footer>
    </div>
  );
}
