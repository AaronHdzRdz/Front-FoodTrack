export type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  cost: number;
};

export const products: Product[] = [
  {
    id: "p1",
    title: "Tacos al Pastor",
    category: "Entradas",
    price: 85.0,
    stock: 12,
    image: "https://tse1.mm.bing.net/th/id/OIP.KnlN7pmj9o0fTnpxNVLczAHaD4?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Deliciosos tacos de cerdo marinado con piña, cilantro y cebolla, servidos en tortilla de maíz.",
    cost: 48.0,
  },
  {
    id: "p2",
    title: "Ensalada César",
    category: "Entradas",
    price: 72.5,
    stock: 4,
    image: "https://recetinas.com/wp-content/uploads/2018/06/ensalada-cesar.jpg",
    description:
      "Clásica ensalada con lechuga, crutones, queso parmesano y aderezo césar casero.",
    cost: 32.0,
  },
  {
    id: "p3",
    title: "Pollo a la Parrilla",
    category: "Platos Fuertes",
    price: 140.0,
    stock: 0,
    image: "https://www.clarin.com/img/2022/03/21/LeCTEz82B_1200x630__1.jpg",
    description:
      "Pechuga de pollo marinada y asada a la parrilla, acompañada de vegetales salteados.",
    cost: 78.0,
  },
  {
    id: "p4",
    title: "Tarta de Chocolate",
    category: "Postres",
    price: 58.0,
    stock: 2,
    image: "https://th.bing.com/th/id/R.113ad40ac4664f2ed296f2173060e9e6?rik=6iDy2ZVgZ%2bfwbQ&pid=ImgRaw&r=0",
    description:
      "Tarta húmeda de chocolate con cobertura de ganache y toque de cacao amargo.",
    cost: 24.0,
  },
  {
    id: "p5",
    title: "Agua de Jamaica",
    category: "Bebidas",
    price: 25.0,
    stock: 20,
    image: "https://th.bing.com/th/id/R.b787fea4ab2b4e1874609fd92f4a3dd2?rik=RaH9M3rDulT0iQ&pid=ImgRaw&r=0",
    description:
      "Refrescante bebida de flor de jamaica con un toque de limón y poco azúcar.",
    cost: 7.5,
  },
  {
    id: "p6",
    title: "Arroz con Leche",
    category: "Postres",
    price: 45.0,
    stock: 6,
    image: "https://th.bing.com/th/id/R.bf50ee2bc7b0a8477a2e34e03b72b764?rik=bkTC1bBC9wMVPw&pid=ImgRaw&r=0",
    description:
      "Postre tradicional cremoso con canela y ralladura de naranja.",
    cost: 15.0,
  },
];

export const categories = ["Todos", "Entradas", "Platos Fuertes", "Postres", "Bebidas"];
