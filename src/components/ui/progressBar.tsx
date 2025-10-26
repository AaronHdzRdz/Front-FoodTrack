"use client"
import * as React from "react"

type ProgressBarProps = {
  value: number
  max?: number
  size?: "sm" | "md" | "lg"
  showValue?: boolean // muestra número al final (ej. 850)
  className?: string
}

export default function ProgressBar({
  value,
  max = 100,
  size = "sm",
  showValue = false,
  className = "",
}: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))

  const heightClass =
    size === "sm" ? "h-3" : size === "lg" ? "h-4" : "h-3"

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-full">
        {/* track */}
        <div className={`rounded-full bg-gray-200 overflow-hidden ${heightClass}`} role="presentation" />

        {/* fill */}
        <div
          role="progressbar"
          aria-valuenow={Math.round(pct)}
          aria-valuemin={0}
          aria-valuemax={100}
          className={`absolute left-0 top-0 bottom-0 rounded-full bg-Blue-700 transition-all duration-300`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {showValue && (
        <div className="flex-shrink-0">
          <span className="text-sm font-medium text-gray-500">%{value.toLocaleString()}</span>
        </div>
      )}
    </div>
  )
}
