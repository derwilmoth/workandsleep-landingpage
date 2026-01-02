"use client";

import { useLanguage } from "@/lib/language-context";
import { Check, Bed, Users } from "lucide-react";
import Image from "next/image";

const rooms = [
  {
    id: "single",
    nameKey: "singleRoom",
    price: 49,
    beds: 1,
    image: "/images/1-20bett-20-20kopie.jpeg",
  },
  {
    id: "double",
    nameKey: "doubleRoom",
    price: 78,
    beds: 2,
    image: "/images/2-20bett.jpeg",
  },
  {
    id: "triple",
    nameKey: "tripleRoom",
    price: 87,
    beds: 3,
    image: "/images/3-20bett.jpeg",
  },
];

export function RoomsSection() {
  const { t } = useLanguage();

  return (
    <section id="rooms" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - dark text on light background */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("ourRooms")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("roomsDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-200"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={t(room.nameKey)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/*<div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />*/}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-primary/90 text-white rounded-full text-sm font-medium">
                    <Users className="w-4 h-4" />
                    <span>{room.beds}</span>
                  </div>
                </div>
              </div>

              {/* Room Details - dark text on light card */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(room.nameKey)}
                </h3>

                {room.beds > 1 ? (
                  <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                    <Bed className="w-4 h-4" />
                    {room.beds} {t("separateBeds")}
                  </p>
                ) : (
                  <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                    <Bed className="w-4 h-4" />
                    {room.beds}
                  </p>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {room.price}€
                  </span>
                  <span className="text-gray-500">{t("perNight")}</span>
                </div>

                <p className="text-xs text-gray-500 mb-4">
                  {t("excludingTax")}
                </p>

                {/* Features */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">{t("roomFeatures")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between text-center md:text-left">
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t("fairPricing")}
              </h3>
              <p className="text-gray-600">{t("fairPricingDesc")}</p>
            </div>
            <a
              href="https://booking.softtec.software/workandsleep"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex-shrink-0 inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t("bookNow")}
            </a>
          </div>
        </div>

        <div className="mt-24 border-t border-gray-300" />
      </div>
    </section>
  );
}
