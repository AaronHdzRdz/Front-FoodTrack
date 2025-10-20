"use client";

import React, { useMemo, useState } from "react";
import { cashMovements, Movement } from "@/data/cashMovements";
import MovementItem from "./MovementItem";

export default function MovementsList({ date, cash }: { date?: string; cash?: string }) {
  const [page, setPage] = useState(1);
  const perPage = 8;

  const filtered = useMemo(() => {
    return cashMovements.filter((m) => {
      if (date && m.date !== date) return false;
      if (cash && m.cash !== cash) return false;
      return true;
    });
  }, [date, cash]);

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const shown = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {shown.map((m: Movement) => (
          <MovementItem key={m.id} m={m} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">Mostrando {shown.length} de {total} resultados</p>
        <div className="flex gap-2">
          <button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-3 py-1 rounded bg-gray-100">Anterior</button>
          <button disabled={page >= pages} onClick={() => setPage((p) => Math.min(pages, p + 1))} className="px-3 py-1 rounded bg-gray-100">Siguiente</button>
        </div>
      </div>
    </div>
  );
}
