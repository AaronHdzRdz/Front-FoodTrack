"use client";

import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import AdminHeader from "@/components/admin/Header";
import AdminSummaryCard from "@/components/admin/SummaryCard";
import AdminStatCard from "@/components/admin/StatCard";
import AdminProductGrid from "@/components/admin/ProductGrid";
import AdminProductCard from "@/components/admin/ProductCard";
import AdminPaymentRow from "@/components/admin/PaymentRow";
import AdminOrderTypeSelector from "@/components/admin/OrderTypeSelector";
import AdminOrderTypeButton from "@/components/admin/OrderTypeButton";
import AdminNavTabs from "@/components/admin/NavTabs";
import AdminMovementsList from "@/components/admin/MovementsList";
import AdminMovementItem from "@/components/admin/MovementItem";
import AdminMovementCard from "@/components/admin/MovementCard";
import AdminFinancialMetric from "@/components/admin/FinancialMetric";
import AdminDatePicker from "@/components/admin/DatePicker";
import AdminDashboardShell from "@/components/admin/DashboardShell";
import AdminCategoryButton from "@/components/admin/CategoryButton";
import AdminCashSelector from "@/components/admin/CashSelector";
import AdminCashPageClient from "@/components/admin/CashPageClient";
import AdminCashDashboardClient from "@/components/admin/CashDashboardClient";
import AdminCards from "@/components/admin/Cards";
import AdminAccountCard from "@/components/admin/AccountCard";

import Btn from "@/components/buttons/button";
import InputComponent from "@/components/InputComponent/InputComponent";
import NotFoundActions from "@/components/not-found/Actions";
import { DataTable } from "@/components/tables/table";
import { Calendar } from "@/components/ui/calendar";
import { ChartContainer } from "@/components/ui/chart";
import ProgressBar from "@/components/ui/progressBar";
import { ChartBarSalesDay } from "@/components/BarChart";
import CallToActionSection from "@/components/CallToActionSection";
import { ChartLineSalesHour } from "@/components/ChartLine";
import FeaturesSection from "@/components/FeaturesSection";
import FutureFeaturesSection from "@/components/FutureFeaturesSection";
import HeroSection from "@/components/HeroSection";
import InterfacesSection from "@/components/InterfacesSection";
import { ChartPieCategory } from "@/components/PieChart";
import WorkflowSection from "@/components/WorkflowSection";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import IconBox from "@/components/ui/iconBox";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { products } from "@/data/products";
import { accounts } from "@/data/accounts";
import { cashMovements } from "@/data/cashMovements";

import type { ComponentMeta } from "./types";

// Ejemplo mínimo y autocontenido que muestra cómo usar Form (FormProvider)
// con react-hook-form dentro de la documentación de componentes.
function RHFExampleForm() {
  const methods = useForm<{ example?: string }>();

  const onSubmit = (data: Record<string, unknown>) => {
    // En documentación es suficiente con un console.log; el usuario puede
    // reemplazar por la acción real.
    console.log("RHFExampleForm submit:", data);
  };

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 max-w-xs"
      >
        <FormItem>
          <FormLabel>Campo</FormLabel>
          <FormControl>
            <Input placeholder="Ejemplo" {...methods.register("example")} />
          </FormControl>
          <FormDescription>Ayuda</FormDescription>
          <FormMessage />
        </FormItem>
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}

export const componentsByFolder: Record<string, ComponentMeta[]> = {
  "src/components": [
    {
      id: "header",
      name: "Header",
      description: "Logo y encabezado principal de la app.",
      requires: "Imagen /FoodTrack.svg en public/",
      example: <Header />,
      usage: `import Header from "@/components/Header"\n\n<Header />`,
      folder: "src/components",
    },
    {
      id: "footer",
      name: "Footer",
      description: "Pie de página con iconos de contacto.",
      requires: "Dependencia de @solar-icons/react (ya usada en el proyecto).",
      example: <Footer />,
      usage: `import Footer from "@/components/footer"\n\n<Footer />`,
      folder: "src/components",
    },
    {
      id: "bar-chart",
      name: "BarChart",
      description:
        "Gráfico de barras reutilizable para mostrar series de datos simples.",
      requires:
        "Requiere 'recharts' y pasar prop 'data' y 'keys' según la configuración del proyecto.",
  example: <ChartBarSalesDay />,
      usage: `import BarChart from "@/components/BarChart"\n\n<BarChart data={[{ name: 'A', value: 10 }]} keys={["value"]} />`,
      folder: "src/components",
    },
    {
      id: "call-to-action",
      name: "CallToActionSection",
      description: "Sección con llamada a la acción (texto + botón).",
      requires:
        "Componente presentacional; puede incluir Button del sistema UI.",
  example: <CallToActionSection />,
      usage: `import CallToActionSection from "@/components/CallToActionSection"\n\n<CallToActionSection />`,
      folder: "src/components",
    },
    {
      id: "chart-line",
      name: "ChartLine",
      description:
        "Componente para renderizar líneas de tiempo/series (recharts).",
      requires: "Requiere 'recharts' y una prop 'data' con puntos de la serie.",
  example: <ChartLineSalesHour />,
      usage: `import ChartLine from "@/components/ChartLine"\n\n<ChartLine data={[{ x: 0, y: 10 }]} />`,
      folder: "src/components",
    },
    {
      id: "features-section",
      name: "FeaturesSection",
      description:
        "Sección que lista las principales características del producto.",
      requires: "Presentacional; utiliza iconos y layout de grid.",
  example: <FeaturesSection />,
      usage: `import FeaturesSection from "@/components/FeaturesSection"\n\n<FeaturesSection />`,
      folder: "src/components",
    },
    {
      id: "future-features",
      name: "FutureFeaturesSection",
      description: "Sección que muestra características planeadas o próximas.",
      requires: "Componente presentacional; usar para roadmap ligero.",
  example: <FutureFeaturesSection />,
      usage: `import FutureFeaturesSection from "@/components/FutureFeaturesSection"\n\n<FutureFeaturesSection />`,
      folder: "src/components",
    },
    {
      id: "hero-section",
      name: "HeroSection",
      description:
        "Encabezado hero con título, subtítulo y llamada a la acción.",
      requires: "Imagenes opcionales y Button UI.",
  example: <HeroSection />,
      usage: `import HeroSection from "@/components/HeroSection"\n\n<HeroSection />`,
      folder: "src/components",
    },
    {
      id: "interfaces-section",
      name: "InterfacesSection",
      description:
        "Sección que explica interfaces o integraciones del producto.",
      requires: "Presentacional; texto e iconos.",
  example: <InterfacesSection />,
      usage: `import InterfacesSection from "@/components/InterfacesSection"\n\n<InterfacesSection />`,
      folder: "src/components",
    },
    {
      id: "pie-chart",
      name: "PieChart",
      description:
        "Componente de gráfico circular para proporciones (recharts).",
      requires: "Requiere 'recharts' y prop 'data' con valores y labels.",
  example: <ChartPieCategory data={[{ name: "A", value: 30 }]} />,
      usage: `import PieChart from "@/components/PieChart"\n\n<PieChart data={[{ name: 'A', value: 30 }]} />`,
      folder: "src/components",
    },
    {
      id: "workflow-section",
      name: "WorkflowSection",
      description:
        "Sección que muestra el flujo de trabajo o pasos del proceso.",
      requires: "Presentacional; puede usar icons y layout por pasos.",
  example: <WorkflowSection />,
      usage: `import WorkflowSection from "@/components/WorkflowSection"\n\n<WorkflowSection />`,
      folder: "src/components",
    },
  ],
  "src/components/admin": [
    {
      id: "admin-header",
      name: "AdminHeader",
      description:
        "Encabezado específico del dashboard admin con búsqueda y logout.",
      requires: "Componente cliente; usa next/navigation y solar-icon-set.",
      example: <AdminHeader placeholder="Buscar..." />,
      usage: `import AdminHeader from "@/components/admin/Header"\n\n<AdminHeader placeholder=\"Buscar...\" />`,
      folder: "src/components/admin",
    },
    {
      id: "summary-card",
      name: "SummaryCard",
      description: "Tarjeta resumen con icono, título y valor.",
      requires: "Props: icon, title, value. Puede recibir badge.",
      example: (
        <AdminSummaryCard
          icon={<span className="text-xl">💳</span>}
          title="Ventas"
          value="$1,234"
          badge={<div className="text-xs">Hoy</div>}
        />
      ),
      usage: `import SummaryCard from "@/components/admin/SummaryCard"\n\n<SummaryCard icon={<Icon/>} title=\"Ventas\" value=\"$1,234\" />`,
      folder: "src/components/admin",
    },
    {
      id: "stat-card",
      name: "StatCard",
      description: "Pequeña tarjeta estadística con porcentaje y subtítulo.",
      requires: "Props: icon, iconWrapper, percent, label, value, sub.",
      example: (
        <div className="max-w-xs p-4 border rounded">
          <AdminStatCard
            icon={<span>📈</span>}
            iconWrapper="bg-Blue-50 p-2 rounded"
            percent="+5%"
            trendIcon={<span>▲</span>}
            label="Crecimiento"
            value="$12,340"
            sub="vs semana pasada"
          />
        </div>
      ),
      usage: `import StatCard from "@/components/admin/StatCard"\n\n<StatCard icon={<Icon/>} iconWrapper=\"...\" percent=\"+5%\" label=\"Crecimiento\" value=\"$12,340\" sub=\"vs semana pasada\" />`,
      folder: "src/components/admin",
    },
    {
      id: "product-grid",
      name: "ProductGrid",
      description: "Grid de productos con filtros por categoría y búsqueda.",
      requires: "Datos en `src/data/products.ts`.",
      example: (
        <div className="border rounded">
          <AdminProductGrid />
        </div>
      ),
      usage: `import ProductGrid from "@/components/admin/ProductGrid"\n\n<ProductGrid searchTerm={search} />`,
      folder: "src/components/admin",
    },
    {
      id: "product-card",
      name: "ProductCard",
      description: "Tarjeta individual de producto (imagen, título, precio).",
      requires: "Prop `product` del tipo definido en `src/data/products.ts`.",
      example: products?.[0] ? (
        <AdminProductCard product={products[0]} />
      ) : (
        <div>No hay productos</div>
      ),
      usage: `import ProductCard from "@/components/admin/ProductCard"\n\n<ProductCard product={product} />`,
      folder: "src/components/admin",
    },
    {
      id: "payment-row",
      name: "PaymentRow",
      description: "Fila que muestra progreso y monto de un método de pago.",
      requires: "Props: icon, title, progress, amount.",
      example: (
        <AdminPaymentRow
          icon={<div className="w-6 h-6 bg-gray-200 rounded" />}
          title="Ventas tarjetas"
          progress={60}
          amount="$4,500"
        />
      ),
      usage: `import PaymentRow from "@/components/admin/PaymentRow"\n\n<PaymentRow icon={<Icon/>} title=\"Ventas\" progress={60} amount=\"$4,500\" />`,
      folder: "src/components/admin",
    },
    {
      id: "order-type-selector",
      name: "OrderTypeSelector",
      description: "Selector de tipo de orden (Mesas, Barra, Para Llevar).",
      requires: "Componente cliente; acepta onChange y defaultValue.",
      example: (
        <AdminOrderTypeSelector
          onChange={(v) => console.log("order type", v)}
          defaultValue="Mesas"
        />
      ),
      usage: `import OrderTypeSelector from "@/components/admin/OrderTypeSelector"\n\n<OrderTypeSelector defaultValue=\"Mesas\" onChange={(v)=>{}} />`,
      folder: "src/components/admin",
    },
    {
      id: "order-type-button",
      name: "OrderTypeButton",
      description:
        "Botón estilizado para seleccionar tipo de orden (variante active/inactive).",
      requires: "Props: label, active, onClick.",
      example: (
        <div className="flex gap-2">
          <AdminOrderTypeButton label="Mesas" active onClick={() => {}} />
          <AdminOrderTypeButton label="Barra" onClick={() => {}} />
        </div>
      ),
      usage: `import OrderTypeButton from "@/components/admin/OrderTypeButton"\n\n<OrderTypeButton label=\"Mesas\" active />`,
      folder: "src/components/admin",
    },
    {
      id: "nav-tabs",
      name: "NavTabs",
      description: "Tabs de navegación para secciones admin.",
      requires: "next/navigation y solar-icon-set.",
      example: <AdminNavTabs />,
      usage: `import NavTabs from "@/components/admin/NavTabs"\n\n<NavTabs />`,
      folder: "src/components/admin",
    },
    {
      id: "movements-list",
      name: "MovementsList",
      description:
        "Lista paginada de movimientos de caja (usa `src/data/cashMovements`).",
      requires: "Opcional props date y cash para filtrar.",
      example: <AdminMovementsList />,
      usage: `import MovementsList from "@/components/admin/MovementsList"\n\n<MovementsList date=\"2025-10-19\" cash=\"Caja Principal\" />`,
      folder: "src/components/admin",
    },
    {
      id: "movement-item",
      name: "MovementItem",
      description:
        "Elemento individual de movimiento; muestra método, hora y monto.",
      requires: "Prop `m` del tipo Movement (ver `src/data/cashMovements`).",
      example: cashMovements?.[0] ? (
        <AdminMovementItem m={cashMovements[0]} />
      ) : (
        <div>No hay movimientos</div>
      ),
      usage: `import MovementItem from "@/components/admin/MovementItem"\n\n<MovementItem m={movement} />`,
      folder: "src/components/admin",
    },
    {
      id: "movement-card",
      name: "MovementCard",
      description:
        "Card que muestra descripción, método y monto de un movimiento.",
      requires: "Props: description, time, method, amount, type.",
      example: (
        <AdminMovementCard
          description="Pago de cuenta - Mesa 5"
          time="14:30"
          method="Efectivo"
          amount={640}
          type="ingreso"
        />
      ),
      usage: `import MovementCard from "@/components/admin/MovementCard"\n\n<MovementCard description=\"Pago...\" time=\"14:30\" method=\"Efectivo\" amount={640} type=\"ingreso\" />`,
      folder: "src/components/admin",
    },
    {
      id: "financial-metric",
      name: "FinancialMetric",
      description:
        "Componente pequeño para mostrar métricas financieras con icono.",
      requires:
        "Props de clases y contenido (wrapperClass, iconWrapperClass, icon, title, value).",
      example: (
        <AdminFinancialMetric
          wrapperClass="flex items-center gap-3"
          iconWrapperClass="bg-Blue-50 p-2 rounded"
          icon={<span>💵</span>}
          title="Ingresos"
          value="$12,345"
        />
      ),
      usage: `import FinancialMetric from "@/components/admin/FinancialMetric"\n\n<FinancialMetric wrapperClass=\"...\" iconWrapperClass=\"...\" icon={<Icon/>} title=\"Ingresos\" value=\"$12,345\" />`,
      folder: "src/components/admin",
    },
    {
      id: "date-picker",
      name: "DatePicker (Calendar22)",
      description: "Selector de fecha que abre un calendario en un popover.",
      requires: "Componente cliente; usa `@/components/ui/calendar` y Popover.",
      example: <AdminDatePicker />,
      usage: `import Calendar22 from "@/components/admin/DatePicker"\n\n<Calendar22 />`,
      folder: "src/components/admin",
    },
    {
      id: "dashboard-shell",
      name: "DashboardShell",
      description:
        "Shell del dashboard que incluye Header, NavTabs y ProductGrid.",
      requires: "Children opcionales; por defecto muestra ProductGrid.",
      example: (
        <div className="border p-2">
          <AdminDashboardShell />
        </div>
      ),
      usage: `import DashboardShell from "@/components/admin/DashboardShell"\n\n<DashboardShell>...children...</DashboardShell>`,
      folder: "src/components/admin",
    },
    {
      id: "category-button",
      name: "CategoryButton",
      description: "Botón para filtrar por categoría en ProductGrid.",
      requires: "Props: label, active, onClick.",
      example: (
        <div className="flex gap-2">
          <AdminCategoryButton label="Entradas" active />
          <AdminCategoryButton label="Postres" />
        </div>
      ),
      usage: `import CategoryButton from "@/components/admin/CategoryButton"\n\n<CategoryButton label=\"Entradas\" active />`,
      folder: "src/components/admin",
    },
    {
      id: "cash-selector",
      name: "CashSelector",
      description: "Selector desplegable de cajas disponibles.",
      requires: "Props: options[] y opcionales defaultValue/onChange.",
      example: (
        <AdminCashSelector
          options={["Caja Principal", "Caja 2", "Caja Terraza"]}
        />
      ),
      usage: `import CashSelector from "@/components/admin/CashSelector"\n\n<CashSelector options={[\"Caja Principal\", \"Caja 2\"]} />`,
      folder: "src/components/admin",
    },
    {
      id: "cash-page-client",
      name: "CashPageClient",
      description:
        "Página cliente que combina DatePicker, CashSelector y el dashboard de caja.",
      requires: "Componente cliente; usa estado local para fecha y caja.",
      example: <AdminCashPageClient />,
      usage: `import CashPageClient from "@/components/admin/CashPageClient"\n\n<CashPageClient />`,
      folder: "src/components/admin",
    },
    {
      id: "cash-dashboard-client",
      name: "CashDashboardClient",
      description: "Dashboard de caja que incluye la lista de movimientos.",
      requires: "Props opcionales date y cash.",
      example: <AdminCashDashboardClient date={undefined} cash={undefined} />,
      usage: `import CashDashboardClient from "@/components/admin/CashDashboardClient"\n\n<CashDashboardClient date=\"2025-10-19\" cash=\"Caja Principal\" />`,
      folder: "src/components/admin",
    },
    {
      id: "cards-admin",
      name: "Cards (varianted)",
      description:
        "Componente de tarjeta con variantes (`variant: '1' | '2'`).",
      requires: "Prop variant obligatorio; acepta title, icon y children.",
      example: (
        <AdminCards variant="2" title="Resumen" icon={<span>🔔</span>}>
          Contenido
        </AdminCards>
      ),
      usage: `import Cards from "@/components/admin/Cards"\n\n<Cards variant=\"2\" title=\"Resumen\">Contenido</Cards>`,
      folder: "src/components/admin",
    },
    {
      id: "account-card",
      name: "AccountCard",
      description: "Tarjeta que representa una cuenta/mesa con imagen y total.",
      requires: "Prop `account` del archivo `src/data/accounts`.",
      example: accounts?.[0] ? (
        <AdminAccountCard account={accounts[0]} />
      ) : (
        <div>No hay cuentas</div>
      ),
      usage: `import AccountCard from "@/components/admin/AccountCard"\n\n<AccountCard account={account} />`,
      folder: "src/components/admin",
    },
  ],
  "src/components/buttons": [
    {
      id: "button",
      name: "Button",
      description: "Botón reutilizable con variantes 'default' y 'outline'.",
      requires:
        "Props: children, variant?: 'outline' | 'default', className y cualquier prop de button HTML.",
      example: (
        <div className="flex gap-4">
          <div>
            <div className="block">Default</div>
            <div className="inline-block">
              <Btn>Enviar</Btn>
            </div>
          </div>
          <div>
            <div className="block">Outline</div>
            <div className="inline-block">
              <Btn variant="outline">Cancelar</Btn>
            </div>
          </div>
        </div>
      ),
      usage: `import Button from "@/components/buttons/button"\n\n<Button>Enviar</Button>\n<Button variant="outline">Cancelar</Button>`,
      folder: "src/components/buttons",
    },
  ],
  "src/components/InputComponent": [
    {
      id: "input-component",
      name: "InputComponent",
      description:
        "Campo de entrada estilizado que soporta icono y toggle de visibilidad para type='password'.",
      requires:
        "Props: placeholder (string), icon (ReactNode). Pasa cualquier prop de input HTML como onFocus, type, value.",
      example: (
        <div className="flex flex-col gap-4 max-w-md">
          <InputComponent
            placeholder="Correo electrónico"
            icon={<span>📧</span>}
          />
          <InputComponent
            placeholder="Contraseña"
            icon={<span>🔒</span>}
            type="password"
          />
        </div>
      ),
      usage: `import InputComponent from "@/components/InputComponent/InputComponent"\n\n<InputComponent placeholder=\"Contraseña\" icon={<span>🔒</span>} type=\"password\" />`,
      folder: "src/components/InputComponent",
    },
  ],
  "src/components/not-found": [
    {
      id: "notfound-actions",
      name: "NotFoundActions",
      description:
        "Conjunto de acciones para páginas 404/Not Found: botón a inicio y volver atrás.",
      requires:
        "Importa el Button del folder buttons y varios iconos de 'solar-icon-set'.",
      example: <NotFoundActions />,
      usage: `import NotFoundActions from "@/components/not-found/Actions"\n\n<NotFoundActions />`,
      folder: "src/components/not-found",
    },
  ],
  "src/components/tables": [
    {
      id: "data-table",
      name: "DataTable",
      description:
        "Tabla genérica que envuelve @tanstack/react-table y los componentes UI de tabla del proyecto.",
      requires:
        "Props: data: T[] y columns: ColumnDef<T>[]. Importar ColumnDef desde @tanstack/react-table para definir columnas.",
      example: (
        <div className="max-w-full">
          <DataTable
            data={[{ name: "Producto A", price: 12 }]}
            columns={[
              { accessorKey: "name", header: "Nombre" },
              { accessorKey: "price", header: "Precio" },
            ]}
          />
        </div>
      ),
      usage: `import { DataTable } from "@/components/tables/table"\nimport type { ColumnDef } from "@tanstack/react-table"\n\nconst columns: ColumnDef<any>[] = [{ accessorKey: 'name', header: 'Nombre' }]\nconst data = [{ name: 'A' }]\n\n<DataTable data={data} columns={columns} />`,
      folder: "src/components/tables",
    },
  ],
  "src/components/ui": [
    {
      id: "button-ui",
      name: "Button (UI)",
      description: "Botón - UI variant (alias).",
      requires: "Usa el paquete de utilidades UI.",
      example: (
        <div className="flex gap-2">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
        </div>
      ),
      usage: `import { Button } from "@/components/ui/button"\n\n<Button>Enviar</Button>`,
      folder: "src/components/ui",
    },
    {
      id: "input-ui",
      name: "Input (UI)",
      description: "Campo de texto - UI variant.",
      requires: "Input estilizado desde UI.",
      example: <Input placeholder="Escribe..." />,
      usage: `import { Input } from "@/components/ui/input"\n\n<Input />`,
      folder: "src/components/ui",
    },
    {
      id: "checkbox-ui",
      name: "Checkbox (UI)",
      description: "Checkbox Radix con estilos.",
      example: (
        <div className="flex items-center gap-2">
          <Checkbox id="c1" />
          <Label htmlFor="c1">Check</Label>
        </div>
      ),
      usage: `import { Checkbox } from "@/components/ui/checkbox"\n\n<Checkbox id=\"c1\" />`,
      folder: "src/components/ui",
    },
    {
      id: "card-ui",
      name: "Card (UI)",
      description: "Card reusable (UI).",
      example: (
        <Card>
          <CardHeader>
            <CardTitle>Ejemplo</CardTitle>
          </CardHeader>
          <CardContent>Contenido</CardContent>
        </Card>
      ),
      usage: `import { Card } from "@/components/ui/card"\n\n<Card>...</Card>`,
      folder: "src/components/ui",
    },
    {
      id: "calendar-ui",
      name: "Calendar",
      description:
        "Componente de calendario basado en react-day-picker con estilos y botones integrados.",
      requires:
        "Props extendidas de DayPicker; acepta buttonVariant para controles.",
      example: (
        <div className="max-w-xs">
          <Calendar />
        </div>
      ),
      usage: `import { Calendar } from "@/components/ui/calendar"\n\n<Calendar />`,
      folder: "src/components/ui",
    },
    {
      id: "chart-ui",
      name: "ChartContainer",
      description:
        "Contenedor para gráficos (recharts) que provee estilos y configuración de colores por tema.",
      requires:
        "Usa Recharts; pasar prop config: ChartConfig para colores/labels/icons.",
      example: (
        <ChartContainer
          id="demo"
          config={{ demo: { label: "Ventas", color: "#3b82f6" } }}
        >
          <div />
        </ChartContainer>
      ),
      usage: `import { ChartContainer } from "@/components/ui/chart"\n\n<ChartContainer id=\"c1\" config={{...}}>...</ChartContainer>`,
      folder: "src/components/ui",
    },
    {
      id: "popover-ui",
      name: "Popover (UI)",
      description: "Popover basado en Radix.",
      example: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Abrir</Button>
          </PopoverTrigger>
          <PopoverContent>Contenido</PopoverContent>
        </Popover>
      ),
      usage: `import { Popover } from "@/components/ui/popover"\n\n<Popover>...</Popover>`,
      folder: "src/components/ui",
    },
    {
      id: "progressbar-ui",
      name: "ProgressBar",
      description:
        "Barra de progreso simple con variantes de tamaño y opción para mostrar valor.",
      requires:
        "Props: value (number), max?, size?: 'sm'|'md'|'lg', showValue?: boolean.",
      example: <ProgressBar value={65} showValue size="md" />,
      usage: `import ProgressBar from "@/components/ui/progressBar"\n\n<ProgressBar value={75} />`,
      folder: "src/components/ui",
    },
    {
      id: "dropdown-menu-ui",
      name: "DropdownMenu",
      description:
        "Conjunto de componentes para menús desplegables (Radix) con ítems, grupos y submenus.",
      requires:
        "Importar los subcomponentes: DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, etc.",
      example: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Opciones</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Acción 1</DropdownMenuItem>
            <DropdownMenuItem>Acción 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      usage: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"\n\n<DropdownMenu>...</DropdownMenu>`,
      folder: "src/components/ui",
    },
    {
      id: "label-ui",
      name: "Label",
      description:
        "Componente Label accesible (Radix) para inputs y controles.",
      example: <Label htmlFor="i1">Nombre</Label>,
      usage: `import { Label } from "@/components/ui/label"\n\n<Label htmlFor=\"i1\">Nombre</Label>`,
      folder: "src/components/ui",
    },
    {
      id: "form-ui",
      name: "Form (utils)",
      description:
        "Utilidades para formularios basadas en react-hook-form: Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage y hooks.",
      requires:
        "Usar junto con react-hook-form; exporta helpers para campos y mensajes.",
      example: <RHFExampleForm />,
      usage: `import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"`,
      folder: "src/components/ui",
    },
    {
      id: "iconbox-ui",
      name: "IconBox",
      description:
        "Pequeño contenedor para iconos con fondo y clase personalizable.",
      requires: "Props: icon (ReactNode), bgClass?, textClass?, className?",
      example: <IconBox icon={<span>🔔</span>} bgClass="bg-Blue-700" />,
      usage: `import IconBox from "@/components/ui/iconBox"\n\n<IconBox icon={<Icon/>} />`,
      folder: "src/components/ui",
    },
    {
      id: "table-ui",
      name: "Table (UI)",
      description: "Tabla utilitaria.",
      example: (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Col</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Valor</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
      usage: `import { Table } from "@/components/ui/table"\n\n<Table>...</Table>`,
      folder: "src/components/ui",
    },
  ],
};

export const folderOptions = [
  "All",
  "src/components",
  "src/components/admin",
  "src/components/buttons",
  "src/components/InputComponent",
  "src/components/not-found",
  "src/components/tables",
  "src/components/ui",
];
