import { createFileRoute } from "@tanstack/react-router";

import caseStudy from "@/assets/case-study.jpg";

function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover grayscale contrast-200 brightness-90 opacity-30"
    >
      <source src="/videos/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TechXplo — Software Development & Digital Innovation, Johannesburg" },
      {
        name: "description",
        content:
          "TechXplo delivers top-tier software solutions, digital transformation, AI-enabled services, and tech-supported NPO projects across Johannesburg and South Africa.",
      },
      { property: "og:title", content: "TechXplo — Software Development & Digital Innovation" },
      {
        property: "og:description",
        content:
          "Custom software development, digital transformation, AI solutions, and automation. Trusted by Google, Microsoft, OpenAI, GitHub, and Canva.",
      },
    ],
  }),
});

const services = [
  {
    n: "01",
    title: "Digital Transformation",
    desc: "TechXplo helps businesses modernize legacy systems with innovative digital transformation solutions that enhance efficiency and scalability.",
    bullets: ["LEGACY SYSTEM MODERNIZATION", "SCALABLE SOLUTIONS"],
  },
  {
    n: "02",
    title: "Software Development",
    desc: "TechXplo delivers custom solutions tailored to business needs, streamlining workflows, optimizing customer experiences, and enabling agile decision-making.",
    bullets: ["CUSTOM SOFTWARE", "WORKFLOW OPTIMIZATION"],
  },
  {
    n: "03",
    title: "AI Enabled Services",
    desc: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications that drive business growth.",
    bullets: ["AI AUTOMATION", "INTELLIGENT APPS"],
  },
  {
    n: "04",
    title: "Mobile Application Development",
    desc: "Build powerful, user-friendly mobile applications for iOS and Android that engage users and extend your business reach.",
    bullets: ["iOS & ANDROID APPS", "USER-CENTRIC DESIGN"],
  },
  {
    n: "05",
    title: "Tech-supported NPO Projects",
    desc: "TechXplo offers web development and app solutions for NPOs at no cost or low-bono, helping to expand their impact and reach more communities.",
    bullets: ["PRO-BONO SOLUTIONS", "COMMUNITY IMPACT"],
  },
  {
    n: "06",
    title: "Automation & Data Solutions",
    desc: "Streamline operations with intelligent automation and data-driven solutions that turn raw information into actionable business intelligence.",
    bullets: ["PROCESS AUTOMATION", "DATA INTELLIGENCE"],
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
              Tech<span className="text-brand-accent">Xplo</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#about"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Services
            </a>
            <a
              href="#partners"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Partners
            </a>
            <a
              href="#case"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Contact
            </a>
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
      <section id="top" className="relative pt-12 md:pt-20 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <HeroVideo />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-brand-border rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-400">
                  TechXplo // Johannesburg, ZA
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-10">
                EXPERIENCE THE <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}
                >
                  REAL
                </span>{" "}
                <br />
                INNOVATION.
              </h1>
              <p className="max-w-xl text-stone-400 text-lg leading-relaxed mb-10">
                TechXplo delivers top-tier software solutions designed to streamline operations,
                boost efficiency, and drive innovation for your business — from custom development
                to digital transformation and AI-enabled services across South Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-7 py-3 bg-brand-accent text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Get a Quote
                </a>
                <a
                  href="#services"
                  className="px-7 py-3 border border-brand-border text-xs font-mono uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-colors"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Client strip */}
      <section className="border-y border-brand-border bg-brand-card/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { l: "Members", v: "30", a: "+" },
            { l: "Partners", v: "5", a: "+" },
            { l: "Social Following", v: "700", a: "+" },
            { l: "Projects Delivered", v: "50", a: "+" },
          ].map((s, i) => (
            <div key={s.l} className={`p-8 ${i < 3 ? "border-r border-brand-border" : ""}`}>
              <div className="text-xs font-mono text-stone-500 mb-2 uppercase tracking-widest">
                {s.l}
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold">
                {s.v}
                <span className="text-brand-accent">{s.a}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client marquee */}
      <section
        aria-label="Our clients"
        className="border-b border-brand-border overflow-hidden py-8 bg-brand-bg"
      >
        <p className="text-center text-[10px] font-mono uppercase tracking-[0.4em] text-stone-500 mb-6">
          Trusted by industry leaders
        </p>
        <div className="overflow-hidden whitespace-nowrap px-8">
          <div className="inline-block animate-marquee">
            {["GOOGLE","GITHUB","MICROSOFT","OPENAI","CANVA","TECHXPLO"].map((c) => (
              <span key={c} className="inline-block font-display text-xl font-bold tracking-tighter text-stone-500">{c}<span className="mx-8 invisible">|</span></span>
            ))}
            {["GOOGLE","GITHUB","MICROSOFT","OPENAI","CANVA","TECHXPLO"].map((c) => (
              <span key={c} className="inline-block font-display text-xl font-bold tracking-tighter text-stone-500">{c}<span className="mx-8 invisible">|</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 scroll-mt-20">
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
            <a
              href="#contact"
              className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest"
            >
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
                    <li
                      key={b}
                      className="flex items-center gap-2 text-[11px] font-mono text-stone-500 tracking-widest"
                    >
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
      <section
        id="partners"
        className="grid lg:grid-cols-2 border-y border-brand-border scroll-mt-20"
      >
        <div className="border-b lg:border-b-0 lg:border-r border-brand-border p-12 lg:p-20 flex flex-col justify-center">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em] mb-6">
            // PARTNER 001
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-bold uppercase mb-6 tracking-tight">
            Google & GitHub
          </h3>
          <p className="text-stone-400 mb-8 max-w-md leading-relaxed">
            TechXplo proudly collaborates with industry giants like Google and GitHub, leveraging
            their platforms to build scalable, secure, and innovative software solutions for our
            clients across South Africa.
          </p>
          <ul className="space-y-3 mb-8">
            {["CLOUD PLATFORMS & TOOLS", "DEVELOPER ECOSYSTEM", "SCALABLE INFRASTRUCTURE"].map(
              (b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-[11px] font-mono text-stone-500 tracking-widest"
                >
                  <span className="size-1 bg-brand-accent" /> {b}
                </li>
              ),
            )}
          </ul>
          <a
            href="#contact"
            className="text-xs font-mono uppercase tracking-widest text-brand-accent hover:underline"
          >
            Partner with us →
          </a>
        </div>
        <div className="p-12 lg:p-20 flex flex-col justify-center bg-brand-card/40">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em] mb-6">
            // PARTNER 002
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-bold uppercase mb-6 tracking-tight">
            Microsoft & OpenAI
          </h3>
          <p className="text-stone-400 mb-8 max-w-md leading-relaxed">
            Through our collaboration with Microsoft and OpenAI, TechXplo delivers AI-enabled
            services, intelligent automation, and cutting-edge solutions that drive real business
            transformation.
          </p>
          <ul className="space-y-3 mb-8">
            {["AI & MACHINE LEARNING", "INTELLIGENT AUTOMATION", "ENTERPRISE INTEGRATION"].map(
              (b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-[11px] font-mono text-stone-500 tracking-widest"
                >
                  <span className="size-1 bg-brand-accent" /> {b}
                </li>
              ),
            )}
          </ul>
          <a
            href="#contact"
            className="text-xs font-mono uppercase tracking-widest text-brand-accent hover:underline"
          >
            Explore AI solutions →
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
              Briefs, quotes, project inquiries. We respond inside one business day from our
              Johannesburg operations centre.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-brand-border border border-brand-border">
            {[
              { l: "Phone", v: "+27 67 853 0148", href: "tel:+27678530148" },
              { l: "Email", v: "admin@techxplo.co.za", href: "mailto:admin@techxplo.co.za" },
              { l: "Address", v: "Johannesburg, South Africa" },
              { l: "Hours", v: "Mon–Fri · 09:00 – 18:00 SAST" },
            ].map((c) => (
              <div key={c.l} className="bg-brand-bg p-8">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-500 mb-3">
                  {c.l}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-lg font-display font-bold hover:text-brand-accent transition-colors break-words"
                  >
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
                Tech<span className="text-brand-accent">Xplo</span>
              </span>
            </div>
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
                  <a
                    href="#services"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#partners"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#case"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Work
                  </a>
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
                  <a
                    href="#contact"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Visit
                  </a>
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
