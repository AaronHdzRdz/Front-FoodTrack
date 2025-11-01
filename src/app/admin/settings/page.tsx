import NavTabs from "@/components/admin/NavTabs";
import Header from "@/components/admin/Header";
import IconBox from "@/components/ui/iconBox";
import { LetterOutline, WalletMoneyOutline, LockOutline, Buildings2Outline, UserOutline, KeyOutline, PhoneOutline } from "solar-icon-set";
import CardContent from "@/components/admin/Cards";
import settingsData from "@/data/settingsData";

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
            <CardContent noPadding variant={"1"}>
              <div className="w-full bg-gradient-to-b p-10 from-Blue-700 from-50% to-transparent to-50% rounded-2xl items-center justify-center flex">
                <img width={250} height={250} src={user.avatarUrl} alt="Foto de perfil" className="object-cover rounded-full" />
              </div>
              <div className="flex flex-col items-center gap-3 pb-6 ">
                <h1 className="text-gray-900 font-sans text-2xl not-italic font-normal leading-9 text-center">{user.fullName}</h1>
                <p className="text-gray-900 text-center font-sans text-base not-italic font-normal leading-6 bg-Blue-50 w-fit rounded-2xl px-5 py-2">
                  {user.role}
                </p>
              </div>

            </CardContent>
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
          </div>
          <div className="col-span-2 gap-8 flex flex-col">
            <CardContent variant={"3"} title="Información de Contacto" icon={<LetterOutline />}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px] items-center flex gap-2">
                    <UserOutline />
                    Nombre Completo
                  </p>
                    <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-gray-100 rounded-2xl p-3 border-gray-300">
                    {user.fullName}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px] items-center flex gap-2">
                    <LetterOutline />
                    Correo Electrónico
                  </p>
                  <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-gray-100 rounded-2xl p-3 border-gray-300">
                    {contact.email}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px] items-center flex gap-2">
                    <PhoneOutline />
                    Teléfono
                  </p>
                  <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-gray-100 rounded-2xl p-3 border-gray-300">
                    {contact.phone}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardContent variant={"4"} title="Seguridad de la Cuenta" icon={<LockOutline />} >
              <div className="flex flex-col py-10 gap-3 items-center justify-center">
                <div className="text-negativo bg-negativo/10 rounded-full p-6">
                  <LockOutline className="w-10 h-10" />
                </div>
                <p className="text-gray-700 text-center font-sans text-base not-italic font-normal leading-6">
                  Tu contraseña está protegida
                </p>
                <p className="text-gray-500 text-center font-sans text-base not-italic font-normal leading-6">
                  Última modificación: hace {user.lastPasswordChangeDays} días
                </p>
              </div>
            </CardContent>
          </div>
        </section>
      </main>
    </>
  );
}