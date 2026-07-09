"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

export function AddToCartButton({
  product,
  compact = false,
  quantity = 1,
}: {
  product: Product;
  compact?: boolean;
  quantity?: number;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  if (compact) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`btn btn-full btn-sm transition-all ${
          added
            ? "bg-[var(--success)] text-white shadow-md"
            : "btn-secondary hover:border-[var(--primary)] hover:text-[var(--primary)]"
        }`}
      >
        {added ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Added
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add
          </>
        )}
      </button>
    );
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleClick}
        disabled={!product.inStock}
        className={`btn btn-full btn-lg transition-all ${
          added ? "bg-[var(--success)] text-white" : "btn-primary"
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {added ? "Added to Cart ✓" : "Add to Cart"}
      </button>
    </div>
  );
}
