"use client";

import React from "react";
import MovementsList from "./MovementsList";

type Props = {
  date?: string;
  cash?: string;
};

export default function CashDashboardClient({ date, cash }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <MovementsList date={date} cash={cash} />
    </div>
  );
}
