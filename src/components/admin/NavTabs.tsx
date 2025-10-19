"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChatSquare2Outline,
  DollarOutline,
  HomeAngleOutline,
  SettingsOutline,
  WidgetOutline,
} from "solar-icon-set";

const tabs = [
  { href: "/admin/dashboard", label: "Inicio", icon: HomeAngleOutline },
  { href: "/admin/accounts", label: "Cuentas", icon: WidgetOutline },
  { href: "/admin/reports", label: "Reportes", icon: ChatSquare2Outline },
  { href: "/admin/cash", label: "Caja", icon: DollarOutline },
  { href: "/admin/settings", label: "Ajustes", icon: SettingsOutline },
];

export default function NavTabs() {
  const pathname = usePathname() || "/";

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row items-center gap-2">
        {tabs.map((t) => {
          const active = pathname === t.href;
          const Icon = t.icon;
          return (
            <Link key={t.href} href={t.href} className={active ? "flex flex-col px-8 pt-5 gap-2 text-Blue-700 items-center" : "flex flex-row px-8 py-4 gap-3 text-gray-700 items-center"}>
              <div className="flex flex-row gap-3 items-center">
                <Icon />
                <span className="font-medium">{t.label}</span>
              </div>
              {active && <div className="w-full h-1.5 bg-Blue-700 rounded-t-sm" />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
