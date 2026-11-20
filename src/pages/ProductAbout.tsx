import { useLayoutEffect, useRef, type CSSProperties } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products } from "@/lib/products";
import NotFound from "./NotFound";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How it works" },
  { id: "benefits", label: "Benefits" },
];

const ProductAbout = () => {
  const { slug } = useParams();
  const { hash, key } = useLocation();
  const product = products.find((entry) => entry.slug === slug);
  const heading = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!product) return;

    const previousTitle = document.title;
    document.title = `About ${product.name} | AwnTechK`;

    return () => {
      document.title = previousTitle;
    };
  }, [product]);

  useLayoutEffect(() => {
    if (!product) return;

    const section = sections.find(({ id }) => `#${id}` === hash);
    const target = section ? document.getElementById(section.id) : heading.current;
    target?.focus({ preventScroll: true });

    if (section) {
      target?.scrollIntoView({ behavior: "instant", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [product, hash, key]);

  if (!product) return <NotFound />;

  const theme = {
    "--product-dark": product.colors.dark,
    "--product-accent": product.colors.accent,
    "--product-light": product.colors.light,
    "--product-background": product.colors.background,
  } as CSSProperties;

  return (
    <div style={theme} className="product-about min-h-screen bg-[var(--product-background)] text-[var(--product-dark)]">
      <header className="bg-[var(--product-dark)] text-white">
        <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 py-2 sm:px-6">
          <Link to="/#projects" className="inline-flex min-h-11 items-center gap-2 rounded-md pr-2 text-sm font-medium text-[var(--product-light)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Our Products
          </Link>
          <h1 ref={heading} tabIndex={-1} className="text-base font-semibold sm:text-lg">About {product.name}</h1>
        </div>
      </header>

      <main>
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-[var(--product-accent)] to-[var(--product-dark)] text-white">
          {product.heroImage ? (
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[center_40%]"
              style={{ backgroundImage: `linear-gradient(rgba(76, 16, 38, 0.16), var(--product-dark)), url(${product.heroImage})` }} />
          ) : (
            <product.icon aria-hidden="true" strokeWidth={0.8} className="absolute -right-12 top-1/2 -z-10 size-56 -translate-y-1/2 text-white/15 sm:right-[8%] sm:size-80" />
          )}
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
            <p className="max-w-3xl text-balance text-[clamp(2rem,6vw,3.75rem)] font-medium leading-tight tracking-tight">{product.headline}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">{product.description}</p>
            <Link to="#how-it-works" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[var(--product-dark)] hover:bg-[var(--product-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              See how it works <ArrowDown aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>

        <nav aria-label="On this page" className="border-b border-[var(--product-light)] bg-white">
          <ul className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-3 sm:px-6">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={`#${id}`}
                  aria-current={hash === `#${id}` ? "location" : undefined}
                  className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold hover:bg-[var(--product-light)] focus-visible:outline focus-visible:outline-2 aria-[current=location]:bg-[var(--product-light)] sm:px-4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
          <h2 id="overview" tabIndex={-1} className="scroll-mt-4 text-2xl font-semibold sm:text-3xl">Our Story</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">{product.story}</p>
        </section>

        <section aria-label="Mission and vision" className="bg-gradient-to-br from-[var(--product-dark)] to-[var(--product-accent)] text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 sm:py-16">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--product-light)]">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-white/90">{product.mission}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[var(--product-light)]">Our Vision</h2>
              <p className="mt-3 leading-relaxed text-white/90">{product.vision}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:gap-12">
          <h2 id="how-it-works" tabIndex={-1} className="scroll-mt-4 text-2xl font-semibold sm:text-3xl">How {product.name} works</h2>
          <Accordion key={product.slug} type="single" collapsible defaultValue={product.steps[0]?.title} className="min-w-0 space-y-3">
            {product.steps.map(({ title, description }, index) => (
              <AccordionItem key={title} value={title} className="rounded-xl border border-[var(--product-light)] bg-white">
                <AccordionTrigger className="min-h-14 gap-3 rounded-xl px-4 py-3 text-left hover:bg-[var(--product-background)] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-5">
                  <span className="flex min-w-0 items-center gap-3">
                    <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-md bg-[var(--product-light)] text-sm font-semibold">{index + 1}</span>
                    <span className="font-semibold">{title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 text-base leading-relaxed text-slate-700 motion-reduce:animate-none sm:pl-16 sm:pr-5">
                  {description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="bg-[var(--product-light)]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
            <h2 id="benefits" tabIndex={-1} className="scroll-mt-4 text-2xl font-semibold sm:text-3xl">Why {product.name}?</h2>
            <ul className="mt-5 space-y-3">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <nav aria-label="Other products" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <h2 className="text-xl font-semibold">Explore other products</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {products.filter((entry) => entry.slug !== product.slug).map(({ slug, name, icon: Icon }) => (
              <li key={slug}>
                <Link to={`/products/${slug}`} className="flex min-h-14 items-center gap-3 rounded-xl border border-[var(--product-light)] bg-white px-4 py-3 font-semibold hover:bg-[var(--product-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  <Icon aria-hidden="true" className="size-5 shrink-0" />
                  <span className="flex-1">{name}</span>
                  <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default ProductAbout;
