"use client";

import React, { useState } from "react";
import { EyeBold, EyeClosedBold } from "solar-icon-set";

export interface InputComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  icon: React.ReactNode;
}

const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>(
  ({ placeholder, icon, className, ...rest }, ref) => {
    // extraer el type de los props para controlar la visibilidad si es password
    const { type, ...inputProps } = rest as React.InputHTMLAttributes<
      HTMLInputElement
    >;
    const initialType = (type as string) ?? "text";
    const [visible, setVisible] = useState(false);
    const isPassword = initialType === "password";
    const inputType = isPassword ? (visible ? "text" : "password") : initialType;

    return (
      <div className="flex flex-col gap-2">
        {/*<p className="text-navy-900 font-actor text-sm font-normal leading-3 not-italic">
          {placeholder}
        </p>*/}
        <div className="relative flex items-center w-full gap-2">
          <div className="absolute left-0 pl-3 text-gray-500 pointer-events-none">{icon}</div>
          <input
            ref={ref}
            placeholder={placeholder}
            type={inputType}
            className={`w-full pl-10 pr-12 p-1 text-xl font-light tracking-wide text-gray-500 placeholder:text-gray-500 border-2 rounded-lg border-gray-300 ${
              className ?? ""
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
            {...inputProps} // 👈 pasa onFocus, onBlur, onInput, etc. (type ya controlado)
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setVisible((v) => !v)}
              aria-label={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
              className="absolute right-2 inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700"
            >
              {visible ? (
                <EyeBold />
              ) : (
                <EyeClosedBold />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

InputComponent.displayName = "InputComponent";
export default InputComponent;
