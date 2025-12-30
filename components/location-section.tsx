"use client";

import { useLanguage } from "@/lib/language-context";
import { MapPin, Train, Car, Phone, Mail, Heart } from "lucide-react";

export function LocationSection() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - dark text */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("howToReachUs")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.908139841695!2d8.453867776844382!3d49.462841771436086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc1b3d0e1e5d%3A0x5b6f6d1d9b1e9d0a!2sDannstadter%20Str.%206-8%2C%2068199%20Mannheim!5e0!3m2!1sen!2sde!4v1704000000000!5m2!1sen!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col justify-center gap-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t("address")}
                </h3>
                <p className="text-gray-600">
                  Dannstadter Straße 6-8
                  <br />
                  68199 Mannheim
                  <br />
                  Deutschland
                </p>
              </div>
            </div>

            {/* Public Transport */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Train className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t("byPublicTransport")}
                </h3>
                <p className="text-gray-600">{t("byPublicTransportDesc")}</p>
              </div>
            </div>

            {/* By Car */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t("byCar")}
                </h3>
                <p className="text-gray-600">{t("byCarDesc")}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t("phone")}
                </h3>
                <a
                  href="tel:+49621860373150"
                  className="cursor-pointer text-primary hover:underline font-medium"
                >
                  +49 621 86037315
                </a>
              </div>
            </div>

            <div id="contact" className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">E-Mail</h3>
                <a
                  href="mailto:info@ws-boardinghouse.de"
                  className="cursor-pointer text-primary hover:underline font-medium"
                >
                  info@ws-boardinghouse.de
                </a>
              </div>
            </div>

            {/* Book Button */}
            <a
              href="https://booking.softtec.software/workandsleep"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer mt-4 inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 text-lg"
            >
              {t("bookNow")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
