"use client";
import Header from "@/components/admin/Header";
import { useState, useMemo } from "react";
import NavTabs from "@/components/admin/NavTabs";
import IconBox from "@/components/ui/iconBox";
import { Bill } from "@solar-icons/react";
import { UserPlusOutline, UsersGroupRoundedOutline } from "solar-icon-set";
import users from "@/data/users";
import UserStatCard from "@/components/admin/users/UserStatCard";
import UserCard from "@/components/admin/users/UserCard";
import UserFilters from "@/components/admin/users/UserFilters";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import AddUserDrawer from "@/components/admin/AddUserDrawer";
import EditUserDrawer from "@/components/admin/EditUserDrawer";

export default function UsersPage() {
    const [roleFilter, setRoleFilter] = useState<'all' | 'meseros' | 'cajeros'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const isMd = useMediaQuery("(min-width: 768px)");
    const [open, setOpen] = useState(false); // Add User Drawer
    const [openEdit, setOpenEdit] = useState(false); // Edit User Drawer
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [userList, setUserList] = useState(users);

    // Filtrar usuarios
    const filteredUsers = useMemo(() => {
        return userList.filter(user => {
            // Filtro por búsqueda
            const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());

            // Filtro por rol
            const matchesRole =
                roleFilter === 'all' ||
                (roleFilter === 'meseros' && user.role === 'Mesero') ||
                (roleFilter === 'cajeros' && user.role === 'Cajero');

            return matchesSearch && matchesRole;
        });
    }, [searchTerm, roleFilter]);

    // Calcular totales
    const totalUsers = userList.length;
    const totalMeseros = userList.filter(u => u.role === 'Mesero').length;
    const totalCajeros = userList.filter(u => u.role === 'Cajero').length;
    return (
        <>
            <Drawer direction={isMd ? "right" : "bottom"} open={open} onOpenChange={setOpen}>
                <Header showSearch={false} />
                <NavTabs />
                <main className="m-10 flex flex-col gap-8">
                    <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 ">
                        <div className="flex flex-row gap-4">
                            <IconBox
                                icon={<UsersGroupRoundedOutline className="w-10 h-10" />}
                                bgClass="bg-Blue-700"
                                textClass="text-white"
                            />
                            <div className="flex flex-col">
                                <p className="text-gray-900 font-sans text-2xl not-italic font-normal leading-9">
                                    Gestión de Usuarios
                                </p>
                                <p className="text-gray-500 font-sans text-base not-italic font-normal leading-6">
                                    Administra el personal del restaurante
                                </p>
                            </div>
                        </div>
                        <DrawerTrigger>
                            <div className="bg-Blue-700 hover:bg-navy-900 rounded-2xl p-3 text-white gap-4 flex flex-row items-center">
                                <UserPlusOutline />
                                Agregar Usuario
                            </div>
                        </DrawerTrigger>
                    </section>
                    <section className="flex flex-col md:grid md:grid-cols-3 gap-4">
                        <UserStatCard
                            title="Total Usuarios"
                            totalUsers={totalUsers}
                            icon={<UsersGroupRoundedOutline className="h-8 w-8" />} />
                        <UserStatCard
                            title="Meseros"
                            totalUsers={totalMeseros}
                            icon={<img src="/spoon-and-fork.svg" className="h-8 w-8" />} />
                        <UserStatCard
                            title="Cajeros"
                            totalUsers={totalCajeros}
                            icon={<Bill weight="Outline" className="h-8 w-8" />} />
                    </section>
                    <UserFilters
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        roleFilter={roleFilter}
                        onRoleFilterChange={setRoleFilter}
                    />
                    <section className="flex flex-col md:grid md:grid-cols-3 gap-4">
                        {filteredUsers.map(user => (
                            <UserCard
                                key={user.id}
                                userName={user.name}
                                userRol={user.role}
                                userPhone={user.phone}
                                onClick={() => {
                                    setSelectedUser(user);
                                    setOpenEdit(true);
                                }}
                            />
                        ))}
                    </section>
                </main>
                <AddUserDrawer />
            </Drawer>
            {/* Drawer edición usuario */}
            <Drawer direction={isMd ? "right" : "bottom"} open={openEdit} onOpenChange={setOpenEdit}>
                <EditUserDrawer
                    user={selectedUser}
                    onSave={(updated) => {
                        setUserList(prev => prev.map(u => 
                            u.id === updated.id 
                                ? { ...updated, phone: u.phone } // preservar teléfono original
                                : u
                        ));
                        setOpenEdit(false);
                        setSelectedUser(null);
                    }}
                    onDelete={(id) => {
                        setUserList(prev => prev.filter(u => u.id !== id));
                        setOpenEdit(false);
                        setSelectedUser(null);
                    }}
                />
            </Drawer>
        </>)
}