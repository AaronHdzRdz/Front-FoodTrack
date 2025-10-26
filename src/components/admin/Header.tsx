"use client";
import { MagniferOutline, LogoutOutline } from "solar-icon-set";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  placeholder?: string;
  value?: string;
  onSearch?: (term: string) => void;
  /** Mostrar la barra de búsqueda (por defecto true) */
  showSearch?: boolean;
};

export default function Header({ placeholder, value, onSearch, showSearch = true }: Props) {
  const [local, setLocal] = useState<string>(value ?? "");
  const router = useRouter();

  useEffect(() => {
    if (value !== undefined) setLocal(value);
  }, [value]);

  return (
    <header
      className={`py-3 px-4 md:py-4 md:px-10 bg-gray-50 border-gray-300 gap-3 md:gap-4 flex items-center ${
        showSearch ? "flex-row" : "justify-between"
      }`}
    >
      <img src="/FoodTrack.svg" alt="FoodTrack Logo" className="h-6 md:h-10" />

      {showSearch ? (
        <>
          <div className="relative w-full ml-3 md:ml-6">
            <MagniferOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder={placeholder ?? "Buscar..."}
              className="border border-gray-300 rounded-2xl py-2 md:py-3 px-9 md:px-10 bg-gray-200 w-full text-sm md:text-base"
              aria-label="Search"
              value={local}
              onChange={(e) => {
                setLocal(e.target.value);
                onSearch?.(e.target.value);
              }}
            />
          </div>
          <button onClick={() => router.push('/login')} className="text-Blue-700 flex flex-row items-center gap-2 ml-3 md:ml-6 text-sm md:text-base">
            <LogoutOutline />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </>
      ) : (
        <button onClick={() => router.push('/login')} className="text-Blue-700 flex flex-row items-center gap-2 text-sm md:text-base">
          <LogoutOutline />
          <span className="hidden sm:inline">Salir</span>
        </button>
      )}
    </header>
  );
}
