import { DollarSignIcon, ImageIcon, Package2Icon, PlusCircleIcon } from "lucide-react";
import { useProductStore } from "../store/useProductStore";

function AddProductModal() {
  const { addProduct, formData, setFormData, loading } = useProductStore();

  return (
    <dialog id="add_product_modal" className="modal">
      <div className="modal-box max-h-[calc(100vh-2rem)] w-[calc(100%-1rem)] max-w-lg overflow-y-auto p-5 sm:w-11/12 sm:p-6">
        {/* CLOSE BUTTON */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
        </form>

        {/* MODAL HEADER */}
        <h3 className="font-bold text-xl mb-8">Add New Product</h3>

        <form onSubmit={addProduct} className="space-y-5 sm:space-y-6">
          <div className="grid gap-6">
            {/* PRODUCT NAME INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Product Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Package2Icon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="input input-bordered min-h-12 w-full pl-10 text-base focus:input-primary transition-colors duration-200"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            {/* PRODUCT PRICE INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Price</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <DollarSignIcon className="size-5" />
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="input input-bordered min-h-12 w-full pl-10 text-base focus:input-primary transition-colors duration-200"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
            </div>

            {/* PRODUCT IMAGE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Image URL</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <ImageIcon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered min-h-12 w-full pl-10 text-base focus:input-primary transition-colors duration-200"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* MODAL ACTIONS */}
          <div className="modal-action flex-col-reverse gap-2 sm:flex-row">
            <form method="dialog" className="w-full sm:w-auto">
              <button className="btn btn-ghost w-full sm:w-auto">Cancel</button>
            </form>
            <button
              type="submit"
              className="btn btn-primary min-h-12 w-full sm:min-w-[120px] sm:w-auto"
              disabled={!formData.name || !formData.price || !formData.image || loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* BACKDROP */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
export default AddProductModal;