"use client";
type Props = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function OrderTypeButton({ label, active, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "px-4 py-2 md:px-6 md:py-3 bg-Blue-700 text-white rounded-full font-semibold shadow"
          : "px-4 py-2 md:px-6 md:py-3 bg-white text-gray-700 border border-gray-200 rounded-full hover:bg-gray-50"
      }
    >
      {label}
    </button>
  );
}
