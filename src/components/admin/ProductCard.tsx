import { Product } from "../../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <button className="rounded-3xl border-gray-100 border-2 overflow-hidden text-left">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <div className="p-5 flex flex-col gap-3">
        <div className="bg-Blue-50 rounded-lg w-fit py-1 px-3">{product.category}</div>
        <h3 className="w-fit text-navy-900 text-xl font-normal leading-7 not-italic">{product.title}</h3>
        <p className="text-Blue-700 font-actor text-2xl font-normal leading-8 not-italic w-fit">${product.price.toFixed(2)}</p>
      </div>
    </button>
  );
}
