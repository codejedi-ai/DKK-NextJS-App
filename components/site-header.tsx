"use client"

import { Button } from "@/components/ui/button"
import { Clock, Home, Zap } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-emerald-800/50 bg-emerald-900/30 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-cyan-400" />
          <span className="text-xl font-bold text-emerald-100">Mathematical Clock</span>
        </Link>

        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild className="text-emerald-300 hover:text-emerald-100 hover:bg-emerald-800">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" asChild className="text-emerald-300 hover:text-emerald-100 hover:bg-emerald-800">
            <Link href="/clock">
              <Clock className="mr-2 h-4 w-4" />
              Hands Calculator
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
