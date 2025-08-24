"use client"

import { useEffect, useState } from "react"
import { Calculator } from "lucide-react"

export function TrigCalculations() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Get current time values
  const hours = time.getHours() % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  // Calculate angles in radians
  const hourAngleRad = (2 * Math.PI * (hours + minutes / 60)) / 12
  const minuteAngleRad = (2 * Math.PI * minutes) / 60
  const secondAngleRad = (2 * Math.PI * seconds) / 60

  // Function to convert radians to π coefficient format
  const radiansToPI = (radians: number): string => {
    const coefficient = radians / Math.PI

    if (coefficient === 0) return "0"
    if (coefficient === 1) return "π"
    if (coefficient === 2) return "2π"

    const commonFractions = [
      { value: 1 / 2, display: "π/2" },
      { value: 1 / 3, display: "π/3" },
      { value: 1 / 4, display: "π/4" },
      { value: 1 / 6, display: "π/6" },
      { value: 2 / 3, display: "2π/3" },
      { value: 3 / 4, display: "3π/4" },
      { value: 5 / 6, display: "5π/6" },
      { value: 3 / 2, display: "3π/2" },
      { value: 4 / 3, display: "4π/3" },
      { value: 5 / 4, display: "5π/4" },
      { value: 7 / 6, display: "7π/6" },
      { value: 5 / 3, display: "5π/3" },
      { value: 7 / 4, display: "7π/4" },
      { value: 11 / 6, display: "11π/6" },
    ]

    for (const fraction of commonFractions) {
      if (Math.abs(coefficient - fraction.value) < 0.001) {
        return fraction.display
      }
    }

    if (Math.abs(coefficient) < 0.001) return "0"
    return `${coefficient.toFixed(3)}π`
  }

  // Calculate hand positions
  const hourX = Math.sin(hourAngleRad) * 0.6
  const hourY = -Math.cos(hourAngleRad) * 0.6
  const minuteX = Math.sin(minuteAngleRad) * 0.9
  const minuteY = -Math.cos(minuteAngleRad) * 0.9
  const secondX = Math.sin(secondAngleRad) * 0.85
  const secondY = -Math.cos(secondAngleRad) * 0.85

  return (
    <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-emerald-100 mb-4 flex items-center">
        <Calculator className="mr-2 h-5 w-5" />
        Trigonometric Calculations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Hour Hand */}
        <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-700/30">
          <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
            <div className="w-4 h-0.5 bg-cyan-400 mr-2" style={{ strokeDasharray: "4,2" }}></div>
            Hour Hand
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-emerald-300">Angle:</span>
              <div className="text-cyan-300 font-mono">{radiansToPI(hourAngleRad)}</div>
            </div>
            <div>
              <span className="text-emerald-300">X (sin):</span>
              <div className="text-cyan-300 font-mono">{hourX.toFixed(4)}</div>
            </div>
            <div>
              <span className="text-emerald-300">Y (cos):</span>
              <div className="text-cyan-300 font-mono">{hourY.toFixed(4)}</div>
            </div>
          </div>
        </div>

        {/* Minute Hand */}
        <div className="bg-emerald-800/30 p-4 rounded-lg border border-emerald-700/50">
          <h3 className="text-emerald-400 font-semibold mb-3 flex items-center">
            <div className="w-4 h-0.5 bg-emerald-400 mr-2"></div>
            Minute Hand
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-emerald-300">Angle:</span>
              <div className="text-emerald-300 font-mono">{radiansToPI(minuteAngleRad)}</div>
            </div>
            <div>
              <span className="text-emerald-300">X (sin):</span>
              <div className="text-emerald-300 font-mono">{minuteX.toFixed(4)}</div>
            </div>
            <div>
              <span className="text-emerald-300">Y (cos):</span>
              <div className="text-emerald-300 font-mono">{minuteY.toFixed(4)}</div>
            </div>
          </div>
        </div>

        {/* Second Hand */}
        <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
          <h3 className="text-green-400 font-semibold mb-3 flex items-center">
            <div className="w-4 h-0.5 bg-green-400 mr-2"></div>
            Second Hand
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-emerald-300">Angle:</span>
              <div className="text-green-300 font-mono">{radiansToPI(secondAngleRad)}</div>
            </div>
            <div>
              <span className="text-emerald-300">X (sin):</span>
              <div className="text-green-300 font-mono">{secondX.toFixed(4)}</div>
            </div>
            <div>
              <span className="text-emerald-300">Y (cos):</span>
              <div className="text-green-300 font-mono">{secondY.toFixed(4)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
