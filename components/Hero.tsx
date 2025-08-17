"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Heart, Users, BookOpen } from "lucide-react"

function useScroll() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { scrollY, mounted }
}

function Background({ parallaxValue }: { parallaxValue: number }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
      <div
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${parallaxValue}px)` }}
      >
        <Image
          src="/diverse-families-dinner.png"
          alt="Families sharing cultural stories"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.6)",
          }}
        />
      </div>
    </>
  )
}

function HeroContent() {
  return (
    <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center text-center animate-fade-in-up max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <Heart className="w-12 h-12 text-primary" />
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            <span className="text-primary">Kin</span>
            <span className="text-white">trace</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">Preserve Your Family's Cultural Legacy</p>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
          A social network for families focused on preserving cultural legacies through AI-assisted storytelling.
          Connect generations, share traditions, and keep your heritage alive.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/start-story"
            className="px-8 py-4 text-lg font-semibold bg-primary text-black rounded-md shadow-md hover:bg-primary/90 transition-all duration-200"
          >
            Start Your Story
          </Link>
          <Link
            href="/explore"
            className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary rounded-md shadow-md hover:bg-primary/20 transition-all duration-200"
          >
            Explore Cultures
          </Link>
        </div>

        <div className="flex items-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>10,000+ Families</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>50+ Cultures</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            <span>100,000+ Stories</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
      </div>
    </div>
  )
}

export function Hero() {
  const { scrollY, mounted } = useScroll()
  const parallaxValue = scrollY * 0.4

  if (!mounted) {
    return (
      <div className="relative w-full h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden bg-black">
        <Background parallaxValue={0} />
        <HeroContent />
      </div>
    )
  }

  return (
    <div className="relative w-full h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden bg-black">
      <Background parallaxValue={parallaxValue} />
      <HeroContent />
    </div>
  )
}
