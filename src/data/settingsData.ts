export interface UserInfo {
    fullName: string;
    username: string;
    role: string;
    avatarUrl: string;
    lastPasswordChangeDays: number;
}

export interface RestaurantInfo {
    name: string;
    key: string;
    description?: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
}

export interface SettingsData {
    user: UserInfo;
    restaurant: RestaurantInfo;
    contact: ContactInfo;
}

export const settingsData: SettingsData = {
    user: {
        fullName: "Juan Pérez García",
        username: "@admin_foodtrack",
        role: "Administrador",
        avatarUrl: "https://github.com/shadcn.png",
        lastPasswordChangeDays: 30,
    },
    restaurant: {
        name: "Restaurante La Cocina Mexicana",
        key: "RESTAURANTE-LC-MEX",
        description: "Esta clave identifica tu restaurante en el sistema",
    },
    contact: {
        email: "juan.perez@foodtrack.com",
        phone: "55 1234 5678",
    },
};

export default settingsData;
