"use client";
import { useState } from "react";
import CardContent from "@/components/admin/Cards";
import { LetterOutline, PhoneOutline, UserOutline } from "solar-icon-set";

type Props = {
  initialFullName: string;
  initialEmail: string;
  initialPhone: string;
};

export default function ContactInfoCard({ initialFullName, initialEmail, initialPhone }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(initialFullName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const PHONE_MAX_DIGITS = 10;

  const handleSave = () => {
    if (!fullName.trim() || fullName.trim().length < 3) {
      alert("El nombre completo debe tener al menos 3 caracteres");
      return;
    }

    const isValidEmail = /^\S+@\S+\.\S+$/.test(email.trim());
    const digits = phone.replace(/\D/g, "");
    const isValidPhone = digits.length >= 8 && digits.length <= PHONE_MAX_DIGITS;

    setEmailError(isValidEmail ? null : "Ingresa un correo electrónico válido");
    setPhoneError(
      isValidPhone ? null : `Ingresa un número de teléfono válido (8 a ${PHONE_MAX_DIGITS} dígitos)`
    );

    if (!isValidEmail || !isValidPhone) return;

    console.log("[Configuración - Guardar]", {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
    });

    setIsEditing(false);
    setEmailError(null);
    setPhoneError(null);
  };

  const handleCancel = () => {
    setFullName(initialFullName);
    setEmail(initialEmail);
    setPhone(initialPhone);
    setIsEditing(false);
    setEmailError(null);
    setPhoneError(null);
  };

  return (
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
              onChange={(e) => {
                const v = e.target.value;
                setEmail(v);
                const ok = /^\S+@\S+\.\S+$/.test(v.trim());
                setEmailError(ok ? null : "Ingresa un correo electrónico válido");
              }}
              aria-invalid={!!emailError}
              className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-white rounded-2xl p-3 border-Blue-700 focus:outline-none focus:ring-2 focus:ring-Blue-700"
              placeholder="correo@ejemplo.com"
            />
          ) : (
            <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-gray-100 rounded-2xl p-3 border-gray-300">
              {email}
            </p>
          )}
          {isEditing && emailError && (
            <p className="text-negativo text-sm">{emailError}</p>
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
              onChange={(e) => {
                const v = e.target.value;
                const digitsOnly = v.replace(/\D/g, "").slice(0, PHONE_MAX_DIGITS);
                setPhone(digitsOnly);
                setPhoneError(
                  digitsOnly.length >= 8 && digitsOnly.length <= PHONE_MAX_DIGITS
                    ? null
                    : `Ingresa un número de teléfono válido (8 a ${PHONE_MAX_DIGITS} dígitos)`
                );
              }}
              onKeyDown={(e) => {
                const allowed = new Set([
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "Tab",
                  "Home",
                  "End",
                ]);
                if (allowed.has(e.key)) return;
                const input = e.currentTarget as HTMLInputElement;
                const hasSelection = input.selectionStart !== input.selectionEnd;
                if (!hasSelection && input.value.length >= PHONE_MAX_DIGITS) {
                  e.preventDefault();
                  return;
                }
                if (!/^\d$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              inputMode="numeric"
              pattern="\\d*"
              maxLength={PHONE_MAX_DIGITS}
              aria-invalid={!!phoneError}
              className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-white rounded-2xl p-3 border-Blue-700 focus:outline-none focus:ring-2 focus:ring-Blue-700"
              placeholder="+52 55 1234 5678"
            />
          ) : (
            <p className="text-navy-900 font-sans text-base not-italic font-normal leading-6 border-1 bg-gray-100 rounded-2xl p-3 border-gray-300">
              {phone}
            </p>
          )}
          {isEditing && phoneError && (
            <p className="text-negativo text-sm">{phoneError}</p>
          )}
        </div>
      </div>
    </CardContent>
  );
}
