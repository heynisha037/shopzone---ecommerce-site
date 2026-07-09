import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="card p-8 md:p-12 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[var(--surface-3)] flex items-center justify-center text-4xl">
          📦
        </div>
        <h1 className="text-2xl font-bold mb-3">Your Orders</h1>
        <p className="text-[var(--text-muted)] mb-2">
          Order history is not persisted in this demo.
        </p>
        <p className="text-sm text-[var(--text-subtle)] mb-8">
          Complete a checkout to see the order confirmation screen.
        </p>
        <Link href="/" className="btn btn-primary btn-md">
          Browse Products
        </Link>
      </div>
    </div>
  );
}
