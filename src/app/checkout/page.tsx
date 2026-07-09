"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

const steps = ["Shipping", "Payment", "Review"];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const shipping = subtotal >= 35 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  }

  if (items.length === 0 && !placed) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="text-[var(--text-muted)] mb-4">Your cart is empty.</p>
        <Link href="/" className="btn btn-primary btn-md">
          Return to shop
        </Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20">
        <div className="card p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--success)]/15 flex items-center justify-center">
            <svg className="w-10 h-10 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-[var(--text-muted)] mb-2">
            Thank you for your purchase.
          </p>
          <p className="text-sm text-[var(--text-subtle)] mb-8">
            This is a demo — no payment was processed.
          </p>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="btn btn-primary btn-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>

      {/* Progress steps */}
      <div className="flex items-center gap-2 mb-10 max-w-md">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                i <= 1
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--surface-3)] text-[var(--text-muted)]"
              }`}
            >
              {i + 1}
            </div>
            <span className={`text-xs font-medium hidden sm:block ${i <= 1 ? "text-[var(--text)]" : "text-[var(--text-muted)]"}`}>
              {label}
            </span>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 rounded ${i < 1 ? "bg-[var(--primary)]" : "bg-[var(--border)]"}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <section className="card p-6">
            <h2 className="font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] text-sm flex items-center justify-center font-bold">1</span>
              Shipping Address
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="input sm:col-span-2" />
              <input required placeholder="Street address" className="input sm:col-span-2" />
              <input required placeholder="City" className="input" />
              <input required placeholder="ZIP code" className="input" />
            </div>
          </section>

          <section className="card p-6">
            <h2 className="font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] text-sm flex items-center justify-center font-bold">2</span>
              Payment Method
            </h2>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Demo checkout — no real payment required.
            </p>
            <input placeholder="Card number" className="input mb-3" />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="MM/YY" className="input" />
              <input placeholder="CVC" className="input" />
            </div>
          </section>
        </div>

        <div className="card p-6 h-fit sticky top-24">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
          <ul className="space-y-3 mb-5 max-h-52 overflow-y-auto">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-3 text-sm">
                <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-[var(--surface-3)]">
                  <Image src={product.image} alt="" fill className="object-contain p-0.5" sizes="48px" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="line-clamp-1 font-medium">{product.title}</p>
                  <p className="text-[var(--text-muted)]">Qty: {quantity}</p>
                </div>
                <span className="font-medium">{formatPrice(product.price * quantity)}</span>
              </li>
            ))}
          </ul>
          <hr className="border-[var(--border-light)] mb-4" />
          <div className="space-y-2 text-sm mb-6">
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Shipping</span>
              <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Tax</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <hr className="border-[var(--border-light)]" />
            <div className="flex justify-between font-bold text-lg pt-1">
              <span>Total</span>
              <span className="text-[var(--primary)]">{formatPrice(total)}</span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-full btn-lg">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
