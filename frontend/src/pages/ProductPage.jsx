import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon, SaveIcon, Trash2Icon } from "lucide-react";
import { useProductStore } from "../store/useProductStore";

function ProductPage() {
  const { currentProduct, formData, setFormData, loading, error, fetchProduct, updateProduct, deleteProduct } =
    useProductStore();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const deleted = await deleteProduct(id);
      if (deleted) navigate("/");
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen"><div className="loading loading-spinner loading-lg" /></div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8"><div className="alert alert-error">{error}</div></div>;
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-4 sm:py-8">
      <button onClick={() => navigate("/")} className="btn btn-ghost mb-6 min-h-11 sm:mb-8">
        <ArrowLeftIcon className="size-4 mr-2" />Back to Products
      </button>
      <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
        <div className="aspect-video overflow-hidden rounded-lg bg-base-100 shadow-lg md:aspect-square">
          <img src={currentProduct?.image} alt={currentProduct?.name} className="size-full object-cover" />
        </div>

        <div className="card min-w-0 bg-base-100 shadow-lg">
            <div className="card-body p-5 sm:p-8">
              <h2 className="card-title mb-6 text-xl sm:text-2xl">Edit Product</h2>
              <form onSubmit={(event) => { event.preventDefault(); updateProduct(id); }} className="space-y-6">
                <label className="form-control">
                  <span className="label-text text-base font-medium">Product Name</span>
                  <input className="input input-bordered min-h-12 w-full text-base" value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
                </label>
                <label className="form-control">
                  <span className="label-text text-base font-medium">Price</span>
                  <input type="number" min="0" step="0.01" className="input input-bordered min-h-12 w-full text-base" value={formData.price}
                    onChange={(event) => setFormData({ ...formData, price: event.target.value })} />
                </label>
                <label className="form-control">
                  <span className="label-text text-base font-medium">Image URL</span>
                  <input className="input input-bordered min-h-12 w-full text-base" value={formData.image}
                    onChange={(event) => setFormData({ ...formData, image: event.target.value })} />
                </label>
                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  <button type="button" onClick={handleDelete} className="btn btn-error min-h-12 w-full sm:w-auto">
                    <Trash2Icon className="size-4 mr-2" />Delete Product
                  </button>
                  <button type="submit" className="btn btn-primary min-h-12 w-full sm:w-auto" disabled={loading || !formData.name || !formData.price || !formData.image}>
                    {loading ? <span className="loading loading-spinner loading-sm" /> : <><SaveIcon className="size-4 mr-2" />Save Changes</>}
                  </button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </main>
  );
}

export default ProductPage;
