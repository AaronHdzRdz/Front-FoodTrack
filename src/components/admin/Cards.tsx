import React from "react";
import { PenOutline } from "solar-icon-set";


type CardProps = {
  title?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  variant: "1" | "2" | "3"| "4";
  noPadding?: boolean;
};

// Variante principal: card con header (mantengo como default para compatibilidad con imports existentes)
export default function CardContent({
  title,
  icon,
  children,
  className,
  variant, noPadding
}: CardProps) {
  return variant === "2" ? (
    <div
      className={`flex flex-col border-2 border-gray-300 rounded-2xl ${className ?? ""
        }`}
    >
      <div className="px-6 gap-3 flex flex-row items-center py-2 bg-Blue-50/20 text-Blue-700 rounded-t-2xl border-b-2 border-gray-300">
        {icon} {title}
      </div>
      <div className="p-6">{children}</div>
    </div>
  ) : variant === "1" ? (
    <div
      className={`flex flex-col gap-2 border-2 border-gray-300 rounded-2xl ${variant === "1" && !noPadding ? "p-6" : ""
        } ${className ?? ""}`}
    >
      {children}
    </div>
  ) : variant === "3" ? (
    <div
      className={`flex flex-col border-2 border-gray-300 rounded-2xl ${className ?? ""
        }`}
    >
      <div className="px-6 flex flex-row justify-between items-center py-2 bg-Blue-50/20 text-Blue-700 rounded-t-2xl border-b-2 border-gray-300">
        <div className="gap-3 flex flex-row items-center">
          {icon} {title}
        </div>
        <button className="bg-Blue-700 text-white p-3 rounded-2xl gap-2 items-center flex-row flex">
          <PenOutline />
          Editar
        </button>
      </div>
      <div className="p-6">{children}</div>
    </div>
  ) : variant === "4" ? (
    <div
      className={`flex flex-col border-2 border-gray-300 rounded-2xl ${className ?? ""
        }`}
    >
      <div className="px-6 flex flex-row justify-between items-center py-2 bg-negativo/10 text-negativo rounded-t-2xl border-b-2 border-gray-300">
        <div className="gap-3 flex flex-row items-center">
          {icon} {title}
        </div>
        <button className="bg-negativo text-white p-3 rounded-2xl gap-2 items-center flex-row flex">
          <PenOutline />
          Modificar
        </button>
      </div>
      <div className="p-6">{children}</div>
    </div>
  ) : null;
}
