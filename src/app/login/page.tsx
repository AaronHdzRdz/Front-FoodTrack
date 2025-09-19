"use client";
import Button from "@/components/buttons/button";
import InputComponent from "@/components/InputComponent/InputComponent";
import Image from "next/image";
import { LockBold, LockKeyholeBold, UserBold } from "solar-icon-set";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[linear-gradient(168deg,#F4CCBE_11.09%,#F2E8D8_46.21%,#D0E4DD_92.33%)]">
      <div className="gap-9 px-6 py-4 rounded-2xl bg-white/59 shadow-lg w-63 items-center flex flex-col">
        <div className="rounded-full w-[123px] h-[123px] bg-[#FFFFFF] overflow-hidden">
          <Image
            src="/mascota.png"
            alt="Mascota"
            width={123}
            height={123}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="gap-7 flex-col flex">
          <InputComponent placeholder={"Usuario"} icon={<UserBold color="#05765F"/>} />
          <InputComponent placeholder={"Contraseña"} icon={<LockKeyholeBold color="#05765F"/>} />
        </div>
        <div>
            <Button>Iniciar Sesión</Button>
        </div>
      </div>
    </div>
  );
}
