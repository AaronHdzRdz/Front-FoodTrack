"use client";
import { MagniferOutline, LogoutOutline } from "solar-icon-set";
import { useState, useEffect } from "react";

type Props = {
  placeholder?: string;
  value?: string;
  onSearch?: (term: string) => void;
};

export default function Header({ placeholder, value, onSearch }: Props) {
  const [local, setLocal] = useState<string>(value ?? "");

  useEffect(() => {
    if (value !== undefined) setLocal(value);
  }, [value]);

  return (
    <header className="py-4 px-10 bg-gray-50 border-gray-300 gap-4 flex flex-row items-center">
      <img src="/FoodTrack.svg" alt="FoodTrack Logo" />

      <div className="relative w-full">
        <MagniferOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder={placeholder ?? "Buscar..."}
          className="border border-gray-300 rounded-2xl py-3 px-10 bg-gray-200 w-full"
          aria-label="Search"
          value={local}
          onChange={(e) => {
            setLocal(e.target.value);
            onSearch?.(e.target.value);
          }}
        />
      </div>

      <button className="text-Blue-700 flex flex-row items-center gap-3">
        <LogoutOutline />
        Salir
      </button>
    </header>
  );
}
