import type { Product, Variant } from "../types/product";

interface ProductCardProps {
  product: Product;
  currency?: string;
  featured?: boolean;
}

interface BadgeProps {
  variant: Variant;
}

function Badge({ variant }: BadgeProps) {
  const isIn = variant === "in-stock";
  const classes = isIn ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
  const label = isIn ? "In stock" : "Out of stock";
  return <span className={"text-xs px-2 py-1 rounded-full " + classes}>{label}</span>;
}

export default function ProductCard({
  product,
  currency = "Rp",
  featured = false,
}: ProductCardProps) {
  return (
    <div
      className={
        "border border-gray-700 rounded-lg p-4 w-56 " +
        (featured ? "ring-2 ring-blue-500" : "")
      }
    >
      <div className="bg-gray-800 h-24 flex items-center justify-center rounded mb-3">
        img
      </div>
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="mb-2 text-sm text-gray-300">
        {currency} {product.price.toLocaleString("id-ID")}
      </p>
      <Badge variant={product.in_stock ? "in-stock" : "out-of-stock"} />
    </div>
  );
}
