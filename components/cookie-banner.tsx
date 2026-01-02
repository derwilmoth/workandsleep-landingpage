"use client";

import { useLanguage } from "@/lib/language-context";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl">
      <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-white/90 flex-1 leading-relaxed">
            {t("cookieBannerMessage")}
          </p>
          <button
            onClick={handleAccept}
            className="flex-shrink-0 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all hover:cursor-pointer whitespace-nowrap shadow-lg"
          >
            {t("cookieBannerAccept")}
          </button>
        </div>
      </div>
    </div>
  );
}
