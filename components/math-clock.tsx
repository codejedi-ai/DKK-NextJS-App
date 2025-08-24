"use client"

import { useEffect, useState } from "react"

interface MathClockProps {
  size?: number
  className?: string
}

export function MathClock({ size = 300, className = "" }: MathClockProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const centerX = size / 2
  const centerY = size / 2
  const radius = size * 0.4

  // Get current time values
  const hours = time.getHours() % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  // Mathematical calculations based on your formulas
  // For minutes: 2πx/(60·12) where x is current minutes
  const minuteAngle = ((2 * Math.PI * minutes) / (60 * 12)) * 12 // Multiply by 12 to get full rotation in 60 minutes

  // For hours: 2πx/72 where x is current hour + minute fraction
  const hourAngle = (2 * Math.PI * (hours + minutes / 60)) / 12

  // For seconds (bonus): full rotation every 60 seconds
  const secondAngle = (2 * Math.PI * seconds) / 60

  // Calculate hand positions using sin for X (horizontal) and cos for Y (vertical)
  // Starting from the top (12 o'clock position) - no angle adjustment needed
  const hourHandX = centerX + Math.sin(hourAngle) * radius * 0.6
  const hourHandY = centerY - Math.cos(hourAngle) * radius * 0.6

  const minuteHandX = centerX + Math.sin(minuteAngle) * radius * 0.9
  const minuteHandY = centerY - Math.cos(minuteAngle) * radius * 0.9

  const secondHandX = centerX + Math.sin(secondAngle) * radius * 0.85
  const secondHandY = centerY - Math.cos(secondAngle) * radius * 0.85

  // Generate hour markers - Starting from 12 at the top
  const hourMarkers = Array.from({ length: 12 }, (_, i) => {
    // Start from top (12 o'clock) and go clockwise
    const angle = (2 * Math.PI * i) / 12
    const x1 = centerX + Math.sin(angle) * radius * 0.9
    const y1 = centerY - Math.cos(angle) * radius * 0.9
    const x2 = centerX + Math.sin(angle) * radius * 1.0
    const y2 = centerY - Math.cos(angle) * radius * 1.0
    // 12 should be at index 0 (top position)
    const number = i === 0 ? 12 : i
    return { x1, y1, x2, y2, number }
  })

  // Generate minute markers
  const minuteMarkers = Array.from({ length: 60 }, (_, i) => {
    if (i % 5 === 0) return null // Skip hour positions
    const angle = (2 * Math.PI * i) / 60
    const x1 = centerX + Math.sin(angle) * radius * 0.95
    const y1 = centerY - Math.cos(angle) * radius * 0.95
    const x2 = centerX + Math.sin(angle) * radius * 1.0
    const y2 = centerY - Math.cos(angle) * radius * 1.0
    return { x1, y1, x2, y2 }
  }).filter(Boolean)

  return (
    <div className={`relative ${className}`}>
      <svg width={size} height={size} className="drop-shadow-2xl">
        {/* Clock face background */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="rgba(16, 185, 129, 0.1)"
          stroke="rgb(16, 185, 129)"
          strokeWidth="3"
          className="filter drop-shadow-lg"
        />

        {/* Hour markers */}
        {hourMarkers.map((marker, i) => (
          <g key={i}>
            <line
              x1={marker.x1}
              y1={marker.y1}
              x2={marker.x2}
              y2={marker.y2}
              stroke="rgb(16, 185, 129)"
              strokeWidth="4"
            />
            <text
              x={centerX + Math.sin((2 * Math.PI * i) / 12) * radius * 0.8}
              y={centerY - Math.cos((2 * Math.PI * i) / 12) * radius * 0.8}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgb(209, 250, 229)"
              fontSize={size > 300 ? "18" : "14"}
              fontWeight="bold"
              className="font-mono"
            >
              {marker.number}
            </text>
          </g>
        ))}

        {/* Minute markers */}
        {minuteMarkers.map((marker, i) => (
          <line
            key={i}
            x1={marker!.x1}
            y1={marker!.y1}
            x2={marker!.x2}
            y2={marker!.y2}
            stroke="rgb(52, 211, 153)"
            strokeWidth="1"
          />
        ))}

        {/* Hour hand (dashed) */}
        <line
          x1={centerX}
          y1={centerY}
          x2={hourHandX}
          y2={hourHandY}
          stroke="rgb(6, 182, 212)"
          strokeWidth="8"
          strokeDasharray="12,6"
          strokeLinecap="round"
          className="filter drop-shadow-lg"
        />

        {/* Minute hand (solid) */}
        <line
          x1={centerX}
          y1={centerY}
          x2={minuteHandX}
          y2={minuteHandY}
          stroke="rgb(16, 185, 129)"
          strokeWidth="6"
          strokeLinecap="round"
          className="filter drop-shadow-lg"
        />

        {/* Second hand (thin solid) */}
        <line
          x1={centerX}
          y1={centerY}
          x2={secondHandX}
          y2={secondHandY}
          stroke="rgb(34, 197, 94)"
          strokeWidth="3"
          strokeLinecap="round"
          className="filter drop-shadow-lg"
        />

        {/* Center dot */}
        <circle
          cx={centerX}
          cy={centerY}
          r="10"
          fill="rgb(16, 185, 129)"
          stroke="rgb(6, 182, 212)"
          strokeWidth="3"
          className="filter drop-shadow-lg"
        />
      </svg>
    </div>
  )
}
