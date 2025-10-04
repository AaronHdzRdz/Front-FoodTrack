// components/FeaturesSection.tsx
'use client';
import React from "react"; // NUEVO: Importar React para tipado
import { CartLarge2, Printer, ClockCircle, UsersGroupRounded, ChartSquare } from "@solar-icons/react";

interface FeatureCardProps {
    Icon: React.ElementType; 
    title: string;
    description: string;
}

const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => (
    <div className="flex flex-col w-full items-start gap-4 px-4 py-5 self-stretch rounded-[14px] border-[1.5px] border-gray-300 bg-gray-50">
        <div className="flex flex-col gap-4">
            <div className="flex w-fit h-fit p-3 bg-blue-700/10 rounded-2xl">
                <Icon className="text-blue-700 w-[24px] h-[24px]" />
            </div>
            <p className="text-navy-900 font-[Arial] text-[16px] not-italic font-normal leading-[16px]">
                {title}
            </p>
            <p className="text-[color:#868686] font-[Arial] text-[16px] not-italic font-normal leading-[24px]">
                {description}
            </p>
        </div>
    </div>
);

const FeaturesSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-10 px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-navy-900 text-center font-[Arial] text-[30px] not-italic font-normal leading-[36px]">
            Todo lo que necesitas para gestionar tu restaurante
          </h2>
          <p className="text-zinc-700 text-center font-[Arial] text-[20px] not-italic font-normal leading-[28px]">
            Una solución completa que simplifica la operación de tu restaurante y
            mejora la experiencia de tus clientes.
          </p>
        </div>
        <div className="w-full flex flex-col gap-8">
          <FeatureCard
            Icon={CartLarge2}
            title="Registro de Comandas"
            description="Toma pedidos de forma rápida e intuitiva desde cualquier dispositivo móvil o tablet."
          />
          <FeatureCard
            Icon={Printer}
            title="Impresión Automática"
            description="Los pedidos se envían automáticamente a cocina y barra sin intervención manual."
          />
          <FeatureCard
            Icon={ClockCircle}
            title="Control de Estados"
            description="Seguimiento en tiempo real: pedido enviado, en preparación, listo para servir."
          />
          <FeatureCard
            Icon={UsersGroupRounded}
            title="Gestión de Roles"
            description="Permisos específicos para meseros, cajeros, cocineros y administradores."
          />
          <FeatureCard
            Icon={ChartSquare}
            title="Reportes de Ventas"
            description="Analiza tu negocio con reportes detallados de ventas, productos más vendidos y tendencias."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;