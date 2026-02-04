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
      { name: 'Pandan', benefit: 'Relax', image: 'https://placehold.co/400x300/7EAD6A/ffffff?text=Pandan+Tea' },
      { name: 'Lemongrass', benefit: 'Digestion', image: 'https://placehold.co/400x300/BCD188/ffffff?text=Lemongrass' },
      { name: 'Mint', benefit: 'Fresh', image: 'https://placehold.co/400x300/7EAD6A/ffffff?text=Mint+Tea' },
      { name: 'Mulberry', benefit: 'Sugar Control', image: 'https://placehold.co/400x300/BCD188/ffffff?text=Mulberry' },
      { name: 'Holy Basil', benefit: 'Immunity', image: 'https://placehold.co/400x300/7EAD6A/ffffff?text=Holy+Basil' },
    ],
  },
  {
    id: 'flower',
    title: 'Flower Tea',
    subtitle: 'Aesthetic Wellness',
    icon: '🌸',
    teas: [
      { name: 'Chamomile', benefit: 'Sleep', image: 'https://placehold.co/400x300/E6DC6B/ffffff?text=Chamomile' },
      { name: 'Butterfly Pea', benefit: 'Eye Care', image: 'https://placehold.co/400x300/8EBDC3/ffffff?text=Butterfly+Pea' },
      { name: 'Rose', benefit: 'Skin', image: 'https://placehold.co/400x300/E6DC6B/ffffff?text=Rose+Tea' },
      { name: 'Chrysanthemum', benefit: 'Cooling', image: 'https://placehold.co/400x300/8EBDC3/ffffff?text=Chrysanthemum' },
    ],
  },
  {
    id: 'fruit',
    title: 'Fruit Tea',
    subtitle: 'Refreshing Vitality',
    icon: '🍊',
    teas: [
      { name: 'Dried Lime', benefit: 'Vitamin C', image: 'https://placehold.co/400x300/E6DC6B/ffffff?text=Dried+Lime' },
      { name: 'Orange Peel', benefit: 'Digestion', image: 'https://placehold.co/400x300/E6DC6B/ffffff?text=Orange+Peel' },
      { name: 'Roselle', benefit: 'Blood Pressure', image: 'https://placehold.co/400x300/8EBDC3/ffffff?text=Roselle' },
      { name: 'Dried Apple', benefit: 'Aroma', image: 'https://placehold.co/400x300/E6DC6B/ffffff?text=Dried+Apple' },
    ],
  },
  {
    id: 'root',
    title: 'Root & Seed',
    subtitle: 'Deep Healing',
    icon: '🌰',
    teas: [
      { name: 'Turmeric', benefit: 'Anti-inflammation', image: 'https://placehold.co/400x300/E6DC6B/ffffff?text=Turmeric' },
      { name: 'Cardamom', benefit: 'Warmth', image: 'https://placehold.co/400x300/BCD188/ffffff?text=Cardamom' },
      { name: 'Cinnamon', benefit: 'Warmth', image: 'https://placehold.co/400x300/BCD188/ffffff?text=Cinnamon' },
      { name: 'Licorice', benefit: 'Soothing', image: 'https://placehold.co/400x300/7EAD6A/ffffff?text=Licorice' },
    ],
  },
  {
    id: 'pure',
    title: 'Pure Tea',
    subtitle: 'Camellia Sinensis',
    icon: '🍵',
    teas: [
      { name: 'Black Tea', benefit: 'Energy', image: 'https://placehold.co/400x300/BCD188/ffffff?text=Black+Tea' },
      { name: 'Oolong', benefit: 'Focus', image: 'https://placehold.co/400x300/7EAD6A/ffffff?text=Oolong' },
      { name: 'White Tea', benefit: 'Antioxidant', image: 'https://placehold.co/400x300/DEE6DF/333333?text=White+Tea' },
      { name: 'Pu-erh', benefit: 'Metabolism', image: 'https://placehold.co/400x300/BCD188/ffffff?text=Pu-erh' },
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
    imageUrl: 'https://placehold.co/200x200/8EBDC3/ffffff?text=Goji',
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
    imageUrl: 'https://placehold.co/200x200/BCD188/ffffff?text=Longan',
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
    imageUrl: 'https://placehold.co/200x200/BCD188/ffffff?text=Red+Date',
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
    imageUrl: 'https://placehold.co/200x200/E6DC6B/ffffff?text=Chrysanthemum',
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
    imageUrl: 'https://placehold.co/200x200/BCD188/ffffff?text=Tangerine',
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
    imageUrl: 'https://placehold.co/200x200/E6DC6B/ffffff?text=Hawthorn',
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
    imageUrl: 'https://placehold.co/200x200/8EBDC3/ffffff?text=Pear',
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
    imageUrl: 'https://placehold.co/200x200/E6DC6B/ffffff?text=Kumquat',
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
    imageUrl: 'https://placehold.co/200x200/8EBDC3/ffffff?text=Pomelo',
    recommendedPairings: ['fruit', 'pure']
  },
  { 
    id: 'lycium-longan', 
    name: 'Lycium & Longan Mixed Jelly', 
    chineseName: '枸杞桂圆冻', 
    price: 25, 
    weight: '40g', 
    description: 'Balanced sweetness and aroma.', 
    category: 'Fruit', 
    imageUrl: 'https://placehold.co/200x200/BCD188/ffffff?text=Lycium+Longan',
    recommendedPairings: ['herbal', 'fruit']
  },

  // --- Chinese Floral Jelly (Flower) ---
  { 
    id: 'osmanthus', 
    name: 'Osmanthus Jelly', 
    chineseName: '桂花冻', 
    price: 30, 
    weight: '35g', 
    description: 'Extremely aromatic. Premium choice.', 
    category: 'Flower', 
    imageUrl: 'https://placehold.co/200x200/E6DC6B/ffffff?text=Osmanthus',
    recommendedPairings: ['flower', 'pure']
  },
  { 
    id: 'rose', 
    name: 'Rose Jelly', 
    chineseName: '玫瑰花冻', 
    price: 30, 
    weight: '35g', 
    description: 'Soft luxurious scent. Beauty and relaxation.', 
    category: 'Flower', 
    imageUrl: 'https://placehold.co/200x200/8EBDC3/ffffff?text=Rose',
    recommendedPairings: ['flower', 'fruit']
  },
  { 
    id: 'jasmine', 
    name: 'Jasmine Jelly', 
    chineseName: '茉莉花冻', 
    price: 30, 
    weight: '35g', 
    description: 'Classic fragrance. Perfect match for Green Tea.', 
    category: 'Flower', 
    imageUrl: 'https://placehold.co/200x200/E6DC6B/ffffff?text=Jasmine',
    recommendedPairings: ['pure', 'flower']
  },

  // --- Konjac & Special (Special) ---
  { 
    id: 'herbal-konjac', 
    name: 'Herbal Konjac Crystal', 
    chineseName: '草本水晶药蒟', 
    price: 30, 
    weight: '50g', 
    description: 'Clear, light, chewy. Infused with herbs.', 
    category: 'Special', 
    imageUrl: 'https://placehold.co/200x200/8EBDC3/ffffff?text=Konjac',
    recommendedPairings: ['herbal', 'fruit']
  },
  { 
    id: 'osmanthus-konjac', 
    name: 'Osmanthus Konjac', 
    chineseName: '桂花蒟蒻', 
    price: 30, 
    weight: '50g', 
    description: 'Sweet and aromatic konjac.', 
    category: 'Special', 
    imageUrl: 'https://placehold.co/200x200/E6DC6B/ffffff?text=Osmanthus+K',
    recommendedPairings: ['flower', 'herbal']
  },
  { 
    id: 'puerh-jelly', 
    name: 'Pu-erh Infused Jelly', 
    chineseName: '普洱茶冻', 
    price: 35, 
    weight: '40g', 
    description: 'Deep, calm, sophisticated tea culture flavor.', 
    category: 'Special', 
    imageUrl: 'https://placehold.co/200x200/BCD188/ffffff?text=Puerh',
    recommendedPairings: ['pure', 'root']
  },
  { 
    id: 'jujube-ginger', 
    name: 'Jujube & Ginger Jelly', 
    chineseName: '红枣姜冻', 
    price: 30, 
    weight: '40g', 
    description: 'Warming and classic combination.', 
    category: 'Special', 
    imageUrl: 'https://placehold.co/200x200/BCD188/ffffff?text=Jujube+Ginger',
    recommendedPairings: ['herbal', 'root']
  },
  { 
    id: 'seasonal', 
    name: 'Seasonal Herbal Jelly', 
    chineseName: '时令中草本冻', 
    price: 40, 
    weight: 'Varies', 
    description: 'Limited seasonal menu.', 
    category: 'Special', 
    imageUrl: 'https://placehold.co/200x200/E6DC6B/ffffff?text=Seasonal',
    recommendedPairings: ['herbal', 'flower', 'fruit']
  }
];
