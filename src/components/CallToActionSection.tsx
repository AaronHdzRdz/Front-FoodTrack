// components/CallToActionSection.tsx
'use client';
import { Phone, CheckCircle } from "@solar-icons/react";

const CallToActionSection = () => {
  return (
    <section className="flex flex-col gap-8 bg-navy-900">
      <div className="flex px-14">
        <h2 className="text-gray-50 text-center font-[Arial] text-[30px] not-italic font-normal leading-[36px]">
          Moderniza tu restaurante hoy con Foodtrack
        </h2>
      </div>
      <div className="flex px-12">
        <p className="text-Blue-50 text-center font-[Arial] text-[20px] not-italic font-normal leading-[28px]">
          Únete a los restaurantes que ya digitalizaron sus procesos y mejoraron
          su rentabilidad.
        </p>
      </div>
      <div className="py-6 flex flex-col items-center">
        <button className="flex w-fit p-[12px] justify-center items-center gap-[16px] text-navy-900 mx-auto rounded-[8px] bg-Blue-200">
          <Phone />
          Contactanos
        </button>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-row gap-2 items-center">
          <CheckCircle className="text-estado-exito" />
          <p className="text-blue-50 text-center font-[Arial] text-[14px] not-italic font-normal leading-[20px]">
            Configuración gratuita
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <CheckCircle className="text-estado-exito" />
          <p className="text-blue-50 text-center font-[Arial] text-[14px] not-italic font-normal leading-[20px]">
            Soporte técnico incluido
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <CheckCircle className="text-estado-exito" />
          <p className="text-blue-50 text-center font-[Arial] text-[14px] not-italic font-normal leading-[20px]">
            30 días de prueba
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;