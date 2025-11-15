"use client";
import { useState } from "react";
import NavTabs from "@/components/admin/NavTabs";
import Header from "@/components/admin/Header";
import IconBox from "@/components/ui/iconBox";
import { LetterOutline, WalletMoneyOutline, LockOutline, Buildings2Outline, UserOutline, KeyOutline, PhoneOutline, PenOutline } from "solar-icon-set";
import CardContent from "@/components/admin/Cards";
import settingsData from "@/data/settingsData";

export default function SettingsPage() {
  const { user, restaurant, contact } = settingsData;

  // Estados para modo edición
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  // Estados para modo edición de contraseña
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    // Validaciones básicas
    if (!fullName.trim() || fullName.trim().length < 3) {
      alert("El nombre completo debe tener al menos 3 caracteres");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      alert("Ingresa un correo electrónico válido");
      return;
    }
    if (!phone.trim()) {
      alert("Ingresa un número de teléfono");
      return;
    }

    console.log("[Configuración - Guardar]", {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
    });

    setIsEditing(false);
  };

  const handleCancel = () => {
    // Restaurar valores originales
    setFullName(user.fullName);
    setEmail(contact.email);
    setPhone(contact.phone);
    setIsEditing(false);
  };

  const handleUpdatePassword = () => {
    // Validaciones
    if (!currentPassword.trim()) {
      alert("Ingresa tu contraseña actual");
      return;
    }
    if (!newPassword.trim() || newPassword.trim().length < 8) {
      alert("La nueva contraseña debe tener al menos 8 caracteres");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("[Configuración - Actualizar Contraseña]", {
      currentPassword: "***",
      newPassword: "***",
    });

    // Limpiar campos y salir del modo edición
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsEditingPassword(false);
  };

  const handleCancelPassword = () => {
    // Limpiar campos y salir del modo edición
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsEditingPassword(false);
  };

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
            <CardContent
              variant={"3"}
              title="Información de Contacto"
              icon={<LetterOutline />}
              isEditing={isEditing}
              onEdit={() => setIsEditing(true)}
              onSave={handleSave}
              onCancel={handleCancel}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px] items-center flex gap-2">
                    <UserOutline />
                    Nombre Completo
                  </p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-white rounded-2xl p-3 border-Blue-700 focus:outline-none focus:ring-2 focus:ring-Blue-700"
                      placeholder="Ingresa tu nombre completo"
                    />
                  ) : (
                    <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-gray-100 rounded-2xl p-3 border-gray-300">
                      {fullName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px] items-center flex gap-2">
                    <LetterOutline />
                    Correo Electrónico
                  </p>
                  {isEditing ? (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-white rounded-2xl p-3 border-Blue-700 focus:outline-none focus:ring-2 focus:ring-Blue-700"
                      placeholder="correo@ejemplo.com"
                    />
                  ) : (
                    <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-gray-100 rounded-2xl p-3 border-gray-300">
                      {email}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px] items-center flex gap-2">
                    <PhoneOutline />
                    Teléfono
                  </p>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-white rounded-2xl p-3 border-Blue-700 focus:outline-none focus:ring-2 focus:ring-Blue-700"
                      placeholder="+52 55 1234 5678"
                    />
                  ) : (
                    <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-gray-100 rounded-2xl p-3 border-gray-300">
                      {phone}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
            <CardContent
              variant={"4"}
              title="Seguridad de la Cuenta"
              icon={<LockOutline />}
              isEditingPassword={isEditingPassword}
              onModify={() => setIsEditingPassword(true)}
              onUpdatePassword={handleUpdatePassword}
              onCancelPassword={handleCancelPassword}
            >
              {!isEditingPassword ? (
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
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px] items-center flex gap-2">
                      Contraseña Actual
                    </p>
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-white rounded-2xl p-3 border-negativo focus:outline-none focus:ring-2 focus:ring-negativo"
                      placeholder="Ingresa tu contraseña actual"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px] items-center flex gap-2">
                      Nueva Contraseña
                    </p>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-white rounded-2xl p-3 border-negativo focus:outline-none focus:ring-2 focus:ring-negativo"
                      placeholder="Ingresa tu nueva contraseña"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-500 font-sans text-sm not-italic font-normal leading-[14px] items-center flex gap-2">
                      Confirmar Nueva Contraseña
                    </p>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-white rounded-2xl p-3 border-negativo focus:outline-none focus:ring-2 focus:ring-negativo"
                      placeholder="Confirma tu nueva contraseña"
                    />
                  </div>
                  <div className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-Blue-200/20 rounded-2xl p-3 border-Blue-200/50 w-full">
                    <p>
                      La contraseña debe cumplir:
                    </p>
                    <ul className="list-disc list-inside ml-2">
                      <li>Mínimo 8 caracteres</li>
                      <li>Las contraseñas coinciden</li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <button
                      onClick={handleUpdatePassword}
                      className="bg-[#009966] text-white rounded-2xl px-4 py-3 hover:bg-[#008855] transition-colors"
                    >
                      Actualizar Contraseña
                    </button>
                    <button
                      onClick={handleCancelPassword}
                      className="border-2 border-gray-700/50 text-gray-700 rounded-2xl px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </div>
        </section>
      </main>
    </>
  );
}