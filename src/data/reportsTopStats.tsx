import {
  DollarMinimalisticOutline,
  CartLargeMinimalisticOutline,
  WadOfMoneyOutline,
  UsersGroupRoundedOutline,
} from "solar-icon-set";

export const topStats = [
  {
    id: "ventas",
    icon: <DollarMinimalisticOutline className="w-6 h-6" />,
    iconWrapper: "bg-navy-900 p-3 rounded-2xl text-white",
    percent: "+12.5%",
    label: "Ventas Totales",
    value: "$16,450",
    sub: "vs. $14,620 período anterior",
  },
  {
    id: "ordenes",
    icon: <CartLargeMinimalisticOutline className="w-6 h-6" />,
    iconWrapper: "bg-Blue-700 p-3 rounded-2xl text-white",
    percent: "+8.3%",
    label: "Total de Órdenes",
    value: "160",
    sub: "vs. 148 período anterior",
  },
  {
    id: "ticket",
    icon: <WadOfMoneyOutline className="w-6 h-6" />,
    iconWrapper: "bg-Blue-200 p-3 rounded-2xl text-navy-900",
    percent: "+3.8%",
    label: "Ticket Promedio",
    value: "$278",
    sub: "vs. $268 período anterior",
  },
  {
    id: "clientes",
    icon: <UsersGroupRoundedOutline className="w-6 h-6" />,
    iconWrapper: "bg-[#009966] p-3 rounded-2xl text-white",
    percent: "+15.2%",
    label: "Clientes Atendidos",
    value: "420",
    sub: "vs. 365 período anterior",
  },
];
