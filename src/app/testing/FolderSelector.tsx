"use client"

import * as React from "react"
import AdminCashSelector from "@/components/admin/CashSelector"

export default function FolderSelector({
  options,
  value,
  onChange,
  className,
}: {
  options: string[]
  value?: string
  onChange?: (v: string) => void
  className?: string
}) {
  return (
    <AdminCashSelector options={options} defaultValue={value} onChange={onChange} className={className} />
  )
}
