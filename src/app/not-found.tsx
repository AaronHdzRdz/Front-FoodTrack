import React from "react";
import Button from "@/components/buttons/button";
import NotFoundActions from "@/components/not-found/Actions";
import { Home } from "@solar-icons/react";
import { ArrowLeftOutline, HomeOutline, MagniferOutline, MapOutline, MapPointOutline, QuestionCircleOutline } from "solar-icon-set";

function NotFound() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center relative">
        {/* Decorative floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-10 left-10 text-blue-200 opacity-20 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          >
            <MagniferOutline className="w-12 h-12" />
          </div>
          <div
            className="absolute top-20 right-20 text-blue-200 opacity-20 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          >
            <MapPointOutline className="w-16 h-16" />
          </div>
          <div
            className="absolute bottom-20 left-20 text-blue-200 opacity-20 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3.5s" }}
          >
            <MapOutline className="w-14 h-14" />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          

          {/* 404 Text */}
          <div className="mb-6">
            <h1
              className="text-[120px] leading-none mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              style={{ fontWeight: 700 }}
            >
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div>
          </div>

          {/* Message */}
          <div className="mb-8 space-y-3">
            <h2 className="text-gray-800">Página no encontrada</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Lo sentimos, la página que estás buscando no existe o ha sido
              movida. Verifica la URL o regresa al inicio.
            </p>
          </div>

          {/* Action buttons (client) */}
          <div>
            {/* NotFoundActions es un Client Component para manejar eventos */}
            <NotFoundActions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
