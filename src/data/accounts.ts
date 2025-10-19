export type Account = {
  id: string;
  type: "Mesas" | "Barra" | "Para Llevar";
  table?: string;
  waiter: string;
  ticketNumber: string;
  total: number;
  image: string;
};

export const accounts: Account[] = [
  {
    id: "a1",
    type: "Mesas",
    table: "Mesa 1",
    waiter: "Sebastian",
    ticketNumber: "1234",
    total: 134,
    image:
      "https://blog.dipratos.com.br/wp-content/uploads/2020/07/como-montar-uma-mesa-de-restaurante.jpg",
  },
  {
    id: "a2",
    type: "Mesas",
    table: "Mesa 2",
    waiter: "Mariana",
    ticketNumber: "1235",
    total: 256.5,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.jsW7psd7f0tIMQELSevc6AHaE8?cb=12ucfimg=1&w=1600&h=1067&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "a3",
    type: "Barra",
    waiter: "Carlos",
    ticketNumber: "2001",
    total: 78.25,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.uD7O_LmKpVrSlAj5EmPiQgHaFb?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "a4",
    type: "Para Llevar",
    waiter: "Delivery",
    ticketNumber: "3004",
    total: 99.0,
    image:
      "https://thvnext.bing.com/th/id/OIP.3b9y7nQUJvaOxFTPiGiZewHaE8?o=7&cb=12rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

