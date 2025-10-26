import {
  DollarMinimalisticOutline,
  Card2Outline,
  CardOutline,
  TransferHorizontalOutline,
} from "solar-icon-set";

export const paymentMethods = [
  {
    id: "efectivo",
    icon: <DollarMinimalisticOutline />,
    title: "Efectivo",
    progress: 55,
    amount: "$6,850",
  },
  {
    id: "credito",
    icon: <Card2Outline />,
    title: "Tarjeta de Crédito",
    progress: 32,
    amount: "$3,950",
  },
  {
    id: "debito",
    icon: <CardOutline />,
    title: "Tarjeta de Débito",
    progress: 10,
    amount: "$1,200",
  },
  {
    id: "transferencia",
    icon: <TransferHorizontalOutline />,
    title: "Transferencia",
    progress: 3,
    amount: "$6,850",
  },
];
