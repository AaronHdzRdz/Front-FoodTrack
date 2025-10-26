"use client"
import * as React from "react"

type IconBoxProps = {
  icon: React.ReactNode
  bgClass?: string // background class for container, e.g. "bg-Blue-700"
  textClass?: string // text color class for icon, e.g. "text-white"
  className?: string // extra wrapper classes
}

export default function IconBox({
  icon,
  bgClass = "bg-Blue-700",
  textClass = "text-white",
  className = "p-3 rounded-2xl w-fit h-fit flex items-center justify-center",
}: IconBoxProps) {
  return (
    <div className={`${bgClass} ${textClass} ${className}`}>{icon}</div>
  )
}
