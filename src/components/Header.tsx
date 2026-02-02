import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Changed threshold slightly to 10px for a faster reaction
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-md py-3" // SCROLLED: Bright White, Shadow, Crisp Border
          : "bg-transparent border-transparent py-6" // TOP: Transparent
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-16">
          
          {/* LOGO: Reduced size (w-32 to w-40) */}
          <div className="flex items-center -ml-4">
             <img 
               src="/logo.png" 
               alt="Awntechk" 
               className={`w-32 md:w-40 object-contain hover:scale-105 transition-all duration-300 ${
                 isScrolled ? 'filter-none' : 'brightness-0 invert'
               }`}
             />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-base font-medium transition-colors duration-300 relative group ${
                  isScrolled 
                    ? "text-gray-900 hover:text-blue-600" // SCROLLED: Dark text, Blue hover (matches Intro accents)
                    : "text-white/90 hover:text-white"    // TOP: White text
                }`}
              >
                {link.label}
                {/* Underline Animation */}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-blue-600" : "bg-white"
                }`} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 focus:outline-none transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Dropdown */}
        <div 
            className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
                isMobileMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
            }`}
        >
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xl font-medium text-gray-600 hover:text-blue-600 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;