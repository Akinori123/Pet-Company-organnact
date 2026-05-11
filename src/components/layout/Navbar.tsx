import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { Button } from "../ui/Button";
import { APP_DATA } from "@/src/lib/mockData";
import { cn } from "@/src/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/#sobre" },
    { name: "Serviços", href: "/#servicos" },
    { name: "Estrutura", href: "/#estrutura" },
    { name: "Equipe", href: "/#equipe" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-brand-100/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Organnact" 
              className="h-10 w-auto object-contain" 
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-500",
                  isScrolled ? "text-brand-900/80" : "text-white/90"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            <a href={APP_DATA.instagramLink} target="_blank" rel="noreferrer" className={cn(
              "hidden lg:flex items-center justify-center h-9 w-9 rounded-md transition-colors",
              isScrolled ? "text-brand-900 hover:bg-brand-900/5" : "text-white hover:bg-white/10"
            )}>
               <Instagram className="h-5 w-5" />
            </a>
            <a href={`tel:${APP_DATA.phoneRaw}`} className="hidden lg:block">
              <Button 
                size="sm" 
                variant={isScrolled ? "outline" : "secondary"} 
                className={cn("gap-2", isScrolled ? "border-brand-900/20" : "")}
              >
                <Phone className="h-4 w-4" />
                {APP_DATA.phone}
              </Button>
            </a>

            <div className="md:hidden">
              <button
                type="button"
                className={cn("p-2 transition-colors", isScrolled ? "text-brand-900" : "text-white")}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-brand-100 border-t border-brand-900/10 shadow-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-brand-900/80 hover:text-brand-900 hover:bg-brand-900/5 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3 space-y-3">
              <a href={`tel:${APP_DATA.phoneRaw}`} className="w-full block">
                <Button className="w-full gap-2 block">
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Ligar Agora
                  </span>
                </Button>
              </a>
              <a href={APP_DATA.instagramLink} target="_blank" rel="noreferrer" className="w-full block">
                <Button variant="outline" className="w-full gap-2 border-brand-900/20 text-brand-900 block">
                  <span className="flex items-center justify-center gap-2">
                    <Instagram className="h-4 w-4" />
                    Siga no Instagram
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
