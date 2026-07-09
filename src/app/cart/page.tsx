"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  const shipping = subtotal >= 35 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  const itemTotal = items.reduce((s, i) => s + i.quantity, 0);
  const freeShippingProgress = Math.min((subtotal / 35) * 100, 100);

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="card p-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[var(--surface-3)] flex items-center justify-center text-4xl">
            🛒
          </div>
          <h1 className="text-2xl font-bold mb-3">Your cart is empty</h1>
          <p className="text-[var(--text-muted)] mb-8">
            Looks like you haven&apos;t added anything yet. Explore our collection and find something you love.
          </p>
          <Link href="/" className="btn btn-primary btn-lg">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Shopping Cart</h1>
      <p className="text-[var(--text-muted)] mb-8">{itemTotal} items</p>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="card p-4 md:p-5 flex gap-4 md:gap-6">
              <Link
                href={`/product/${product.id}`}
                className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-[var(--surface-3)]"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-2"
                  sizes="112px"
                />
              </Link>
              <div className="flex-1 min-w-0 flex flex-col">
                <Link
                  href={`/product/${product.id}`}
                  className="font-semibold text-sm md:text-base line-clamp-2 hover:text-[var(--primary)] transition-colors mb-1"
                >
                  {product.title}
                </Link>
                <p className="text-xs text-[var(--text-muted)] capitalize mb-2">
                  {product.category}
                </p>
                <p className="text-lg font-bold text-[var(--text)] mb-auto">
                  {formatPrice(product.price)}
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center border border-[var(--border)] rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="px-3 py-1.5 hover:bg-[var(--surface-3)] transition-colors text-lg"
                    >
                      −
                    </button>
                    <span className="px-4 py-1.5 text-sm font-semibold border-x border-[var(--border)]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="px-3 py-1.5 hover:bg-[var(--surface-3)] transition-colors text-lg"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--danger)] transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="font-bold text-[var(--text)] hidden sm:block">
                {formatPrice(product.price * quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>

            {subtotal < 35 && (
              <div className="mb-5 p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                <p className="text-xs text-[var(--primary-light)] font-medium mb-2">
                  Add {formatPrice(35 - subtotal)} more for FREE shipping
                </p>
                <div className="h-2 bg-[var(--surface-3)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full transition-all duration-500"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Shipping</span>
                <span className={`font-medium ${shipping === 0 ? "text-[var(--success)]" : ""}`}>
                  {shipping === 0 ? "FREE" : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Estimated tax</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              <hr className="border-[var(--border-light)]" />
              <div className="flex justify-between text-base">
                <span className="font-bold">Total</span>
                <span className="font-bold text-[var(--primary)]">{formatPrice(total)}</span>
              </div>
            </div>

            <Link href="/checkout" className="btn btn-primary btn-full btn-lg mb-3">
              Proceed to Checkout
            </Link>
            <Link href="/" className="btn btn-ghost btn-full btn-sm">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
