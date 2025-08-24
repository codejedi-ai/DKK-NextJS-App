"use client"

import { useEffect, useState } from "react"
import { RotateCw } from "lucide-react"

export function AngleVisualizer() {
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

  // Calculate angles in degrees for display
  const hourAngleDeg = ((hours + minutes / 60) / 12) * 360
  const minuteAngleDeg = (minutes / 60) * 360
  const secondAngleDeg = (seconds / 60) * 360

  return (
    <div className="bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-emerald-100 mb-4 flex items-center">
        <RotateCw className="mr-2 h-5 w-5" />
        Angle Positions
      </h2>

      <div className="space-y-4">
        {/* Hour Angle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-cyan-400" style={{ strokeDasharray: "3,1.5" }}></div>
            <span className="text-cyan-400 text-sm font-semibold">Hour</span>
          </div>
          <div className="text-right">
            <div className="text-cyan-300 font-mono text-sm">{hourAngleDeg.toFixed(1)}°</div>
            <div className="text-cyan-400 text-xs">{((hourAngleDeg * Math.PI) / 180 / Math.PI).toFixed(3)}π</div>
          </div>
        </div>

        {/* Minute Angle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-emerald-400"></div>
            <span className="text-emerald-400 text-sm font-semibold">Minute</span>
          </div>
          <div className="text-right">
            <div className="text-emerald-300 font-mono text-sm">{minuteAngleDeg.toFixed(1)}°</div>
            <div className="text-emerald-400 text-xs">{((minuteAngleDeg * Math.PI) / 180 / Math.PI).toFixed(3)}π</div>
          </div>
        </div>

        {/* Second Angle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-green-400"></div>
            <span className="text-green-400 text-sm font-semibold">Second</span>
          </div>
          <div className="text-right">
            <div className="text-green-300 font-mono text-sm">{secondAngleDeg.toFixed(1)}°</div>
            <div className="text-green-400 text-xs">{((secondAngleDeg * Math.PI) / 180 / Math.PI).toFixed(3)}π</div>
          </div>
        </div>

        {/* Mini Unit Circle Visualization */}
        <div className="mt-4 flex justify-center">
          <svg width="80" height="80" className="border border-emerald-700/30 rounded-full bg-emerald-800/20">
            <circle cx="40" cy="40" r="35" fill="none" stroke="rgb(16, 185, 129)" strokeWidth="1" opacity="0.3" />

            {/* Hour hand indicator */}
            <line
              x1="40"
              y1="40"
              x2={40 + Math.sin((hourAngleDeg * Math.PI) / 180) * 20}
              y2={40 - Math.cos((hourAngleDeg * Math.PI) / 180) * 20}
              stroke="rgb(6, 182, 212)"
              strokeWidth="3"
              strokeDasharray="3,2"
            />

            {/* Minute hand indicator */}
            <line
              x1="40"
              y1="40"
              x2={40 + Math.sin((minuteAngleDeg * Math.PI) / 180) * 30}
              y2={40 - Math.cos((minuteAngleDeg * Math.PI) / 180) * 30}
              stroke="rgb(16, 185, 129)"
              strokeWidth="2"
            />

            {/* Second hand indicator */}
            <line
              x1="40"
              y1="40"
              x2={40 + Math.sin((secondAngleDeg * Math.PI) / 180) * 32}
              y2={40 - Math.cos((secondAngleDeg * Math.PI) / 180) * 32}
              stroke="rgb(34, 197, 94)"
              strokeWidth="1"
            />

            <circle cx="40" cy="40" r="2" fill="rgb(16, 185, 129)" />
          </svg>
        </div>
      </div>
    </div>
  )
}
