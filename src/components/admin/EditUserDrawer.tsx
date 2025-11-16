'use client';
import { DangerTriangleOutline, ShieldMinimalisticOutline, UserOutline, PhoneOutline } from "solar-icon-set";
import { useState, useEffect } from "react";
import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "../ui/drawer";

type User = {
    id: number;
    name: string;
    role: 'Mesero' | 'Cajero';
};

type EditUserDrawerProps = {
    user?: User | null;
    onSave?: (updated: User, newPassword?: string) => void; // nueva contraseña opcional
    onDelete?: (id: number) => void;
};

function Input({ titulo, holder, type = "text", value, onChange }: { titulo: string, holder: string, type?: "text" | "password" | "select" | "number", value?: string, onChange?: (value: string) => void }) {
    return (
        <div className="gap-2 flex flex-col">
            <div className="flex flex-row gap-2 items-center text-navy-900 font-sans text-sm not-italic font-normal leading-none">
                <UserOutline />
                {titulo}
            </div>
            {type === "select" ? (
                <select
                    className="flex px-3 py-1 items-center self-stretch rounded-[14px] border border-gray-300 bg-gray-50"
                    value={value ?? ""}
                    onChange={(e) => onChange?.(e.target.value)}
                >
                    <option value="">Seleccionar rol</option>
                    <option value="Mesero">Mesero</option>
                    <option value="Cajero">Cajero</option>
                </select>
            ) : (
                <input
                    type={type}
                    autoComplete={'new-password'}
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    className="flex px-3 py-1 items-center self-stretch rounded-[14px] border border-gray-300 bg-gray-50"
                    placeholder={holder}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)} />
            )}
        </div>
    )
}

export default function EditUserDrawer({ user, onSave, onDelete }: EditUserDrawerProps) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [role, setRole] = useState<"" | "Mesero" | "Cajero">("");
    // Ya no se edita teléfono, se mantiene el original del usuario
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; role?: string; phone?: string; password?: string; passwordRepeat?: string }>({});

    useEffect(() => {
        if (user) {
            setName(user.name);
            setRole(user.role);
            setPassword("");
            setPasswordRepeat("");
            setErrors({});
        }
    }, [user]);

    const description = role === "Mesero"
        ? "Puede tomar órdenes, gestionar mesas y ver comandas asignadas."
        : role === "Cajero"
            ? "Puede cobrar pedidos, gestionar caja y ver pagos."
            : "Selecciona un rol para ver su descripción.";

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!name.trim()) newErrors.name = "Nombre requerido";
        if (!role) newErrors.role = "Rol requerido";
        if (password || passwordRepeat) {
            if (password.length < 8) newErrors.password = "Mínimo 8 caracteres";
            if (password !== passwordRepeat) newErrors.passwordRepeat = "No coincide";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (!user) return;
        if (!validate()) return;
        const updated: User = {
            id: user.id,
            name,
            role: role as 'Mesero' | 'Cajero'
        };
        const newPasswordToSend = password.length > 0 ? password : undefined;
        if (newPasswordToSend) {
            console.log('[Usuario - Editar]', {
                ...updated,
                password: '*'.repeat(newPasswordToSend.length)
            });
            onSave?.(updated, newPasswordToSend);
        } else {
            console.log('[Usuario - Editar]', updated);
            // No se envía contraseña porque no fue modificada
            onSave?.(updated);
        }
    };

    const handleDeleteUser = () => {
        if (user) {
            console.log("[Usuario - Eliminar]", user.id);
            onDelete?.(user.id);
        }
        setShowDeleteModal(false);
    };
    return (
        <DrawerContent>
            <DrawerHeader className="px-8 py-6 bg-navy-900 md:sticky md:top-0 md:z-10">
                <DrawerTitle className="text-white font-arial text-[24px] font-bold leading-[32px]">
                    Editar Usuario
                </DrawerTitle>
            </DrawerHeader>
            <div className="px-5 py-2 gap-5 flex flex-col flex-1 overflow-y-auto">
                <Input
                    titulo="Nombre de Usuario *"
                    holder="Ej. juan.perez"
                    value={name}
                    onChange={setName} />
                {errors.name && <p className="text-negativo text-sm">{errors.name}</p>}
                <Input
                    titulo="Nueva contraseña"
                    holder="Mínimo 8 caracteres"
                    type="password"
                    value={password}
                    onChange={setPassword} />
                {errors.password && <p className="text-negativo text-sm">{errors.password}</p>}
                <Input
                    titulo="Repetir nueva contraseña"
                    holder="Mínimo 8 caracteres"
                    type="password"
                    value={passwordRepeat}
                    onChange={setPasswordRepeat} />
                {errors.passwordRepeat && <p className="text-negativo text-sm">{errors.passwordRepeat}</p>}
                <Input
                    titulo="Rol *"
                    holder="Seleccionar rol"
                    type="select"
                    value={role}
                    onChange={(v) => setRole(v as "" | "Mesero" | "Cajero")}
                />
                {errors.role && <p className="text-negativo text-sm">{errors.role}</p>}

                <div className="flex p-4 flex-col items-start self-stretch rounded-2xl border-1 border-Blue-200 bg-Blue-200/20">
                    <div className="text-navy-900 font-sans text-base not-italic font-normal leading-6 flex flex-row gap-2 items-center">
                        <ShieldMinimalisticOutline />
                        Descripción del rol:
                    </div>
                    <p className="text-gray-700 font-sans text-sm not-italic font-normal leading-5">
                        {description}
                    </p>
                </div>
                <div className="flex p-4 flex-col items-start self-stretch rounded-2xl border-1 border-Blue-200 bg-Blue-200/20">
                    <div className="text-navy-900 font-sans text-base not-italic font-normal leading-6 flex flex-row gap-2 items-center">
                        * Campos requeridos
                    </div>
                </div>
                <div className="flex p-4 flex-col items-start self-stretch rounded-2xl border-1 border-negativo">
                    <div className="text-[#82181A] font-sans text-base not-italic font-normal leading-6 flex flex-row gap-2 items-center">
                        <DangerTriangleOutline />
                        Zona de Peligro
                    </div>
                    <p className="text-[#C10007] font-sans text-sm not-italic font-normal leading-5">
                        Eliminar este usuario es una acción permanente y no se puede deshacer.
                    </p>
                    <button
                        onClick={() => setShowDeleteModal(true)}
                        className="flex px-3 w-full py-4 rounded-2xl bg-negativo text-white items-center justify-center mt-4">
                        Eliminar Usuario
                    </button>
                </div>
            </div>

            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-6 max-w-md w-full flex flex-col gap-4">
                        <h2 className="text-navy-900 font-sans text-xl font-semibold">
                            ¿Eliminar Usuario?
                        </h2>
                        <p className="text-gray-700 font-sans text-base">
                            Esta acción no se puede deshacer. ¿Estás seguro de que deseas eliminar este usuario?
                        </p>
                        <div className="flex flex-row gap-3 mt-2">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 px-4 py-3 rounded-2xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleDeleteUser}
                                className="flex-1 px-4 py-3 rounded-2xl bg-negativo text-white hover:bg-negativo/90"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <DrawerFooter className="px-8 gap-4 py-4 flex flex-row justify-between items-center border-t-gray-500 border-t-2 w-full bg-gray-100">
                <DrawerClose asChild>
                    <div className="w-fit text-gray-700 flex gap-2 items-center border-gray-700/50 border-2 rounded-2xl  py-4 px-3">
                        Cancelar
                    </div>
                </DrawerClose>
                <button
                    onClick={handleSave}
                    className="w-full bg-Blue-700 rounded-2xl py-4 px-3 text-white">
                    Guardar Cambios
                </button>
            </DrawerFooter>
        </DrawerContent>
    );
}