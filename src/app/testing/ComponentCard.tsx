"use client"

import * as React from "react"
import type { ComponentMeta } from "./types"

export default function ComponentCard({ c }: { c: ComponentMeta }) {
  return (
    <article className="border rounded p-4">
      <h2 className="font-medium">{c.name}</h2>
      <p className="text-sm text-muted-foreground">{c.description}</p>
      {c.requires ? <p className="text-xs mt-1">Requiere: {c.requires}</p> : null}
      <div className="mt-3">{c.example}</div>
      {c.usage && (
        <pre className="mt-3 bg-gray-50 p-2 rounded text-xs overflow-auto">{c.usage}</pre>
      )}
    </article>
  )
}
