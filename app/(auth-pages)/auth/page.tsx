"use client"
import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { Heart, Users, Globe, BookOpen, ArrowLeft, Shield, Sparkles } from "lucide-react"
import Link from "next/link"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
)

function AuthBox({ isSignUp, setIsSignUp }: { isSignUp: boolean; setIsSignUp: (value: boolean) => void }) {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-primary/20 rounded-full">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-white">Kintrace</h1>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-3">
          {isSignUp ? "Start Your Family Legacy" : "Welcome Back"}
        </h2>
        <p className="text-gray-400 leading-relaxed">
          {isSignUp
            ? "Join families worldwide in preserving their cultural heritage"
            : "Continue your journey of preserving family stories"}
        </p>
      </div>

      {/* Auth Form Container */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
        {/* Toggle Buttons */}
        <div className="flex bg-gray-800/50 rounded-xl p-1.5 mb-8">
          <button
            onClick={() => setIsSignUp(false)}
            className={`flex-1 py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-200 ${
              !isSignUp ? "bg-primary text-black shadow-lg" : "text-gray-400 hover:text-white hover:bg-gray-700/50"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`flex-1 py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-200 ${
              isSignUp ? "bg-primary text-black shadow-lg" : "text-gray-400 hover:text-white hover:bg-gray-700/50"
            }`}
          >
            Sign Up
          </button>
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
                  background: "#FFA500",
                  color: "#000000",
                  borderRadius: "8px",
                  border: "none",
                  padding: "12px 16px",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                },
                anchor: {
                  color: "#FFA500",
                  textDecoration: "none",
                  fontSize: "14px",
                },
                input: {
                  background: "#1f2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#ffffff",
                  padding: "12px 16px",
                  fontSize: "14px",
                },
                label: {
                  color: "#d1d5db",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "6px",
                },
                message: {
                  color: "#ef4444",
                  fontSize: "13px",
                  padding: "8px 0",
                },
                container: {
                  gap: "16px",
                },
                divider: {
                  background: "#374151",
                  margin: "24px 0",
                },
              },
              variables: {
                default: {
                  colors: {
                    brand: "#FFA500",
                    brandAccent: "#e6940a",
                  },
                },
              },
            }}
            providers={["google", "discord"]}
            redirectTo={typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : ""}
            onlyThirdPartyProviders={false}
            magicLink={true}
            showLinks={false}
          />
        </div>

        {/* Pricing Info for Sign Up */}
        {isSignUp && (
          <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">Special Launch Offer</span>
            </div>
            <p className="text-center text-sm text-gray-300">
              <span className="font-semibold text-white">30 days free</span> • Then $99/year • Cancel anytime
            </p>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>Secure & Private</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>10,000+ Families</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureShowcase() {
  const features = [
    {
      icon: Users,
      title: "Connect Generations",
      description: "Bridge the gap between grandparents and grandchildren through shared stories and memories.",
      color: "text-blue-400",
    },
    {
      icon: Globe,
      title: "Preserve Culture",
      description: "Keep traditions, recipes, and customs alive for future generations across the globe.",
      color: "text-green-400",
    },
    {
      icon: BookOpen,
      title: "AI-Assisted Stories",
      description: "Let AI help you craft beautiful narratives from family memories and conversations.",
      color: "text-purple-400",
    },
  ]

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Why Families Choose Kintrace</h3>
        <p className="text-gray-400 leading-relaxed">
          Join a growing community of families preserving their heritage through technology
        </p>
      </div>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-8 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-1">10K+</div>
            <div className="text-xs text-gray-400">Families</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-xs text-gray-400">Cultures</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-1">100K+</div>
            <div className="text-xs text-gray-400">Stories</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 auth-bg-pattern"></div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <Link href="/" className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <Heart className="w-6 h-6" />
          <span className="text-xl font-bold">Back to Kintrace</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Features Side */}
            <div className="order-2 lg:order-1">
              <FeatureShowcase />
            </div>

            {/* Auth Side */}
            <div className="order-1 lg:order-2">
              <AuthBox isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 p-6 text-center border-t border-gray-800/50">
        <p className="text-gray-500 text-sm">
          By {isSignUp ? "signing up" : "signing in"}, you agree to our{" "}
          <Link href="/terms" className="text-primary hover:underline transition-colors">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:underline transition-colors">
            Privacy Policy
          </Link>
        </p>
        <p className="text-gray-600 text-xs mt-2">Supported by University of Waterloo</p>
      </div>
    </div>
  )
}
