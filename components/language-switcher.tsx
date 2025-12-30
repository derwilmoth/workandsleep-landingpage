"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { languages, type Language } from "@/lib/i18n";
import { ChevronDown, Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
      >
        <Globe className="w-4 h-4 text-gray-300" />
        <span className="text-sm font-medium text-white">
          {currentLang?.name}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-300 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-36 max-h-[210px] bg-[#2d2d2f] border border-white/10 rounded-lg shadow-xl z-50 overflow-y-auto overflow-x-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as Language);
                  setIsOpen(false);
                }}
                className={`cursor-pointer w-full px-4 py-2.5 text-center text-sm flex items-center gap-3 hover:bg-white/10 transition-colors ${
                  language === lang.code
                    ? "bg-[#e91e7d]/20 text-[#e91e7d] font-medium"
                    : "text-gray-300"
                }`}
              >
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
