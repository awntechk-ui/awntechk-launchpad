import { ArrowUpRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/lib/products";

export default function OngoingProjects() {
  return (
    <section id="projects" className="landing-band landing-light landing-products" aria-labelledby="products-heading">
      <div className="enquiry-shell">
        <div className="landing-heading">
          <h2 id="products-heading">Our products</h2>
        </div>
        <div className="landing-product-grid">
          {products.map(({ slug, name, icon: Icon, description }) => (
            <article key={slug} className="landing-product flex flex-col items-start">
              <div className="landing-product-top w-full">
                <Icon size={25} aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-emerald-900">
                  <Rocket size={14} aria-hidden="true" />
                  Launched
                </span>
              </div>
              <h3>{name}</h3>
              <p className="flex-1">{description}</p>
              <Link className="landing-text-link" to={`/products/${slug}`}>
                Explore {name} <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
