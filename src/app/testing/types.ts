import type { ReactNode } from "react"

export type ComponentMeta = {
  id: string
  name: string
  description: string
  requires?: string
  example?: ReactNode
  usage?: string
  folder?: string
}
