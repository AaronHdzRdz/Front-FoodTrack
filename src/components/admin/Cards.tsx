import React from "react";
import { PenOutline } from "solar-icon-set";


type CardProps = {
  title?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  variant: "1" | "2" | "3" | "4";
  noPadding?: boolean;
  // Props para variante 3 (modo edición)
  isEditing?: boolean;
  onEdit?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
  // Props para variante 4 (modo edición de contraseña)
  isEditingPassword?: boolean;
  onModify?: () => void;
  onUpdatePassword?: () => void;
  onCancelPassword?: () => void;
};

// Variante principal: card con header (mantengo como default para compatibilidad con imports existentes)
export default function CardContent({
  title,
  icon,
  children,
  className,
  variant,
  noPadding,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  isEditingPassword,
  onModify,
  onUpdatePassword,
  onCancelPassword
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
        <div className="flex gap-2">
          {!isEditing ? (
            <button
              onClick={onEdit}
              className="gap-2 items-center flex-row flex bg-Blue-700 text-white p-3 rounded-2xl hover:bg-navy-900 transition-colors h-12"
            >
              <PenOutline />
              <p>
                Editar
              </p>
            </button>
          ) : (
            <>
              <button
                onClick={onSave}
                className="bg-[#009966] text-white p-3 rounded-2xl hover:bg-[#008855] transition-colors h-12"
              >
                <p>
                  Guardar
                </p>
              </button>
              <button
                onClick={onCancel}
                className="border-2 border-gray-700/50 text-gray-700 p-3 rounded-2xl hover:bg-gray-100 transition-colors h-12"
              >
                <p>
                  Cancelar
                </p>
              </button>
            </>
          )}
        </div>
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
        {!isEditingPassword && (
          <button
            onClick={onModify}
            className="bg-negativo text-white p-3 rounded-2xl gap-2 items-center flex-row flex hover:bg-negativo/80 transition-colors"
          >
            <PenOutline />
            Modificar
          </button>
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  ) : null;
}
