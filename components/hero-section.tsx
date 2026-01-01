"use client";

import { useLanguage } from "@/lib/language-context";
import { CreditCard, Banknote } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#2d2d2f] pt-20">
      {/* Content - Centered both horizontally and vertically */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="mb-10 sm:mb-12">
          <Image
            src="/images/logo-boardinghouse-work-sleep-1-1-e1766177408442.png"
            alt="Work & Sleep Boardinghouse Logo"
            width={700}
            height={350}
            className="mx-auto logo-glow w-[500px] sm:w-[600px] md:w-[700px] lg:w-[1000px] h-auto"
            priority
          />
        </div>
        {/*
        <p className="text-base sm:text-lg text-gray-300 font-medium mb-6 sm:mb-8">
          {t("heroSubtitle")}
        </p>
        */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://booking.softtec.software/workandsleep"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white bg-[#950a46] rounded-xl shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">{t("bookNow")}</span>
          </a>

          <div className="inline-flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#39393b] rounded-xl border border-white/10 shadow-lg">
            <div className="text-left">
              <p className="font-semibold text-white text-xs sm:text-sm">
                {t("payOnArrival")}
              </p>
              <p className="text-xs text-gray-400">{t("payOnArrivalShort")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
