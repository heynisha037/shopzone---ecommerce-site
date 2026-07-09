import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCard } from "@/components/ProductCard";
import { StarRating } from "@/components/StarRating";
import {
  formatPrice,
  formatReviewCount,
  getProductById,
  products,
} from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount =
    product.originalPrice &&
    Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-6">
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/category/${product.category}`}
          className="hover:text-[var(--primary)] transition-colors capitalize"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-[var(--text)] font-medium line-clamp-1">{product.title}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="card overflow-hidden">
          <div className="relative aspect-square bg-gradient-to-br from-[var(--surface-3)] to-[var(--black-3)]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {discount && (
              <span className="absolute top-4 right-4 bg-[var(--danger)] text-white text-sm font-bold px-3 py-1.5 rounded-full">
                Save {discount}%
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          {product.badge && (
            <span className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold uppercase tracking-wide mb-4">
              {product.badge}
            </span>
          )}
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text)] tracking-tight mb-3">
            {product.title}
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <StarRating rating={product.rating} size="md" showValue />
            <Link href="#reviews" className="text-sm text-[var(--primary)] hover:underline">
              {formatReviewCount(product.reviewCount)} reviews
            </Link>
          </div>

          <div className="card p-5 mb-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold text-[var(--text)]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-[var(--text-subtle)] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {discount && (
              <p className="text-sm text-[var(--success)] font-medium">
                You save {formatPrice(product.originalPrice! - product.price)} ({discount}% off)
              </p>
            )}
            <div className="flex items-center gap-2 mt-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--success)]" />
              <span className="font-medium text-[var(--success)]">In Stock</span>
              <span className="text-[var(--text-muted)]">· Ships in 1–2 days</span>
            </div>
          </div>

          <p className="text-[var(--text-muted)] leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="space-y-3 max-w-md mt-auto">
            <AddToCartButton product={product} />
            <Link
              href="/cart"
              className="btn btn-secondary btn-full btn-lg text-center"
            >
              Buy Now
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border-light)] grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-lg">🚚</span>
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-[var(--text-muted)] text-xs">Orders over $35</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">↩️</span>
              <div>
                <p className="font-semibold">Easy Returns</p>
                <p className="text-[var(--text-muted)] text-xs">30-day policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="reviews" className="card p-6 md:p-8 mt-8">
        <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>
        <div className="flex items-center gap-6 mb-6 pb-6 border-b border-[var(--border-light)]">
          <div className="text-center">
            <p className="text-5xl font-bold text-[var(--text)]">{product.rating}</p>
            <StarRating rating={product.rating} size="md" />
            <p className="text-sm text-[var(--text-muted)] mt-1">
              {product.reviewCount.toLocaleString()} reviews
            </p>
          </div>
          <p className="text-sm text-[var(--text-muted)] flex-1">
            Customers love this product for its quality and value. This is a demo store — reviews are simulated.
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-6">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
