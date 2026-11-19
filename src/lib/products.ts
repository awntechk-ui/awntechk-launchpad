import { Building2, Plane, Shirt, Utensils, type LucideIcon } from "lucide-react";

export interface Product {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  colors: { dark: string; accent: string; light: string; background: string };
  heroImage?: string;
  headline: string;
  story: string;
  mission: string;
  vision: string;
  steps: { title: string; description: string }[];
  benefits: string[];
}

export const products: Product[] = [
  {
    slug: "neaaa",
    name: "Neaaa",
    description: "Discover nearby places to eat and find something that suits your plans.",
    icon: Utensils,
    colors: { dark: "#572517", accent: "#9c421e", light: "#fcd9bd", background: "#fff9f4" },
    headline: "Find your next bite close to home.",
    story: "Neaaa connects people with nearby food spots. It gives you a place to start when you want a quick bite, somewhere to meet a friend, or a new place to try in your neighborhood.",
    mission: "Make it easier to discover places to eat nearby.",
    vision: "Help more people get to know the food spots in their own neighborhoods.",
    steps: [
      { title: "Discover nearby spots", description: "Start with places to eat around you." },
      { title: "Explore your options", description: "Browse the local spots that catch your interest." },
      { title: "Pick a place", description: "Choose somewhere that suits the meal or occasion you have in mind." },
    ],
    benefits: ["Find ideas for everyday meals", "Discover new neighborhood food spots", "Choose somewhere to meet for a meal"],
  },
  {
    slug: "tripsync",
    name: "TripSync",
    description: "Plan trips together and see everyone’s updates in real time.",
    icon: Plane,
    colors: { dark: "#16345a", accent: "#295990", light: "#d9eaff", background: "#f6faff" },
    headline: "Give everyone a say in the trip.",
    story: "TripSync gives friends, families, and travel groups a shared place to organize a trip. Everyone can contribute to the same plan and see changes as they happen.",
    mission: "Make group travel easier to coordinate from the first idea to the final itinerary.",
    vision: "Give every traveler a shared view of the plans they helped make.",
    steps: [
      { title: "Start a trip plan", description: "Create a shared place for your trip ideas." },
      { title: "Plan together", description: "Work on the itinerary with the people joining you." },
      { title: "Follow updates", description: "See changes to the trip plan in real time." },
    ],
    benefits: ["Keep trip details in one place", "Make plans as a group", "See the latest itinerary"],
  },
  {
    slug: "attirely",
    name: "Attirely",
    description: "Discover dresses from fashion vendors, book a trial fitting, or reserve a dress for rental.",
    icon: Shirt,
    colors: { dark: "#4c1026", accent: "#8e2945", light: "#e9d8b0", background: "#fffcf8" },
    heroImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=85",
    headline: "Style is yours. The outfit is borrowed.",
    story: "Attirely brings customers and fashion vendors together. Explore dresses for weddings, parties, and other special occasions, then book a fitting or reserve the dress you want to rent.",
    mission: "Make fashion more accessible by connecting people with outfits they love and helping vendors reach customers who appreciate their collections.",
    vision: "Build a trusted fashion rental community where customers can discover new looks and vendors can grow their businesses.",
    steps: [
      { title: "Discover dresses", description: "Explore collections from different fashion vendors and find a look for your occasion." },
      { title: "Book a trial fitting", description: "Schedule a time to try on a dress and check the fit before you decide." },
      { title: "Reserve a rental", description: "Book the dress for your occasion and review the vendor’s rental terms." },
      { title: "Return the dress", description: "Return your outfit according to the agreed rental terms." },
    ],
    benefits: ["Try on a dress before deciding", "Explore collections from fashion vendors", "Rent an outfit for a special occasion"],
  },
  {
    slug: "gated-community",
    name: "Gated Community",
    description: "Give residents and management a shared place for day-to-day community coordination.",
    icon: Building2,
    colors: { dark: "#153e36", accent: "#27675b", light: "#d4eee4", background: "#f5fbf8" },
    headline: "Stay connected to the community you call home.",
    story: "Gated Community is a platform for residential communities. It brings residents and management together around the information and communication that keep the neighborhood running day to day.",
    mission: "Make it easier for residents and management to communicate about everyday community matters.",
    vision: "Give residential communities a single place to stay informed and coordinate.",
    steps: [
      { title: "Connect with your community", description: "Start with a space centered on your residential community." },
      { title: "Stay informed", description: "Keep up with information from community management." },
      { title: "Coordinate day to day", description: "Use the shared space for communication between residents and management." },
    ],
    benefits: ["Find community information in one place", "Keep residents and management in touch"],
  },
];
