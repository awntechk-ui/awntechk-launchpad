import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg border-b-2 border-gray-200"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto">
        <nav className="flex items-center justify-between h-20 w-full px-6">
          {/* Logo - Left Side */}
          <div className="flex items-center -ml-10">
            <img 
              src="/logo.png" 
              alt="Awntechk" 
              className="w-96 h-96 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 object-contain"
            />
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side - Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b-4 border-gray-200 shadow-xl">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 border-l-4 border-transparent hover:border-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
