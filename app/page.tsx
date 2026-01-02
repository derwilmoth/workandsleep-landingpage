"use client";

import { LanguageProvider } from "@/lib/language-context";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { RoomsSection } from "@/components/rooms-section";
import { AmenitiesSection } from "@/components/amenities-section";
import { CheckinSection } from "@/components/checkin-section";
import { ReviewsSection } from "@/components/reviews-section";
import { LocationSection } from "@/components/location-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { CookieBanner } from "@/components/cookie-banner";

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <RoomsSection />
          <AmenitiesSection />
          <CheckinSection />
          <ReviewsSection />
          <LocationSection />
        </main>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
}
