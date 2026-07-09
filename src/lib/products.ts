import type { Category, Product } from "./types";

export const categories: { slug: Category; label: string; icon: string }[] = [
  { slug: "electronics", label: "Electronics", icon: "📱" },
  { slug: "books", label: "Books", icon: "📚" },
  { slug: "home", label: "Home & Kitchen", icon: "🏠" },
  { slug: "fashion", label: "Fashion", icon: "👗" },
  { slug: "sports", label: "Sports", icon: "⚽" },
  { slug: "beauty", label: "Beauty", icon: "💄" },
];

export const products: Product[] = [
  {
    id: "1",
    title: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium over-ear headphones with 40-hour battery life, active noise cancellation, and crystal-clear sound for music and calls.",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 12847,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "electronics",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "2",
    title: '4K Ultra HD Smart TV 55"',
    description:
      "Stunning 4K resolution with HDR10+, built-in streaming apps, and voice control. Perfect for movies and gaming.",
    price: 449.99,
    originalPrice: 599.99,
    rating: 4.6,
    reviewCount: 3421,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    category: "electronics",
    badge: "Deal of the Day",
    inStock: true,
  },
  {
    id: "3",
    title: "The Art of Programming — Hardcover",
    description:
      "A comprehensive guide to modern software development, design patterns, and best practices for engineers at every level.",
    price: 24.99,
    rating: 4.8,
    reviewCount: 892,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    category: "books",
    inStock: true,
  },
  {
    id: "4",
    title: "Stainless Steel Coffee Maker",
    description:
      "Programmable 12-cup drip coffee maker with thermal carafe, auto shut-off, and reusable filter basket.",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.3,
    reviewCount: 5621,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
    category: "home",
    inStock: true,
  },
  {
    id: "5",
    title: "Men's Classic Fit Cotton T-Shirt (Pack of 3)",
    description:
      "Soft, breathable 100% cotton tees in black, white, and navy. Pre-shrunk and machine washable.",
    price: 19.99,
    rating: 4.4,
    reviewCount: 15234,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "fashion",
    badge: "Amazon's Choice",
    inStock: true,
  },
  {
    id: "6",
    title: "Yoga Mat with Carrying Strap",
    description:
      "Extra-thick 6mm non-slip mat for yoga, pilates, and floor exercises. Eco-friendly TPE material.",
    price: 29.99,
    rating: 4.7,
    reviewCount: 4102,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    category: "sports",
    inStock: true,
  },
  {
    id: "7",
    title: "Vitamin C Serum for Face",
    description:
      "Brightening anti-aging serum with hyaluronic acid. Dermatologist-tested, cruelty-free, 1 fl oz.",
    price: 18.99,
    originalPrice: 34.99,
    rating: 4.2,
    reviewCount: 9876,
    image: "/products/vitamin-c-serum.jpg",
    category: "beauty",
    inStock: true,
  },
  {
    id: "8",
    title: "Portable Bluetooth Speaker",
    description:
      "Waterproof IPX7 speaker with 360° sound, 24-hour playtime, and built-in microphone for hands-free calls.",
    price: 39.99,
    rating: 4.5,
    reviewCount: 7234,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "electronics",
    inStock: true,
  },
  {
    id: "9",
    title: "Ceramic Non-Stick Cookware Set (10-Piece)",
    description:
      "Complete set with pots, pans, and lids. PFOA-free coating, oven-safe up to 450°F, dishwasher safe.",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviewCount: 2891,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    category: "home",
    inStock: true,
  },
  {
    id: "10",
    title: "Women's Running Shoes",
    description:
      "Lightweight mesh upper with cushioned sole for all-day comfort. Available in multiple colors.",
    price: 64.99,
    rating: 4.4,
    reviewCount: 6543,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "fashion",
    inStock: true,
  },
  {
    id: "11",
    title: "Science Fiction Anthology — Paperback",
    description:
      "Twenty classic and contemporary sci-fi stories from award-winning authors. Perfect for fans of the genre.",
    price: 14.99,
    rating: 4.6,
    reviewCount: 445,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    category: "books",
    inStock: true,
  },
  {
    id: "12",
    title: "Adjustable Dumbbell Set 20lb",
    description:
      "Space-saving adjustable weights from 5–20 lbs per hand. Quick-change dial system for fast workouts.",
    price: 149.99,
    rating: 4.8,
    reviewCount: 1876,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
    category: "sports",
    badge: "Best Seller",
    inStock: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function formatReviewCount(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return String(count);
}
