"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "./language-switcher";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#rooms", label: t("rooms") },
    { href: "/#amenities", label: t("amenities") },
    { href: "/#location", label: t("directions") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#2d2d2f] ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Logo-boardinghouse-work-sleep-1-1-1-e1766177408442.png"
              alt="Work & Sleep Boardinghouse"
              width={40}
              height={40}
              className="h-[35px] w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-white/80 transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#950a46] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* 1. Phone Number - appears first (at xl - 1280px) */}
            <a
              href="tel:+49621860373150"
              className="hidden xl:flex items-center gap-2 text-sm text-white/70 transition-colors relative group"
            >
              <Phone className="w-4 h-4" />
              <span className="relative">
                +49 621 86037315
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#950a46] transition-all duration-300 group-hover:w-full" />
              </span>
            </a>

            {/* 2. Language Switcher - appears at sm */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* 3. Mobile Menu Button - right of language switcher when both visible */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white border"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-2 items-start">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mr-4 px-4 py-3 text-sm font-medium text-white/80 border hover:bg-white/5 rounded-lg transition-colors relative group inline-block w-full text-center"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#950a46] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              ))}

              {/* Language Switcher - only show in mobile menu when screen < sm */}
              <div className="py-3 ml-auto sm:hidden">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
