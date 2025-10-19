"use client";
import CategoryButton from "@/components/admin/CategoryButton";
import Header from "@/components/admin/Header";
import NavTabs from "@/components/admin/NavTabs";
import AccountCard from "@/components/admin/AccountCard";
import { accounts as allAccounts, Account } from "@/data/accounts";
import { useMemo, useState } from "react";

const categories = ["Todos", "Mesas", "Barra", "Para Llevar"] as const;

export default function AccountsPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("Todos");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const byCategory = activeCategory === "Todos" ? allAccounts : allAccounts.filter((a) => a.type === activeCategory);
    if (!search) return byCategory;
    const s = search.toLowerCase();
    return byCategory.filter((a) => {
      return (
        (a.table ?? "").toLowerCase().includes(s) ||
        a.waiter.toLowerCase().includes(s) ||
        a.ticketNumber.toLowerCase().includes(s)
      );
    });
  }, [activeCategory, search]);

  return (
    <>
      <Header placeholder="Buscar Mesa/ Pedido" value={search} onSearch={setSearch} />
      <main className="flex flex-col">
        <NavTabs />
        <div className="py-6 md:py-8 px-4 md:px-10 flex flex-col gap-5">
          <div className="w-full overflow-x-auto">
            <div className="flex flex-row gap-3 md:gap-4 w-max">
            {categories.map((c) => (
              <CategoryButton key={c} label={c} active={c === activeCategory} onClick={() => setActiveCategory(c)} />
            ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((acc: Account) => (
              <AccountCard key={acc.id} account={acc} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
