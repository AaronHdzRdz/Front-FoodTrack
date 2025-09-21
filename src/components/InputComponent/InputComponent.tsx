import React from "react";

export interface InputComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  icon: React.ReactNode;
}

const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>(
  ({ placeholder, icon, className, ...rest }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        <div className="absolute left-0 pl-3">{icon}</div>
        <input
          ref={ref}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 text-xl font-light tracking-wide text-[#05765F] placeholder:text-[#05765F] bg-transparent border-b border-[#05765F] focus:outline-none focus:border-b-2 ${className ?? ""}`}
          style={{ fontFamily: "Montserrat, sans-serif" }}
          {...rest} // 👈 pasa onFocus, onBlur, onInput, type, etc.
        />
      </div>
    );
  }
);

InputComponent.displayName = "InputComponent";
export default InputComponent;
