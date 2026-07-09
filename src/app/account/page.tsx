import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="card p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white text-2xl font-bold">
            S
          </div>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Sign in to your ShopZone account
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[var(--text)] mb-1.5 block">Email</label>
            <input type="email" placeholder="you@example.com" className="input" />
          </div>
          <div>
            <label className="text-sm font-medium text-[var(--text)] mb-1.5 block">Password</label>
            <input type="password" placeholder="••••••••" className="input" />
          </div>
          <button type="button" className="btn btn-primary btn-full btn-lg mt-2">
            Sign In
          </button>
        </form>

        <p className="text-xs text-[var(--text-subtle)] text-center mt-6">
          Demo store — account features are not connected to a backend.
        </p>

        <p className="text-sm text-center mt-4">
          New here?{" "}
          <Link href="/" className="text-[var(--primary)] font-semibold hover:underline">
            Start shopping
          </Link>
        </p>
      </div>
    </div>
  );
}
