// components/WorkflowSection.tsx
const WorkflowStep = ({ step, title, description, imgSrc, imgAlt }) => (
    <div className="flex flex-col items-center gap-6">
        <div className="bg-Blue-700 rounded-full text-gray-50 w-fit aspect-square p-6">
            <p className="text-gray-50 text-center font-[Arial] text-[40px] not-italic font-normal leading-[40px]">
                {step}
            </p>
        </div>
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-navy-900 text-center font-[Arial] text-[20px] not-italic font-normal leading-[28px]">
                {title}
            </h3>
            <p className="text-gray-700 text-center font-[Arial] text-[16px] not-italic font-normal leading-[24px]">
                {description}
            </p>
        </div>
        <img
            src={imgSrc}
            className="rounded-lg w-full"
            alt={imgAlt}
        />
    </div>
);

const WorkflowSection = () => {
  return (
    <section className="flex flex-col gap-15 px-4">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-navy-900 text-center font-[Arial] text-[30px] not-italic font-normal leading-[36px]">
          Así de simple funciona Foodtrack
        </h2>
        <p className="text-gray-700 text-center font-[Arial] text-[20px] not-italic font-normal leading-[28px]">
          Un flujo de trabajo optimizado que reduce errores y acelera el
          servicio.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <WorkflowStep
          step="1"
          title="Mesero registra pedido"
          description="El mesero toma el pedido en su tablet de forma rápida e intuitiva."
          imgSrc="/Cena_Digital.jpg"
          imgAlt="Cena Digital"
        />
        <WorkflowStep
          step="2"
          title="Impresión automática"
          description="El sistema imprime automáticamente en cocina y barra."
          imgSrc="/FallBack.png"
          imgAlt="FallBack"
        />
        <WorkflowStep
          step="3"
          title="Cajero cobra"
          description="El cajero procesa el pago y genera el reporte correspondiente."
          imgSrc="/FallBack2.png"
          imgAlt="FallBack2"
        />
        <WorkflowStep
          step="4"
          title="Admin visualiza todo"
          description="El administrador tiene acceso completo al historial y pedidos activos."
          imgSrc="/FallBack3.jpg"
          imgAlt="FallBack3"
        />
      </div>
    </section>
  );
};

export default WorkflowSection;