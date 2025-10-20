"use client";

import React, { useState } from "react";
import DatePicker from "./DatePicker";
import CashSelector from "./CashSelector";
import CashDashboardClient from "./CashDashboardClient";

export default function CashPageClient() {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);
  const [selectedCash, setSelectedCash] = useState<string | undefined>(undefined);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <div>
          <DatePicker onChange={(d) => setSelectedDate(d.toISOString().slice(0, 10))} />
        </div>
        <div className="w-56">
          <CashSelector options={["Caja Principal", "Caja 2", "Caja Terraza"]} onChange={(v) => setSelectedCash(v)} />
        </div>
      </div>

      <CashDashboardClient date={selectedDate} cash={selectedCash} />
    </div>
  );
}
