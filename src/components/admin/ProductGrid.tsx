"use client";
import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import CategoryButton from "./CategoryButton";
import { products as initialProducts, categories } from "../../data/products";

type Props = {
  searchTerm?: string;
};

export default function ProductGrid({ searchTerm = "" }: Props) {
  const [filter, setFilter] = useState<string>("Todos");

  const filteredByCategory = filter === "Todos" ? initialProducts : initialProducts.filter((p) => p.category === filter);

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return filteredByCategory;
    return filteredByCategory.filter((p) => p.title.toLowerCase().includes(term) || p.category.toLowerCase().includes(term));
  }, [searchTerm, filteredByCategory]);

  return (
    <div className="py-6 md:py-8 px-4 md:px-10 flex flex-col gap-5">
      <div className="overflow-x-auto">
        <div className="flex flex-row gap-3 md:gap-4 w-max">
          {categories.map((c) => (
            <CategoryButton key={c} label={c} active={c === filter} onClick={() => setFilter(c)} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
