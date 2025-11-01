import { Product } from "../../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const stock = product.stock ?? 0;
  const badgeText = stock === 0 ? "Agotado" : `${stock} en stock`;
  const badgeClass =
    stock === 0
      ? "bg-red-50 text-red-700"
      : stock < 5
      ? "bg-yellow-50 text-yellow-800"
      : "bg-green-50 text-green-700";

  return (
    <button className="relative rounded-2xl border-gray-100 border-2 overflow-hidden text-left bg-white shadow-sm hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="w-full h-36 md:h-44 object-cover" />

      {/* Stock badge */}
      <span
        className={`absolute top-3 right-3 text-xs font-medium py-1 px-2 rounded-full ${badgeClass}`}
        aria-hidden={stock > 0 ? "false" : "true"}
      >
        {badgeText}
      </span>

      <div className="p-3 md:p-5 flex flex-col gap-2 md:gap-3">
        <div className="bg-Blue-50 rounded-lg w-fit py-1 px-3 text-sm">{product.category}</div>
        <h3 className="w-full text-navy-900 text-base md:text-lg font-medium leading-6">{product.title}</h3>
        <p className="text-Blue-700 font-actor text-lg md:text-2xl font-normal leading-6">${product.price.toFixed(2)}</p>
      </div>
    </button>
  );
}
