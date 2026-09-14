import { ProductCategory } from '../types';

export interface CategoryInfo {
  id: ProductCategory;
  title: string;
  slug: string;
  shortDesc: string;
  subcategories: string[];
  featuredImage: string;
  itemCount: number;
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'cooking',
    title: 'Cooking',
    slug: 'cooking-equipment',
    shortDesc: 'Heavy-duty commercial ranges, fryers, griddles & high-output burners.',
    subcategories: [
      'Cooking Ranges',
      'Chinese Cooking Ranges',
      'Grills & Chargrills',
      'Griddles & Hotplates',
      'Shawarma Machines',
      'Tandoors & Ovens',
      'Salamander Broilers',
      'Stock Pot Stoves',
      'Fryers',
      'Hot Plates',
      'Burners',
      'Woks'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    itemCount: 65
  },
  {
    id: 'refrigeration',
    title: 'Refrigeration',
    slug: 'commercial-refrigeration',
    shortDesc: 'Tropicalized upright chillers, blast freezers, prep counters & walk-in cold rooms.',
    subcategories: [
      'Upright Refrigerators',
      'Display Refrigerators',
      'Display Freezers',
      'Under-Counter Units',
      'Under Counter Refrigeration',
      'Prep Counters',
      'Freezers',
      'Ice Machines',
      'Cold Rooms'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop',
    itemCount: 48
  },
  {
    id: 'bakery',
    title: 'Bakery & Pizza',
    slug: 'bakery-pizza-equipment',
    shortDesc: 'Stone hearth deck ovens, rotary convection, heavy spiral mixers & dough sheeters.',
    subcategories: [
      'Bakery & Roti Plants',
      'Pizza Ovens',
      'Deck Ovens',
      'Convection Ovens',
      'Spiral Mixers',
      'Planetary Mixers',
      'Dough Sheeters',
      'Proofers'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    itemCount: 29
  },
  {
    id: 'preparation',
    title: 'Food Preparation',
    slug: 'food-preparation-equipment',
    shortDesc: 'Precision gravity slicers, vegetable cutters, bowl cutters & commercial blenders.',
    subcategories: [
      'Vegetable Cutters',
      'Food Processors',
      'Meat Grinders',
      'Slicers',
      'Blenders',
      'Juicers',
      'Mixers'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop',
    itemCount: 24
  },
  {
    id: 'coffee',
    title: 'Coffee & Beverage',
    slug: 'commercial-coffee-equipment',
    shortDesc: 'Commercial multi-boiler espresso machines, on-demand grinders & barista stations.',
    subcategories: [
      'Espresso Machines',
      'Coffee Grinders',
      'Blenders',
      'Juicers',
      'Ice Machines',
      'Beverage Equipment'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    itemCount: 22
  },
  {
    id: 'fabrication',
    title: 'Stainless Steel Fabrication',
    slug: 'stainless-steel-fabrication',
    shortDesc: 'AISI 304 food-grade custom counters, sinks, bain-maries, racks and hoods.',
    subcategories: [
      'Work Tables',
      'Sinks',
      'Shelving',
      'Cabinets',
      'Bain Marie',
      'Racks',
      'Trolleys',
      'Custom Fabrication'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    itemCount: 48
  },
  {
    id: 'ventilation',
    title: 'Ventilation & Exhaust',
    slug: 'ventilation-solutions',
    shortDesc: 'Engineered kitchen hoods, high-static exhaust blowers, fresh air & VFD automation.',
    subcategories: [
      'Exhaust Hoods',
      'Exhaust Fans',
      'Fresh Air Systems',
      'Ducting',
      'VFD Systems',
      'Complete Ventilation Solutions'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    itemCount: 19
  },
  {
    id: 'pos-tech',
    title: 'POS & Technology',
    slug: 'kitchen-pos-technology',
    shortDesc: 'Touchscreen terminals, thermal kitchen order printers & Kitchen Display Systems (KDS).',
    subcategories: [
      'POS Hardware',
      'POS Systems',
      'Thermal Printers',
      'Cash Drawers',
      'Kitchen Display Systems',
      'Accessories'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1556742049-0a67e55722c0?q=80&w=800&auto=format&fit=crop',
    itemCount: 15
  },
  {
    id: 'smallware',
    title: 'Utensils & Smallware',
    slug: 'kitchen-utensils-smallware',
    shortDesc: 'Gastronorm containers, commercial cookware, knife sets and barware accessories.',
    subcategories: [
      'Kitchen Utensils',
      'Pans',
      'GN Containers',
      'Serving Equipment',
      'Bar Equipment'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    itemCount: 31
  }
];
