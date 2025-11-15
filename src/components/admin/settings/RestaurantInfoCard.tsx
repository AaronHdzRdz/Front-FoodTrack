"use client";
import CardContent from "@/components/admin/Cards";
import { Buildings2Outline, KeyOutline } from "solar-icon-set";
import { type RestaurantInfo } from "@/data/settingsData";

type Props = {
  restaurant: RestaurantInfo;
};

export default function RestaurantInfoCard({ restaurant }: Props) {
  return (
    <CardContent variant={"2"} title="Información del Restaurante" icon={<Buildings2Outline />}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px]">
            Nombre del Restaurante
          </p>
          <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-gray-100 rounded-2xl p-3 border-gray-300">
            {restaurant.name}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px]">
            Clave del Restaurante
          </p>
          <div className="flex flex-row gap-2 w-full">
            <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-Blue-200/20 rounded-2xl p-3 border-Blue-200/50 w-full">
              {restaurant.key}
            </p>
            <div className="p-1 border-Blue-700 border-2 h-fit w-fit text-Blue-700 rounded-2xl items-center">
              <KeyOutline className="w-6 h-6" />
            </div>
          </div>
          <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px]">
            {restaurant.description}
          </p>
        </div>
      </div>
    </CardContent>
  );
}
