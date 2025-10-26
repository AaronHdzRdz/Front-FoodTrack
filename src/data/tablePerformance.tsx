import { ColumnDef } from "@tanstack/react-table"

export type TablePerformance = {
  table: string
  orders: number
  sales: number // whole pesos
}

export const tablePerformanceData: TablePerformance[] = [
  { table: "Mesa 1", orders: 8, sales: 2400 },
  { table: "Mesa 5", orders: 9, sales: 2850 },
  { table: "Mesa 8", orders: 7, sales: 2100 },
  { table: "Mesa 12", orders: 8, sales: 2650 },
  { table: "Mesa 15", orders: 6, sales: 1950 },
]

export const tablePerformanceColumns: ColumnDef<TablePerformance>[] = [
  {
    accessorKey: "table",
    header: "Mesa",
    cell: ({ row }) => <div>{row.getValue("table")}</div>,
  },
  {
    accessorKey: "orders",
    header: "Órdenes",
    cell: ({ row }) => <div>{row.getValue("orders")}</div>,
  },
  {
    accessorKey: "sales",
    header: "Ingresos",
    cell: ({ row }) => {
      const n = Number(row.getValue("sales"))
      const formatted = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(n)
      return <div>{formatted}</div>
    },
  },
]

export default tablePerformanceData
