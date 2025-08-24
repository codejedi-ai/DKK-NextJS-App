"use client"

import { SiteHeader } from "@/components/site-header"
import { MathClock } from "@/components/math-clock"
import { TrigCalculations } from "@/components/trig-calculations"
import { ClockStats } from "@/components/clock-stats"
import { AngleVisualizer } from "@/components/angle-visualizer"

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-950">
      <SiteHeader />

      <main className="p-6">
        <div className="mx-auto max-w-7xl">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-emerald-100 mb-2">
              Mathematical Clock <span className="text-cyan-400">Dashboard</span>
            </h1>
            <p className="text-emerald-300">Real-time trigonometric analysis of clock hand positions</p>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Main Clock Widget - Takes up 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-emerald-100">Live Mathematical Clock</h2>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-cyan-400" style={{ strokeDasharray: "4,2" }}></div>
                      <span className="text-emerald-200">Hour</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-emerald-400"></div>
                      <span className="text-emerald-200">Minute</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-green-400"></div>
                      <span className="text-emerald-200">Second</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <MathClock size={400} />
                </div>
              </div>
            </div>

            {/* Clock Statistics */}
            <div className="space-y-6">
              <ClockStats />
              <AngleVisualizer />
            </div>
          </div>

          {/* Bottom Row - Trigonometric Calculations */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <TrigCalculations />

            {/* Additional Info Panel */}
            <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-emerald-100 mb-4">Mathematical Insights</h2>

              <div className="space-y-4">
                <div className="bg-emerald-800/30 p-4 rounded-lg">
                  <h3 className="text-cyan-400 font-semibold mb-2">Coordinate System</h3>
                  <p className="text-emerald-200 text-sm mb-3">
                    The clock uses a standard coordinate system where sine controls the X-axis (horizontal) and cosine
                    controls the Y-axis (vertical), starting from 12 o'clock.
                  </p>
                  <div className="text-emerald-200 text-xs space-y-1">
                    <div>
                      • <strong>X-axis:</strong> Left is negative (-), Right is positive (+)
                    </div>
                    <div>
                      • <strong>Y-axis:</strong> Top is negative (-), Bottom is positive (+)
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-800/30 p-4 rounded-lg">
                  <h3 className="text-emerald-400 font-semibold mb-2">Hand Relationships</h3>
                  <ul className="text-emerald-200 text-sm space-y-1">
                    <li>• Hour hand: Completes 2π radians in 12 hours</li>
                    <li>• Minute hand: Completes 2π radians in 60 minutes</li>
                    <li>• Second hand: Completes 2π radians in 60 seconds</li>
                  </ul>
                </div>

                <div className="bg-emerald-800/30 p-4 rounded-lg">
                  <h3 className="text-green-400 font-semibold mb-2">Special Angles</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-emerald-200">
                    <div>0° = 0</div>
                    <div>90° = π/2</div>
                    <div>180° = π</div>
                    <div>270° = 3π/2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
