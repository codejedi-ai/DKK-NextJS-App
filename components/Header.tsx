"use client"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"
import { Heart, Menu, X, User, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

function Header() {
  const { user, signOut } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  const userAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const userName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email

  const handleSignOut = async () => {
    await signOut()
    setIsProfileMenuOpen(false)
  }

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/stories", label: "Stories" },
    { href: "/families", label: "Families" },
    { href: "/cultures", label: "Cultures" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">Kintrace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  {userAvatar ? (
                    <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/20">
                      <Image
                        src={userAvatar || "/placeholder.svg"}
                        alt={userName || "User avatar"}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-black font-semibold">
                      {userName?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                  <span className="text-gray-300 font-medium max-w-32 truncate">
                    {userName?.split(" ")[0] || "User"}
                  </span>
                </button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl py-2">
                    <div className="px-4 py-3 border-b border-gray-800">
                      <p className="text-white font-medium truncate">{userName}</p>
                      <p className="text-gray-400 text-sm truncate">{user.email}</p>
                    </div>

                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>

                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>

                    <div className="border-t border-gray-800 mt-2 pt-2">
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-gray-800/50 transition-colors w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/auth" className="text-gray-300 hover:text-white font-medium transition-colors">
                  Sign In
                </Link>
                <Link href="/auth">
                  <Button className="bg-primary hover:bg-primary/90 text-black font-semibold px-6">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50 bg-black/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-300 hover:text-primary hover:bg-gray-800/30 transition-colors font-medium rounded-lg mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-gray-800/50 mt-4 pt-4 mx-2">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 px-4 py-2">
                      {userAvatar ? (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                          <Image
                            src={userAvatar || "/placeholder.svg"}
                            alt={userName || "User avatar"}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-black font-semibold">
                          {userName?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                      )}
                      <div>
                        <p className="text-white font-medium">{userName?.split(" ")[0]}</p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                    </div>

                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-primary hover:bg-gray-800/30 transition-colors rounded-lg mx-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>

                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-primary hover:bg-gray-800/30 transition-colors rounded-lg mx-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>

                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-gray-800/30 transition-colors rounded-lg mx-2 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2 px-2">
                    <Link
                      href="/auth"
                      className="block px-4 py-3 text-gray-300 hover:text-primary hover:bg-gray-800/30 transition-colors font-medium rounded-lg text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth"
                      className="block px-4 py-3 bg-primary hover:bg-primary/90 text-black font-semibold rounded-lg text-center transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Start Free Trial
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {(isProfileMenuOpen || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsProfileMenuOpen(false)
            setIsMobileMenuOpen(false)
          }}
        />
      )}
    </header>
  )
}

export default Header
