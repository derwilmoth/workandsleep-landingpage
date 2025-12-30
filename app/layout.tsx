import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfairDisplay = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Work & Sleep Boardinghouse Mannheim | Günstige Übernachtung",
  description:
    "Komfortables Boardinghouse in Mannheim. Faire Festpreise ab 49€/Nacht. Kostenloses WLAN, Parkplätze & beste Anbindung. Perfekt für Geschäftsreisende.",
  keywords: "Hotel Mannheim, Boardinghouse, günstige Übernachtung, Geschäftsreise, Work and Sleep",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Work & Sleep Boardinghouse Mannheim",
    description: "Komfortables Boardinghouse in Mannheim. Faire Festpreise ab 49€/Nacht.",
    type: "website",
    locale: "de_DE",
  },
}

export const viewport: Viewport = {
  themeColor: "#8B1A4A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
