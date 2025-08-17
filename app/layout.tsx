import type React from "react"
import "@/app/globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AuthProvider } from "@/context/AuthContext"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kintrace - Preserve Your Family's Cultural Legacy",
  description: "A social network for families focused on preserving cultural legacies through AI-assisted storytelling",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} dark`}>
      <body className="bg-black text-white">
        <AuthProvider>
          <div className="min-h-screen flex flex-col bg-black">
            <Header />
            <main className="flex-1">
              {children}
              <SpeedInsights />
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
