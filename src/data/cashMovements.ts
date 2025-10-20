export type Movement = {
  id: string;
  date: string; // ISO date
  time: string; // HH:MM
  description: string;
  cash: "Caja Principal" | "Caja 2" | "Caja Terraza";
  method: "Efectivo" | "Tarjeta" | "Transferencia" | "Otro";
  amount: number; // positive for ingreso, negative for egreso
  type: "ingreso" | "egreso";
};

// ~50 registros variados para pruebas
export const cashMovements: Movement[] = [
  { id: "m1", date: "2025-10-19", time: "14:30", description: "Pago de cuenta - Mesa 5", cash: "Caja Principal", method: "Efectivo", amount: 640, type: "ingreso" },
  { id: "m2", date: "2025-10-19", time: "13:15", description: "Pago a proveedor - Carnes Don Juan", cash: "Caja Principal", method: "Transferencia", amount: -600, type: "egreso" },
  { id: "m3", date: "2025-10-19", time: "13:00", description: "Pago de cuenta - Mesa 12", cash: "Caja Terraza", method: "Tarjeta", amount: 850, type: "ingreso" },
  { id: "m4", date: "2025-10-19", time: "12:45", description: "Pago de cuenta - Mesa 3", cash: "Caja 2", method: "Efectivo", amount: 425, type: "ingreso" },
  { id: "m5", date: "2025-10-19", time: "11:30", description: "Compra de insumos - Verduras", cash: "Caja Principal", method: "Efectivo", amount: -350, type: "egreso" },
  { id: "m6", date: "2025-10-18", time: "18:20", description: "Pago de cuenta - Mesa 4", cash: "Caja Principal", method: "Tarjeta", amount: 560, type: "ingreso" },
  { id: "m7", date: "2025-10-18", time: "17:05", description: "Gastos - Limpieza", cash: "Caja 2", method: "Efectivo", amount: -45, type: "egreso" },
  { id: "m8", date: "2025-10-18", time: "16:12", description: "Propina - Mesa 7", cash: "Caja Terraza", method: "Tarjeta", amount: 30, type: "ingreso" },
  { id: "m9", date: "2025-10-17", time: "20:00", description: "Pago de evento privado", cash: "Caja Principal", method: "Transferencia", amount: 1200, type: "ingreso" },
  { id: "m10", date: "2025-10-17", time: "19:30", description: "Compra - Bebidas", cash: "Caja 2", method: "Efectivo", amount: -210, type: "egreso" },
  { id: "m11", date: "2025-10-16", time: "12:10", description: "Pago de cuenta - Mesa 2", cash: "Caja Principal", method: "Efectivo", amount: 220, type: "ingreso" },
  { id: "m12", date: "2025-10-16", time: "13:50", description: "Rembolso proveedor", cash: "Caja 2", method: "Transferencia", amount: -125, type: "egreso" },
  { id: "m13", date: "2025-10-15", time: "09:30", description: "Apertura caja - efectivo inicial", cash: "Caja Principal", method: "Otro", amount: 5000, type: "ingreso" },
  { id: "m14", date: "2025-10-15", time: "10:00", description: "Pago de cuenta - Mesa 1", cash: "Caja Terraza", method: "Efectivo", amount: 95, type: "ingreso" },
  { id: "m15", date: "2025-10-14", time: "21:15", description: "Pago de cuenta - Mesa 9", cash: "Caja Principal", method: "Tarjeta", amount: 420, type: "ingreso" },
  { id: "m16", date: "2025-10-14", time: "11:05", description: "Compra insumos - Carnes", cash: "Caja Principal", method: "Transferencia", amount: -950, type: "egreso" },
  { id: "m17", date: "2025-10-13", time: "15:45", description: "Pago por delivery", cash: "Caja 2", method: "Tarjeta", amount: 180, type: "ingreso" },
  { id: "m18", date: "2025-10-12", time: "08:20", description: "Pago cuenta proveedor - Verduras", cash: "Caja Principal", method: "Transferencia", amount: -320, type: "egreso" },
  { id: "m19", date: "2025-10-12", time: "14:00", description: "Propina - Mesa 11", cash: "Caja Principal", method: "Efectivo", amount: 20, type: "ingreso" },
  { id: "m20", date: "2025-10-11", time: "19:40", description: "Pago de cuenta - Mesa 6", cash: "Caja 2", method: "Efectivo", amount: 350, type: "ingreso" },
  { id: "m21", date: "2025-10-11", time: "09:10", description: "Gastos administrativos", cash: "Caja Principal", method: "Transferencia", amount: -75, type: "egreso" },
  { id: "m22", date: "2025-10-10", time: "13:55", description: "Pago de cuenta - Mesa 8", cash: "Caja Terraza", method: "Tarjeta", amount: 210, type: "ingreso" },
  { id: "m23", date: "2025-10-10", time: "16:30", description: "Compra - Insumos pan", cash: "Caja 2", method: "Efectivo", amount: -60, type: "egreso" },
  { id: "m24", date: "2025-10-09", time: "18:05", description: "Pago evento pequeño", cash: "Caja Principal", method: "Tarjeta", amount: 480, type: "ingreso" },
  { id: "m25", date: "2025-10-09", time: "12:45", description: "Devolución cliente", cash: "Caja Principal", method: "Efectivo", amount: -30, type: "egreso" },
  { id: "m26", date: "2025-10-08", time: "14:20", description: "Pago de cuenta - Mesa 10", cash: "Caja 2", method: "Tarjeta", amount: 270, type: "ingreso" },
  { id: "m27", date: "2025-10-08", time: "09:30", description: "Compra insumos - Bebidas", cash: "Caja Terraza", method: "Transferencia", amount: -140, type: "egreso" },
  { id: "m28", date: "2025-10-07", time: "20:10", description: "Pago de catering", cash: "Caja Principal", method: "Transferencia", amount: 900, type: "ingreso" },
  { id: "m29", date: "2025-10-07", time: "11:15", description: "Gastos - Servicio técnico", cash: "Caja Principal", method: "Efectivo", amount: -120, type: "egreso" },
  { id: "m30", date: "2025-10-06", time: "17:40", description: "Pago de cuenta - Mesa 14", cash: "Caja 2", method: "Efectivo", amount: 310, type: "ingreso" },
  { id: "m31", date: "2025-10-06", time: "10:50", description: "Compra - Verduras", cash: "Caja Principal", method: "Efectivo", amount: -200, type: "egreso" },
  { id: "m32", date: "2025-10-05", time: "15:00", description: "Pago de cuenta - Mesa 4", cash: "Caja Terraza", method: "Tarjeta", amount: 145, type: "ingreso" },
  { id: "m33", date: "2025-10-05", time: "08:30", description: "Pago a proveedor - Lacteos", cash: "Caja Principal", method: "Transferencia", amount: -260, type: "egreso" },
  { id: "m34", date: "2025-10-04", time: "19:20", description: "Pago de cuenta - Mesa 13", cash: "Caja 2", method: "Tarjeta", amount: 390, type: "ingreso" },
  { id: "m35", date: "2025-10-04", time: "13:40", description: "Compra - Carnes", cash: "Caja Principal", method: "Transferencia", amount: -540, type: "egreso" },
  { id: "m36", date: "2025-10-03", time: "12:15", description: "Pago de cuenta - Mesa 7", cash: "Caja Principal", method: "Efectivo", amount: 210, type: "ingreso" },
  { id: "m37", date: "2025-10-03", time: "09:05", description: "Gastos - Papelería", cash: "Caja 2", method: "Efectivo", amount: -25, type: "egreso" },
  { id: "m38", date: "2025-10-02", time: "20:30", description: "Pago de evento", cash: "Caja Terraza", method: "Transferencia", amount: 700, type: "ingreso" },
  { id: "m39", date: "2025-10-02", time: "14:10", description: "Compra - Bebidas", cash: "Caja Principal", method: "Efectivo", amount: -110, type: "egreso" },
  { id: "m40", date: "2025-10-01", time: "18:00", description: "Pago de cuenta - Mesa 15", cash: "Caja 2", method: "Tarjeta", amount: 500, type: "ingreso" },
  { id: "m41", date: "2025-09-30", time: "12:20", description: "Pago de cuenta - Mesa 16", cash: "Caja Principal", method: "Efectivo", amount: 125, type: "ingreso" },
  { id: "m42", date: "2025-09-29", time: "10:10", description: "Compra - Limpieza", cash: "Caja Principal", method: "Efectivo", amount: -48, type: "egreso" },
  { id: "m43", date: "2025-09-28", time: "16:45", description: "Pago de cuenta - Mesa 18", cash: "Caja 2", method: "Tarjeta", amount: 215, type: "ingreso" },
  { id: "m44", date: "2025-09-27", time: "19:55", description: "Pago de catering pequeño", cash: "Caja Principal", method: "Transferencia", amount: 430, type: "ingreso" },
  { id: "m45", date: "2025-09-26", time: "11:00", description: "Compra - Pan", cash: "Caja Terraza", method: "Efectivo", amount: -35, type: "egreso" },
  { id: "m46", date: "2025-09-25", time: "14:30", description: "Pago de cuenta - Mesa 20", cash: "Caja Principal", method: "Tarjeta", amount: 330, type: "ingreso" },
  { id: "m47", date: "2025-09-24", time: "13:00", description: "Pago a proveedor - Salsas", cash: "Caja 2", method: "Transferencia", amount: -210, type: "egreso" },
  { id: "m48", date: "2025-09-23", time: "17:20", description: "Pago evento - cumpleaños", cash: "Caja Principal", method: "Efectivo", amount: 650, type: "ingreso" },
  { id: "m49", date: "2025-09-22", time: "09:45", description: "Devolución cliente", cash: "Caja Terraza", method: "Efectivo", amount: -20, type: "egreso" },
  { id: "m50", date: "2025-09-21", time: "15:10", description: "Pago de cuenta - Mesa 21", cash: "Caja 2", method: "Tarjeta", amount: 205, type: "ingreso" },
];
