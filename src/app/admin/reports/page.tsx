"use client";
import { Calendar22 } from "@/components/admin/DatePicker";
import Header from "@/components/admin/Header";
import NavTabs from "@/components/admin/NavTabs";
import { ChartBarSalesDay } from "@/components/BarChart";
import {
  CardOutline,
  ChairOutline,
  Chart2Outline,
  ChartSquareOutline,
  ChefHatOutline,
  ClockCircleOutline,
  CourseDownOutline,
  CourseUpOutline,
  DollarOutline,
  DownloadMinimalisticOutline,
  MedalRibbonOutline,
  PieChartOutline,
  WalletMoneyOutline,
  WalletOutline,
} from "solar-icon-set";
import { ChartLineSalesHour } from "../../../components/ChartLine";
import { ChartPieCategory } from "@/components/PieChart";
import { categorySalesData } from "@/data/categorySales";
import { DataTable } from "@/components/tables/table";
import { topProductsData, topProductsColumns } from "@/data/topProducts";
import CardContent from "@/components/admin/Cards";
import {
  waiterPerformanceData,
  waiterPerformanceColumns,
} from "@/data/waiterPerformance";
import {
  tablePerformanceData,
  tablePerformanceColumns,
} from "@/data/tablePerformance";
import IconBox from "@/components/ui/iconBox";
import { topStats } from "@/data/reportsTopStats";
import { paymentMethods } from "@/data/paymentMethods";
import StatCard from "@/components/admin/StatCard";
import PaymentRow from "@/components/admin/PaymentRow";
import FinancialMetric from "@/components/admin/FinancialMetric";

export default function ReportsPage() {
  return (
    <>
      <Header showSearch={false} />
      <NavTabs />
      <main className="m-10">
        <div className="gap-8 flex flex-col">
          <section className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-900 font-sans text-2xl not-italic font-normal leading-9">
                Panel de Reportes
              </h1>
              <p className="text-gray-500 font-sans text-base not-italic font-normal leading-6">
                Análisis completo del desempeño del restaurante
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className="">
                <Calendar22 />
              </div>
              <button className=" h-fit flex justify-center items-end gap-4 rounded-lg bg-navy-900 p-2.5 text-white">
                <DownloadMinimalisticOutline />
                <p className=" font-sans text-sm not-italic font-normal leading-5">
                  Exportar Reporte
                </p>
              </button>
            </div>
          </section>

          <section className="gap-6 grid grid-cols-4">
            {topStats.map((s) => (
              <CardContent key={s.id} variant="1">
                <StatCard {...s} trendIcon={<CourseUpOutline />} />
              </CardContent>
            ))}
          </section>

          <section className="grid grid-cols-2 gap-8">
            <CardContent
              variant="2"
              icon={<ClockCircleOutline />}
              title="Ventas por Hora"
            >
              <ChartLineSalesHour />
            </CardContent>
            <CardContent
              variant="2"
              icon={<ChartSquareOutline />}
              title="Ventas por Día de la Semana"
            >
              <ChartBarSalesDay />
            </CardContent>
          </section>

          <section className="grid grid-cols-3 gap-8">
            <CardContent
              variant="2"
              className="col-span-1 "
              icon={<PieChartOutline />}
              title="Ventas por Categoría"
            >
              <div className="w-full h-full justify-center items-center">
                <ChartPieCategory data={categorySalesData} />
              </div>
            </CardContent>

            <CardContent
              variant="2"
              className="col-span-2"
              icon={<WalletOutline />}
              title="Análisis Financiero"
            >
              <div className="grid grid-cols-2 gap-4">
                <FinancialMetric
                  wrapperClass="border-2 rounded-2xl p-4 border-emerald-300 bg-emerald-50/50 flex flex-row justify-between items-center"
                  iconWrapperClass="text-white bg-[#00BC7D] p-3 w-fit rounded-2xl"
                  icon={<CourseUpOutline className="w-5 h-5" />}
                  titleClass="text-[#007A55] font-sans text-sm not-italic font-normal leading-5"
                  title="Ingresos Totales"
                  valueClass="text-[#004F3B] font-sans text-2xl not-italic font-normal leading-8"
                  value="$16,450"
                />

                <FinancialMetric
                  wrapperClass="border-2 rounded-2xl p-4 border-blue-300 bg-blue-50/50 flex flex-row justify-between items-center"
                  iconWrapperClass="text-white bg-navy-900 p-3 w-fit rounded-2xl"
                  icon={<DollarOutline className="w-5 h-5" />}
                  titleClass="text-Blue-700 font-sans text-sm not-italic font-normal leading-5"
                  title="Ganancia Neta"
                  valueClass="text-navy-900 font-sans text-2xl not-italic font-normal leading-8"
                  value="$12,200"
                />

                <FinancialMetric
                  wrapperClass="border-2 rounded-2xl p-4 border-red-300 bg-red-50/50 flex flex-row justify-between items-center"
                  iconWrapperClass="text-white bg-[#FB2C36] p-3 w-fit rounded-2xl"
                  icon={<CourseDownOutline className="w-5 h-5" />}
                  titleClass="text-[#C10007] font-sans text-sm not-italic font-normal leading-5"
                  title="Gastos del Período"
                  valueClass="text-[#82181A] font-sans text-2xl not-italic font-normal leading-8"
                  value="$4,250"
                />

                <FinancialMetric
                  wrapperClass="border-2 rounded-2xl p-4 border-gray-300 bg-gray-50/50 flex flex-row justify-between items-center"
                  iconWrapperClass="text-white bg-gray-700 p-3 w-fit rounded-2xl"
                  icon={<Chart2Outline className="w-5 h-5" />}
                  titleClass="text-gray-700 font-sans text-sm not-italic font-normal leading-5"
                  title="Margen de Ganancia"
                  valueClass="text-gray-900 font-sans text-2xl not-italic font-normal leading-8"
                  value={"74.2%"}
                />
              </div>
            </CardContent>
          </section>

          <CardContent
            variant="2"
            icon={<MedalRibbonOutline />}
            title={"Productos Más Vendidos"}
          >
            <DataTable data={topProductsData} columns={topProductsColumns} />
          </CardContent>

          <CardContent
            variant="2"
            icon={<ChefHatOutline />}
            title={"Desempeño por Mesero"}
          >
            <DataTable
              data={waiterPerformanceData}
              columns={waiterPerformanceColumns}
            />
          </CardContent>

          <section className="grid grid-cols-2 gap-8">
            <CardContent
              variant="2"
              icon={<ChairOutline />}
              title="Desempeño de Mesas"
            >
              <DataTable
                data={tablePerformanceData}
                columns={tablePerformanceColumns}
              />
            </CardContent>

            <CardContent
              variant="2"
              icon={<CardOutline />}
              title="Métodos de Pago"
            >
              <div className=" flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  {paymentMethods.map((p) => (
                    <PaymentRow
                      key={p.id}
                      icon={p.icon}
                      title={p.title}
                      progress={p.progress}
                      amount={p.amount}
                    />
                  ))}
                </div>

                <div className="rounded-2xl p-4 bg-Blue-50/20 justify-between flex flex-row">
                  <div className=" flex flex-row items-center gap-3">
                    <IconBox
                      icon={<WalletMoneyOutline />}
                      bgClass="bg-Blue-700"
                      textClass="text-white"
                    />
                    <p>TOTAL</p>
                  </div>
                  <p className="text-blue-700 font-sans text-2xl not-italic font-normal leading-8">
                    $12,450
                  </p>
                </div>
              </div>
            </CardContent>
          </section>
        </div>
      </main>
    </>
  );
}
