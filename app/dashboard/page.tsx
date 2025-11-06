"use client"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProtectedContextProvider } from "@/context/ProtectedContext"
import { Heart, Plus, BookOpen, Users, Camera, Mic, Globe } from "lucide-react"

export default function DashboardPage() {
  return (
    <ProtectedContextProvider>
      <DashboardContent />
    </ProtectedContextProvider>
  )
}

function DashboardContent() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  const userName =
    user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split("@")[0] || "Family Member"

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">Kintrace</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Welcome, {userName}</span>
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to Your Family Legacy</h1>
          <p className="text-gray-400 text-lg">
            Start preserving your cultural heritage and connecting with family members.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Plus className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Create Story</h3>
              <p className="text-gray-400 text-sm">Start a new family story</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Mic className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Record Memory</h3>
              <p className="text-gray-400 text-sm">Capture voice memories</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Upload Photos</h3>
              <p className="text-gray-400 text-sm">Add family photos</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Invite Family</h3>
              <p className="text-gray-400 text-sm">Connect with relatives</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Recent Stories</h2>
            <div className="space-y-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Getting Started with Kintrace</h3>
                      <p className="text-gray-400 text-sm mb-3">
                        Welcome to your family's digital legacy! This is where your stories will live and grow.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Created today</span>
                        <span>•</span>
                        <span>Sample story</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Family Network</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">No family members yet</h3>
                  <p className="text-gray-400 text-sm mb-4">Invite your family to start building your shared legacy</p>
                  <Button className="w-full">Invite Family Members</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 mt-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Cultural Heritage</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Tell us about your cultural background to get personalized story suggestions
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Set Up Heritage Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
