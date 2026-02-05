export interface Tea {
  name: string;
  benefit: string;
  image: string;
}

export interface TeaCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  teas: Tea[];
}

export interface Topping {
  id: string;
  name: string;
  chineseName: string;
  description: string;
  price: number;
  weight: string;
  imageUrl: string;
  recommendedPairings: string[]; // Array of Tea Category IDs
  category: string;
}

export const teaCategories: TeaCategory[] = [
  {
    id: 'herbal',
    title: 'Herbal Tea',
    subtitle: 'Nature\'s Remedy',
    icon: '🌿',
    teas: [
      { name: 'Pandan', benefit: 'Relax', image: '/images/menu/herb-baitoey.webp' },
      { name: 'Lemongrass', benefit: 'Digestion', image: '/images/menu/herb-lemongrass.webp' },
      { name: 'Mint', benefit: 'Fresh', image: '/images/menu/herb-mint.webp' },
      { name: 'Mulberry', benefit: 'Sugar Control', image: '/images/menu/herb-baimon.webp' },
      { name: 'Holy Basil', benefit: 'Immunity', image: '/images/menu/herb-basil.webp' },
    ],
  },
  {
    id: 'flower',
    title: 'Flower Tea',
    subtitle: 'Aesthetic Wellness',
    icon: '🌸',
    teas: [
      { name: 'Chamomile', benefit: 'Sleep', image: '/images/menu/flower-chamomile.webp' },
      { name: 'Butterfly Pea', benefit: 'Eye Care', image: '/images/menu/flower-butterfly.webp' },
      { name: 'Rose', benefit: 'Skin', image: '/images/menu/flower-rose.webp' },
      { name: 'Chrysanthemum', benefit: 'Cooling', image: '/images/menu/flower-chrysanthemum.webp' },
    ],
  },
  {
    id: 'fruit',
    title: 'Fruit Tea',
    subtitle: 'Refreshing Vitality',
    icon: '🍊',
    teas: [
      { name: 'Dried Lime', benefit: 'Vitamin C', image: '/images/menu/fruit-lime.webp' },
      { name: 'Orange Peel', benefit: 'Digestion', image: '/images/menu/fruit-orange.webp' },
      { name: 'Roselle', benefit: 'Blood Pressure', image: '/images/menu/fruit-roselle.webp' },
      { name: 'Dried Apple', benefit: 'Aroma', image: '/images/menu/fruit-apple.webp' },
    ],
  },
  {
    id: 'root',
    title: 'Root & Seed',
    subtitle: 'Deep Healing',
    icon: '🌰',
    teas: [
      { name: 'Turmeric', benefit: 'Anti-inflammation', image: '/images/menu/snr-kamin.webp' },
      { name: 'Cardamom', benefit: 'Warmth', image: '/images/menu/snr-krawan.webp' },
      { name: 'Cinnamon', benefit: 'Warmth', image: '/images/menu/snr-chaem.webp' },
      { name: 'Licorice', benefit: 'Soothing', image: '/images/menu/snr-chaem.webp' },
    ],
  },
  {
    id: 'pure',
    title: 'Pure Tea',
    subtitle: 'Camellia Sinensis',
    icon: '🍵',
    teas: [
      { name: 'Black Tea', benefit: 'Energy', image: '/images/menu/tea-black.webp' },
      { name: 'Oolong', benefit: 'Focus', image: '/images/menu/tea-oolong.webp' },
      { name: 'White Tea', benefit: 'Antioxidant', image: '/images/menu/tea-white.webp' },
      { name: 'Pu-erh', benefit: 'Metabolism', image: '/images/menu/tea-dark.webp' },
    ],
  },
];

export const herbalJewels: Topping[] = [
  // --- Chinese Herbal Jelly (Herbal) ---
  { 
    id: 'goji', 
    name: 'Goji Berry Jelly', 
    chineseName: '枸杞冻', 
    price: 20, 
    weight: '40g', 
    description: 'Natural sweetness, soft texture. High in antioxidants.', 
    category: 'Herbal', 
    imageUrl: '/images/topping/jelly-goji.webp',
    recommendedPairings: ['herbal', 'pure']
  },
  { 
    id: 'longan', 
    name: 'Dried Longan Jelly', 
    chineseName: '桂圆冻', 
    price: 20, 
    weight: '40g', 
    description: 'Aromatic and warming. Ancient recipe.', 
    category: 'Herbal', 
    imageUrl: '/images/topping/jelly-longan.webp',
    recommendedPairings: ['pure', 'root']
  },
  { 
    id: 'red-date', 
    name: 'Chinese Red Date Jelly', 
    chineseName: '红枣冻', 
    price: 20, 
    weight: '40g', 
    description: 'Deep sweetness, round taste. Classic Chinese flavor.', 
    category: 'Herbal', 
    imageUrl: '/images/topping/jelly-jujube.webp',
    recommendedPairings: ['herbal', 'root']
  },
  { 
    id: 'chrysanthemum-jelly', 
    name: 'Chrysanthemum Jelly', 
    chineseName: '菊花冻', 
    price: 25, 
    weight: '40g', 
    description: 'Fresh, light, cooling. Pairs well with Oolong.', 
    category: 'Herbal', 
    imageUrl: '/images/topping/jelly-chrysanthemum.webp',
    recommendedPairings: ['pure', 'flower']
  },
  { 
    id: 'tangerine-konjac', 
    name: 'Dried Tangerine Peel Konjac', 
    chineseName: '陈皮蒟蒻', 
    price: 30, 
    weight: '50g', 
    description: 'Deep complex aroma. Signature citrus peel flavor.', 
    category: 'Herbal', 
    imageUrl: '/images/topping/jelly-tangerine.webp',
    recommendedPairings: ['herbal', 'fruit']
  },

  // --- Fruit Jelly (Fruit) ---
  { 
    id: 'hawthorn', 
    name: 'Hawthorn Jelly', 
    chineseName: '山楂冻', 
    price: 25, 
    weight: '40g', 
    description: 'Sweet and sour. Excellent for cutting richness.', 
    category: 'Fruit', 
    imageUrl: '/images/topping/jelly-hawthorn.webp',
    recommendedPairings: ['fruit', 'flower']
  },
  { 
    id: 'pear', 
    name: 'Chinese Pear Jelly', 
    chineseName: '雪梨冻', 
    price: 25, 
    weight: '40g', 
    description: 'Fresh and bright. Pairs with light teas.', 
    category: 'Fruit', 
    imageUrl: '/images/topping/jelly-pear.webp',
    recommendedPairings: ['fruit', 'pure']
  },
  { 
    id: 'kumquat', 
    name: 'Kumquat Jelly', 
    chineseName: '金桔冻', 
    price: 25, 
    weight: '40g', 
    description: 'Zesty sour-sweet profile with aromatic peel.', 
    category: 'Fruit', 
    imageUrl: '/images/topping/jelly-kumquat.webp',
    recommendedPairings: ['fruit', 'flower']
  },
  { 
    id: 'pomelo', 
    name: 'Pomelo Peel Jelly', 
    chineseName: '柚子皮冻', 
    price: 25, 
    weight: '40g', 
    description: 'Subtle bitterness, premium citrus vibe.', 
    category: 'Fruit', 
    imageUrl: '/images/topping/jelly-pomelo.webp',
    recommendedPairings: ['fruit', 'pure']
  }
];