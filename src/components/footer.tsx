'use client';
import { Global, Letter, PhoneRounded } from "@solar-icons/react";

export default function Footer() {
  return (
    <div className="flex flex-col py-13 px-4 gap-12">
      <div className="flex flex-col gap-4">
        <img src="/FoodTrack.svg" className="w-19" alt="FoodTrack Logo" />
        <p className="text-gray-700 font-[Arial] text-[16px] not-italic font-normal leading-[24px]">
          Digitalizamos la operación de restaurantes pequeños y medianos con
          tecnología simple y efectiva.
        </p>
      </div>
      <div className="flex flex-col h-[89.184px] pt-[32px] gap-[16px] items-center self-stretch border-t-[1.247px] border-t-gray-300">
        <p className="text-gray-700 font-[Arial] text-[16px] not-italic font-normal leading-[24px]">
          © 2025 FoodTrack. Todos los derechos reservados.
        </p>
        <div className="flex flex-row gap-6">
          <Global className="text-gray-700" />
          <Letter className="text-gray-700" />
          <PhoneRounded className="text-gray-700" />
        </div>
      </div>
    </div>
  );
}
