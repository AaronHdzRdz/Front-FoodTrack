"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/button";
import InputComponent from "@/components/InputComponent/InputComponent";
import { LockKeyholeBold, UserBold } from "solar-icon-set";

export default function LoginPage() {
  const router = useRouter();
  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    const username = userRef.current?.value;
    const password = passRef.current?.value;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.success) {
        router.push("/");
      } else {
        alert("Error en el Login: " + (data.message ?? ""));
      }
    } catch (err) {
      console.error(err);
      alert("No se pudo conectar con el servidor de autenticación.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-Blue-50 px-4 py-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3">
          <img className="w-36 md:w-44" src="/FoodTrack.svg" alt="FoodTrack logo" />
          <h1 className="text-gray-800 text-xl md:text-2xl font-actor font-medium">Bienvenido</h1>
          <p className="text-gray-600 text-center text-sm md:text-base">Ingresa tus credenciales para acceder a tu cuenta</p>
        </div>

        <div className="w-full grid gap-6">
          <InputComponent ref={userRef} placeholder="Usuario" icon={<UserBold/>} />

          <InputComponent ref={passRef} type="password" placeholder="Contraseña" icon={<LockKeyholeBold/>} />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <Button onClick={handleLogin} className="w-full">Iniciar Sesión</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
