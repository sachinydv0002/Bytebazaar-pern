import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.MODE === "development" ? "http://localhost:3000" : "");
const TOKEN_KEY = "bytebazaar_admin_token";

export const useAuthStore = create((set) => ({
  token: sessionStorage.getItem(TOKEN_KEY),
  isAdmin: Boolean(sessionStorage.getItem(TOKEN_KEY)),
  loading: false,

  login: async (credentials) => {
    set({ loading: true });
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/login`, credentials);
      sessionStorage.setItem(TOKEN_KEY, response.data.token);
      set({ token: response.data.token, isAdmin: true });
      toast.success("Admin login successful");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to sign in");
      return false;
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    sessionStorage.removeItem(TOKEN_KEY);
    set({ token: null, isAdmin: false });
    toast.success("Logged out");
  },
}));

export const getAuthHeaders = () => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const handleAuthError = (error) => {
  if (error.response?.status === 401) {
    sessionStorage.removeItem(TOKEN_KEY);
    useAuthStore.setState({ token: null, isAdmin: false });
  }
  return error.response?.data?.message || "Something went wrong";
};
