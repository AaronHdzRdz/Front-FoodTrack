"use client";

import { useEffect, useState } from "react";

interface LoginLoadingModalProps {
  userName: string;
  userRole: string;
  onComplete: () => void;
}

export default function LoginLoadingModal({ userName, userRole, onComplete }: LoginLoadingModalProps) {
  const [progress, setProgress] = useState(0);

  // Colores según el rol
  const getRoleColor = () => {
    switch (userRole) {
      case "Administrador":
        return {
          bg: "bg-purple-100",
          text: "text-purple-600",
          gradient: "from-purple-500 to-purple-600",
          icon: "👑",
        };
      case "Mesero":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          gradient: "from-blue-500 to-blue-600",
          icon: "🍽️",
        };
      case "Cajero":
        return {
          bg: "bg-green-100",
          text: "text-green-600",
          gradient: "from-green-500 to-green-600",
          icon: "💰",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-600",
          gradient: "from-gray-500 to-gray-600",
          icon: "👤",
        };
    }
  };

  const roleStyle = getRoleColor();

  useEffect(() => {
    // Animar la barra de progreso
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 2.5;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-4 animate-scaleIn">
        {/* Icono del rol */}
        <div className="flex justify-center mb-6">
          <div className={`w-24 h-24 ${roleStyle.bg} rounded-full flex items-center justify-center animate-pulse-slow`}>
            <span className="text-5xl">{roleStyle.icon}</span>
          </div>
        </div>

        {/* Mensaje de bienvenida */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            ¡Bienvenido!
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            {userName}
          </p>
          <div className={`inline-block mt-2 px-4 py-1 ${roleStyle.bg} ${roleStyle.text} rounded-full text-sm font-semibold`}>
            {userRole}
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="space-y-3">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`bg-gradient-to-r ${roleStyle.gradient} h-full rounded-full transition-all duration-300 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-gray-500">
            Iniciando sesión...
          </p>
        </div>

        {/* Animación de puntos */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
