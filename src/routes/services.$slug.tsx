import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.title} — TechXplo` },
      {
        name: "description",
        content: loaderData.desc,
      },
    ],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-black">
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
        </div>
      </nav>

      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="size-12 bg-brand-accent flex items-center justify-center">
              <span className="font-mono font-bold text-black">{service.n}</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-stone-500">
              SERVICE
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            {service.title}
          </h1>

          <p className="text-stone-300 text-lg leading-relaxed mb-12 max-w-2xl">{service.desc}</p>

          <div className="border-t border-brand-border pt-12 mb-12">
            <h2 className="font-display text-2xl font-bold uppercase mb-6 tracking-tight">
              About this service
            </h2>
            <p className="text-stone-400 leading-relaxed">{service.longDesc}</p>
          </div>

          <div className="border-t border-brand-border pt-12 mb-12">
            <h2 className="font-display text-2xl font-bold uppercase mb-6 tracking-tight">
              Key areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.bullets.map((b) => (
                <div
                  key={b}
                  className="border border-brand-border bg-brand-card p-6 flex items-center gap-3"
                >
                  <span className="size-2 bg-brand-accent shrink-0" />
                  <span className="text-sm font-mono tracking-widest text-stone-300">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-brand-border pt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex px-7 py-3 bg-brand-accent text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Partner with us →
            </Link>
            <Link
              to="/services"
              className="inline-flex px-7 py-3 border border-brand-border text-xs font-mono uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-colors"
            >
              Explore all services
            </Link>
          </div>
        </div>
      </section>

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
