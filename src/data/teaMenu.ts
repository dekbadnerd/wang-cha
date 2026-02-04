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
