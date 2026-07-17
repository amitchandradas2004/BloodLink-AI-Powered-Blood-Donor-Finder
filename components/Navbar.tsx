"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Droplet } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Donars", href: "/donars" },




  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-white transition-transform group-hover:scale-110">
            <Droplet className="h-6 w-6 fill-current animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Blood<span className="text-brand-red">Link</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-neutral-650 hover:text-brand-red dark:text-neutral-300 dark:hover:text-brand-red transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Theme Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle Button (44x44px minimum touch target with premium Framer Motion feedback) */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-100 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:text-neutral-300 transition-colors duration-250 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 dark:focus:ring-offset-neutral-950 cursor-pointer"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-500 fill-amber-500 animate-spin-slow" />
              ) : (
                <Moon className="h-5 w-5 text-neutral-700 fill-neutral-100" />
              )
            ) : (
              <span className="h-5 w-5 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800" />
            )}
          </motion.button>

          {/* Action CTA Button (Desktop) */}
          <a
            href="#urgent-requests"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover transition-colors duration-200 shadow-md shadow-brand-red/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 dark:focus:ring-offset-neutral-950"
          >
            Find Donor
          </a>

          {/* Hamburger Menu (44x44px minimum touch target) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 lg:hidden hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 dark:focus:ring-offset-neutral-950 cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer (Smooth Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-4 space-y-4"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2.5 rounded-lg text-base font-medium text-neutral-600 hover:text-brand-red hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-brand-red dark:hover:bg-neutral-900 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
              <a
                href="#urgent-requests"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center px-4 py-3 text-base font-semibold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover transition-colors duration-200 shadow-md focus:outline-none"
              >
                Find Donor
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
