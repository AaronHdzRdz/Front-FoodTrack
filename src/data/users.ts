export type UserRole = 'Mesero' | 'Cajero';

export type User = {
  id: number;
  name: string;
  role: UserRole;
  phone: number;
};

const users: User[] = [
  { id: 1, name: "Juan Perez", role: "Mesero", phone: 5551234567 },
  { id: 2, name: "Maria Lopez", role: "Mesero", phone: 5559876543 },
  { id: 3, name: "Carlos Sanchez", role: "Cajero", phone: 5554567890 },
  { id: 4, name: "Ana Martinez", role: "Mesero", phone: 5556789012 },
  { id: 5, name: "Luis Rodriguez", role: "Cajero", phone: 5553456789 },
  { id: 6, name: "Sofia Garcia", role: "Mesero", phone: 5558901234 },
  { id: 7, name: "Miguel Torres", role: "Cajero", phone: 5552345678 },
  { id: 8, name: "Elena Ramirez", role: "Cajero", phone: 5557890123 },
  { id: 9, name: "Diego Flores", role: "Mesero", phone: 5554561230 },
  { id: 10, name: "Laura Hernandez", role: "Cajero", phone: 5559012345 },
];

export default users;
