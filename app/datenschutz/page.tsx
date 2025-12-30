"use client"

import { useEffect } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DatenschutzPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

            <div className="prose prose-neutral max-w-none text-gray-800">
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Datenschutz</h2>
              <p className="mb-4 text-gray-700">
                Wir haben diese Datenschutzerklärung (Fassung 17.02.2020-321153890) verfasst, um Ihnen gemäß der
                Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 zu erklären, welche Informationen wir sammeln,
                wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.
              </p>
              <p className="mb-8 text-gray-700">
                Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei
                der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Cookies</h2>
              <p className="mb-4 text-gray-700">
                Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu speichern. Im Folgenden erklären
                wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser
                verstehen.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Was genau sind Cookies?</h3>
              <p className="mb-4 text-gray-700">
                Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind
                beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Webseiten
                speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
              </p>
              <p className="mb-4 text-gray-700">
                Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten
                verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere
                Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer
                gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem "Hirn" Ihres
                Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines
                Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.
              </p>
              <p className="mb-4 text-gray-700">
                Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche
                Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen"
                Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet
                Ihnen Ihre gewohnte Standardeinstellung. In einigen Browsern hat jedes Cookie eine eigene Datei, in
                anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.
              </p>
              <p className="mb-8 text-gray-700">
                Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt
                von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics)
                erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die
                Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine
                Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge". Cookies können auch
                nicht auf Informationen Ihres PCs zugreifen.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Welche Arten von Cookies gibt es?</h3>
              <p className="mb-4 text-gray-700">
                Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in
                der folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die
                verschiedenen Arten von HTTP-Cookies eingehen.
              </p>
              <p className="mb-2 text-gray-700">Man kann 4 Arten von Cookies unterscheiden:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  <strong className="text-gray-900">Unbedingt notwendige Cookies:</strong> Diese Cookies sind nötig, um
                  grundlegende Funktionen der Website sicherzustellen.
                </li>
                <li>
                  <strong className="text-gray-900">Funktionelle Cookies:</strong> Diese Cookies sammeln Infos über das
                  Userverhalten und ob der User etwaige Fehlermeldungen bekommt.
                </li>
                <li>
                  <strong className="text-gray-900">Zielorientierte Cookies:</strong> Diese Cookies sorgen für eine
                  bessere Nutzerfreundlichkeit.
                </li>
                <li>
                  <strong className="text-gray-900">Werbe-Cookies:</strong> Diese Cookies werden auch Targeting-Cookies
                  genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern.
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Wie kann ich Cookies löschen?</h3>
              <p className="mb-4 text-gray-700">
                Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder
                welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, nur teilweise
                zuzulassen oder zu deaktivieren.
              </p>
              <p className="mb-8 text-gray-700">
                Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie
                immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie
                entscheiden, ob Sie das Cookie erlauben oder nicht.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Speicherung persönlicher Daten</h2>
              <p className="mb-4 text-gray-700">
                Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name,
                E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder
                Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils
                angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.
              </p>
              <p className="mb-4 text-gray-700">
                Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt
                ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und
                Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht
                ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
              </p>
              <p className="mb-8 text-gray-700">
                Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite – können wir keine
                sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten
                niemals unverschlüsselt per E-Mail zu übermitteln.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Rechte laut Datenschutzgrundverordnung</h2>
              <p className="mb-4 text-gray-700">
                Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
                <li>Recht auf Löschung („Recht auf Vergessenwerden") (Artikel 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
                <li>
                  Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung
                  personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)
                </li>
                <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
                <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
                <li>
                  Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling —
                  beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)
                </li>
              </ul>
              <p className="mb-8 text-gray-700">
                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
                datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die
                Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI) wenden.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">TLS-Verschlüsselung mit https</h2>
              <p className="mb-8 text-gray-700">
                Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung
                Artikel 25 Absatz 1 DSGVO). Durch den Einsatz von TLS (Transport Layer Security), einem
                Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher
                Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen
                Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer
                Internetadresse.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Google Maps Datenschutzerklärung</h2>
              <p className="mb-4 text-gray-700">
                Wir benützen auf unserer Website Google Maps der Firma Google Inc. (1600 Amphitheatre Parkway Mountain
                View, CA 94043, USA). Mit Google Maps können wir Standorte visuell besser darstellen und damit unser
                Service verbessern. Durch die Verwendung von Google Maps werden Daten an Google übertragen und auf den
                Google-Servern gespeichert.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Was ist Google Maps?</h3>
              <p className="mb-4 text-gray-700">
                Google Maps ist ein Online-Kartendienst der Firma Google Inc. Mit Google Maps können Sie im Internet
                über einen PC oder über eine App genaue Standorte von Städten, Sehenswürdigkeiten, Unterkünften oder
                Unternehmen suchen.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">
                Warum verwenden wir Google Maps auf unserer Website?
              </h3>
              <p className="mb-8 text-gray-700">
                All unsere Bemühungen auf dieser Seite verfolgen das Ziel, Ihnen eine nützliche und sinnvolle Zeit auf
                unserer Website zu bieten. Durch die Einbindung von Google Maps können wir Ihnen die wichtigsten
                Informationen zu diversen Standorten liefern. Dank Google Maps sehen Sie auf einen Blick wo wir unseren
                Firmensitz haben.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Google Fonts Datenschutzerklärung</h2>
              <p className="mb-4 text-gray-700">
                Wir verwenden Google Fonts der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043,
                USA) auf unserer Webseite. Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden
                bzw. ein Passwort hinterlegen. Weiters werden auch keine Cookies in Ihrem Browser gespeichert.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Was sind Google Fonts?</h3>
              <p className="mb-4 text-gray-700">
                Google Fonts (früher Google Web Fonts) ist ein interaktives Verzeichnis mit mehr als 800 Schriftarten,
                die die Google LLC zur freien Verwendung bereitstellt.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">
                Warum verwenden wir Google Fonts auf unserer Webseite?
              </h3>
              <p className="mb-8 text-gray-700">
                Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf unserem
                eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch
                zu halten.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Automatische Datenspeicherung</h2>
              <p className="mb-4 text-gray-700">
                Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und
                gespeichert, so auch auf dieser Webseite. Wenn Sie unsere Webseite so wie jetzt gerade besuchen,
                speichert unser Webserver automatisch Daten wie:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>die Adresse (URL) der aufgerufenen Webseite</li>
                <li>Browser und Browserversion</li>
                <li>das verwendete Betriebssystem</li>
                <li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
                <li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</li>
                <li>Datum und Uhrzeit</li>
              </ul>
              <p className="mb-8 text-gray-700">
                In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir
                geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von
                rechtswidrigem Verhalten eingesehen werden.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Google reCAPTCHA Datenschutzerklärung</h2>
              <p className="mb-4 text-gray-700">
                Unser oberstes Ziel ist es, dass unsere Webseite für Sie und für uns bestmöglich geschützt und sicher
                ist. Um das zu gewährleisten, verwenden wir Google reCAPTCHA der Firma Google Inc. (1600 Amphitheatre
                Parkway Mountain View, CA 94043, USA). Mit reCAPTCHA können wir feststellen, ob Sie auch wirklich ein
                Mensch aus Fleisch und Blut sind und kein Roboter oder eine andere Spam-Software.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Was ist reCAPTCHA?</h3>
              <p className="mb-4 text-gray-700">
                reCAPTCHA ist ein freier Captcha-Dienst von Google, der Webseiten vor Spam-Software und den Missbrauch
                durch nicht-menschliche Besucher schützt. Am häufigsten wird dieser Dienst verwendet, wenn Sie Formulare
                im Internet ausfüllen.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">
                Warum verwenden wir reCAPTCHA auf unserer Website?
              </h3>
              <p className="mb-8 text-gray-700">
                Wir wollen nur Menschen aus Fleisch und Blut auf unserer Seite begrüßen. Bots oder Spam-Software
                unterschiedlichster Art dürfen getrost zuhause bleiben. Darum setzen wir alle Hebel in Bewegung, uns zu
                schützen und die bestmögliche Benutzerfreundlichkeit für Sie anzubieten.
              </p>

              <p className="text-sm text-gray-500 mt-8">
                Quelle: Erstellt mit dem Datenschutz Generator von AdSimple in Kooperation mit slashtechnik.de
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
