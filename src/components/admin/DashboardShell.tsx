"use client";
import { useState } from "react";
import Header from "./Header";
import NavTabs from "./NavTabs";
import ProductGrid from "./ProductGrid";
import { products } from "@/data/products";
import { Drawer, DrawerTrigger } from "../ui/drawer";
import ProductAddDrawerContent from "./ProductAddDrawerContent";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {
  children?: React.ReactNode;
};

export default function DashboardShell({ children }: Props) {
  const [search, setSearch] = useState("");
  const isMd = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction={isMd ? "right" : "bottom"} open={open} onOpenChange={setOpen}>
      <Header placeholder={`Buscar entre ${products.length} productos...`} value={search} onSearch={setSearch} />
      <main className="flex flex-col">
        <NavTabs />
        {children ?? <ProductGrid searchTerm={search} />}
        <DrawerTrigger>
          <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-50">
            <div
              title="Agregar platillo"
              aria-label="Agregar platillo"
              className="bg-Blue-700 hover:bg-Blue-600 active:scale-95 transform-gpu transition-all rounded-full p-0 shadow-2xl text-white flex items-center justify-center h-14 w-14 md:h-20 md:w-20 focus:outline-none focus:ring-4 focus:ring-Blue-300/40"
            >
              <span className="text-white text-3xl md:text-4xl leading-none font-extrabold select-none">+</span>
              <span className="sr-only">Agregar platillo</span>
            </div>
          </div>
        </DrawerTrigger>
      </main>
      <ProductAddDrawerContent />
    </Drawer>
  );
}
