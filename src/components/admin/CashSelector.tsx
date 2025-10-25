"use client";

import { ChevronDownIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button"

type Props = {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export default function CashSelector({ options, defaultValue, onChange, className }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>(defaultValue ?? options[0]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <div ref={ref} className={`relative ${className ?? "w-fit h-fit max-w-sm"}`}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="bg-white w-50
            rounded-2xl 
            border-2 border-gray-300 
            p-2 flex-row flex justify-between h-fit"
      >
        <span className="text-gray-900 font-sans text-sm font-normal leading-5 not-italic">{selected}</span>
        <ChevronDownIcon className="text-gray-900"/>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className={`text-gray-900 text-left w-50 font-sans text-sm font-normal p-2 leading-5 not-italic ${opt === selected ? "bg-gray-50 font-semibold" : ""}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
