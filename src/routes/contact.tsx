import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — TechXplo" },
      {
        name: "description",
        content:
          "Get in touch with TechXplo. Briefs, quotes, project inquiries. We respond inside one business day.",
      },
    ],
  }),
});

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function Contact() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    setSubmitted(true);
  }

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
            <a
              href="/#about"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              About
            </a>
            <a
              href="/#services"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Services
            </a>
            <a
              href="/#partners"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Partners
            </a>
            <a
              href="/#case"
              className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
            >
              Work
            </a>
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
              {["about", "services", "partners", "case"].map((section) => (
                <a
                  key={section}
                  href={`/#${section}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-mono tracking-widest uppercase hover:text-brand-accent transition-colors"
                >
                  {section === "case" ? "Work" : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
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

      {/* Contact */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] text-brand-accent uppercase tracking-[0.4em]">
              // CONTACT
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mt-4 mb-6">
              Open a line.
            </h2>
            <p className="text-stone-400 leading-relaxed max-w-md mb-12">
              Briefs, quotes, project inquiries. We respond inside one business day from our
              Johannesburg operations centre.
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-brand-border border border-brand-border">
              {[
                { l: "Phone", v: "+27 67 853 0148", href: "tel:+27678530148" },
                { l: "Email", v: "admin@techxplo.co.za", href: "mailto:admin@techxplo.co.za" },
                { l: "Address", v: "Johannesburg, South Africa" },
                { l: "Hours", v: "Mon–Fri · 09:00 – 18:00 SAST" },
              ].map((c) => (
                <div key={c.l} className="bg-brand-bg p-6">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-500 mb-3">
                    {c.l}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-base font-display font-bold hover:text-brand-accent transition-colors break-words"
                    >
                      {c.v}
                    </a>
                  ) : (
                    <p className="text-base font-display font-bold">{c.v}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-brand-accent bg-brand-card p-10 text-center">
                <div className="text-5xl mb-4 text-brand-accent">✓</div>
                <h3 className="font-display text-2xl font-bold uppercase mb-2">Message received</h3>
                <p className="text-stone-400">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="text-xs font-mono uppercase tracking-[0.3em] text-stone-500 mb-2">
                          Name
                        </div>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="bg-brand-card border-brand-border text-white placeholder:text-stone-600 px-4 py-3 h-auto text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="text-xs font-mono uppercase tracking-[0.3em] text-stone-500 mb-2">
                          Email
                        </div>
                        <FormControl>
                          <Input
                            placeholder="you@example.com"
                            className="bg-brand-card border-brand-border text-white placeholder:text-stone-600 px-4 py-3 h-auto text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <div className="text-xs font-mono uppercase tracking-[0.3em] text-stone-500 mb-2">
                          Subject
                        </div>
                        <FormControl>
                          <Input
                            placeholder="What is this regarding?"
                            className="bg-brand-card border-brand-border text-white placeholder:text-stone-600 px-4 py-3 h-auto text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <div className="text-xs font-mono uppercase tracking-[0.3em] text-stone-500 mb-2">
                          Message
                        </div>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="bg-brand-card border-brand-border text-white placeholder:text-stone-600 px-4 py-3 h-auto text-sm min-h-[140px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    className="px-7 py-3 bg-brand-accent text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </Form>
            )}
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
                  <a
                    href="/#services"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/#partners"
                    className="text-stone-500 text-xs font-mono hover:text-brand-accent uppercase tracking-widest"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="/#case"
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
