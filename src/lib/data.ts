import type { Product, JourneyStep, WellnessItem, TeamMember, DetailedProductCategory } from './definitions';
import { Sprout, Package, Tractor, Leaf, UtensilsCrossed, Wheat } from 'lucide-react';
import { CowIcon, HerbalPowderIcon, PickleJarIcon, SmoothieIcon } from '@/components/icons';

export const products: Product[] = [
  {
    name: 'Vitality Boost',
    description: 'Nutritious smoothie mixes for varied body needs and tastes, giving quick, healthy greens. A daily dose of greens. Favoured greens make them popular even with kids.',
    image: 'product-smoothie',
    icon: SmoothieIcon,
  },
  {
    name: 'NutriPowder Vault',
    description: 'Nutrient-rich powders from dehydrated herbs, vegetables and fruits to boost your health. Swapping instant mixes to suit a busy lifestyle and travel.',
    image: 'product-herbal-powder',
    icon: HerbalPowderIcon,
  },

  {
    name: 'The Zing Collection',
    description: 'Zingy, Tangy & Savory sides, traditional chutneys and pickles add a flavorful punch to meals alongside health. Refreshing drinks best suited for स्वाद भी! सेहत भी !!',
    image: 'product-dry-fruit-powder',
    icon: HerbalPowderIcon,
  },
  {
    name: 'Chaitanya Blends',
    description: 'Premium Products specially curated for gut care, aromatic and flavorful blast to everyday boring meals. Chilli delights add power-packed metabolism to the life! ',
    image: 'product-snacks',
    icon: UtensilsCrossed,
  },
  {
    name: 'Chaitanya Cold Pressed Oil',
    description: 'Premium Quality Cold-pressed oils with nutrients & anti-oxidants. Pure, chemical-free & non-refined. Rich in heart-healthy monounsaturated fats that support good cholesterol levels.',
    image: 'product-pickles',
    icon: PickleJarIcon,
  },
  {
    name: 'Śuddhāhuti - Sacred Flames',
    description: 'Burn the sacred, ecofriendly & traditional Homa to enhance the ambience with purity and goodness of Sacred cow dung & Ayurvedic herbs & richness of Rose & Chandan',
    image: 'product-masalas',
    icon: Wheat,
  },
];

export const journeySteps: JourneyStep[] = [
  {
    title: 'Chemical-free Sowing',
    description: 'We begin with non-GMO seeds, sown with care in nutrient-rich soil, free from any chemical fertilizers.',
    image: 'farm-sowing',
    icon: Sprout,
  },
  {
    title: 'Natural Growth',
    description: 'Our plants are nurtured with pure water and natural compost, allowing them to grow strong and healthy under the sun.',
    image: 'farm-growing',
    icon: Leaf,
  },
  {
    title: 'Careful Harvesting',
    description: 'At peak maturity, our produce is harvested by hand to ensure the highest quality and preservation of nutrients.',
    image: 'farm-harvesting',
    icon: Tractor,
  },
  {
    title: 'Pristine Packaging',
    description: 'The final products are minimally processed and packed in eco-friendly materials to maintain purity and freshness.',
    image: 'farm-packaging',
    icon: Package,
  },
];

export const wellnessGuideContent: WellnessItem[] = [
  {
    title: 'How to Use Herbal Powders',
    content:
      'Our herbal powders can be mixed with warm water or added to your favourite smoothies. A typical dosage is two teaspoons per day. For best results, take it in the morning on an empty stomach. Can repeat in the evening also for consistent results. All powders come with a usage guide on the sachet that contains the powder. Always start with a smaller dose to see how your body reacts.',
  },
  {
    title: 'Preparing Our Smoothies',
    content:
      'Simply blend one scoop of our smoothie mix with 250ml of warm water, or a plant-based alternative. Add fresh lemon juice for extra taste, and during summer, add ice cubes. Can also add fruits like bananas or berries for extra flavour and nutrients. We also offer ready-to-use fruity-flavoured Nutrigreens. Our Nutrigreens are a perfect quick solution for the daily body requirements of greens dosage.',
  },
  {
    title: 'Health Benefits & Disclaimer',
    content:
      'Our products are intended to support a healthy lifestyle. The health benefits described are based on traditional knowledge and general research. These products are not intended to diagnose, treat, cure, or prevent any disease. Please consult with a healthcare professional before starting any new dietary supplement. Results may vary from person to person.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Mrs. Prerna (Sangeeta)  Kolhatkar',
    role: 'COO - Manufacturing, Product Development',
    bio: 'A visionary mind & leader with rich mastery in various arts, handicrafts, culinary innovation, musical expression, blending with meaningful social service for decades.',
  },
  {
    name: 'Mr. Sanjeev Joshi',
    role: 'CEO - Business strategist. Brings corporate discipline into farm-to-food transformation',
    bio: 'A proven corporate leader,  an engineer and an MBA, with decades of success in business development, operations, manufacturing, strategy, and product development, delivering efficiency, innovation, and sustainable growth.',
  },
  {
    name: 'Ms. Shriya Kavishwar',
    role: 'CFO: Financial Management & Systems,  Brand development,  Consumer Engagement',
    bio: 'An excellence in financial clarity, strategic insight, and contemporary brand growth. A CA aspirant with deep competence in personal finance management.',
  },
];

export const navLinks = [
  { name: 'Why Us?', href: '/#why-choose-us' },
  { name: 'Products', href: '/products' },
  { name: 'Our Farm', href: '/our-farm' },
  { name: 'Wellness Guide', href: '/#wellness' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/#contact' },
];

export const detailedProducts: DetailedProductCategory[] = [
  {
    title: 'NutriPowder Vault',
    description: 'Nutrient-rich powders from dehydrated herbs, vegetables & fruits to boost your health. Perfect for adding to smoothies/deserts!',
    items: [
      {
        title: 'Leaf Powders',
        subItems: [
          'Moringa leaf powder',
          'Wheat grass powder',
          'Curry leaves powder',
          'Mint leaves powder',
          'Coriander leaves powder',
          'Spinach powder',
          'Neem leaves powder',
          'Java plum leaves powder',
          'Basil (Tulsi) powder',
          'Mango leaves powder',
        ],
      },
      {
        title: 'Vegetable Powders',
        subItems: ['Beetroot powder', 'Bottle Gourd powder'],
      },
      {
        title: 'Fruit Powders',
        subItems: [
          'Guava fruit powder',
          'Banana powder',
        ],
      },
    ],
  },
  {
    title: 'Vitality Boost',
    description: 'Delicious and nutritious smoothie mixes suitable for various body needs and tastes for a quick, healthy greens on the go! Include NutriGreens with superfoods like moringa, wheatgrass, and spirulina one at a time on a weekly basis to boost your health',
    items: [
      {
        title: 'Specially curated for:',
        subItems: [
          'Diabetic & Hypothyroid & Kidney support',
          'Diabetic management',
          'Health conscious individuals, youngsters & children',
        ],
      },
      {
        title: 'Smoothies',
        subItems: [
          'NutriGreen',
          'NutriGreen - Bottle Gourd',
          'NutriGreen - Guava',
        ],
      },
    ],
  },
  {
    title: 'The Zing Collection',
    description: 'Zingy, Tangy & Savory sides, traditional chutneys and pickles add a flavorful punch to meals alongside health. Cooling & refreshing drinks best suited for स्वाद भी! सेहत भी !!',
    items: [
      {
        subItems: ['Lime Cordial','Savory Date Pickle','Tangy Four Blend Pickle','Zingy Nimbu Chutney'],
      },
    ],
  },
  {
    title: 'Chaitanya Cold Pressed Premium Oils',
    description: 'Premium Quality Cold pressed oils with nutrients & anti-oxidants. Pure, chemical free & non-refined.',
    items: [
      {
        subItems: ['Groundnut oil','Mustard oil','Sesame oil'],
      },
    ],
  },
    {
      title: 'Chaitanya Blends',
      description: 'Premium Products specially curated for gut care, aromatic and flavorful blast to everyday boring meals. Chilli delights add power-packed metabolism to the life! ',
      items: [
        {
          subItems: [
            'Digextract','Curry Leaves Chutney','Sun-dried stuffed Green Chillies (सांडगे मिर्ची)','Stuffed Green Chillies(भरली मिर्ची)',
          ],
        },
      ],
    },
    {
      title: 'Śuddhāhuti - Sacred Flames',
      description: 'Burn the sacred, ecofriendly, traditional Homa to enhance the ambience with purity and goodness of Sacred cow dung & Ayurvedic herbs & richness of Rose & Chandan',
      items: [
        {
          subItems: ['Chandan','Gulab','Plain','Divya Gomaya Saṃhitā (Cow Dung Cakes for Homa)'],
        },
      ],
    },
];
