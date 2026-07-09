"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export function CartToast() {
  const { lastAdded, clearLastAdded } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (lastAdded) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(clearLastAdded, 300);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [lastAdded, clearLastAdded]);

  if (!lastAdded) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-[100] max-w-sm w-full transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="card p-4 shadow-lg animate-slide-in flex gap-3 items-center">
        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[var(--surface-3)] flex-shrink-0">
          <Image
            src={lastAdded.image}
            alt={lastAdded.title}
            fill
            className="object-contain p-1"
            sizes="56px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-[var(--success)] mb-0.5">
            Added to cart
          </p>
          <p className="text-sm font-medium line-clamp-1">{lastAdded.title}</p>
          <p className="text-sm text-[var(--text-muted)]">
            {formatPrice(lastAdded.price)}
          </p>
        </div>
        <Link href="/cart" className="btn btn-primary btn-sm flex-shrink-0">
          View
        </Link>
      </div>
    </div>
  );
}
