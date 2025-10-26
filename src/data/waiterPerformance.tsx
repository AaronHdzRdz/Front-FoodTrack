import { ColumnDef } from "@tanstack/react-table";
import { CourseUpOutline, CourseDownOutline } from "solar-icon-set";

export type WaiterPerformance = {
  id: number;
  name: string;
  orders: number;
  sales: number;
  avgTicket?: number;
  perquisite: number;
};

export const waiterPerformanceData: WaiterPerformance[] = [
  {
    id: 1,
    name: "María López",
    orders: 42,
    sales: 7820,
    avgTicket: 186,
    perquisite: 98,
  },
  {
    id: 2,
    name: "Carlos Pérez",
    orders: 38,
    sales: 6540,
    avgTicket: 110,
    perquisite: 85,
  },
  {
    id: 3,
    name: "Ana Gómez",
    orders: 34,
    sales: 5900,
    avgTicket: 98,
    perquisite: 92,
  },
  {
    id: 4,
    name: "Luis Torres",
    orders: 29,
    sales: 4800,
    avgTicket: 85,
    perquisite: 85,
  },
  {
    id: 5,
    name: "Sofía Díaz",
    orders: 24,
    sales: 3720,
    avgTicket: 70,
    perquisite: 75,
  },
];

export const waiterPerformanceColumns: ColumnDef<WaiterPerformance>[] = [
  {
    id: "id",
  },
  {
    accessorKey: "name",
    header: "Mesero",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "orders",
    header: "Órdenes",
    cell: ({ row }) => <div>{row.getValue("orders")}</div>,
  },
  {
    accessorKey: "sales",
    header: "Ventas",
    cell: ({ row }) => {
      const n = Number(row.getValue("sales"));
      const formatted = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
      }).format(n);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "avgTicket",
    header: "Ticket Promedio",
    cell: ({ row }) => {
      const n = Number(row.getValue("avgTicket"));
      const formatted = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
      }).format(n);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "perquisite",
    header: "Propina",
    cell: ({ row }) => {
      const n = Number(row.getValue("perquisite"));
      const formatted = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
      }).format(n);
      return <div>{formatted}</div>;
    },
  },
];

export default waiterPerformanceData;
