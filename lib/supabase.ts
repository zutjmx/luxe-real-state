import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type DbProperty = {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: number;
  price_label: string | null;
  beds: number;
  baths: number;
  area: number;
  image_url: string;
  tag_text: string | null;
  tag_type: 'exclusive' | 'new' | 'sale' | 'rent' | null;
  is_featured: boolean;
  images: string[];
  created_at: string;
};
