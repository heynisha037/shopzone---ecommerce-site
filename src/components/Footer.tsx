import Link from "next/link";
import { BackToTop } from "./BackToTop";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-gradient-to-r from-[var(--black-3)] via-[var(--primary-dark)]/40 to-[var(--black-3)] border-y border-[var(--border)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Stay in the <span className="text-[var(--accent-light)]">loop</span>
              </h3>
              <p className="text-[var(--primary-light)]/80 text-sm">
                Get exclusive deals and new arrivals delivered to your inbox.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-[var(--surface-3)] border border-[var(--border)] text-white placeholder:text-[var(--text-subtle)] outline-none focus:border-[var(--primary)] transition-colors"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--black)] font-semibold text-sm hover:bg-[var(--accent-light)] transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[var(--black-2)] text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link href="/deals" className="hover:text-white transition-colors">Deals</Link></li>
              <li><Link href="/category/electronics" className="hover:text-white transition-colors">Electronics</Link></li>
              <li><Link href="/category/fashion" className="hover:text-white transition-colors">Fashion</Link></li>
              <li><Link href="/category/home" className="hover:text-white transition-colors">Home & Kitchen</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li><Link href="/orders" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {["𝕏", "in", "ig"].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-white/20 transition-colors"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--black)] text-gray-500 text-xs py-6 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="text-gray-400 font-semibold text-sm">ShopZone</span>
          </div>
          <p>© {new Date().getFullYear()} ShopZone. Demo store — no real transactions.</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
