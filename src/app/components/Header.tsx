import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Menu, X, ChevronRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
 
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "backdrop-blur-xl bg-background/80 border-b border-blue-400/30 shadow-lg shadow-blue-500/10"
        : "backdrop-blur-sm bg-background/60 border-b border-blue-400/10"
    }`}
  >
    <div className="max-w-7xl mx-auto px-6 py-2">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-blue-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <img
              src="Logo.png"
              alt="Logo"
              className="relative w-38 h-19 object-contain"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={`relative text-sm font-medium transition-colors hover:text-blue-400 ${
              location.pathname === "/" ? "text-blue-400" : "text-foreground/80"
            }`}
          >
              Home
              {location.pathname === "/" && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500"
                />
              )}
            </Link>

            <Link
              to="/about"
              className={`relative text-sm font-medium transition-colors hover:text-blue-400 ${
                location.pathname === "/about" ? "text-blue-400" : "text-foreground/80"
              }`}
            >
              About Us
              {location.pathname === "/about" && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500"
                />
              )}
            </Link>

            <Link
              to="/services"
              className={`relative text-sm font-medium transition-colors hover:text-blue-400 ${
                location.pathname === "/services" ? "text-blue-400" : "text-foreground/80"
              }`}
            >
              Services
              {location.pathname === "/services" && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500"
                />
              )}
            </Link>

        

            <Link
              to="/contact"
              className={`relative text-sm font-medium transition-colors hover:text-blue-400 ${
                location.pathname === "/contact" ? "text-blue-400" : "text-foreground/80"
              }`}
            >
              Contact
              {location.pathname === "/contact" && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500"
                />
              )}
            </Link>
          </nav>

          <Link to="/contact" className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
                Get Started
                <ChevronRight className="w-4 h-4" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-blue-400/20 backdrop-blur-2xl bg-background/95"
          >
            <div className="px-6 py-4 space-y-2">
              <Link to="/" className="block px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-colors">
                Services
              </Link>
             
              <Link to="/contact" className="block px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-colors">
                Contact
              </Link>

              <Link to="/contact" className="block pt-2">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-sm font-medium">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
