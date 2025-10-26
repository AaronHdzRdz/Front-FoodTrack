import { ColumnDef } from "@tanstack/react-table";
import { CourseDownOutline, CourseUpOutline } from "solar-icon-set";

export type TopProduct = {
  rank: number;
  product: string;
  quantity: number;
  revenue: number; // whole dollars
  trendPercent: number;
  trendUp: boolean;
};

export const topProductsData: TopProduct[] = [
  {
    rank: 1,
    product: "Tacos al Pastor",
    quantity: 145,
    revenue: 12325,
    trendPercent: 15,
    trendUp: true,
  },
  {
    rank: 2,
    product: "Pozole Rojo",
    quantity: 89,
    revenue: 10680,
    trendPercent: 8,
    trendUp: true,
  },
  {
    rank: 3,
    product: "Mole Poblano",
    quantity: 76,
    revenue: 11020,
    trendPercent: 12,
    trendUp: true,
  },
  {
    rank: 4,
    product: "Enchiladas Verdes",
    quantity: 98,
    revenue: 9310,
    trendPercent: 3,
    trendUp: false,
  },
  {
    rank: 5,
    product: "Quesadillas",
    quantity: 112,
    revenue: 8400,
    trendPercent: 5,
    trendUp: true,
  },
];

export const topProductsColumns: ColumnDef<TopProduct>[] = [
  {
    accessorKey: "rank",
    id: "rank",
    header: "",
    cell: ({ row }) => {
      const v = row.getValue("rank") as number;
      return (
        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-navy-900 text-white font-medium">
          {v}
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "product",
    header: "Producto",
    cell: ({ row }) => <div>{row.getValue("product")}</div>,
  },
  {
    accessorKey: "quantity",
    header: "Cantidad Vendida",
    cell: ({ row }) => <div>{row.getValue("quantity")}</div>,
  },
  {
    accessorKey: "revenue",
    header: "Ingresos",
    cell: ({ row }) => {
      const n = Number(row.getValue("revenue"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MXN",
      }).format(n);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "trendPercent",
    header: "Tendencia",
    cell: ({ row }) => {
      const percent = row.getValue("trendPercent") as number;
      const up = (row.original as TopProduct).trendUp;
      return (
        <div
          className={`flex items-center ${
            up ? "text-[#009966]" : "text-red-500"
          }`}
        >
          <span className="ml-2">
            {up ? <CourseUpOutline /> : <CourseDownOutline />} {percent}%
          </span>
        </div>
      );
    },
  },
];

export default topProductsData;
