"use client";

import React from "react";
import { Movement } from "@/data/cashMovements";
import { ClockCircleOutline, BanknoteOutline, CardOutline } from "solar-icon-set";

export default function MovementItem({ m }: { m: Movement }) {
  return (
    <div className={`p-5 gap-5 flex flex-row items-center ${m.type === "ingreso" ? "bg-[#F0FDF4] border-[#A4F4CF]" : "bg-[#FFF1F2] border-[#FFC9C9]"} border-2 rounded-2xl`}>
      <div className={`relative ${m.type === "ingreso" ? "bg-[#00A63E] text-white" : "bg-[#EC003F] text-white"} p-4 rounded-2xl inline-flex items-center justify-center w-fit`}>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
        <div className={`absolute -top-2 -right-2 p-1 bg-white ${m.type === "ingreso" ? "text-[#009966]" : "text-[#EC003F]"} rounded-full w-6 h-6 flex items-center justify-center shadow-md`}>
          {m.type === "ingreso" ? <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7"/></svg> : <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5"/></svg>}
        </div>
      </div>
      <div className="w-full">
        <p className="text-[#004F3B] font-sans text-base font-normal leading-relaxed not-italic">{m.description}</p>
        <div className="flex flex-row gap-6 mt-2">
          <div className="flex flex-row items-center gap-1 text-[#464646]"><ClockCircleOutline /><p className="text-[#464646]">{m.time}</p></div>
          <div className={`flex flex-row items-center px-3 gap-2 rounded-2xl ${m.method === "Efectivo" ? "bg-[#D0FAE5] text-[#007A55]" : m.method === "Tarjeta" ? "bg-[#EEF2FF] text-[#1E40AF]" : "bg-[#FFF3E0] text-[#92400E]"}`}>
            {m.method === "Efectivo" ? <BanknoteOutline /> : m.method === "Tarjeta" ? <CardOutline /> : <BanknoteOutline />}
            <p>{m.method}</p>
          </div>
        </div>
      </div>
      <p className={`font-sans text-base font-normal leading-relaxed not-italic ${m.type === "ingreso" ? "text-[#007A55]" : "text-[#C10007]"}`}>{m.type === "ingreso" ? `+$${m.amount}` : `-$${Math.abs(m.amount)}`}</p>
    </div>
  );
}
