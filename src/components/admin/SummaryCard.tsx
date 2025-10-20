"use client";

import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
};

export default function SummaryCard({ icon, title, value, badge, className }: Props) {
  return (
    <section className={`p-3 w-full flex flex-col gap-3 rounded-2xl ${className ?? "bg-white border-2 border-gray-300"}`}>
      <div className="flex flex-row justify-between items-center">
        <div className="w-fit h-fit">{icon}</div>
        {badge ? badge : null}
      </div>

      <p className="text-gray-500 font-sans text-base font-normal leading-relaxed not-italic">{title}</p>
      <p className="text-gray-900 font-sans text-base font-normal leading-relaxed not-italic">{value}</p>
    </section>
  );
}
