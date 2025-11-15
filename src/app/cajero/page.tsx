"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CajeroPage() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
      return;
    }
    
    const userInfo = JSON.parse(user);
    if (userInfo.rol !== "Cajero") {
      router.push("/login");
      return;
    }
    
    setUserData(userInfo);
  }, [router]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-Blue-50 px-4 py-8">
      <div className="w-full max-w-4xl bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
        <div className="flex flex-col items-center gap-6">
          <img className="w-36 md:w-44" src="/FoodTrack.svg" alt="FoodTrack logo" />
          <h1 className="text-gray-800 text-3xl font-actor font-medium">
            Panel de Cajero
          </h1>
          {userData && (
            <div className="text-center">
              <p className="text-gray-600 text-lg">Bienvenido, {userData.nombreContacto || userData.usuario}</p>
              <p className="text-gray-500 text-sm mt-2">Rol: {userData.rol}</p>
            </div>
          )}
          <div className="mt-8 p-6 bg-green-100 rounded-lg">
            <p className="text-gray-700 text-center">
              Esta sección está en desarrollo. Aquí podrás gestionar pagos, facturación y caja.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
