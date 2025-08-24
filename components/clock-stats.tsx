"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function ClockStats() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours() % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  // Calculate completion percentages
  const hourProgress = ((hours + minutes / 60) / 12) * 100
  const minuteProgress = (minutes / 60) * 100
  const secondProgress = (seconds / 60) * 100

  return (
    <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-emerald-100 mb-4 flex items-center">
        <Clock className="mr-2 h-5 w-5" />
        Current Time
      </h2>

      <div className="text-center mb-4">
        <div className="text-2xl font-mono font-bold text-cyan-400">{time.toLocaleTimeString()}</div>
        <div className="text-emerald-300 text-sm">{time.toLocaleDateString()}</div>
      </div>

      <div className="space-y-3">
        {/* Hour Progress */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-cyan-400">Hour Cycle</span>
            <span className="text-cyan-300">{hourProgress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-emerald-800/30 rounded-full h-2">
            <div
              className="bg-cyan-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${hourProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Minute Progress */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-emerald-400">Minute Cycle</span>
            <span className="text-emerald-300">{minuteProgress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-emerald-800/30 rounded-full h-2">
            <div
              className="bg-emerald-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${minuteProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Second Progress */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-green-400">Second Cycle</span>
            <span className="text-green-300">{secondProgress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-emerald-800/30 rounded-full h-2">
            <div
              className="bg-green-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${secondProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
