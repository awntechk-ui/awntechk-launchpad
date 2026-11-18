import { ArrowUpRight, MapPin, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "TripSync",
    path: "/tripsync",
    status: "In development",
    icon: MapPin,
    description: "TripSync is a travel planning platform that helps users collaboratively plan trips in real time.",
  },
  {
    name: "Neaaa",
    path: "/neaaa",
    status: "In planning",
    icon: Utensils,
    description: "Neaaa is a smart food-tech platform that connects users with nearby places.",
  },
];

export default function OngoingProjects() {
  return (
    <section id="projects" className="landing-band landing-light landing-products" aria-labelledby="products-heading">
      <div className="enquiry-shell">
        <div className="landing-heading">
          <h2 id="products-heading">Our products</h2>
        </div>
        <div className="landing-product-grid">
          {products.map(({ name, path, status, icon: Icon, description }) => (
            <article key={name} className="landing-product">
              <div className="landing-product-top">
                <Icon size={25} aria-hidden="true" />
                <span>{status}</span>
              </div>
              <h3>{name}</h3>
              <p>{description}</p>
              <Link className="landing-text-link" to={path}>Explore {name} <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
