"use client";

import CashSelector from "@/components/admin/CashSelector";
import Header from "@/components/admin/Header";
import NavTabs from "@/components/admin/NavTabs";
import {
  CourseDownOutline,
  CourseUpOutline,
  DollarOutline,
  WalletOutline,
} from "solar-icon-set";
import React, { useMemo, useState } from "react";
import DatePicker from "@/components/admin/DatePicker";
import MovementCard from "@/components/admin/MovementCard";
import { cashMovements } from "@/data/cashMovements";
import { openingBalances } from "@/data/openingBalances";
import SummaryCard from "@/components/admin/SummaryCard";

export default function CashPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedCash, setSelectedCash] = useState<string>("Caja Principal");

  function formatDateToISO(d: Date) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  const isoDate = useMemo(() => formatDateToISO(selectedDate), [selectedDate]);

  const filteredMovements = useMemo(() => {
    return cashMovements
      .filter((m) => m.date === isoDate && (selectedCash ? m.cash === selectedCash : true))
      .sort((a, b) => b.time.localeCompare(a.time));
  }, [isoDate, selectedCash]);

  // Cálculos para las SummaryCard
  const { capitalInicial, totalIngresos, totalEgresos, countIngresos, countEgresos, propinas, balanceActual } = useMemo(() => {
    const fm = filteredMovements;
    // Capital inicial: buscar movimientos que indiquen apertura (method === 'Otro' o descripción contiene 'Apertura')
    // Primero intentar obtener opening balance explícito
    const ob = openingBalances.find((o) => o.date === isoDate && o.cash === selectedCash);
    let cap = 0;
    if (ob) {
      cap = ob.amount;
    } else {
      cap = fm.filter((m) => m.method === "Otro" || /Apertura/i.test(m.description)).reduce((s, m) => s + m.amount, 0);
    }

  const ingresos = fm.filter((m) => m.type === "ingreso").reduce((s, m) => s + Math.max(0, m.amount), 0);
  const egresos = fm.filter((m) => m.type === "egreso").reduce((s, m) => s + Math.abs(Math.min(0, m.amount)), 0);
    // excluir propinas de los ingresos del establecimiento
    const ingresosSinPropinas = fm
      .filter((m) => m.type === "ingreso" && !/Propina/i.test(m.description))
      .reduce((s, m) => s + Math.max(0, m.amount), 0);
    const ci = fm.filter((m) => m.type === "ingreso" && !/Propina/i.test(m.description)).length;
    const ce = fm.filter((m) => m.type === "egreso").length;

  const tips = fm.filter((m) => /Propina/i.test(m.description) && m.type === "ingreso").reduce((s, m) => s + Math.max(0, m.amount), 0);

  // ya tenemos ingresosSinPropinas calculado arriba (excluye propinas)
  const bal = cap + ingresosSinPropinas - egresos;

    return {
      capitalInicial: cap,
  totalIngresos: ingresosSinPropinas,
      totalEgresos: egresos,
      countIngresos: ci,
      countEgresos: ce,
      propinas: tips,
      balanceActual: bal,
    };
  }, [filteredMovements]);

  function fmt(n: number) {
    return n >= 0 ? `+$${n}` : `-$${Math.abs(n)}`;
  }


  return (
    <>
      <Header showSearch={false} />
      <main className="flex flex-col">
        <NavTabs />
        <div className="flex flex-col items-start gap-8 p-10 w-full">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-row justify-between items-center w-full gap-4">
              <section className="flex flex-row gap-4 items-center w-full md:flex-1">
                <div className="p-3 bg-Blue-700 text-gray-50 rounded-2xl">
                  <WalletOutline className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-900 font-sans text-2xl font-normal leading-9 not-italic">
                    Gestión de Caja
                  </p>
                  <p className="text-gray-700 font-sans text-base font-normal leading-relaxed not-italic">
                    Administra los movimientos de efectivo
                  </p>
                </div>
              </section>
              <section className="flex flex-row h-fit gap-4 md:ml-4 md:justify-end">
                <div className="text-gray-700 flex flex-row items-center gap-2">

                  <div>
                      <DatePicker value={selectedDate} onChange={(d) => setSelectedDate(d)} />
                    </div>
                </div>
                {/*Botton desplegable */}
                <CashSelector
                  options={["Caja Principal", "Caja 2", "Caja Terraza"]}
                  defaultValue={selectedCash}
                  onChange={(v) => setSelectedCash(v)}
                />
              </section>
            </div>
            <div className="grid grid-cols-4 gap-10">
              <SummaryCard
                className="bg-white border-2 border-gray-300"
                icon={<div className="bg-gray-700 rounded-2xl p-3 w-fit h-fit text-gray-50"><WalletOutline className="w-6 h-6" /></div>}
                title="Capital Inicial"
                value={capitalInicial !== 0 ? `$${capitalInicial}` : "$0"}
              />

              <SummaryCard
                className="bg-[#F0FDF4] border-2 border-[#A4F4CF]"
                icon={<div className="bg-[#00A63E] rounded-2xl p-3 w-fit h-fit text-gray-50"><CourseUpOutline className="w-6 h-6" /></div>}
                title="Total Ingresos"
                value={totalIngresos !== 0 ? `+$${totalIngresos}` : "$0"}
                badge={<p className="bg-estado-exito/10 rounded-2xl text-[#00A63E] h-fit w-fit p-2">+{countIngresos}</p>}
              />

              <SummaryCard
                className="bg-[#FFF1F2] border-2 border-[#FFC9C9]"
                icon={<div className="bg-[#C24343] rounded-2xl p-3 w-fit h-fit text-gray-50"><CourseDownOutline className="w-6 h-6" /></div>}
                title="Total Egresos"
                value={totalEgresos !== 0 ? `-$${totalEgresos}` : "$0"}
                badge={<p className="bg-[#FFE2E2] rounded-2xl text-[#C24343] h-fit w-fit p-2">-{countEgresos}</p>}
              />

              <SummaryCard
                className="bg-[#C5E3EE4D] border-2 border-[#7EC2FD4D]"
                icon={<div className="bg-Blue-700 rounded-2xl p-3 w-fit h-fit text-gray-50"><DollarOutline className="w-6 h-6" /></div>}
                title="Balance Actual"
                value={balanceActual !== 0 ? `$${balanceActual}` : "$0"}
                badge={<p className="bg-[#7EC2FD4D] rounded-2xl text-navy-900 h-fit w-fit p-2">+${propinas} propinas</p>}
              />
            </div>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 gap-12 w-full">
            <section className="flex flex-row justify-between">
              <div className="gap-1 flex flex-col">
                <p className="text-[#151515] font-sans text-xl font-normal leading-[30px] not-italic">
                  Movimientos del Día
                </p>
                <p className="text-[#464646] font-sans text-base font-normal leading-relaxed not-italic">
                  Historial de transacciones registradas
                </p>
              </div>
              <button className="bg-Blue-700 h-fit w-fit text-white font-sans text-base font-normal leading-relaxed not-italic py-2 px-4 rounded-2xl">
                + Generar Movimiento
              </button>
            </section>
            <section className="gap-12 flex flex-col">
              {filteredMovements.length === 0 ? (
                <p className="text-gray-500">No hay movimientos para la fecha y caja seleccionadas.</p>
              ) : (
                filteredMovements.map((m) => (
                  <MovementCard key={m.id} description={m.description} time={m.time} method={m.method} amount={m.amount} type={m.type} />
                ))
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
