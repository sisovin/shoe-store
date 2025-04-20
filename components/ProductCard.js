import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-red-500">Discount: {product.discount}%</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Add to Cart
      </button>
    </div>
  );
}
