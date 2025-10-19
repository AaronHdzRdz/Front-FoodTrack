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
    <div className="w-full overflow-x-auto">
      <div className="flex flex-row items-center gap-2 px-4 md:px-10">
        {tabs.map((t) => {
          const active = pathname === t.href;
          const Icon = t.icon;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={
                active
                  ? "flex flex-col md:flex-row items-center md:px-8 px-4 pt-4 md:pt-5 gap-2 text-Blue-700"
                  : "flex flex-row items-center md:px-8 px-4 py-3 gap-3 text-gray-700"
              }
            >
              <div className="flex flex-row gap-3 items-center">
                <Icon />
                <span className="font-medium text-sm md:text-base">{t.label}</span>
              </div>
              {active && <div className="w-full h-1.5 bg-Blue-700 rounded-t-sm mt-2 md:mt-0" />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
