"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { parseUrlHash } from "@/utils/urlParser"
import { fetchUserDetails } from "./action"
import { Hero } from "@/components/Hero"
import { ClipboardCopy, Check, Heart } from "lucide-react"
import type { UserDetails } from "@/types/UserDetails"

function AccessDenied() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
          <Heart className="w-6 h-6" />
          <span className="text-xl font-bold">Kintrace</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
          <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-rose-500 mb-4">Access Denied</h1>
          <p className="text-gray-300 mb-6">
            This area requires authentication to preserve your family's privacy and security. Please sign in to
            continue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth" passHref>
              <Button asChild variant="default" size="default">
                <a>Sign In</a>
              </Button>
            </Link>
            <Button variant="outline" size="default" onClick={() => router.back()}>
              Go Back
            </Button>
            <Link href="/" passHref>
              <Button asChild variant="secondary" size="default">
                <a>Return to Home</a>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Code block component with copy functionality
function CodeBlock({ title, data }: { title: string; data: Record<string, unknown> }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(JSON.stringify(data, null, 2))
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch((err) => console.error("Failed to copy text: ", err))
  }

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-400 mb-2">{title}</h2>
      <div className="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto relative group">
        <pre className="code-section">{JSON.stringify(data, null, 2)}</pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-gray-700 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-600"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4 text-gray-200" />}
        </button>
      </div>
    </div>
  )
}

export default function ErrorRedirectPage() {
  const router = useRouter()
  const [hashData, setHashData] = useState<Record<string, string>>({})
  // Then in your component:
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)

  useEffect(() => {
    const hash = window.location.hash
    const parsedHash = parseUrlHash(hash)
    setHashData(parsedHash)

    if (parsedHash.access_token) {
      fetchUserDetails(parsedHash.access_token).then((data) => {
        if (data) {
          setUserDetails(data as UserDetails)
        }
      })
    }
  }, [])

  const hasAccessToken = !!hashData.access_token

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Hero />
      <main className="flex-grow container mx-auto px-6 py-12">
        {!hasAccessToken ? (
          <AccessDenied />
        ) : (
          <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
            <h1 className="text-3xl font-bold text-green-500 mb-4">Debug Information</h1>

            <CodeBlock title="Parsed Hash Data:" data={hashData} />

            {userDetails && (
              <CodeBlock title="User Details:" data={userDetails ? JSON.parse(JSON.stringify(userDetails)) : {}} />
            )}

            <Button variant="outline" size="default" onClick={() => router.back()}>
              Go Back
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
