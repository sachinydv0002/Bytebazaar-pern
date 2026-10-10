import { create } from "zustand";

const STORAGE_KEY = "bytebazaar_cart";

const readCart = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

export const useCartStore = create((set) => ({
  items: readCart(),

  addToCart: (product) => set((state) => {
    const existing = state.items.find((item) => item.id === product.id);
    const items = existing
      ? state.items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...state.items, {
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        quantity: 1,
      }];
    saveCart(items);
    return { items };
  }),

  increaseQuantity: (id) => set((state) => {
    const items = state.items.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
    saveCart(items);
    return { items };
  }),

  decreaseQuantity: (id) => set((state) => {
    const items = state.items
      .map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter((item) => item.quantity > 0);
    saveCart(items);
    return { items };
  }),

  removeFromCart: (id) => set((state) => {
    const items = state.items.filter((item) => item.id !== id);
    saveCart(items);
    return { items };
  }),
}));
