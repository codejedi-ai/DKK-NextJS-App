"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

// Hook for managing scroll-based parallax effect
function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, mounted };
}

// Render background elements
function Background({ parallaxValue }: { parallaxValue: number }) {
  return (
    <>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>

      {/* Parallax effect */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${parallaxValue}px)` }}
      >
        <Image
          src="/placeholder.svg"
          alt="Background"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
      </div>
    </>
  );
}

// Render Hero content
function HeroContent() {
  return (
    <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center text-center animate-fade-in-up">
        <h1 className="flex items-center text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          {/* Logo */}
          <Image
            src="/dkk-logo-removebg-preview.png"
            alt="DKK Logo"
            width={200}
            height={200}
            className="animate-pulse"
          />
          <span className="text-primary ml-4">DUO KEYBOARD</span>
          <span className="text-white ml-4">KOALITION</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="px-8 py-4 text-lg font-semibold bg-primary text-white rounded-md shadow-md hover:bg-primary/80 transition-all duration-200"
          >
            Explore Projects
          </Link>
          <Link
            href="https://discord.gg/6GaWZAawUc"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary rounded-md shadow-md hover:bg-primary/20 transition-all duration-200"
          >
            Join Discord
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
      </div>
    </div>
  );
}

// Main Hero component
export function Hero() {
  const { scrollY, mounted } = useScroll();
  const parallaxValue = scrollY * 0.4;

  if (!mounted) {
    return (
      <div className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden bg-black">
        <Background parallaxValue={0} />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden bg-black">
      <Background parallaxValue={parallaxValue} />
      <HeroContent />
    </div>
  );
}
