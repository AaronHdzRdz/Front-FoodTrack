// components/FutureFeaturesSection.tsx
'use client';
import { Box, Buildings2, QrCode } from "@solar-icons/react";

const FutureFeatureCard = ({ Icon, title, description }) => (
    <div className="flex flex-col bg-zinc-50 border-Blue-200 rounded-2xl border-2">
        <div className="flex flex-col items-center gap-4 px-6 py-3">
            <div className="flex items-center bg-Blue-200/20 rounded-2xl p-4">
                <Icon className="text-Blue-700 w-6 h-6" />
            </div>
            <p className="text-navy-900 text-center font-[Arial] text-[16px] not-italic font-normal leading-[16px]">
                {title}
            </p>
            <p className="text-gray-500 text-center font-[Arial] text-[16px] not-italic font-normal leading-[24px]">
                {description}
            </p>
        </div>
    </div>
);

const FutureFeaturesSection = () => {
  return (
    <section className="flex flex-col gap-16 p-4 bg-Blue-50/30">
      <div className="flex flex-col gap-4 items-center">
        <div className="bg-Blue-200/20 gap-4 p-4 flex flex-row rounded-lg text-navy-900 w-fit">
          <p className="text-navy-900 text-center text-xs leading-4">
            Próximamente
          </p>
        </div>
        <h2 className="text-navy-900 w-2/3 text-center font-[Arial] text-[30px] not-italic font-normal leading-[36px]">
          El futuro de tu restaurante
        </h2>
        <p className="text-gray-700 text-center font-[Arial] text-[20px] not-italic font-normal leading-[28px]">
          Estamos trabajando en funcionalidades avanzadas para llevar tu negocio
          al siguiente nivel.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <FutureFeatureCard
          Icon={Box}
          title="Control de Inventarios"
          description="Gestión automática de stock con alertas de productos agotados y órdenes de compra."
        />
        <FutureFeatureCard
          Icon={Buildings2}
          title="Múltiples Sucursales"
          description="Administra varios restaurantes desde una sola plataforma con reportes consolidados."
        />
        <FutureFeatureCard
          Icon={QrCode}
          title="Pedidos por QR"
          description="Los clientes podrán ordenar directamente desde su mesa escaneando un código QR."
        />
      </div>
    </section>
  );
};

export default FutureFeaturesSection;