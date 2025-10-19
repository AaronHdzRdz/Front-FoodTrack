"use client";
import Button from "@/components/buttons/button";
import { ArrowLeftOutline, HomeOutline } from "solar-icon-set";
import React from "react";

export default function NotFoundActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        onClick={() => (window.location.href = "/")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 gap-2"
      >
        <HomeOutline className="w-5 h-5" />
        Volver al inicio
      </Button>

      <Button
        onClick={() => window.history.back()}
        variant="outline"
        className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 gap-2"
      >
        <ArrowLeftOutline className="w-5 h-5" />
        Página anterior
      </Button>
    </div>
  );
}
