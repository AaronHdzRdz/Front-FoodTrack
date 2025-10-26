import React from "react";

type StatCardProps = {
  id?: string;
  icon: React.ReactNode;
  iconWrapper: string;
  percent: string;
  trendIcon?: React.ReactNode;
  label: string;
  value: string;
  sub: string;
};

export default function StatCard({ icon, iconWrapper, percent, trendIcon, label, value, sub }: StatCardProps) {
  // This component renders only the inner content of the original CardContent
  // (the surrounding wrapper is kept by the caller to preserve exact layout
  // and spacing). Keep classes inside identical to previous structure.
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className={iconWrapper}>{icon}</div>
        <div className="flex flex-row gap-1 text-[#009966]">
          {trendIcon}
          <p className=" font-sans text-base not-italic font-normal leading-6">{percent}</p>
        </div>
      </div>
      <p className="text-gray-500 font-sans text-base not-italic font-normal leading-6">{label}</p>
      <p className="text-navy-900 font-sans text-3xl not-italic font-normal leading-9">{value}</p>
      <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-5">{sub}</p>
    </>
  );
}
 
