"use client"

import * as React from "react"
import Footer from "@/components/footer"
import FolderSelector from "./FolderSelector"
import ComponentCard from "./ComponentCard"
import { componentsByFolder, folderOptions } from "./componentsByFolder"
import type { ComponentMeta } from "./types"

const allComponents: ComponentMeta[] = Object.values(componentsByFolder).flat()

export default function Page() {
  const [selectedFolder, setSelectedFolder] = React.useState<string>("All")

  const displayed = React.useMemo(() => {
    const list = selectedFolder === "All" ? allComponents : componentsByFolder[selectedFolder] ?? []
    return [...list].sort((a, b) => a.name.localeCompare(b.name))
  }, [selectedFolder])

  return (
    <div className="p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Pantalla de testing — Catálogo de componentes</h1>
        <p className="text-sm text-muted-foreground">Ejemplos, descripción y requisitos de cada componente.</p>
      </header>

      <section className="flex items-center gap-4">
        <FolderSelector options={folderOptions} value={selectedFolder} onChange={(v) => setSelectedFolder(v)} className="w-72" />
        <div className="text-sm text-muted-foreground">Mostrando: <strong>{selectedFolder}</strong></div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayed.map((c) => (
          <ComponentCard key={c.id} c={c} />
        ))}
      </section>

      <footer className="pt-6">
        <Footer />
      </footer>
    </div>
  )
}


