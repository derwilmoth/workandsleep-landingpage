"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { languages, type Language } from "@/lib/i18n";
import { ChevronDown, Globe } from "lucide-react";
import { createPortal } from "react-dom";

interface LanguageSwitcherProps {
  onOpenChange?: (isOpen: boolean) => void;
}

export function LanguageSwitcher({ onOpenChange }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    right: 0,
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 4,
        right: window.innerWidth - rect.right,
      });
    }
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  const currentLang = languages.find((l) => l.code === language);

  const dropdown = isOpen && (
    <>
      <div className="fixed inset-0 z-[100]" onClick={() => setIsOpen(false)} />
      <div
        className="fixed w-36 max-h-[210px] bg-black/40 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-[101] overflow-y-auto overflow-x-hidden"
        style={{
          top: `${dropdownPosition.top}px`,
          right: `${dropdownPosition.right}px`,
        }}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code as Language);
              setIsOpen(false);
            }}
            className={`cursor-pointer w-full px-4 py-2.5 text-sm flex items-center justify-center hover:bg-white/20 transition-colors ${
              language === lang.code
                ? "bg-[#950a46]/40 text-gray-300 font-medium"
                : "text-gray-300"
            }`}
          >
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </>
  );

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg bg-transparent border border-white/20 hover:bg-white/20 transition-colors"
      >
        <Globe className="w-4 h-4 text-gray-300" />
        <span className="text-sm font-medium text-gray-300">
          {currentLang?.name}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-300 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {typeof window !== "undefined" && createPortal(dropdown, document.body)}
    </div>
  );
}
