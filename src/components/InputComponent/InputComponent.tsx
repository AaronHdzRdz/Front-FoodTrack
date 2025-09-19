import React from 'react';

// Define the types for the props
interface InputComponentProps {
  placeholder: string;
  icon: React.ReactNode;
}

const InputComponent = ({ placeholder, icon }: InputComponentProps) => {
  return (
    <div className="relative flex items-center w-full">
      <div className="absolute left-0 pl-3">
        {icon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 text-xl font-light tracking-wide text-[#05765F] placeholder:text-[#05765F] bg-transparent border-b border-[#05765F] focus:outline-none focus:border-b-2"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      />
    </div>
  );
};

export default InputComponent;