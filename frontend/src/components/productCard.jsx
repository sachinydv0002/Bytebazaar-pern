import { EditIcon, ShoppingCartIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useCartStore } from "../store/useCartStore";
import toast from "react-hot-toast";
import { useState } from "react";

function ProductCard({ product }) {
  const { deleteProduct } = useProductStore();
  const addToCart = useCartStore((state) => state.addToCart);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (isAdding) return;
    setIsAdding(true);
    addToCart(product);
    toast.success("Added to cart");
    window.setTimeout(() => setIsAdding(false), 400);
  };
  return (
    <div className="card min-w-0 overflow-hidden bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
      {/* PRODUCT IMAGE */}
      <figure className="relative pt-[56.25%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        {/* PRODUCT INFO */}
        <h2 className="card-title text-lg font-semibold">{product.name}</h2>
        <p className="break-words text-xl font-bold text-primary sm:text-2xl">${Number(product.price).toFixed(2)}</p>

        {/* CARD ACTIONS */}
        <div className="mt-4 grid gap-2">
          <button
            className="btn btn-primary btn-sm min-h-10 w-full"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            <ShoppingCartIcon className="size-4" /> {isAdding ? "Added" : "Add to Cart"}
          </button>
          <div className="card-actions flex-nowrap justify-end">
          <Link to={`/product/${product.id}`} className="btn btn-sm min-h-10 min-w-10 btn-info btn-outline" aria-label={`Edit ${product.name}`}>
            <EditIcon className="size-4" />
          </Link>

          <button
            className="btn btn-sm min-h-10 min-w-10 btn-error btn-outline"
            aria-label={`Delete ${product.name}`}
            onClick={() => deleteProduct(product.id)}
          >
            <Trash2Icon className="size-4" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;