"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Sparkles, Target, Users, Mail } from "lucide-react"

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/match", label: "Find Matches", icon: Sparkles },
    { href: "/philosophy", label: "Philosophy", icon: Target },
    { href: "/synergy", label: "Vibe & Identity", icon: Sparkles },
    { href: "/mission", label: "Our Mission", icon: Users },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <div className="flex h-screen bg-[#0a0a1a]">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-16"
        } transition-all duration-300 bg-[#0a0a1a]/90 backdrop-blur-sm border-r border-cyan-500/30 flex flex-col`}
      >
        {/* Sidebar Header with Navbar Logo */}
        <div className="p-4 border-b border-cyan-500/30">
          <div className="flex items-center justify-between">
            {isOpen && (
              <Link href="/dashboard" className="flex items-center gap-2">
                <Image
                  src="/Aurajay - NoBG.png"
                  alt="Duo Keyboard Koalition Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-lg font-bold text-cyan-300 italic">
                  DUO KEYBOARD
                </span>
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-300 hover:text-cyan-200 transition-colors ml-auto"
              aria-label="Toggle sidebar"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  active
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                    : "text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isOpen && <span className="font-medium">{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

