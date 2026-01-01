"use client";

import { useLanguage } from "@/lib/language-context";
import { CreditCard, Banknote } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/2.jpg"
          alt="Work & Sleep Boardinghouse Building"
          fill
          className="object-cover animate-[zoomIn_5s_ease-out_forwards]"
          priority
          quality={100}
          style={{ transform: "scale(1.15)" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content - Centered both horizontally and vertically */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="mb-10 sm:mb-12 relative">
          <Image
            src="/images/logo-boardinghouse-work-sleep-1-1-e1766177408442.png"
            alt="Work & Sleep Boardinghouse Logo"
            width={700}
            height={350}
            className="relative mx-auto w-[500px] sm:w-[600px] md:w-[700px] lg:w-[1000px] h-auto drop-shadow-[0_0_40px_rgba(149,10,70,0.25)]"
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
            className="cursor-pointer group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white bg-[#950a46] rounded-xl shadow-2xl shadow-[#950a46]/30 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">{t("bookNow")}</span>
          </a>

          <div className="inline-flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
            <div className="text-left">
              <p className="font-semibold text-white text-xs sm:text-sm">
                {t("payOnArrival")}
              </p>
              <p className="text-xs text-gray-300">{t("payOnArrivalShort")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
