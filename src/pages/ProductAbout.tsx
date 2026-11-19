import { useLayoutEffect, useRef, type CSSProperties } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "@/lib/products";
import NotFound from "./NotFound";

const ProductAbout = () => {
  const { slug } = useParams();
  const product = products.find((entry) => entry.slug === slug);
  const heading = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!product) return;

    const previousTitle = document.title;
    document.title = `About ${product.name} | AwnTechK`;
    window.scrollTo({ top: 0, behavior: "instant" });
    heading.current?.focus({ preventScroll: true });

    return () => {
      document.title = previousTitle;
    };
  }, [product]);

  if (!product) return <NotFound />;

  const theme = {
    "--product-dark": product.colors.dark,
    "--product-accent": product.colors.accent,
    "--product-light": product.colors.light,
    "--product-background": product.colors.background,
  } as CSSProperties;

  return (
    <div style={theme} className="min-h-screen bg-[var(--product-background)] text-[var(--product-dark)]">
      <header className="sticky top-0 z-20 bg-[var(--product-dark)] text-white">
        <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3">
          <Link to="/#projects" className="inline-flex items-center gap-2 py-1 text-sm text-[var(--product-light)] hover:underline">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Our Products
          </Link>
          <h1 ref={heading} tabIndex={-1} className="text-lg font-semibold outline-none">About {product.name}</h1>
        </div>
      </header>

      <main>
        <div className="relative isolate flex min-h-[25rem] items-end overflow-hidden bg-gradient-to-br from-[var(--product-accent)] to-[var(--product-dark)] text-white sm:min-h-[29rem]">
          {product.heroImage ? (
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-[center_40%]"
              style={{ backgroundImage: `linear-gradient(rgba(76, 16, 38, 0.16), var(--product-dark)), url(${product.heroImage})` }} />
          ) : (
            <product.icon aria-hidden="true" strokeWidth={0.8} className="absolute -right-12 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 text-white/15 sm:right-[8%] sm:h-96 sm:w-96" />
          )}
          <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
            <p className="max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">{product.headline}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">{product.description}</p>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">Our Story</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">{product.story}</p>
        </section>

        <section aria-label="Mission and vision" className="bg-gradient-to-br from-[var(--product-dark)] to-[var(--product-accent)] text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 sm:py-16">
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

        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">How {product.name} works</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {product.steps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4 rounded-xl border border-[var(--product-light)] bg-white p-5">
                <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--product-light)] text-sm font-semibold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-[var(--product-light)]">
          <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
            <h2 className="text-2xl font-semibold sm:text-3xl">Why {product.name}?</h2>
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
      </main>
    </div>
  );
};

export default ProductAbout;
