import React from 'react';

// Definimos la interfaz para las propiedades del componente
interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className="
        rounded-[10px]
        bg-[#05765F]
        shadow-[0_4px_4px_0.02px_rgba(0,0,0,0.25)]
        text-white
        font-medium
        text-xl
        py-3
        px-8
        transition
        duration-300
        ease-in-out
        active:scale-95
      "
    >
      {children}
    </button>
  );
};

export default Button;