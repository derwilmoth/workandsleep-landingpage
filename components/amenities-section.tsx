"use client";

import { useLanguage } from "@/lib/language-context";
import {
  Wifi,
  Car,
  Coffee,
  Sofa,
  Accessibility,
  Thermometer,
  CigaretteOff,
  Wind,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const amenities = [
  { icon: Wifi, nameKey: "freeWifi", descKey: "freeWifiDesc" },
  { icon: Car, nameKey: "parking", descKey: "parkingDesc" },
  { icon: Coffee, nameKey: "vendingMachines", descKey: "vendingMachinesDesc" },
  { icon: Sofa, nameKey: "lobby", descKey: "lobbyDesc" },
  { icon: Accessibility, nameKey: "accessible", descKey: "accessibleDesc" },
  { icon: Thermometer, nameKey: "climate", descKey: "climateDesc" },
  { icon: CigaretteOff, nameKey: "noSmoking", descKey: "noSmokingDesc" },
  { icon: Wind, nameKey: "hairdryer", descKey: "hairdryerDesc" },
];

const carouselImages = [
  { src: "/images/lobby-203.jpg", alt: "Lobby" },
  { src: "/images/garden-201.jpeg", alt: "Terrasse Außenbereich" },
  { src: "/images/bad-201.jpeg", alt: "Badezimmer" },
  { src: "/images/bad-2.jpeg", alt: "Dusche", position: "top" },
  { src: "/images/geimeinschaftsl.jpeg", alt: "Gemeinschaftsraum" },
];

export function AmenitiesSection() {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.5;

    const animate = () => {
      // Only animate if visible and not paused
      if (isVisible && !isPaused && scrollContainer) {
        scrollPositionRef.current += scrollSpeed;
        // Reset when we've scrolled through half (since we duplicate images)
        if (scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
          scrollPositionRef.current = 0;
        }
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isVisible]);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...carouselImages, ...carouselImages];

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="pb-24 bg-gray-100 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 pt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("ourAmenities")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-[#950a46]/10 rounded-lg flex items-center justify-center mb-4">
                <amenity.icon className="w-6 h-6 text-[#950a46]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t(amenity.nameKey)}
              </h3>
              <p className="text-sm text-gray-600">{t(amenity.descKey)}</p>
            </div>
          ))}
        </div>

        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[350px] h-[250px] rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className={`object-cover ${
                    image.position === "top" ? "object-top" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
