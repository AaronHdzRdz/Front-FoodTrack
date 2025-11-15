"use client";
import CardContent from "@/components/admin/Cards";
import { UserOutline } from "solar-icon-set";
import { type UserInfo } from "@/data/settingsData";

type Props = {
  user: UserInfo;
};

export default function UserAccountCard({ user }: Props) {
  return (
    <CardContent variant={"2"} title="Cuenta de Usuario" icon={<UserOutline />}>
      <div className="flex flex-col gap-2">
        <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px]">
          Nombre de Usuario
        </p>
        <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-gray-100 rounded-2xl p-3 border-gray-300">
          {user.username}
        </p>
        <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px]">
          El nombre de usuario no puede ser modificado
        </p>
      </div>
    </CardContent>
  );
}
