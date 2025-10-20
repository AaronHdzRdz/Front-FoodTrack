"use client";

import React, { useEffect, useRef, useState } from "react";
import { CalendarOutline } from "solar-icon-set";

type Props = {
  value?: Date;
  onChange?: (d: Date) => void;
};

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function addMonths(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}

function daysInMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}

export default function DatePicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date>(value ?? new Date());
  const [viewDate, setViewDate] = useState<Date>(startOfMonth(selected));
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  const weeks: Date[][] = [];
  const firstDay = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    1
  ).getDay();
  const total = daysInMonth(viewDate);
  let day = 1 - firstDay;
  for (let w = 0; w < 6; w++) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++, day++) {
      week.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), day));
    }
    weeks.push(week);
  }

  function isSameDate(a: Date, b: Date) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="text-gray-700 flex flex-row items-center gap-2 bg-white border-gray-300 border-2 rounded-2xl h-fit p-2"
      >
       <CalendarOutline/>
        <span className="text-sm">{selected.toLocaleDateString()}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow p-4 z-50 w-72">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => setViewDate(addMonths(viewDate, -1))}
              className="px-2"
            >
              ◀
            </button>
            <div className="font-medium">
              {viewDate.toLocaleString(undefined, {
                month: "long",
                year: "numeric",
              })}
            </div>
            <button
              onClick={() => setViewDate(addMonths(viewDate, 1))}
              className="px-2"
            >
              ▶
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500">
            <div>Dom</div>
            <div>Lun</div>
            <div>Mar</div>
            <div>Mié</div>
            <div>Jue</div>
            <div>Vie</div>
            <div>Sáb</div>
          </div>
          <div className="grid grid-cols-7 gap-1 mt-2 text-sm">
            {weeks.map((week, wi) =>
              week.map((d, di) => {
                const inMonth = d.getMonth() === viewDate.getMonth();
                return (
                  <button
                    key={`${wi}-${di}`}
                    onClick={() => {
                      const chosen = new Date(
                        d.getFullYear(),
                        d.getMonth(),
                        d.getDate()
                      );
                      setSelected(chosen);
                      setOpen(false);
                    }}
                    className={`p-2 rounded-md ${
                      isSameDate(d, selected)
                        ? "bg-Blue-700 text-white"
                        : inMonth
                        ? "hover:bg-gray-100"
                        : "text-gray-300"
                    }`}
                  >
                    {d.getDate()}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
