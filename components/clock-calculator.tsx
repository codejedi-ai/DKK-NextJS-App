"use client"

import { useEffect, useState } from "react"
import { MathClock } from "./math-clock"
import { Button } from "@/components/ui/button"
import { RefreshCw, Clock, Target, Minus } from "lucide-react"

interface CalculationResult {
  nextAlignment: Date
  nextStraightLine: Date
  alignmentAngle: number
  straightLineAngle: number
  timeToAlignment: number
  timeToStraightLine: number
}

export function ClockCalculator() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [calculations, setCalculations] = useState<CalculationResult | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      calculateNextEvents(now)
    }, 1000)

    // Initial calculation
    calculateNextEvents(new Date())

    return () => clearInterval(timer)
  }, [])

  const calculateNextEvents = (now: Date) => {
    const hours = now.getHours() % 12
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    // Convert current time to total minutes since 12:00
    const totalMinutes = hours * 60 + minutes + seconds / 60

    // Calculate current angles
    const hourAngle = (totalMinutes / 720) * 360 // 720 minutes = 12 hours
    const minuteAngle = ((minutes + seconds / 60) / 60) * 360

    // Calculate angle difference
    let angleDiff = minuteAngle - hourAngle
    if (angleDiff < 0) angleDiff += 360

    // Time between alignments: 720/11 minutes ≈ 65.454545 minutes
    const alignmentInterval = 720 / 11

    // Find next alignment
    let minutesToNextAlignment: number
    if (angleDiff === 0) {
      minutesToNextAlignment = alignmentInterval
    } else {
      // Time for minute hand to "lap" hour hand
      minutesToNextAlignment = (360 - angleDiff) / 5.5 // 5.5°/minute relative speed
      if (minutesToNextAlignment <= 0) minutesToNextAlignment += alignmentInterval
    }

    // Find next straight line (180° apart)
    let minutesToStraightLine: number
    const straightLineDiff = Math.abs(angleDiff - 180)
    if (straightLineDiff < 1) {
      // Already at straight line, find next one
      minutesToStraightLine = alignmentInterval / 2
    } else if (angleDiff < 180) {
      minutesToStraightLine = (180 - angleDiff) / 5.5
    } else {
      minutesToStraightLine = (540 - angleDiff) / 5.5 // 360 + 180 - angleDiff
    }

    // Create future dates
    const nextAlignment = new Date(now.getTime() + minutesToNextAlignment * 60 * 1000)
    const nextStraightLine = new Date(now.getTime() + minutesToStraightLine * 60 * 1000)

    // Calculate angles at those times
    const alignmentTotalMinutes = (nextAlignment.getHours() % 12) * 60 + nextAlignment.getMinutes()
    const alignmentAngle = (alignmentTotalMinutes / 720) * 360

    const straightLineTotalMinutes = (nextStraightLine.getHours() % 12) * 60 + nextStraightLine.getMinutes()
    const straightLineAngle = (straightLineTotalMinutes / 720) * 360

    setCalculations({
      nextAlignment,
      nextStraightLine,
      alignmentAngle,
      straightLineAngle,
      timeToAlignment: minutesToNextAlignment,
      timeToStraightLine: minutesToStraightLine,
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
  }

  const formatDuration = (minutes: number) => {
    const hrs = Math.floor(minutes / 60)
    const mins = Math.floor(minutes % 60)
    const secs = Math.floor((minutes % 1) * 60)

    if (hrs > 0) {
      return `${hrs}h ${mins}m ${secs}s`
    } else if (mins > 0) {
      return `${mins}m ${secs}s`
    } else {
      return `${secs}s`
    }
  }

  return (
    <div className="space-y-6">
      {/* Current Time and Clock */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Clock */}
        <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-emerald-100 mb-4 text-center">Current Time</h2>
          <div className="flex justify-center mb-4">
            <MathClock size={300} />
          </div>
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-cyan-400 mb-2">{formatTime(currentTime)}</div>
            <div className="text-emerald-300">{currentTime.toLocaleDateString()}</div>
          </div>
        </div>

        {/* Calculation Results */}
        <div className="space-y-4">
          {/* Next Alignment */}
          <div className="bg-cyan-900/20 backdrop-blur-sm border border-cyan-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Next Hand Alignment
            </h3>
            {calculations && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-300">Time:</span>
                  <span className="text-cyan-300 font-mono text-lg">{formatTime(calculations.nextAlignment)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-300">In:</span>
                  <span className="text-cyan-300 font-mono">{formatDuration(calculations.timeToAlignment)}</span>
                </div>
              </div>
            )}
          </div>

          {/* Next Straight Line */}
          <div className="bg-green-900/20 backdrop-blur-sm border border-green-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
              <Minus className="mr-2 h-5 w-5" />
              Next Straight Line
            </h3>
            {calculations && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-300">Time:</span>
                  <span className="text-green-300 font-mono text-lg">{formatTime(calculations.nextStraightLine)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-300">In:</span>
                  <span className="text-green-300 font-mono">{formatDuration(calculations.timeToStraightLine)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* All Alignments Today */}
      <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-emerald-100 mb-4 flex items-center">
          <Clock className="mr-2 h-5 w-5" />
          All Alignments Today
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {Array.from({ length: 22 }, (_, i) => {
            // Calculate alignment times for both AM and PM (11 alignments × 2 = 22 total)
            const alignmentMinutes = ((i % 11) * 720) / 11
            const hours = Math.floor(alignmentMinutes / 60) + (i >= 11 ? 12 : 0) // Add 12 for PM
            const minutes = Math.floor(alignmentMinutes % 60)
            const seconds = Math.floor(((alignmentMinutes % 60) % 1) * 60)

            const alignmentTime = new Date()
            alignmentTime.setHours(hours, minutes, seconds, 0)

            const isPast = alignmentTime < currentTime
            const isNext =
              calculations && Math.abs(alignmentTime.getTime() - calculations.nextAlignment.getTime()) < 30000

            return (
              <div
                key={i}
                className={`p-3 rounded-lg text-center text-sm ${
                  isNext
                    ? "bg-cyan-600/30 border border-cyan-400/50 text-cyan-300"
                    : isPast
                      ? "bg-emerald-800/20 text-emerald-500"
                      : "bg-emerald-800/30 text-emerald-300"
                }`}
              >
                <div className="font-mono">
                  {alignmentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </div>
                <div className="text-xs text-emerald-400 mt-1">{i >= 11 ? "PM" : "AM"}</div>
                {isNext && <div className="text-xs text-cyan-400 mt-1">NEXT</div>}
              </div>
            )
          })}
        </div>
        <p className="text-emerald-400 text-sm mt-4 text-center">
          Clock hands align exactly 22 times in 24 hours (11 times each in AM and PM periods)
        </p>
      </div>

      {/* All Straight Lines Today */}
      <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-emerald-100 mb-4 flex items-center">
          <Minus className="mr-2 h-5 w-5" />
          All Straight Lines Today
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {Array.from({ length: 22 }, (_, i) => {
            // Calculate straight line times for both AM and PM
            const straightLineMinutes = ((i % 11) * 720) / 11 + 720 / 11 / 2
            const hours = (Math.floor(straightLineMinutes / 60) + (i >= 11 ? 12 : 0)) % 24
            const minutes = Math.floor(straightLineMinutes % 60)
            const seconds = Math.floor(((straightLineMinutes % 60) % 1) * 60)

            const straightLineTime = new Date()
            straightLineTime.setHours(hours, minutes, seconds, 0)

            const isPast = straightLineTime < currentTime
            const isNext =
              calculations && Math.abs(straightLineTime.getTime() - calculations.nextStraightLine.getTime()) < 30000

            return (
              <div
                key={i}
                className={`p-3 rounded-lg text-center text-sm ${
                  isNext
                    ? "bg-green-600/30 border border-green-400/50 text-green-300"
                    : isPast
                      ? "bg-emerald-800/20 text-emerald-500"
                      : "bg-emerald-800/30 text-emerald-300"
                }`}
              >
                <div className="font-mono">
                  {straightLineTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </div>
                <div className="text-xs text-emerald-400 mt-1">{i >= 11 ? "PM" : "AM"}</div>
                {isNext && <div className="text-xs text-green-400 mt-1">NEXT</div>}
              </div>
            )
          })}
        </div>
        <p className="text-emerald-400 text-sm mt-4 text-center">
          Hour and minute hands form straight lines (180° apart) 22 times in 24 hours, between each alignment in both AM
          and PM
        </p>
      </div>

      {/* Manual Recalculate Button */}
      <div className="text-center">
        <Button
          onClick={() => calculateNextEvents(new Date())}
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Recalculate Now
        </Button>
      </div>
    </div>
  )
}
