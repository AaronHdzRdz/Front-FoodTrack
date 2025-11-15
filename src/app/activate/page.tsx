"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/button";
import InputComponent from "@/components/InputComponent/InputComponent";
import WelcomeModal from "@/components/WelcomeModal";
import ErrorModal from "@/components/ErrorModal";
import { KeyBold } from "solar-icon-set";

export default function ActivatePage() {
  const router = useRouter();
  const [restaurantKey, setRestaurantKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");

  const handleValidateKey = async () => {
    // Validar que se ingrese una clave
    if (!restaurantKey.trim()) {
      setError("Por favor ingresa la clave del restaurante");
      setShowErrorModal(true);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/restaurant/validate-key", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clave: restaurantKey }),
      });

      const data = await response.json();

      if (data.success) {
        // Guardar información del restaurante en localStorage
        localStorage.setItem("restaurant", JSON.stringify(data.data));
        
        // Mostrar modal de bienvenida
        setRestaurantName(data.data.nombreRestaurante);
        setShowWelcome(true);
        setLoading(false);
      } else {
        setError(data.message || "Clave de restaurante no válida");
        setShowErrorModal(true);
        setLoading(false);
      }
    } catch (err) {
      console.error("Error al validar clave:", err);
      setError("Error de conexión. Por favor intenta nuevamente.");
      setShowErrorModal(true);
      setLoading(false);
    }
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
    setError("");
  };

  const handleWelcomeComplete = () => {
    router.push("/login");
  };

  return (
    <>
      {showWelcome && (
        <WelcomeModal
          restaurantName={restaurantName}
          onComplete={handleWelcomeComplete}
        />
      )}

      {showErrorModal && (
        <ErrorModal
          message={error}
          onClose={handleCloseErrorModal}
        />
      )}
      
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
          <InputComponent 
            ref={undefined} 
            placeholder="Clave del restaurante" 
            icon={<KeyBold />}
            value={restaurantKey}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRestaurantKey(e.target.value)}
            onKeyPress={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                handleValidateKey();
              }
            }}
          />
          
          <Button 
            onClick={handleValidateKey} 
            className="w-full"
            disabled={loading}
          >
            {loading ? "Validando..." : "Continuar"}
          </Button>
        </div>
        </div>
      </main>
    </>
  );
}
