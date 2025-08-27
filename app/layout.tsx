import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-heading",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Divyani Gour - UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Divyani Gour, a passionate UI/UX Designer and Frontend Developer studying Computer Science Engineering at MIT ADT University, Pune.",
  keywords:
    "UI/UX Designer, Frontend Developer, Computer Science, MIT ADT University, Pune, Portfolio, React, JavaScript, Python, Java",
  authors: [{ name: "Divyani Gour" }],
  creator: "Divyani Gour",
  openGraph: {
    title: "Divyani Gour - UI/UX Designer & Frontend Developer",
    description: "Portfolio showcasing UI/UX design and frontend development projects",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
