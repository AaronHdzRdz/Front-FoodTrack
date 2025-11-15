"use client";
import NavTabs from "@/components/admin/NavTabs";
import Header from "@/components/admin/Header";
import IconBox from "@/components/ui/iconBox";
import { WalletMoneyOutline } from "solar-icon-set";
import settingsData from "@/data/settingsData";
import ProfileCard from "@/components/admin/settings/ProfileCard";
import RestaurantInfoCard from "@/components/admin/settings/RestaurantInfoCard";
import UserAccountCard from "@/components/admin/settings/UserAccountCard";
import ContactInfoCard from "@/components/admin/settings/ContactInfoCard";
import PasswordSecurityCard from "@/components/admin/settings/PasswordSecurityCard";

export default function SettingsPage() {
  const { user, restaurant, contact } = settingsData;
  

  return (
    <>
      <Header showSearch={false} />
      <NavTabs />
      <main className="m-10 gap-8 flex flex-col">
        <section className="flex flex-row gap-4">
          <IconBox
            icon={<WalletMoneyOutline className="w-10 h-10" />}
            bgClass="bg-Blue-700"
            textClass="text-white"
          />
          <div className="flex flex-col">
            <p className="text-gray-900 font-sans text-2xl not-italic font-normal leading-9">
              Configuración de Cuenta
            </p>
            <p className="text-gray-500 font-sans text-base not-italic font-normal leading-6">
              Gestiona tu información personal y seguridad
            </p>
          </div>
        </section>
        <section className="flex flex-col md:grid md:grid-cols-3 gap-8">
          <div className="col-span-1 gap-8 flex flex-col">
            <ProfileCard user={user} />
            <RestaurantInfoCard restaurant={restaurant} />
            <UserAccountCard user={user} />
          </div>
          <div className="col-span-2 gap-8 flex flex-col">
            <ContactInfoCard
              initialFullName={user.fullName}
              initialEmail={contact.email}
              initialPhone={contact.phone}
            />
            <PasswordSecurityCard lastPasswordChangeDays={user.lastPasswordChangeDays} />
          </div>
        </section>
      </main>
    </>
  );
}