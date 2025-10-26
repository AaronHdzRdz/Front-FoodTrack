import React from "react";

type FinancialMetricProps = {
  wrapperClass: string;
  iconWrapperClass: string;
  icon: React.ReactNode;
  titleClass?: string;
  title: string;
  valueClass?: string;
  value: React.ReactNode;
};

export default function FinancialMetric({ wrapperClass, iconWrapperClass, icon, titleClass, title, valueClass, value }: FinancialMetricProps) {
  return (
    <div className={wrapperClass}>
      <div className={iconWrapperClass}>{icon}</div>
      <div className="flex flex-col items-end">
        <p className={titleClass ?? "text-gray-700 font-sans text-sm not-italic font-normal leading-5"}>{title}</p>
        <p className={valueClass ?? "text-gray-900 font-sans text-2xl not-italic font-normal leading-8"}>{value}</p>
      </div>
    </div>
  );
}
