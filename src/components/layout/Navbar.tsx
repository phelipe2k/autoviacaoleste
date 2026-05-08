"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { publicPath } from "@/lib/site";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/passagens", label: "Orçamento" },
  { href: "/frota", label: "Frota" },
  { href: "/destinos", label: "Roteiros" },
  { href: "/servicos", label: "Serviços" },
  { href: "/institucional", label: "Institucional" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-dark/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="section-padding">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src={publicPath("/images/logo-transparente.webp")}
                alt="Auto Viação Leste"
                width={56}
                height={56}
                className="h-14 w-14 object-contain transition-opacity group-hover:opacity-90"
              />
              <div className="sr-only">
                <p className="text-sm font-semibold text-ice font-display tracking-wider">
                  AUTO VIAÇÃO
                </p>
                <p className="text-xs text-cyan tracking-[0.2em]">LESTE</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-all duration-300 py-2",
                    pathname === item.href
                      ? "text-cyan"
                      : "text-ice/70 hover:text-ice"
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-cyan"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contato"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border border-cyan/50 rounded-full group-hover:border-cyan transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-shadow duration-300" />
                <User className="w-4 h-4 text-cyan" />
                <span className="text-sm font-medium text-ice">
                  WHATSAPP
                </span>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-cyan" />
              ) : (
                <Menu className="w-5 h-5 text-ice" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-dark/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute top-24 left-4 right-4 bg-dark-lighter/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-deep"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300",
                        pathname === item.href
                          ? "bg-primary/10 text-cyan border border-primary/20"
                          : "text-ice/70 hover:bg-white/5 hover:text-ice"
                      )}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
                <div className="border-t border-white/10 my-3" />
                <Link
                  href="/contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary/20 to-cyan/20 rounded-xl border border-cyan/30 text-cyan font-medium"
                >
                  <User className="w-4 h-4" />
                  WHATSAPP
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
