// components/HeroSection.tsx
'use client';
import { CheckCircle, GraphUp } from "@solar-icons/react";

const HeroSection = () => {
  return (
    <section className="py-10 px-4 flex flex-col bg-blue-50  ">
      <div className="flex flex-col gap-8 ">
        <div className="flex-col flex gap-8">
          <div className="gap-4 flex flex-col">
            <div className="bg-Blue-200/20 gap-4 p-4 flex flex-row rounded-lg text-navy-900 w-fit">
              <p className="text-navy-900 text-center text-xs leading-4">
                Sistema de comandas digital
              </p>
            </div>
            <h1 className="text-navy-900 font-sans text-4xl font-normal leading-10 ">
              Digitaliza las comandas de tu restaurante
            </h1>
            <h2 className="text-gray-700 font-sans text-xl font-normal leading-7">
              Registra pedidos, imprime automáticamente en cocina/barra y
              controla tu negocio desde un solo lugar.
            </h2>
          </div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-row items-center gap-2 ">
              <CheckCircle className="text-green-500" />
              <p className="text-gray-700 font-sans text-sm font-normal leading-5">
                Soporte 24/7
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <CheckCircle className="text-green-500" />
              <p className="text-gray-700 font-sans text-sm font-normal leading-5">
                Prueba gratuita
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full aspect-square">
          <img
            src="/Cena_Digital.jpg"
            className="w-full h-full object-cover rounded-2xl shadow-2xl bg-blue-700/10"
            alt="Cena Digital"
          />

          <div className="absolute bottom-0 right-0 translate-x-1/16 translate-y-1/4 max-w-[90%] flex w-fit h-fit p-0.5 flex-col items-start rounded-[14px] border-[1.247px] border-zinc-200 bg-zinc-50 shadow-xl">
            <div className="flex flex-row items-center gap-3 p-5">
              <div className="flex items-center bg-estado-exito/10 p-4 rounded-full">
                <GraphUp className="text-estado-exito w-[24px] h-[24px]" />
              </div>
              <div className="flex flex-col">
                <p className="text-zinc-700 font-[Arial] text-[14px] not-italic font-normal leading-[20px]">
                  Ventas del día
                </p>
                <p className="text-navy-900 font-[Arial] text-[20px] not-italic font-normal leading-[28px]">
                  +25%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;