import Button from "@/components/buttons/button";
import InputComponent from "@/components/InputComponent/InputComponent";
import { KeyBold, UserBold } from "solar-icon-set";

export default function ActivatePage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-Blue-50 px-4 py-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-36 md:w-44"
            src="/FoodTrack.svg"
            alt="FoodTrack logo"
          />
          <h1 className="text-gray-800 text-xl md:text-2xl font-actor font-medium">
            Bienvenido
          </h1>
          <p className="text-gray-600 text-center text-sm md:text-base">
            Ingresa tu clave del restaurante
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <InputComponent ref={undefined} placeholder="Clave del restaurante" icon={<KeyBold />} />
          <Button onClick={undefined} className="w-full">Continuar</Button>
        </div>

      </div>
    </main>
  );
}
