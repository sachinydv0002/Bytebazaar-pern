import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "@/store/useThemeStore";

import { Toaster } from "react-hot-toast";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden bg-base-200 transition-colors duration-300" data-theme={theme}>
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;