import React from "react";
import IconBox from "@/components/ui/iconBox";
import ProgressBar from "@/components/ui/progressBar";

type PaymentRowProps = {
  id?: string;
  icon: React.ReactNode;
  title: string;
  progress: number;
  amount: string;
};

export default function PaymentRow({ icon, title, progress, amount }: PaymentRowProps) {
  return (
    <div className="flex flex-row gap-5 items-center">
      <IconBox icon={icon} bgClass="bg-Blue-700" textClass="text-white" />
      <div className="flex flex-col w-full">
        <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6">{title}</p>
        <div className="w-full">
          <ProgressBar value={progress} size="sm" showValue />
        </div>
      </div>

      <p className="text-blue-700 font-sans text-base not-italic font-normal leading-6">{amount}</p>
    </div>
  );
}
