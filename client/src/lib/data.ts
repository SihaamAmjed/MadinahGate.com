import heroImage from '@assets/generated_images/luxurious_hero_background_with_perfumes_and_dates.png';
import oudImage from '@assets/generated_images/elegant_crystal_oud_perfume_bottle.png';
import datesImage from '@assets/generated_images/premium_ajwa_dates_in_golden_bowl.png';
import dryFruitsImage from '@assets/generated_images/assorted_premium_dried_fruits_and_nuts.png';

export type Category = 'perfume' | 'dates' | 'dry-fruits';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Oudh Intense',
    description: 'A deep, woody fragrance with notes of amber and musk. Hand-crafted for the discerning connoisseur.',
    price: 120,
    category: 'perfume',
    image: oudImage,
    rating: 5,
    featured: true,
  },
  {
    id: '2',
    name: 'Premium Ajwa Dates',
    description: 'The finest dates from Madinah, known for their soft texture and rich sweetness.',
    price: 45,
    category: 'dates',
    image: datesImage,
    rating: 5,
    featured: true,
  },
  {
    id: '3',
    name: 'Royal Mix Nuts',
    description: 'A premium selection of roasted pistachios, almonds, and cashews.',
    price: 35,
    category: 'dry-fruits',
    image: dryFruitsImage,
    rating: 4.8,
    featured: true,
  },
  {
    id: '4',
    name: 'Amber Musk',
    description: 'A lighter, floral musk with sweet undertones. Perfect for daily wear.',
    price: 85,
    category: 'perfume',
    image: oudImage, // Reusing for now, ideally would have distinct
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Safawi Dates',
    description: 'Dark, chewy dates with a intense flavor profile. A traditional favorite.',
    price: 30,
    category: 'dates',
    image: datesImage, // Reusing
    rating: 4.9,
  },
  {
    id: '6',
    name: 'Dried Apricots',
    description: 'Sun-dried organic apricots, naturally sweet and packed with nutrients.',
    price: 25,
    category: 'dry-fruits',
    image: dryFruitsImage, // Reusing
    rating: 4.6,
  },
];

export const heroAsset = heroImage;
