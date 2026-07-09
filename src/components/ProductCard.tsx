import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice, formatReviewCount } from "@/lib/products";
import { StarRating } from "./StarRating";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  const discount =
    product.originalPrice &&
    Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

  return (
    <article className="card card-hover flex flex-col overflow-hidden h-full group">
      <Link href={`/product/${product.id}`} className="flex-1 flex flex-col">
        <div className="relative aspect-square bg-gradient-to-br from-[var(--surface-3)] to-[var(--black-3)] overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-[var(--accent)] text-[var(--black)] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="absolute top-3 right-3 bg-[var(--danger)] text-white text-[10px] font-bold px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        <div className="p-4 flex flex-col flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--primary)] mb-1.5">
            {product.category}
          </p>
          <h3 className="text-sm font-semibold text-[var(--text)] line-clamp-2 mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
            {product.title}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <StarRating rating={product.rating} />
            <span className="text-xs text-[var(--text-muted)]">
              ({formatReviewCount(product.reviewCount)})
            </span>
          </div>
          <div className="mt-auto flex items-baseline gap-2">
            <span className="text-lg font-bold text-[var(--text)]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[var(--text-subtle)] line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <AddToCartButton product={product} compact />
      </div>
    </article>
  );
}
