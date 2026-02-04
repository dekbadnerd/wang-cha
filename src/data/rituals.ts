export interface Ritual {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
}

export const rituals: Ritual[] = [
  {
    id: 'experience',
    title: 'Experience',
    subtitle: 'At Store',
    description: 'Freshly brewed in clay pots over charcoal fire. Watch the ritual unfold. Create trust through transparency. Feel the warmth of ancient wisdom.',
    image: 'https://placehold.co/600x400/7EAD6A/ffffff?text=Clay+Pot+Brewing',
    icon: '🏺',
  },
  {
    id: 'daily',
    title: 'Daily Drink',
    subtitle: 'To-Go',
    description: 'Same premium quality, served in a cup for your busy life. Health in motion. The ritual distilled into convenience without compromise.',
    image: 'https://placehold.co/600x400/8EBDC3/ffffff?text=To-Go+Cup',
    icon: '☕',
  },
  {
    id: 'hybrid',
    title: 'Hybrid',
    subtitle: 'Pour at Table',
    description: 'Order a set, pour it yourself. Blend the ritual with modern comfort. Your own ceremony, your own pace. Mindfulness meets flexibility.',
    image: 'https://placehold.co/600x400/BCD188/ffffff?text=Table+Service',
    icon: '🫖',
  },
];
