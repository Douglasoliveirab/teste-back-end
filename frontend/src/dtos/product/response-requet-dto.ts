export interface ProductResponse {
  id: number;
  name: string;
  description?: string;
  price: number;
  category?: string;
  image?: string;
  created_at: string;
  updated_at: string;
}
