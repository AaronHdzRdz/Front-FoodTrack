import { Product } from "../../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <button className="rounded-2xl border-gray-100 border-2 overflow-hidden text-left bg-white shadow-sm hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="w-full h-36 md:h-44 object-cover" />
      <div className="p-3 md:p-5 flex flex-col gap-2 md:gap-3">
        <div className="bg-Blue-50 rounded-lg w-fit py-1 px-3 text-sm">{product.category}</div>
        <h3 className="w-full text-navy-900 text-base md:text-lg font-medium leading-6">{product.title}</h3>
        <p className="text-Blue-700 font-actor text-lg md:text-2xl font-normal leading-6">${product.price.toFixed(2)}</p>
      </div>
    </button>
  );
}
