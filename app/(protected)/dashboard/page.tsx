"use client"

import Image from "next/image"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Loading from "@/components/Loading"

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/")
    }
  }, [user, loading, router])

  if (loading) {
    return <Loading />
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/Aurajay - NoBG.png"
              alt="Duo Keyboard Koalition Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-3xl font-bold text-white italic mb-2">
                DUO KEYBOARD KOALITION
              </h1>
              <p className="text-cyan-300">Welcome to your dashboard</p>
            </div>
          </div>
          <Button
            onClick={async () => {
              await signOut()
              router.push("/")
            }}
          >
            Sign Out
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-cyan-300">Your Profile</h2>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-medium text-cyan-400">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-medium text-cyan-400">User ID:</span> {user.id}
              </p>
              {user.user_metadata?.full_name && (
                <p>
                  <span className="font-medium text-cyan-400">Name:</span> {user.user_metadata.full_name}
                </p>
              )}
            </div>
          </div>

          <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-magenta-500/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-magenta-300">Quick Links</h2>
            <ul className="space-y-3">
              <li className="text-cyan-300 hover:text-cyan-200 hover:underline cursor-pointer transition-colors">View Events</li>
              <li className="text-cyan-300 hover:text-cyan-200 hover:underline cursor-pointer transition-colors">Create Post</li>
              <li className="text-cyan-300 hover:text-cyan-200 hover:underline cursor-pointer transition-colors">Community Rules</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-[#0a0a1a]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-cyan-300">User Data (JSON)</h2>
          <div className="bg-[#0a0a1a] rounded-lg p-4 border border-cyan-500/20 overflow-auto">
            <pre className="text-sm text-gray-300 whitespace-pre-wrap break-words">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}


