"use client"

import { useEffect } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ImpressumPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-[#e91e7d] mb-8">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

            <div className="prose prose-neutral max-w-none text-gray-800">
              <p className="text-gray-600 mb-4">Informationspflicht laut § 5 TMG.</p>

              <div className="mb-6">
                <p className="font-semibold text-gray-900">Work & Sleep Boardinghouse</p>
                <p className="text-gray-700">Dannstadter Str. 6-8,</p>
                <p className="text-gray-700">68199 Mannheim,</p>
                <p className="text-gray-700">Deutschland</p>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Steuernummer:</span> 38 235/41 533
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Steuer-ID Nr.:</span> DE15 46 62 125
                </p>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Tel.:</span> 0621 860 373 15
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Fax:</span> 0621 862 874 06
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">E-Mail:</span> info@ws-boardinghouse.de
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Inhaber:</span> Ahmet Dedeoglu
                </p>
              </div>

              <p className="text-sm text-gray-500 mb-8">
                Quelle: Erstellt mit dem Impressum Generator von AdSimple in Kooperation mit justmed.de
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">EU-Streitschlichtung</h2>
              <p className="mb-4 text-gray-700">
                Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir
                Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
              </p>
              <p className="mb-4 text-gray-700">
                Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen
                Kommission unter{" "}
                <a
                  href="http://ec.europa.eu/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-[#e91e7d]"
                >
                  http://ec.europa.eu/odr
                </a>{" "}
                zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
              </p>
              <p className="mb-8 text-gray-700">
                Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Haftung für Inhalte dieser Website</h2>
              <p className="mb-4 text-gray-700">
                Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle
                Informationen bereitzustellen. Laut Telemediengesetz (TMG) §7 (1) sind wir als Diensteanbieter für
                eigene Informationen, die wir zur Nutzung bereitstellen, nach den allgemeinen Gesetzen verantwortlich.
                Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen,
                speziell für jene die seitens Dritter bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis
                10 sind wir nicht verpflichtet, die von ihnen übermittelten oder gespeicherten Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-4 text-gray-700">
                Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen
                nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im
                Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt.
              </p>
              <p className="mb-8 text-gray-700">
                Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu
                kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im
                Impressum.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Haftung für Links auf dieser Website</h2>
              <p className="mb-4 text-gray-700">
                Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind.
                Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten
                hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort
                entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
              </p>
              <p className="mb-8 text-gray-700">
                Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie
                finden die Kontaktdaten im Impressum.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Urheberrechtshinweis</h2>
              <p className="mb-4 text-gray-700">
                Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht der
                Bundesrepublik Deutschland. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten,
                vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls
                notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
              </p>
              <p className="mb-8 text-gray-700">
                Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu
                kontaktieren.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Bildernachweis</h2>
              <p className="text-gray-700">
                Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
