import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function DealsPage() {
  const deals = products.filter((p) => p.originalPrice);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="card p-6 md:p-8 mb-8 bg-gradient-to-r from-[var(--black-3)] via-[var(--accent)]/20 to-[var(--primary)]/20 text-white overflow-hidden relative border-[var(--accent)]/20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="relative">
          <span className="text-4xl mb-3 block">🔥</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Today&apos;s Deals</h1>
          <p className="text-[var(--accent-light)]/90">
            Limited-time discounts on {deals.length} popular items — grab them before they&apos;re gone!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {deals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
