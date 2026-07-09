export type Category =
  | "electronics"
  | "books"
  | "home"
  | "fashion"
  | "sports"
  | "beauty";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: Category;
  badge?: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
