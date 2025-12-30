"use client"

import { useLanguage } from "@/lib/language-context"
import { Clock, CalendarCheck, AlertTriangle, Briefcase } from "lucide-react"

export function CheckinSection() {
  const { t } = useLanguage()

  const infoItems = [
    { icon: Clock, titleKey: "receptionHours", descKey: "receptionHoursDesc" },
    { icon: CalendarCheck, titleKey: "checkInTime", descKey: "checkInTimeDesc" },
    { icon: AlertTriangle, titleKey: "holidayNote", descKey: "holidayNoteDesc", highlight: true },
  ]

  return (
    <section className="py-24 bg-[#2d2d2f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("checkInInfo")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                item.highlight ? "bg-[#39393b] border-2 border-primary/30" : "bg-[#39393b] border border-white/10"
              } shadow-lg`}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-[#1f1f21]">
                <item.icon className="w-6 h-6 text-gray-200" />
              </div>
              <h3 className="font-semibold mb-2 text-white">{t(item.titleKey)}</h3>
              <p className="text-sm text-gray-400">{t(item.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-[#39393b] rounded-2xl shadow-lg border border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0 w-16 h-16 bg-[#1f1f21] rounded-full flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-gray-200" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{t("businessGuests")}</h3>
              <p className="text-gray-400">{t("businessGuestsDesc")}</p>
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

        <p className="mt-8 text-center text-sm text-gray-400">{t("noBreakfast")}</p>

        <div className="mt-24 border-t border-white/20" />
      </div>
    </section>
  )
}
