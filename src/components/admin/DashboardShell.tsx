"use client";
import { useState } from "react";
import Header from "./Header";
import NavTabs from "./NavTabs";
import ProductGrid from "./ProductGrid";
import { products } from "@/data/products";

export default function DashboardShell() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header placeholder={`Buscar entre ${products.length} productos...`} value={search} onSearch={setSearch} />
      <main className="flex flex-col">
        <NavTabs />
        <ProductGrid searchTerm={search} />

        <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-50">
          <button
            type="button"
            title="Agregar platillo"
            aria-label="Agregar platillo"
            className="bg-Blue-700 hover:bg-Blue-600 active:scale-95 transform-gpu transition-all rounded-full p-0 shadow-2xl text-white flex items-center justify-center h-14 w-14 md:h-20 md:w-20 focus:outline-none focus:ring-4 focus:ring-Blue-300/40"
          >
            <span className="text-white text-3xl md:text-4xl leading-none font-extrabold select-none">+</span>
            <span className="sr-only">Agregar platillo</span>
          </button>
        </div>
      </main>
    </>
  );
}
