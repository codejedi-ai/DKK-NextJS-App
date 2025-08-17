"use client"
import { BookOpen, Users, Globe, Mic, Camera, MessageCircle } from "lucide-react"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Hero } from "@/components/Hero"

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Hero />

      <div className="w-full overflow-x-hidden flex-grow container mx-auto px-4 py-16">
        {/* Main Features Section */}
        <section className="px-4 mb-16 max-w-7xl mx-auto w-full animate-fade-in-up">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Preserve Stories Across Generations</h2>
            <p className="text-gray-400 text-lg">
              Kintrace helps families preserve their cultural heritage through AI-assisted storytelling, connecting
              generations and keeping traditions alive for future family members.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900 border-gray-800 h-full hover:scale-105 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Story Curators</h3>
                <p className="text-gray-400">
                  Rich creative tools for crafting detailed family narratives with AI assistance for writing and
                  editing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 h-full hover:scale-105 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Memory Keepers</h3>
                <p className="text-gray-400">
                  Simple preservation workflows for capturing and organizing family memories and traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 h-full hover:scale-105 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Cultural Archivists</h3>
                <p className="text-gray-400">
                  Collaborative management features for preserving and sharing cultural heritage across communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Platform Integration Section */}
        <section className="px-4 mb-16 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Connect Through Your Favorite Platforms</h2>
            <p className="text-gray-400 text-lg">
              Share stories seamlessly through WhatsApp, WeChat, and Telegram to reach family members wherever they are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">WhatsApp</h4>
                <p className="text-gray-400 text-sm">Share stories directly with family groups</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">WeChat</h4>
                <p className="text-gray-400 text-sm">Connect with Chinese diaspora communities</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Telegram</h4>
                <p className="text-gray-400 text-sm">Secure family communication channels</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="px-4 mb-16 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">AI-Powered Storytelling</h2>
            <p className="text-gray-400 text-lg">
              Advanced AI tools help you capture, enhance, and preserve your family stories with cultural sensitivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <Mic className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">Voice to Story</h4>
                <p className="text-gray-400">
                  Record family conversations and let AI transcribe and structure them into beautiful narratives while
                  preserving cultural context and emotional nuance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <Camera className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">Photo Memories</h4>
                <p className="text-gray-400">
                  Upload family photos and let AI help you create rich stories around them, identifying cultural
                  artifacts and suggesting narrative connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 mb-16 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-8 border border-primary/30">
            <h2 className="text-3xl font-bold mb-4 text-white">Start Preserving Your Legacy Today</h2>
            <p className="text-gray-300 text-lg mb-6">
              Join thousands of families already using Kintrace to preserve their cultural heritage. Start with our free
              plan and upgrade as your family story grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                View Pricing - $99/year
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
