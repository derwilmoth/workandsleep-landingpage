"use client"

import { useEffect } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AGBPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>

            <div className="prose prose-neutral max-w-none text-gray-800">
              <p className="text-lg font-semibold mb-6 text-gray-900">
                Allgemeine Geschäftsbedingungen Work & Sleep BOARDINGHOUSE Mannheim
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§1 Geltungsbereich</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Diese Allgemeinen Geschäftsbedingungen (AGBs) gelten für alle Verträge über die mietweise Überlassung
                  von BOARDINGHOUSE-Zimmern zur Beherbergung, die zwischen Work & Sleep Boardinghouse Mannheim,
                  vertreten durch den Geschäftsführer Ahmed Suat Dedeoglu (im folgenden „Work & Sleep" genannt) mit
                  Dritten (im folgenden „Gast" genannt) abgeschlossen werden. Diese AGB´s geltend auch für alle
                  Weiteren, für den Gast von Work & Sleep erbrachten Lieferungen und Leistungen des BOARDINGHOUSES
                  Mannheim (Gastaufnahmevertrag)
                </li>
                <li>
                  Diese AGB´s geltend ausschließlich. Von diesen AGB`s abweichende Geschäftsbedingungen des Gastes oder
                  Dritten finden nur dann Anwendung, wenn diese vorher ausdrücklich schriftlich vereinbart wurden.
                </li>
                <li>
                  Der Zustand und die Ausstattung des Apartments gemäß Beschreibung des BOARDINGHOUSES sind Bestandteil
                  des Mietvertrages, die der Kunde als vertragsgemäß anerkennt.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§2 Reservierungen / Vertragsabschluss</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Der Gast bietet mit Vornahme der Reservierung den Abschluss eines Gastaufnahmevertrages an. Bei
                  entsprechender Verfügbarkeit des reservierten Zimmers erhält der Gast von Work & Sleep eine
                  Reservierungsbestätigung. Erst mit der Bestätigung durch Work & Sleep kommt ein Gastaufnahmevertrag
                  zwischen Work & Sleep und dem Gast zustande.
                </li>
                <li>
                  Die Angebote von Work & Sleep im Hinblick auf die Verfügbarkeit der Zimmer sind freibleibend und
                  unverbindlich. Work & Sleep kann nach freiem Ermessen den Abschluss eines Gastaufnahmevertrages
                  ablehnen.
                </li>
                <li>
                  Es besteht für den Gast kein Anspruch auf Inanspruchnahme der Übernachtungsdienstleistungen in einem
                  bestimmten Zimmer. Work & Sleep behält sich das Recht vor, branchenübliche Restriktionen wie
                  Mindestaufenthalte, Buchungsgarantien oder Anzahlungen für bestimmte Daten zu bestimmen.
                </li>
                <li>
                  Vertragspartner sind das BOARDINGHOUSE Work & Sleep und der Gast. Hat ein Dritter für einen Gast
                  bestellt, haftet er Work & Sleep gegenüber zusammen mit dem Gast als Gesamtschuldner für alle
                  Verpflichtungen aus dem Gastaufnahmevertrag. Der Gast erkennt mit der Entgegennahme der Leistung seine
                  Verpflichtung gegenüber Work & Sleep an.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§3 Übernachtungspreise</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Es gelten die zum Zeitpunkt des Vertragsschlusses jeweils von Work & Sleep ausgewiesenen Preise. Diese
                  sind Bruttogesamtpreise und schließen die jeweils gesetzliche Mehrwertsteuer, Gebühren und Abgaben mit
                  ein. Nicht enthalten sind eventuelle lokale Abgaben, die nach dem jeweiligen Kommunalrecht durch den
                  Gast selbst geschuldet sind, u.a. Kurtaxe etc..
                </li>
                <li>
                  Sollten sich Änderung oder wirksame Erhebung neuer, den Parteien bisher unbekannter Steuern, Gebühren
                  und Abgaben ergeben, behält sich Work & Sleep vor, die Preise entsprechend anzupassen. Bei Verträgen
                  mit Verbrauchern wird die Erhöhung erst weitergegeben, wenn der Zeitraum zwischen Vertragsschluss
                  (Buchungsbestätigung und Vertragsanpassung) 4 Monate überschreitet.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§4 Zahlungsbedingungen</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Der Preis der gesamten gebuchten Übernachtungsleistung ist durch den Gast ausnahmslos, spätestens bei
                  Anreise im BOARDINGHOUSE im Voraus zu bezahlen. Sollte der Gast Verlängerungen buchen, sind auch diese
                  für die weitere Zeit im Voraus zu leisten. Dies gilt auch für eventuelle zusätzliche Leistungen, die
                  der Gast in Anspruch nimmt. Diese sind unmittelbar im Voraus zu leisten.
                </li>
                <li>
                  Eine Aufrechnung des Gastes ist mit Ausnahme von unbestritten oder rechtskräftig festgestellten
                  Forderungen ausgeschlossen.
                </li>
                <li>
                  Als Zahlungsmittel werden ausschließlich Bargeld in EURO, EC-Karte, Mastercard, Visacard akzeptiert.
                </li>
                <li>
                  Work & Sleep ist berechtigt, bei Vertragsabschluss oder danach eine angemessene Sicherheitsleistung zu
                  verlangen.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§5 Stornofristen – Rücktritt</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Die durch Work & Sleep garantierte Reservierung liegt vor, wenn der Gast die Zahlung der
                  Übernachtungsdienstleistungen/EN vollumfänglich geleistet hat. Eine Garantie der Reservierung kann
                  nicht kostenfrei storniert werden. Work & Sleep behält den Anspruch auf die vereinbarte Vergütung in
                  voller Höhe. Gleiches gilt bei Nichterscheinen des Gastes (No Show). Liegen mehrtätige garantierte
                  Reservierungen vor, werden bei Nichtanreise alle Folgenächte inklusive der zweiten Nacht storniert.
                  Dem Gast steht kein Anspruch auf die Folgenächte zu.
                </li>
                <li>
                  Einfache, nicht garantierte Reservierungen, d.h Reservierungen die mangels Zahlung durch den Gast noch
                  nicht garantiert sind, geltend jeweils eine Stunde. Nach einer Stunde verfällt die Reservierung
                  automatisch und kostenfrei, so dass Work & Sleep berechtigt ist, das einfach reservierte Zimmer
                  anderweitig zu vermieten.
                </li>
                <li>
                  Bei einer vorzeitigen Abreise besteht ebenfalls kein Anspruch auf kostenfreie Stornierung. Work &
                  Sleep behält den Anspruch auf die vereinbarte Vergütung in voller Höhe. Dies gilt insbesondere für den
                  Fall, wenn es Work & Sleep nachweislich nicht gelingt, dass gebuchte Zimmer weiter zu vermieten.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§6 Bereitstellung reservierter Zimmer</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Die reservierten Zimmer stehen dem Gast jederzeit im 24-Stundenservice des Anreisetages und bis 12:00
                  Uhr am Abreisetag zur Verfügung. Für Abreisen, die nach 12:00 Uhr erfolgen, ist der volle Tagespreis
                  des Zimmers zu leisten.
                </li>
                <li>
                  Zur Verlängerung des Aufenthaltszeitraumes ist eine neue Reservierung durchzuführen. Eine
                  stillschweigende Verlängerung der Reservierung ist ausgeschlossen.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                §7 Rücktritt / Kündigung seitens Work & Sleep
              </h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Work & Sleep ist berechtigt, den Gastaufnahmevertrag bei Vorliegen eines wichtigen Grundes -auch
                  fristlos- zu kündigen. Ein wichtiger Grund liegt insbesondere dann vor, wenn:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      höhere Gewalt oder andere von Work & Sleep nicht zu vertretene Umstände die Erfüllung des
                      Vertrages unmöglich machen;
                    </li>
                    <li>
                      der Gastaufnahmevertrag unter irreführenden oder falschen Angaben bzw. Verschweigen wesentlicher
                      Tatsachen gebucht wurde;
                    </li>
                    <li>der Zweck bzw. der Anlass des Aufenthalts gesetzeswidrig ist;</li>
                    <li>
                      die Vorauszahlung des Gastes aus Gründen, die Work & Sleep nicht zu vertreten hat, storniert
                      wurden oder aus sonstigen Gründen nicht zur Zahlung gelangten;
                    </li>
                    <li>
                      wenn Work & Sleep Gründe zu der Annahme hat, dass die Inanspruchnahme der Leistung den
                      reibungslosen Geschäftsbetrieb, die Sicherheit oder das Ansehen von Work & Sleep bzw. der Gäste,
                      Mitarbeiter oder Dritten in der Öffentlichkeit gefährden kann;
                    </li>
                    <li>wenn ein Verstoß gegen die Allgemeinen Geschäftsbedingungen vorliegt.</li>
                  </ul>
                </li>
                <li>Die Kündigung bedarf der Schriftform.</li>
              </ol>
              <p className="mb-6 text-gray-700">
                Dies gilt ebenfalls bei einem Verstoß gegen die Nutzung des BOARDINGHOUSES zu einem anderen als dem
                Beherbergungszweck. Bei berechtigtem Rücktritt von Work & Sleep entsteht dem Kunden kein Anspruch auf
                Schadensersatz. Bei Schadensersatzansprüchen von Work & Sleep gelten die gesetzlichen Bestimmungen.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                §8 Haftung von Work & Sleep / Diebstahl durch den Gast
              </h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Work & Sleep haftet mit der Sorgfalt eines ordentlichen Kaufmannes. Die Haftung erstreckt sich im
                  nicht leistungstypischen Bereich lediglich auf vorsätzliche oder grob fahrlässige Pflichtverletzungen.
                </li>
                <li>
                  Sollten an den Leistungen von Work & Sleep Störungen oder Mängel auftreten, wird Work & Sleep bei
                  entsprechender Kenntnis oder auf unverzügliche Rüge des Gastes hin bemüht sein, unmittelbar für
                  Abhilfe zu sorgen.
                </li>
                <li>
                  Work & Sleep übernimmt für eingebrachte Sachen, seien es Geld, Wertpapiere und/oder Kostbarkeiten bzw.
                  Wertgegenstände grundsätzlich keinerlei Haftung.
                </li>
                <li>
                  Wird dem Gast ein Stellplatz im Bereich des BOARDINGHOUSE-Parkplatzes, auch gegen Entgelt, zur
                  Verfügung gestellt, so kommt dadurch kein Verwahrungsvertrag zustande.
                </li>
                <li>
                  Eventuelle Fundsachen werden nur auf Anfrage und nach vorheriger Kostenerstattung nachgesandt. Im
                  Übrigen werden Fundsachen nicht länger als 6 Monate aufbewahrt.
                </li>
                <li>
                  Alle Ansprüche gegenüber Work & Sleep verjähren grundsätzlich innerhalb eines Jahres ab dem
                  gesetzlichen Verjährungsbeginn.
                </li>
                <li>
                  Eingang von Nachrichten, Post- und Warensendungen für die Gäste werden mit der Sorgfalt eines
                  ordentlichen Kaufmannes behandelt.
                </li>
                <li>
                  Sollte sich herausstellen, dass ein Gast einen Diebstahl, auch an geringwertigen Sachen, am Eigentum
                  von Work & Sleep begeht, erfolgt ausnahmslos und unmittelbar Strafanzeige. Für jedes Vergehen hat der
                  Gast darüber hinaus eine Vertragsstrafe von EUR 200,00 zu leisten.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§9 Beendigung des Gastaufnahmevertrages</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Am vertraglich vereinbarten Abreisetag ist das Zimmer an Work & Sleep spätestens um 12.00 Uhr geräumt
                  zur Verfügung zu stellen. Danach kann Work & Sleep über den ihm dadurch entstandenen Schaden hinaus
                  für die zusätzliche Nutzung des Appartements den vollen Listenpreis in Rechnung stellen.
                </li>
                <li>
                  Der Gast ist verpflichtet, mit einem Beauftragten von Work & Sleep eine Zimmerabnahme und Übergabe am
                  Tag der Abreise durchzuführen.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§10 Mitgebrachte Speisen und Getränke</h2>
              <p className="mb-6 text-gray-700">
                In den öffentlichen Bereichen ist das Verzehren von mitgebrachten Speisen und Getränke untersagt. Snacks
                dürfen nur in den dafür vorgesehenen Räumlichkeiten des öffentlichen Bereichs (Lounge) eingenommen
                werden. Auf den Zimmern ist die Zubereitung von Speisen untersagt.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§11 Nichtrauchen im BOARDINGHOUSE</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Work & Sleep ist grundsätzlich ein ausschließliches Nichtraucher-BOARDINGHOUSE. Es ist daher
                  untersagt, in den Räumlichkeiten unseres BOARDINGHOUSES, sowohl in den öffentlichen Bereichen als auch
                  in den Gästezimmern, zu rauchen. Für den Fall einer Zuwiderhandlung hat Work & Sleep das Recht, vom
                  Gast als Schadensersatz einen Betrag in Höhe von EUR 150,00 zu verlangen.
                </li>
                <li>
                  Bei widerrechtlicher Handlung oder Manipulation wie das Auslösen von Rauchmeldern, dem
                  Haus-Feueralarm, der Brandmeldeanlage oder weiterer Einrichtungen sowie missbräuchlicher Alarmierung
                  der Feuerwehr behält sich Work & Sleep vor, Schadensersatz zu verlangen.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§12 Haustiere</h2>
              <p className="mb-4 text-gray-700">
                Das Mitbringen eines Haustieres bedarf der ausdrücklichen Zustimmung von Work & Sleep. Wünscht der Gast
                ein Haustier mitzubringen, ist dies vorab bekannt zu geben, insbesondere ist die Art, Gattung und Größe
                des Haustieres genau anzugeben.
              </p>
              <p className="mb-6 text-gray-700">
                Blinden-, Gehörlosen- sowie andere vergleichbare Servicehunde dürfen zu jederzeit mitgeführt werden.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                §13 Internet und sonstige technische Einrichtungen
              </h2>
              <p className="mb-6 text-gray-700">
                Der Gast ist bei Nutzung des Internetprotals sowie aller sonstiger technischer Einrichtungen von Work &
                Sleep selbst verantwortlich. Bei einem schuldhaften Rechtsverstoß hat er Work & Sleep von jeglicher
                Inanspruchnahme durch Dritte freizustellen.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                §14 Gruppenbuchungen/Kontingentverträge/Eventzeiten
              </h2>
              <p className="mb-6 text-gray-700">
                Bei Gruppenbuchungen von mehr als zehn Zimmern und Kontingentverträgen gelten gesonderte Zahlungs- und
                Stornobedingungen, welche sich aus den entsprechenden Verträgen von Work & Sleep ergeben.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§15 Datenschutz</h2>
              <p className="mb-6 text-gray-700">
                Die Datenschutzbestimmungen sind einsehbar unter:{" "}
                <Link href="/datenschutz" className="text-primary hover:text-[#e91e7d]">
                  https://ws-boardinghouse.de/datenschutz
                </Link>
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">§16 Schlußbestimmungen</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                <li>
                  Änderungen und / oder Ergänzungen des Gastaufnahmevertrages oder dieser Allgemeinen
                  Geschäftsbedingungen bedürfen der Schriftform und können nur einvernehmlich getroffen werden. Auch ein
                  eventueller Verzicht auf die Schriftform bedarf ebenfalls der Schriftform und ist von beiden Parteien
                  zu unterzeichnen. Einseitige Änderungen oder Ergänzungen durch den Gast sind von vorn herein
                  unwirksam.
                </li>
                <li>
                  Ausschließlicher Gerichtsstand für sämtliche sich zwischen den Parteien aus dem Vertragsverhältnis
                  ergebenden Streitigkeiten ist, soweit der Gast Kaufmann, juristische Person des öffentlichen Rechts
                  oder öffentlich-rechtliches Vermögen ist, Mannheim.
                </li>
                <li>Es gilt ausschließlich deutsches Recht; die Anwendung des UN-Kaufrechts ist ausgeschlossen.</li>
              </ol>

              <p className="mt-8 text-gray-500">
                Work & Sleep Boardinghouse Mannheim / Dannstadter Str. 6-8 / D-68199 Mannheim / info@ws-boardinghouse.de
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
