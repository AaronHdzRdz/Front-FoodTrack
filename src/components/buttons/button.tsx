import React from 'react';

// Definimos la interfaz para las propiedades del componente
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outline" | "default";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "default", className, ...props }) => {
  const base = "rounded-xl shadow-[0_4px_4px_0.02px_rgba(0,0,0,0.25)] font-medium text-xl py-3 px-8 transition duration-300 ease-in-out active:scale-95";
  const variantClasses =
    variant === "outline"
      ? "bg-white border border-blue-300 text-blue-700 hover:bg-blue-50"
      : "bg-Blue-700 text-white";

  return (
    <button className={`${base} ${variantClasses} ${className ?? ""}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;