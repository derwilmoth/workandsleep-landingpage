"use client";

import { useLanguage } from "@/lib/language-context";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2d2d2f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Family Business Banner - light text */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-white fill-white" />
            <h3 className="text-xl font-bold text-white">
              {t("familyBusiness")}
            </h3>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("familyBusinessDesc")}
          </p>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © Work&Sleep Boardinghouse Mannheim
            </p>

            {/* Legal Links - underline animation on hover */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/impressum"
                className="cursor-pointer text-sm text-gray-400 transition-colors relative group"
              >
                {t("imprint")}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#950a46] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/datenschutz"
                className="cursor-pointer text-sm text-gray-400 transition-colors relative group"
              >
                {t("privacy")}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#950a46] transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/agb"
                className="cursor-pointer text-sm text-gray-400 transition-colors relative group"
              >
                {t("terms")}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#950a46] transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
