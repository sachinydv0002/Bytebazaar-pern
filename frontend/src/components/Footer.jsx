import {
  Code2Icon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { createElement } from "react";
import { DEVELOPER_NAME, PORTFOLIO_URL } from "../config/site";

const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" };
const socials = [
  ["Facebook", "https://www.facebook.com/profile.php?id=100054782516915", FacebookIcon],
  ["Instagram", "https://www.instagram.com/sachinydv0002_/", InstagramIcon],
  ["LinkedIn", "https://www.linkedin.com/in/sachinydv0002/", LinkedinIcon],
  ["GitHub profile", "https://github.com/sachinydv0002", GithubIcon],
  ["ByteBazaar repository", "https://github.com/sachinydv0002/Bytebazaar-pern", GithubIcon],
  ["LeetCode", "https://leetcode.com/u/sachinydv0002/", Code2Icon],
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-base-content/10 bg-neutral text-neutral-content">
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_1.5fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 transition-opacity hover:opacity-80">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30">
                <ShoppingCartIcon className="size-6 text-primary" aria-hidden="true" />
              </span>
              <span className="font-mono text-2xl font-bold tracking-widest">ByteBazaar</span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-neutral-content/65">
              A modern product marketplace built for simple discovery, clear details, and secure inventory management.
            </p>
            <div className="mt-6 h-px w-20 bg-gradient-to-r from-primary to-secondary" />
            <div className="mt-5 flex items-center gap-2 text-sm text-neutral-content/55">
              <MapPinIcon className="size-4" aria-hidden="true" /> Patna, Bihar, India.
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-neutral-content">Explore</h2>
            <nav className="mt-5 flex flex-col gap-3 text-neutral-content/65" aria-label="Footer navigation">
              <Link to="/" className="w-fit rounded transition-colors hover:text-primary">Home</Link>
              <Link to="/about" className="w-fit rounded transition-colors hover:text-primary">About</Link>
              <Link to="/#product-listing" className="w-fit rounded transition-colors hover:text-primary">Shop / Products</Link>
              <Link to="/cart" className="w-fit rounded transition-colors hover:text-primary">Cart</Link>
            </nav>
          </div>

          <div>
            <h2 className="font-semibold text-neutral-content">Connect with Sachin</h2>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {socials.map(([label, href, Icon]) => (
                <a
                  key={label}
                  href={href}
                  {...externalLinkProps}
                  className="inline-flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm text-neutral-content/70 transition-colors hover:bg-neutral-content/10 hover:text-primary"
                  aria-label={label}
                >
                  {createElement(Icon, { className: "size-4 shrink-0", "aria-hidden": true })}
                  <span className="truncate">{label}</span>
                </a>
              ))}
              <a
                href="mailto:sachincseiot@gmail.com"
                className="inline-flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm text-neutral-content/70 transition-colors hover:bg-neutral-content/10 hover:text-primary sm:col-span-2"
                aria-label="Email Sachin at sachincseiot@gmail.com"
              >
                <MailIcon className="size-4 shrink-0" aria-hidden="true" />
                <span className="break-all">sachincseiot@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-content/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-neutral-content/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm lg:px-8">
          <p>© {new Date().getFullYear()} ByteBazaar. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-1">
            <span>Built with 💕 by {DEVELOPER_NAME}</span>
            <span aria-hidden="true">·</span>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-content/75 underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              View Portfolio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
