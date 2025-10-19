"use client";
type Props = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function CategoryButton({ label, active, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "p-2 md:p-3 border-Blue-700 bg-Blue-700 text-gray-50 border-2 rounded-full w-fit h-fit text-sm md:text-base"
          : "p-2 md:p-3 border-gray-300 text-gray-700 border-2 rounded-full w-fit h-fit text-sm md:text-base"
      }
    >
      {label}
    </button>
  );
}
