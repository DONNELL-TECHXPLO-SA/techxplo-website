import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import heroBoard from "@/assets/hero-board.jpg";

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

const phases = [
  {
    step: "01",
    title: "Discover",
    desc: "We immerse ourselves in your world — your users, your data, your goals. No assumptions, just evidence.",
    icon: "◐",
  },
  {
    step: "02",
    title: "Design",
    desc: "Architecture, UX, and system design that balances ambition with practicality. We blueprint before we build.",
    icon: "◇",
  },
  {
    step: "03",
    title: "Build",
    desc: "Agile sprints, continuous integration, and transparent progress. You see every commit, every milestone.",
    icon: "▣",
  },
  {
    step: "04",
    title: "Scale",
    desc: "Launch, monitor, iterate. We stay with you through deployment and beyond, ensuring your solution grows with you.",
    icon: "⤴",
  },
];

const testimonials = [
  {
    quote:
      "TechXplo didn't just deliver a product — they transformed how we think about technology. Our efficiency gains paid for the project in under three months.",
    author: "CTO",
    org: "Johannesburg Financial Services",
  },
  {
    quote:
      "Working with TechXplo felt like an extension of our own team. They understood our mission from day one and built something we're truly proud of.",
    author: "Founder & CEO",
    org: "SA HealthTech Startup",
  },
  {
    quote:
      "The pro-bono support TechXplo provided helped us reach 3× more communities. They genuinely care about impact, not just contracts.",
    author: "Director of Operations",
    org: "Cape Town NPO",
  },
];

function MobileCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" style={{ touchAction: "pan-y" }}>
          {phases.map((phase) => (
            <div
              key={phase.step}
              className="min-w-0 shrink-0 grow-0 basis-[80%] pl-4 first:pl-0"
            >
              <div className="bg-brand-bg border border-brand-border p-8 group hover:bg-brand-card transition-colors h-full select-none">
                <div className="text-3xl mb-6 text-brand-accent/40 group-hover:text-brand-accent transition-colors">
                  {phase.icon}
                </div>
                <div className="text-[10px] font-mono text-brand-accent mb-3 tracking-widest">
                  STEP {phase.step}
                </div>
                <h3 className="font-display text-xl font-bold uppercase mb-4">{phase.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`size-2 rounded-full transition-all cursor-pointer ${
              i === selectedIndex
                ? "bg-brand-accent w-6"
                : "bg-stone-700 hover:bg-stone-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function MobileTestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" style={{ touchAction: "pan-y" }}>
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="min-w-0 shrink-0 grow-0 basis-[85%] pr-4 last:pr-0"
            >
              <div className="border border-brand-border p-8 bg-brand-bg select-none h-full">
                <span className="text-6xl font-display font-bold text-brand-accent/10 block leading-none mb-4">
                  "
                </span>
                <p className="text-stone-300 text-sm leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="border-t border-brand-border pt-4">
                  <div className="text-sm font-display font-bold uppercase">{t.author}</div>
                  <div className="text-[9px] font-mono text-stone-500 mt-1 tracking-widest">
                    {t.org}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`size-2 rounded-full transition-all cursor-pointer ${
              i === selectedIndex
                ? "bg-brand-accent w-6"
                : "bg-stone-700 hover:bg-stone-500"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function useCountUp(target: number) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (target <= 0) {
      setCount(0);
      return;
    }

    if (startedRef.current) return;
    startedRef.current = true;

    setCount(0);

    const duration = 1200;
    const stepCount = Math.max(Math.ceil(duration / 16), target);
    const increment = target / stepCount;
    const intervalMs = duration / stepCount;

    let current = 0;
    const timer = window.setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        window.clearInterval(timer);
        return;
      }

      setCount(Math.round(current));
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [target]);

  return count;
}

function AnimatedStat({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const count = useCountUp(value);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-brand-accent">
        {count}
        <span className="text-white">{suffix}</span>
      </div>
      <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-500 mt-2">
        {label}
      </div>
    </div>
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

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
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
                className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
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

      {/* Hero */}
      <section
        id="top"
        className="relative min-h-[90vh] flex items-center pt-16 md:pt-20 pb-16 md:pb-20 px-6 overflow-hidden"
      >
        <div className="absolute inset-0">
          <HeroVideo />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-bg" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-brand-border rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-400">
                TechXplo // Johannesburg, ZA
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-6">
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
            <p className="max-w-2xl text-stone-400 text-lg md:text-xl leading-relaxed mb-10">
              We are a Johannesburg-based technology consultancy that partners with purpose-driven
              organizations to build custom software, drive digital transformation, and create
              intelligent solutions that make a real impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="relative group px-8 py-4 bg-brand-accent text-black font-bold text-xs uppercase tracking-widest overflow-hidden transition-all"
              >
                <span className="relative z-10">Start Your Project</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="group flex items-center gap-3 px-8 py-4 border border-brand-border text-xs font-mono uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-all"
              >
                Our Story
                <span className="size-6 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-stone-600">
              Scroll
            </span>
            <div className="size-5 border-2 border-stone-600 rounded-full flex items-center justify-center">
              <div className="size-1 bg-stone-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="border-y border-brand-border bg-brand-card/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat label="Community Members" value={30} suffix="+" />
            <AnimatedStat label="Global Partners" value={5} suffix="+" />
            <AnimatedStat label="Social Following" value={700} suffix="+" />
            <AnimatedStat label="Projects Delivered" value={50} suffix="+" />
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section
        aria-label="Our clients"
        className="border-b border-brand-border overflow-hidden py-10 bg-brand-bg"
      >
        <p className="text-center text-[10px] font-mono uppercase tracking-[0.4em] text-stone-500 mb-6">
          Trusted by industry leaders
        </p>
        <div className="overflow-hidden whitespace-nowrap px-8">
          <div className="inline-block animate-marquee">
            {["TRAINSURE", "52ND HOLDINGS", "SIHLOLA HOLDINGS", "MEDIA REIGN", "MONUMENTAL", "DELTA COACHES", "EASYCART"].map((c) => (
              <span
                key={c}
                className="inline-block font-display text-2xl font-bold tracking-tighter text-stone-600"
              >
                {c}
                <span className="mx-12 text-stone-700">✦</span>
              </span>
            ))}
            {["TRAINSURE", "52ND HOLDINGS", "SIHLOLA HOLDINGS", "MEDIA REIGN", "MONUMENTAL", "DELTA COACHES", "EASYCART"].map((c) => (
              <span
                key={c}
                className="inline-block font-display text-2xl font-bold tracking-tighter text-stone-600"
              >
                {c}
                <span className="mx-12 text-stone-700">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-card/20 to-brand-bg" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em]">
                // OUR STORY
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mt-6 mb-8 leading-[1.05]">
                Born in <span className="text-brand-accent">Johannesburg</span>
                <br />
                building for the world.
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed">
                <p>
                  TechXplo started as a bold idea — that South African talent could compete on a
                  global stage. We set out to build a technology consultancy that doesn't just
                  follow trends but sets new standards for what's possible.
                </p>
                <p>
                  Every project we take on is a partnership. We embed ourselves in your world,
                  understand your challenges, and craft solutions that move the needle. From
                  startups taking their first step to enterprises reimagining their future, we bring
                  the same intensity, curiosity, and care.
                </p>
              </div>
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 mt-8 text-sm font-mono uppercase tracking-widest text-brand-accent hover:underline"
              >
                Read the full story
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] border border-brand-border overflow-hidden">
                <img
                  src={heroBoard}
                  alt="TechXplo team at work"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 border border-brand-accent bg-brand-bg p-6 max-w-xs hidden md:block">
                <div className="text-3xl font-display font-bold text-brand-accent">2024</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1">
                  Founded in Johannesburg
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 md:py-32 px-6 border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em]">
              // METHODOLOGY
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mt-6 mb-4">
              How We Build
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-sm">
              A proven process that moves from insight to impact — fast.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-px bg-brand-border">
            {phases.map((phase) => (
              <div
                key={phase.step}
                className="bg-brand-bg p-8 md:p-10 relative group hover:bg-brand-card transition-colors"
              >
                <div className="text-3xl mb-6 text-brand-accent/40 group-hover:text-brand-accent transition-colors">
                  {phase.icon}
                </div>
                <div className="text-[10px] font-mono text-brand-accent mb-3 tracking-widest">
                  STEP {phase.step}
                </div>
                <h3 className="font-display text-xl font-bold uppercase mb-4">{phase.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{phase.desc}</p>
                <div className="mt-6 h-px w-0 group-hover:w-full bg-brand-accent transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Mobile carousel */}
          <MobileCarousel />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 border-t border-brand-border bg-brand-card/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em]">
              // TESTIMONIALS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mt-6 mb-4">
              What People Say
            </h2>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="border border-brand-border p-8 md:p-10 bg-brand-bg relative"
              >
                <span className="text-6xl font-display font-bold text-brand-accent/10 absolute top-4 right-6 leading-none">
                  "
                </span>
                <p className="text-stone-300 text-sm leading-relaxed mb-8 relative z-10">
                  "{t.quote}"
                </p>
                <div className="border-t border-brand-border pt-4">
                  <div className="text-sm font-display font-bold uppercase">{t.author}</div>
                  <div className="text-[9px] font-mono text-stone-500 mt-1 tracking-widest">
                    {t.org}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <MobileTestimonialCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 md:py-40 px-6 border-t border-brand-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-card/20 to-brand-bg" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em]">
            // LET'S BUILD
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mt-8 mb-6 leading-[1.05]">
            Ready to <span className="text-brand-accent">create</span> something
            <br />
            extraordinary?
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            Whether you're a startup with a bold vision or an enterprise ready to transform — let's
            make it happen. One conversation can change everything.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="relative group px-8 py-4 bg-brand-accent text-black font-bold text-xs uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10">Start a Conversation</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-brand-border text-xs font-mono uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-all"
            >
              Explore Services
            </Link>
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
          <div className="flex items-center gap-6">
            <span>V2026.01 // STABLE</span>
            <span className="text-stone-700">|</span>
            <span>Built in Johannesburg</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
