import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";
import { getAuthHeaders, handleAuthError, useAuthStore } from "./useAuthStore";

const BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.MODE === "development" ? "http://localhost:3000" : "");

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  currentProduct: null,
  formData: { name: "", price: "", image: "" },

  setFormData: (formData) => set({ formData }),
  resetForm: () => set({ formData: { name: "", price: "", image: "" } }),

  addProduct: async (e) => {
    e.preventDefault();
    if (!useAuthStore.getState().isAdmin) {
      toast.error("Only Admin can add products. Please log in as Admin.");
      return false;
    }
    set({ loading: true });
    try {
      const { formData } = get();
      await axios.post(`${BASE_URL}/api/products`, formData, { headers: getAuthHeaders() });
      await get().fetchProducts();
      get().resetForm();
      toast.success("Product added successfully");
      document.getElementById("add_product_modal")?.close();
      return true;
    } catch (error) {
      toast.error(handleAuthError(error));
    } finally {
      set({ loading: false });
    }
  },

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      set({ products: response.data.data, error: null });
    } catch (error) {
      set({
        error: error.response?.status === 429 ? "Rate limit exceeded" : error.response?.data?.message || "Something went wrong",
        products: [],
      });
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id) => {
    if (!useAuthStore.getState().isAdmin) {
      toast.error("Only Admin can delete products. Please log in as Admin.");
      return false;
    }
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`, { headers: getAuthHeaders() });
      set((prev) => ({ products: prev.products.filter((product) => product.id !== id) }));
      toast.success("Product deleted successfully");
      return true;
    } catch (error) {
      toast.error(handleAuthError(error));
    } finally {
      set({ loading: false });
    }
  },

  fetchProduct: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products/${id}`);
      set({ currentProduct: response.data.data, formData: response.data.data, error: null });
    } catch (error) {
      set({ error: error.response?.data?.message || "Something went wrong", currentProduct: null });
    } finally {
      set({ loading: false });
    }
  },

  updateProduct: async (id) => {
    if (!useAuthStore.getState().isAdmin) {
      toast.error("Only Admin can update products. Please log in as Admin.");
      return false;
    }
    set({ loading: true });
    try {
      const { formData } = get();
      const response = await axios.put(`${BASE_URL}/api/products/${id}`, formData, { headers: getAuthHeaders() });
      set({ currentProduct: response.data.data });
      toast.success("Product updated successfully");
      return true;
    } catch (error) {
      toast.error(handleAuthError(error));
    } finally {
      set({ loading: false });
    }
  },
}));
