import { createElement } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  InfoIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StoreIcon,
  UserRoundIcon,
} from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import AdminLogin from "./AdminLogin";
import { useAuthStore } from "../store/useAuthStore";
import { useCartStore } from "../store/useCartStore";

const navItems = [
  { label: "Home", shortLabel: "Home", to: "/", icon: HomeIcon },
  { label: "About", shortLabel: "About", to: "/about", icon: InfoIcon },
  { label: "Shop", shortLabel: "Shop", to: "/#product-listing", icon: StoreIcon },
  { label: "Cart", shortLabel: "Cart", to: "/cart", icon: ShoppingBagIcon },
];

function Navbar() {
  const { pathname } = useLocation();
  const { isAdmin, logout } = useAuthStore();
  const cartCount = useCartStore((state) => state.items.reduce((total, item) => total + item.quantity, 0));

  const isActive = (to) => {
    if (to === "/#product-listing") return pathname === "/";
    return pathname === to;
  };

  const linkClasses = (to) => (
    `group flex min-w-0 items-center justify-center gap-1.5 rounded-xl px-1.5 py-2 text-sm font-semibold transition-all md:px-2.5 ${
      isActive(to)
        ? "bg-primary text-primary-content shadow-sm"
        : "text-base-content/75 hover:bg-primary/10 hover:text-primary"
    }`
  );

  const renderNavLink = ({ label, shortLabel, to, icon: Icon }) => (
    <Link
      key={to}
      to={to}
      className={linkClasses(to)}
      aria-current={isActive(to) ? "page" : undefined}
      aria-label={label}
    >
      {createElement(Icon, { className: "size-5 shrink-0 md:size-[1.1rem]" })}
      <span className="hidden truncate md:inline">{shortLabel}</span>
      {label === "Cart" && (
        <span className={`badge badge-xs sm:badge-sm ${isActive(to) ? "badge-secondary" : "badge-primary"}`}>
          {cartCount}
        </span>
      )}
    </Link>
  );

  const adminAction = (
    isAdmin ? (
      <button
        type="button"
        className="group flex min-w-0 items-center justify-center gap-1.5 rounded-xl px-1.5 py-2 text-sm font-semibold text-success transition-all hover:bg-success/10 md:px-2.5"
        onClick={logout}
        aria-label="Log out Admin"
      >
        <UserRoundIcon className="size-5 shrink-0 md:size-[1.1rem]" />
        <span className="hidden truncate md:inline">Admin</span>
      </button>
    ) : (
      <button
        type="button"
        className="group flex min-w-0 items-center justify-center gap-1.5 rounded-xl px-1.5 py-2 text-sm font-semibold text-base-content/75 transition-all hover:bg-primary/10 hover:text-primary md:px-2.5"
        onClick={() => document.getElementById("admin_login_modal")?.showModal()}
        aria-label="Open Admin login"
      >
        <UserRoundIcon className="size-5 shrink-0 md:size-[1.1rem]" />
        <span className="hidden truncate md:inline">Admin Login</span>
      </button>
    )
  );

  return (
    <header className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/95 shadow-sm backdrop-blur-lg">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4">
        <div className="flex min-h-[4.25rem] items-center justify-between gap-2">
          <Link to="/" className="flex min-w-0 shrink items-center gap-2 transition-opacity hover:opacity-80" aria-label="ByteBazaar home">
            <ShoppingCartIcon className="size-8 shrink-0 text-primary sm:size-9" />
            <span className="truncate bg-gradient-to-r from-primary to-secondary bg-clip-text font-mono text-lg font-semibold tracking-widest text-transparent sm:text-2xl">
              ByteBazaar
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map(renderNavLink)}
            {adminAction}
            <ThemeSelector />
          </div>

          <div className="flex items-center md:hidden">
            <ThemeSelector />
          </div>
        </div>

        <nav
          className="grid grid-cols-5 gap-1 border-t border-base-content/10 py-2 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map(renderNavLink)}
          {adminAction}
        </nav>

        {!isAdmin && <AdminLogin />}
      </div>
    </header>
  );
}

export default Navbar;
