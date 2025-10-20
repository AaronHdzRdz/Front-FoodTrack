import { cashMovements, Movement } from "./cashMovements";

export type OpeningBalance = {
  date: string; // ISO yyyy-mm-dd
  cash: "Caja Principal" | "Caja 2" | "Caja Terraza";
  amount: number;
};

// Generar opening balances automáticamente a partir de los movimientos.
// Lógica:
// - Para cada fecha con movimientos y para cada caja: si existe un movimiento de apertura
//   (method === 'Otro' o descripción contiene 'Apertura'), usar su suma como opening.
// - Si no existe, usar el cierre del día anterior como opening (inicial 0 si no hay histórico).
// - El cierre se calcula como: opening + (ingresos - propinas) - egresos (propinas se excluyen del balance del negocio).

const cashTypes: OpeningBalance["cash"][ ] = ["Caja Principal", "Caja 2", "Caja Terraza"];

function uniqueDates(movements: Movement[]) {
  const s = new Set<string>();
  movements.forEach((m) => s.add(m.date));
  return Array.from(s).sort();
}

const dates = uniqueDates(cashMovements);

const openingBalances: OpeningBalance[] = [];

// mantener cierre anterior por caja
const prevClosing: Record<string, number> = {};
for (const cash of cashTypes) prevClosing[cash] = 0;

for (const date of dates) {
  for (const cash of cashTypes) {
    const todays = cashMovements.filter((m) => m.date === date && m.cash === cash);

    // apertura explícita
    const openingFromMov = todays
      .filter((m) => m.method === "Otro" || /Apertura/i.test(m.description))
      .reduce((s, m) => s + m.amount, 0);

    const opening = openingFromMov !== 0 ? openingFromMov : prevClosing[cash] ?? 0;

    // ingresos/egresos
    const ingresos = todays.filter((m) => m.type === "ingreso").reduce((s, m) => s + Math.max(0, m.amount), 0);
    const egresos = todays.filter((m) => m.type === "egreso").reduce((s, m) => s + Math.abs(Math.min(0, m.amount)), 0);
    const propinas = todays.filter((m) => /Propina/i.test(m.description) && m.type === "ingreso").reduce((s, m) => s + Math.max(0, m.amount), 0);

    const ingresosSinPropinas = ingresos - propinas;

    const closing = opening + ingresosSinPropinas - egresos;

    openingBalances.push({ date, cash, amount: opening });

    prevClosing[cash] = closing;
  }
}

export { openingBalances };

