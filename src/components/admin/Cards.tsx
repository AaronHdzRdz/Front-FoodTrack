import React from "react";


type CardProps = {
  title?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  variant: "1" | "2";
};

// Variante principal: card con header (mantengo como default para compatibilidad con imports existentes)
export default function CardContent({
  title,
  icon,
  children,
  className,
  variant,
}: CardProps) {
  return variant === "2" ? (
    <div
      className={`flex flex-col border-2 border-gray-300 rounded-2xl ${
        className ?? ""
      }`}
    >
      <div className="px-6 gap-3 flex flex-row items-center py-2 bg-Blue-50/20 text-Blue-700 rounded-t-2xl border-b-2 border-gray-300">
        {icon} {title}
      </div>
      <div className="p-6">{children}</div>
    </div>
  ) : variant === "1" ? (
    <div className="p-6 flex flex-col gap-2 border-2 border-gray-300 rounded-2xl">
      {children}
    </div>
  ) : null;
}
