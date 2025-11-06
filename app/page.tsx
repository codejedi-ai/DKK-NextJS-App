"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { createClient } from "@/utils/supabase/client"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { Shield } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"
import Loading from "@/components/Loading"

const supabase = createClient()

export default function HomePage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      // Immediately redirect to dashboard if user is already logged in
      router.replace("/dashboard")
    }
  }, [user, loading, router])

  // Show loading while checking auth or redirecting
  if (loading || user) {
    return <Loading />
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

          {/* Supabase Auth Component */}
          <div className="auth-container">
            <Auth
              supabaseClient={supabase}
              view={isSignUp ? "sign_up" : "sign_in"}
              appearance={{
                theme: ThemeSupa,
                style: {
                  button: {
                    background: "#00FFFF",
                    color: "#000000",
                    borderRadius: "8px",
                    border: "none",
                    padding: "12px 16px",
                    fontSize: "14px",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                  },
                  anchor: {
                    color: "#00FFFF",
                    textDecoration: "none",
                    fontSize: "14px",
                  },
                  input: {
                    background: "#0a0a1a",
                    border: "1px solid #00FFFF",
                    borderRadius: "8px",
                    color: "#ffffff",
                    padding: "12px 16px",
                    fontSize: "14px",
                  },
                  label: {
                    color: "#00FFFF",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginBottom: "6px",
                  },
                  message: {
                    color: "#FF00FF",
                    fontSize: "13px",
                    padding: "8px 0",
                  },
                  container: {
                    gap: "16px",
                  },
                  divider: {
                    background: "linear-gradient(90deg, transparent, #00FFFF, transparent)",
                    margin: "24px 0",
                    height: "1px",
                  },
                },
                variables: {
                  default: {
                    colors: {
                      brand: "#00FFFF",
                      brandAccent: "#FF00FF",
                    },
                  },
                },
              }}
              providers={["discord"]}
              redirectTo="http://localhost:3000/auth/callback?next=/dashboard"
              onlyThirdPartyProviders={false}
              magicLink={false}
              showLinks={false}
            />
          </div>

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
