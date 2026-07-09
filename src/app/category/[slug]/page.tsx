import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/lib/products";
import type { Category } from "@/lib/types";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(slug as Category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="card p-6 md:p-8 mb-8 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-3)] border-[var(--primary)]/15">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{category.icon}</span>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{category.label}</h1>
            <p className="text-[var(--text-muted)] mt-1">
              {categoryProducts.length}{" "}
              {categoryProducts.length === 1 ? "product" : "products"} available
            </p>
          </div>
        </div>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="card p-12 text-center text-[var(--text-muted)]">
          No products in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
