import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { categories, products } from "@/lib/products";

const trustBadges = [
  { icon: "🚚", title: "Free Shipping", desc: "On orders over $35" },
  { icon: "↩️", title: "Easy Returns", desc: "30-day return policy" },
  { icon: "🔒", title: "Secure Checkout", desc: "256-bit encryption" },
  { icon: "⭐", title: "Top Rated", desc: "4.8 avg store rating" },
];

const categoryGradients = [
  "from-blue-500/15 to-blue-400/5",
  "from-orange-400/15 to-orange-300/5",
  "from-blue-400/10 to-orange-400/10",
  "from-orange-400/15 to-amber-400/5",
  "from-sky-400/15 to-blue-500/5",
  "from-orange-300/15 to-orange-400/5",
];

export default function HomePage() {
  const deals = products.filter((p) => p.originalPrice);
  const bestSellers = products.filter((p) => p.badge === "Best Seller");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--black)]" />
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary)]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/15 text-[var(--primary-light)] text-xs font-semibold mb-6 border border-[var(--primary)]/25">
                ✨ Summer Collection 2026
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                Shop smarter,
                <br />
                <span className="text-[var(--accent-light)]">live better.</span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] mb-8 max-w-md leading-relaxed">
                Curated products at unbeatable prices. Free shipping on orders over $35.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/deals" className="btn btn-accent btn-lg shadow-lg">
                  Shop Deals
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/category/electronics" className="btn btn-lg bg-[var(--surface-3)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary-light)]">
                  Browse Electronics
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-up stagger-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=600&fit=crop"
                  alt="Featured products"
                  fill
                  className="object-cover"
                  priority
                  sizes="600px"
                />
                <div className="absolute bottom-4 left-4 right-4 card p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    40%
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Flash Sale Live</p>
                    <p className="text-xs text-[var(--text-muted)]">Up to 40% off select items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-3">
                <span className="text-2xl">{badge.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-[var(--text)]">{badge.title}</p>
                  <p className="text-xs text-[var(--text-muted)]">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeader title="Shop by Category" subtitle="Find exactly what you're looking for" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`card card-hover p-5 text-center bg-gradient-to-br ${categoryGradients[i]}`}
            >
              <span className="text-4xl block mb-3">{cat.icon}</span>
              <span className="text-sm font-semibold text-[var(--text)]">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Deals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="card p-6 md:p-8">
          <SectionHeader
            title="Today's Deals"
            subtitle="Limited-time offers you don't want to miss"
            href="/deals"
            linkLabel="See all deals"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {deals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="card p-6 md:p-8 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-3)] border-[var(--primary)]/10">
          <SectionHeader title="Best Sellers" subtitle="Most loved by our customers" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {(bestSellers.length ? bestSellers : products.slice(0, 4)).map(
              (product) => (
                <ProductCard key={product.id} product={product} />
              )
            )}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <SectionHeader
          title="Recommended for You"
          subtitle="Handpicked based on trending products"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
