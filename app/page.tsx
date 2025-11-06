"use client"
import { useState, useEffect, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Shield, Loader2 } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"
import Loading from "@/components/Loading"
import { signInWithDiscord, signInWithEmail, signUp } from "@/app/actions/auth"

export default function HomePage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const { user, loading } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!loading && user) {
      // Immediately redirect to dashboard if user is already logged in
      router.replace("/dashboard")
    }
  }, [user, loading, router])

  useEffect(() => {
    const errorParam = searchParams.get("error")
    const messageParam = searchParams.get("message")
    if (errorParam) {
      setError(decodeURIComponent(errorParam))
    }
    if (messageParam) {
      setMessage(decodeURIComponent(messageParam))
    }
  }, [searchParams])

  // Show loading while checking auth or redirecting
  if (loading || user) {
    return <Loading />
  }

  const handleEmailAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setMessage(null)

    const windowLocationHref = typeof window !== "undefined" ? window.location.href : undefined

    startTransition(async () => {
      if (isSignUp) {
        await signUp(email, password, windowLocationHref)
      } else {
        await signInWithEmail(email, password, windowLocationHref)
      }
    })
  }

  const handleDiscordAuth = () => {
    setError(null)
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"
    const windowLocationHref = typeof window !== "undefined" ? window.location.href : undefined
    startTransition(async () => {
      await signInWithDiscord(baseUrl, windowLocationHref)
    })
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/Aurajay - NoBG.png"
              alt="Duo Keyboard Koalition Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h1 className="text-3xl font-bold text-white italic">
              DUO KEYBOARD KOALITION
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
            {isSignUp ? "Join the Koalition" : "Welcome Back"}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {isSignUp
              ? "Create your account to access the community"
              : "Sign in to continue to your dashboard"}
          </p>
        </div>

        {/* Auth Form Container */}
        <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
          {/* Toggle Buttons */}
          <div className="flex bg-[#0a0a1a]/50 rounded-xl p-1.5 mb-8 border border-cyan-500/20">
            <Button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 ${
                !isSignUp
                  ? "bg-cyan-500 text-black font-bold"
                  : "bg-transparent border border-cyan-500/30 text-gray-400 hover:text-cyan-300 hover:bg-cyan-900/20"
              }`}
            >
              Sign In
            </Button>
            <Button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 ${
                isSignUp
                  ? "bg-cyan-500 text-black font-bold"
                  : "bg-transparent border border-cyan-500/30 text-gray-400 hover:text-magenta-300 hover:bg-magenta-900/20"
              }`}
            >
              Sign Up
            </Button>
          </div>

          {/* Error/Message Display */}
          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}
          {message && (
            <div className="mb-4 p-3 bg-green-900/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
              {message}
            </div>
          )}

          {/* Email/Password Form */}
          <form onSubmit={handleEmailAuth} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-cyan-400 text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#0a0a1a] border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="you@example.com"
                disabled={isPending}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-cyan-400 text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#0a0a1a] border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="••••••••"
                disabled={isPending}
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {isSignUp ? "Creating Account..." : "Signing In..."}
                </>
              ) : (
                isSignUp ? "Sign Up" : "Sign In"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cyan-500/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0a0a1a]/80 text-cyan-400">Or continue with</span>
            </div>
          </div>

          {/* Discord OAuth Button */}
          <Button
            type="button"
            onClick={handleDiscordAuth}
            disabled={isPending}
            className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33a1.125 1.125 0 0 1-1.062-1.173 1.125 1.125 0 1 1 2.124.008 1.119 1.119 0 0 1-1.062 1.165zm7.975 0a1.125 1.125 0 0 1-1.06-1.173 1.125 1.125 0 1 1 2.124.008 1.119 1.119 0 0 1-1.062 1.165z"/>
                </svg>
                Continue with Discord
              </>
            )}
          </Button>

          {/* Trust Indicators */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-cyan-400/70">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-cyan-400" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
