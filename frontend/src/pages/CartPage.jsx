import { Link } from "react-router-dom";
import { ArrowLeftIcon, MinusIcon, PlusIcon, ShoppingCartIcon, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { useCartStore } from "../store/useCartStore";

function CartPage() {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="flex min-h-[60vh] flex-1 items-center justify-center px-4 py-16">
        <div className="text-center">
          <ShoppingCartIcon className="mx-auto size-14 text-primary" aria-hidden="true" />
          <h1 className="mt-5 text-3xl font-bold">Your cart is empty</h1>
          <p className="mt-2 text-base-content/60">Add products from the collection to get started.</p>
          <Link to="/#product-listing" className="btn btn-primary mt-6">Browse products</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-3 py-8 sm:px-6 sm:py-12">
      <Link to="/#product-listing" className="btn btn-ghost mb-6 min-h-11">
        <ArrowLeftIcon className="size-4" /> Continue shopping
      </Link>
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Your selection</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Shopping cart</h1>
        <p className="mt-2 text-base-content/60">{totalItems} {totalItems === 1 ? "item" : "items"}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
        <div className="space-y-3">
          {items.map((item) => (
            <article key={item.id} className="flex min-w-0 gap-3 rounded-2xl bg-base-100 p-3 shadow-sm ring-1 ring-base-content/10 sm:gap-5 sm:p-5">
              <img src={item.image} alt={item.name} className="size-24 shrink-0 rounded-xl object-cover sm:size-32" />
              <div className="min-w-0 flex-1">
                <h2 className="truncate font-semibold sm:text-lg">{item.name}</h2>
                <p className="mt-1 text-primary">${item.price.toFixed(2)}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="join border border-base-content/10">
                    <button className="btn btn-sm join-item btn-ghost" onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease ${item.name} quantity`}><MinusIcon className="size-4" /></button>
                    <span className="flex min-w-10 items-center justify-center text-sm">{item.quantity}</span>
                    <button className="btn btn-sm join-item btn-ghost" onClick={() => increaseQuantity(item.id)} aria-label={`Increase ${item.name} quantity`}><PlusIcon className="size-4" /></button>
                  </div>
                  <button className="btn btn-sm btn-ghost text-error" onClick={() => { removeFromCart(item.id); toast.success("Removed from cart"); }} aria-label={`Remove ${item.name}`}>
                    <Trash2Icon className="size-4" /> Remove
                  </button>
                </div>
              </div>
              <p className="hidden shrink-0 font-semibold sm:block">${(item.price * item.quantity).toFixed(2)}</p>
            </article>
          ))}
        </div>
        <aside className="h-fit rounded-2xl bg-base-100 p-5 shadow-sm ring-1 ring-base-content/10 sm:p-6">
          <h2 className="text-xl font-bold">Order summary</h2>
          <div className="mt-5 flex justify-between text-base-content/70"><span>Items</span><span>{totalItems}</span></div>
          <div className="mt-3 flex justify-between text-lg font-bold"><span>Total</span><span className="text-primary">${totalPrice.toFixed(2)}</span></div>
          <button className="btn btn-primary mt-6 w-full" onClick={() => toast.success("Checkout is coming soon")}>Checkout</button>
        </aside>
      </div>
    </main>
  );
}

export default CartPage;
