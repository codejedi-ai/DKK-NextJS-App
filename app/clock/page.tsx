"use client"

import { SiteHeader } from "@/components/site-header"
import { ClockCalculator } from "@/components/clock-calculator"
import { Calculator, Clock } from "lucide-react"

export default function ClockPage() {
  return (
    <div className="min-h-screen bg-emerald-950">
      <SiteHeader />

      <main className="p-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-emerald-100 mb-4 flex items-center justify-center">
              <Calculator className="mr-3 h-8 w-8 text-cyan-400" />
              Clock Hand <span className="text-cyan-400">Calculator</span>
            </h1>
            <p className="text-xl text-emerald-300 max-w-3xl mx-auto">
              Calculate when clock hands will next align or form straight lines using mathematical precision
            </p>
          </div>

          {/* Main Calculator */}
          <ClockCalculator />

          {/* Mathematical Explanation */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-emerald-100 mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Hand Alignment Theory
              </h2>
              <div className="space-y-4 text-emerald-200">
                <div className="bg-emerald-800/30 p-4 rounded-lg">
                  <h3 className="text-cyan-400 font-semibold mb-2">Speed Difference</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Minute hand: 6°/minute</li>
                    <li>• Hour hand: 0.5°/minute</li>
                    <li>• Relative speed: 5.5°/minute</li>
                  </ul>
                </div>
                <div className="bg-emerald-800/30 p-4 rounded-lg">
                  <h3 className="text-emerald-400 font-semibold mb-2">Alignment Frequency</h3>
                  <p className="text-sm">
                    Hands align every <strong className="text-cyan-300">720/11 ≈ 65.45 minutes</strong>
                  </p>
                  <p className="text-xs text-emerald-400 mt-1">This gives us 11 alignments in 12 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-emerald-100 mb-4">Straight Line Theory</h2>
              <div className="space-y-4 text-emerald-200">
                <div className="bg-emerald-800/30 p-4 rounded-lg">
                  <h3 className="text-green-400 font-semibold mb-2">180° Apart</h3>
                  <p className="text-sm">
                    Hands form a straight line when they are exactly 180° apart, creating a diameter across the clock
                    face.
                  </p>
                </div>
                <div className="bg-emerald-800/30 p-4 rounded-lg">
                  <h3 className="text-green-400 font-semibold mb-2">Occurrence Pattern</h3>
                  <p className="text-sm">
                    Straight lines occur between each alignment, also every{" "}
                    <strong className="text-green-300">720/11 minutes</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
