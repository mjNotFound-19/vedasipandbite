import { Product } from './types';

export const products: Product[] = [
  {
    id: 'nettle-leaves',
    name: 'Nettle Leaves',
    tagline: "Nature's multivitamin leaf for glowing vitality.",
    category: 'Herbal Tea',
    price: 400,
    unitLabel: 'INR 400.00 / 100g',
    benefits: [
      "Nature's Multivitamins",
      'Natural Allergy Relief',
      'Builds Strong Bones',
      'Gentle Detox',
      'Reduces Inflammation',
      'Glowing Skin and Hair'
    ],
    ingredients: ['100% sun-dried nettle leaves (Urtica dioica)'],
    brewingInstructions: [
      'Steep 1 tsp in 200ml water at 90C for 5-7 minutes.',
      'Sweeten with raw honey or sip plain for a clean detox.',
      'Enjoy 3-4 times per week for best results.'
    ],
    sourcingNote:
      'Hand-harvested from Himalayan foothills and gently dried to preserve nutrients.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Nettle leaves in a ceramic bowl with tea scoop',
        width: 1200,
        height: 1500
      },
      {
        src: 'https://images.unsplash.com/photo-1524593656068-fbac72624e5e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Herbal tea brewing ritual with warm light',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: true,
    checkoutUrl: 'https://checkout.example.com/nettle-leaves'
  },
  {
    id: 'ashwagandha-night-calm',
    name: 'Ashwagandha Night Calm',
    tagline: 'A grounding blend to ease you into restorative sleep.',
    category: 'Herbal Tea',
    price: 520,
    unitLabel: 'INR 520.00 / 100g',
    benefits: ['Stress Ease', 'Sleep Support', 'Hormone Balance'],
    ingredients: ['Ashwagandha root', 'Chamomile', 'Holy basil'],
    brewingInstructions: ['Steep 1 tsp in 200ml water for 6 minutes.'],
    sourcingNote: 'Slow-crafted with adaptogens from certified organic farms.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
        alt: 'Evening tea with warm ambient light',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/ashwagandha-night-calm'
  },
  {
    id: 'rose-tulsi-elixir',
    name: 'Rose Tulsi Elixir',
    tagline: 'Floral clarity for heart and mind.',
    category: 'Herbal Tea',
    price: 480,
    unitLabel: 'INR 480.00 / 100g',
    benefits: ['Calm Focus', 'Skin Radiance', 'Mood Balance'],
    ingredients: ['Rose petals', 'Tulsi', 'Lemon balm'],
    brewingInstructions: ['Steep 1 tsp in 200ml water for 5 minutes.'],
    sourcingNote: 'Petals gathered at dawn for peak fragrance.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1464306076886-da185f6a7800?auto=format&fit=crop&w=1200&q=80',
        alt: 'Rose petals and tea set',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/rose-tulsi-elixir'
  },
  {
    id: 'golden-turmeric-bites',
    name: 'Golden Turmeric Bites',
    tagline: 'Soft chews infused with golden spice and ghee.',
    category: 'Wellness Bites',
    price: 560,
    unitLabel: 'INR 560.00 / 12 bites',
    benefits: ['Joint Support', 'Anti-Inflammatory', 'Digestive Ease'],
    ingredients: ['Turmeric', 'Black pepper', 'Dates', 'Ghee'],
    brewingInstructions: ['Enjoy 1-2 bites post-meal.'],
    sourcingNote: 'Small-batch crafted with grass-fed ghee.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1509440159590-0249088772ff?auto=format&fit=crop&w=1200&q=80',
        alt: 'Golden turmeric bites on handmade plate',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/golden-turmeric-bites'
  },
  {
    id: 'hibiscus-berry-tonic',
    name: 'Hibiscus Berry Tonic',
    tagline: 'Ruby-bright hydration with antioxidant lift.',
    category: 'Tonic',
    price: 450,
    unitLabel: 'INR 450.00 / 100g',
    benefits: ['Antioxidant Boost', 'Skin Glow', 'Hydration'],
    ingredients: ['Hibiscus', 'Goji berries', 'Rooibos'],
    brewingInstructions: ['Steep 1 tsp in 200ml water for 4 minutes.'],
    sourcingNote: 'Sun-dried floweINR with minimal processing.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
        alt: 'Glass of hibiscus tea with berries',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/hibiscus-berry-tonic'
  },
  {
    id: 'moringa-vitality-leaves',
    name: 'Moringa Vitality Leaves',
    tagline: 'Green vitality that fuels radiant mornings.',
    category: 'Herbal Tea',
    price: 430,
    unitLabel: 'INR 430.00 / 100g',
    benefits: ['Immune Support', 'Energy Lift', 'Mineral Rich'],
    ingredients: ['Moringa leaves'],
    brewingInstructions: ['Steep 1 tsp in 200ml water for 6 minutes.'],
    sourcingNote: 'Shade-dried for maximum nutrient retention.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
        alt: 'Herbal leaves with ceramic mug',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/moringa-vitality-leaves'
  },
  {
    id: 'mint-fennel-digestif',
    name: 'Mint Fennel Digestif',
    tagline: 'Cooling comfort after every meal.',
    category: 'Herbal Tea',
    price: 390,
    unitLabel: 'INR 390.00 / 100g',
    benefits: ['Digestive Ease', 'Bloat Relief', 'Fresh Breath'],
    ingredients: ['Mint', 'Fennel seeds', 'Licorice'],
    brewingInstructions: ['Steep 1 tsp in 200ml water for 5 minutes.'],
    sourcingNote: 'Sustainably sourced seeds from Rajasthan.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
        alt: 'Mint tea in glass cup',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/mint-fennel-digestif'
  },
  {
    id: 'chamomile-moon-milk',
    name: 'Chamomile Moon Milk',
    tagline: 'Creamy florals for deep rest.',
    category: 'Wellness Bites',
    price: 600,
    unitLabel: 'INR 600.00 / 10 servings',
    benefits: ['Sleep Support', 'Calm Mood', 'Gentle Digestion'],
    ingredients: ['Chamomile', 'Cardamom', 'Coconut milk powder'],
    brewingInstructions: ['Whisk 1 tbsp with warm milk alternative.'],
    sourcingNote: 'Blended in micro-batches for velvety texture.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?auto=format&fit=crop&w=1200&q=80',
        alt: 'Moon milk with chamomile garnish',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/chamomile-moon-milk'
  },
  {
    id: 'cardamom-saffron-latte',
    name: 'Cardamom Saffron Latte',
    tagline: 'A decadent ritual with golden warmth.',
    category: 'Ritual Latte',
    price: 720,
    unitLabel: 'INR 720.00 / 10 servings',
    benefits: ['Mood Lift', 'Digestive Support', 'Radiant Glow'],
    ingredients: ['Cardamom', 'Saffron', 'Almond milk powder'],
    brewingInstructions: ['Whisk 1 tbsp in warm water or milk.'],
    sourcingNote: 'Features Kashmir saffron threads.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=80',
        alt: 'Saffron latte with spices',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/cardamom-saffron-latte'
  },
  {
    id: 'lemongrass-citrus-cleanse',
    name: 'Lemongrass Citrus Cleanse',
    tagline: 'Bright citrus and crisp herbs for renewal.',
    category: 'Herbal Tea',
    price: 410,
    unitLabel: 'INR 410.00 / 100g',
    benefits: ['Gentle Detox', 'Focus Boost', 'Hydration'],
    ingredients: ['Lemongrass', 'Orange peel', 'Ginger'],
    brewingInstructions: ['Steep 1 tsp in 200ml water for 5 minutes.'],
    sourcingNote: 'Citrus peels sun-cured for intense aroma.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
        alt: 'Citrus tea with lemongrass',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/lemongrass-citrus-cleanse'
  },
  {
    id: 'shatavari-bloom-blend',
    name: 'Shatavari Bloom Blend',
    tagline: 'Nourish and bloom with feminine vitality.',
    category: 'Herbal Tea',
    price: 540,
    unitLabel: 'INR 540.00 / 100g',
    benefits: ['Hormone Balance', 'Glow Support', 'Calm Focus'],
    ingredients: ['Shatavari root', 'Rose', 'Cinnamon'],
    brewingInstructions: ['Steep 1 tsp in 200ml water for 7 minutes.'],
    sourcingNote: 'Roots ethically sourced from sustainable farms.',
    caffeineFree: true,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Herbal blend with rose petals',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/shatavari-bloom-blend'
  },
  {
    id: 'cacao-ginger-ritual',
    name: 'Cacao Ginger Ritual',
    tagline: 'Velvety cacao with a warming kick.',
    category: 'Ritual Latte',
    price: 680,
    unitLabel: 'INR 680.00 / 10 servings',
    benefits: ['Mood Lift', 'Energy Balance', 'Digestive Ease'],
    ingredients: ['Cacao', 'Ginger', 'Cinnamon'],
    brewingInstructions: ['Whisk 1 tbsp into warm water or milk.'],
    sourcingNote: 'Single-origin cacao for luxurious depth.',
    caffeineFree: false,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
        alt: 'Cacao drink with ginger',
        width: 1200,
        height: 1500
      }
    ],
    isAvailable: false,
    checkoutUrl: 'https://checkout.example.com/cacao-ginger-ritual'
  }
];

export const featuredProducts = products.slice(0, 6);

export const benefitTags = Array.from(
  new Set(products.flatMap((product) => product.benefits))
).sort();

export const categories = Array.from(
  new Set(products.map((product) => product.category))
).sort();



