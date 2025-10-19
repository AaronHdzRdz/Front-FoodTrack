"use client";
import { useState } from "react";
import OrderTypeButton from "./OrderTypeButton";

type Props = {
  onChange?: (value: string) => void;
  defaultValue?: string;
};

const options = ["Mesas", "Barra", "Para Llevar"];

export default function OrderTypeSelector({ onChange, defaultValue = "Mesas" }: Props) {
  const [selected, setSelected] = useState<string>(defaultValue);

  function handle(val: string) {
    setSelected(val);
    onChange?.(val);
  }

  return (
    <div className="flex flex-row gap-3 md:gap-4 items-center">
      {options.map((o) => (
        <OrderTypeButton key={o} label={o} active={o === selected} onClick={() => handle(o)} />
      ))}
    </div>
  );
}
