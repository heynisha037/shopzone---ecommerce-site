"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/lib/products";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 h-16">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-bold tracking-tight hidden sm:block">
              Shop<span className="gradient-text">Zone</span>
            </span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <svg
                className="absolute left-4 w-4 h-4 text-[var(--text-subtle)] pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands, categories..."
                className="w-full pl-11 pr-4 py-2.5 bg-[var(--surface-3)] border border-[var(--border)] rounded-full text-sm text-[var(--text)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15 transition-all"
                aria-label="Search products"
              />
            </div>
          </form>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/account"
              className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-3)] transition-colors"
            >
              Account
            </Link>
            <Link
              href="/orders"
              className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-3)] transition-colors"
            >
              Orders
            </Link>
            <Link
              href="/cart"
              className="relative ml-1 flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)] text-[var(--black)] text-sm font-semibold hover:brightness-110 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-[var(--accent)] text-[var(--black)] text-xs font-bold rounded-full flex items-center justify-center ring-2 ring-[var(--black)]">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>
          </nav>

          <Link href="/cart" className="md:hidden relative p-2">
            <svg className="w-6 h-6 text-[var(--text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 min-w-[18px] h-[18px] px-0.5 bg-[var(--accent)] text-[var(--black)] text-[10px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--surface-3)]"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-1 pb-3 overflow-x-auto scrollbar-none">
          {categories.map((c) => {
            const active = pathname === `/category/${c.slug}`;
            return (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  active
                    ? "bg-[var(--primary)] text-[var(--black)]"
                    : "text-[var(--text-muted)] hover:bg-[var(--surface-3)] hover:text-[var(--text)]"
                }`}
              >
                {c.icon} {c.label}
              </Link>
            );
          })}
          <Link
            href="/deals"
            className={`px-3.5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
              pathname === "/deals"
                ? "bg-[var(--accent)] text-[var(--black)]"
                : "text-[var(--accent-light)] hover:bg-[var(--accent)]/10"
            }`}
          >
            🔥 Deals
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] px-4 py-3 space-y-1">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-[var(--surface-3)]"
            >
              {c.icon} {c.label}
            </Link>
          ))}
          <Link
            href="/deals"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[var(--accent-light)] hover:bg-[var(--accent)]/10"
          >
            🔥 Today&apos;s Deals
          </Link>
          <hr className="border-[var(--border-light)] my-2" />
          <Link href="/account" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm hover:bg-[var(--surface-3)]">
            Account
          </Link>
          <Link href="/orders" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm hover:bg-[var(--surface-3)]">
            Orders
          </Link>
        </div>
      )}
    </header>
  );
}
