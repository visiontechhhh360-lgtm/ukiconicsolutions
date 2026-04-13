import { Link } from "react-router";
import { motion } from "motion/react";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, ChevronRight, Sparkles } from "lucide-react";

export function Footer() {
  const company = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    
    { name: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
  
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  return (
    <footer className="relative border-t border-blue-400/20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
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

            <p className="text-blue-100/60 mb-8 leading-relaxed text-base">
              Your trusted partner for digital transformation, web development, mobile app development, digital marketing, VPN services, cybersecurity solutions, data recovery services, and IT consultancy. We deliver innovative IT services that help businesses scale and succeed in the digital age.
            </p>

            </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-blue-100/60 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@ukiconicsolutions.com"
                  className="text-blue-100/60 hover:text-blue-400 transition-colors flex items-start gap-3 group text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    support@ukiconicsolutions.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+923001234567"
                  className="text-blue-100/60 hover:text-blue-400 transition-colors flex items-start gap-3 group text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    +923001234567
                  </span>
                </a>
              </li>
              <li>
                <div className="text-blue-100/60 flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                  <span>
                    Islamabad ,Pakistan<br />
                    
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <h5 className="text-sm font-medium mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/5 hover:bg-blue-500/20 border border-blue-400/20 hover:border-blue-400/50 rounded-xl flex items-center justify-center transition-colors group"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-blue-100/60 text-sm text-center md:text-left">
              © 2026 UK Iconic Solutions. All rights reserved. Delivering premium IT services across the world.
            </p>

            
          </div>
        </div>
      </div>
    </footer>
  );
}
