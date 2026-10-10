import { useEffect } from "react";
import { createElement } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { PackageIcon, PlusCircleIcon, RefreshCwIcon } from "lucide-react";
import ProductCard from "../components/productCard";
import AddProductModal from "../components/AddProductModal";
import { ArrowRightIcon, CheckCircle2Icon, ShieldCheckIcon, SparklesIcon } from "lucide-react";

function HomePage() {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className="w-full">
      <section className="relative overflow-hidden bg-base-100">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary sm:text-sm">
              Curated digital storefront
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Find something
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">worth keeping.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-base-content/70 sm:text-lg">
              Explore the ByteBazaar collection with a simple, focused shopping experience built for discovering great products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="btn min-h-12 rounded-xl border-0 bg-gradient-to-r from-primary to-secondary px-6 font-semibold text-primary-content shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                onClick={() => document.getElementById("product-listing")?.scrollIntoView({ behavior: "smooth" })}
              >
                Shop Now <ArrowRightIcon className="size-5" />
              </button>
              <Link
                to="/about"
                className="btn min-h-12 rounded-xl border-0 bg-gradient-to-r from-primary to-secondary px-6 font-semibold text-primary-content shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <SparklesIcon className="size-5 transition-transform duration-300 hover:rotate-12" />
                About ByteBazaar
              </Link>
            </div>
          </div>
          <div className="hidden justify-end lg:flex">
            <div className="relative w-full max-w-sm rounded-[2rem] border border-base-content/10 bg-base-200 p-3 shadow-2xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 p-8">
                <SparklesIcon className="size-10 text-primary" />
                <p className="mt-16 font-mono text-sm uppercase tracking-[0.2em] text-base-content/60">ByteBazaar</p>
                <p className="mt-2 text-3xl font-bold">Shop with intent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        {[
          [ShieldCheckIcon, "Secure admin controls", "Protected product management"],
          [SparklesIcon, "Focused discovery", "A clean catalogue to explore"],
          [CheckCircle2Icon, "Reliable foundation", "Built with the PERN stack"],
        ].map(([Icon, title, description]) => (
          <div key={title} className="flex items-start gap-4 rounded-2xl border border-base-content/10 bg-base-100 p-5">
            {createElement(Icon, { className: "mt-1 size-6 shrink-0 text-primary", "aria-hidden": true })}
            <div><h2 className="font-semibold">{title}</h2><p className="mt-1 text-sm text-base-content/60">{description}</p></div>
          </div>
        ))}
      </section>

      <section id="product-listing" className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">The collection</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Featured products</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-primary btn-sm sm:btn-md" onClick={() => document.getElementById("add_product_modal")?.showModal()}>
              <PlusCircleIcon className="size-5" /> Add Product
            </button>
            <button className="btn btn-ghost btn-square shrink-0" onClick={fetchProducts} aria-label="Refresh products">
              <RefreshCwIcon className="size-5" />
            </button>
          </div>
        </div>

      <AddProductModal />

      {error && <div className="alert alert-error mb-8">{error}</div>}

      {products.length === 0 && !loading && (
        <div className="flex flex-col justify-center items-center h-96 space-y-4">
          <div className="bg-base-100 rounded-full p-6">
            <PackageIcon className="size-12" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-semibold ">No products found</h3>
            <p className="text-gray-500 max-w-sm">
              Get started by adding your first product to the inventory
            </p>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      </section>
    </main>
  );
}
export default HomePage;