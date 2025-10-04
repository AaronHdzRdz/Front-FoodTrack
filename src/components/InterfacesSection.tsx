// components/InterfacesSection.tsx
'use client';
import { UsersGroupRounded, Devices, ChartSquare } from "@solar-icons/react";

const InterfaceCard = ({ Icon, title, subtitle, description }) => (
    <div className="flex flex-col border-[1.5px] border-gray-300 bg-gray-50 gap-6 pb-4 rounded-2xl">
        <div className="flex flex-col justify-center bg-Blue-700/10 rounded-t-2xl">
            <div className="flex flex-col items-center p-6 gap-4">
                <div className="bg-Blue-700 p-4 rounded-2xl">
                    <Icon className="text-gray-50 w-16 h-16" />
                </div>
                <h3 className="text-navy-900 text-center font-[Arial] text-[18px] not-italic font-normal leading-[28px]">
                    {title}
                </h3>
                <p className="text-gray-500 text-center font-[Arial] text-[14px] not-italic font-normal leading-[20px]">
                    {subtitle}
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-1.5 px-6">
            <h3 className="text-navy-900 font-[Arial] text-[16px] not-italic font-normal leading-[16px]">
                {title}
            </h3>
            <p className="text-gray-500 font-[Arial] text-[16px] not-italic font-normal leading-[24px]">
                {description}
            </p>
        </div>
    </div>
);

const InterfacesSection = () => {
  return (
    <section className="flex flex-col gap-15 px-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-navy-900 text-center font-[Arial] text-[30px] not-italic font-normal leading-[36px]">
          Interfaces diseñadas para la simplicidad
        </h2>
        <p className="text-gray-700 text-center font-[Arial] text-[20px] not-italic font-normal leading-[28px]">
          Cada pantalla está optimizada para hacer tu trabajo más fácil y
          eficiente.
        </p>
      </div>
      <div className="gap-10 flex flex-col ">
        <InterfaceCard
          Icon={UsersGroupRounded}
          title="Login Simple"
          subtitle="Acceso rápido y seguro para cada rol"
          description="Autenticación por roles con acceso directo a funciones específicas."
        />
        <InterfaceCard
          Icon={Devices}
          title="Control de Mesas"
          subtitle="Vista general del estado de todas las mesas"
          description="Visualización en tiempo real del estado de cada mesa y sus pedidos."
        />
        <InterfaceCard
          Icon={ChartSquare}
          title="Reportes"
          subtitle="Análisis completo de ventas y tendencias"
          description="Métricas detalladas para optimizar la operación de tu restaurante."
        />
      </div>
    </section>
  );
};

export default InterfacesSection;