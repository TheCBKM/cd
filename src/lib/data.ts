import type { Product, JourneyStep, WellnessItem, TeamMember, DetailedProductCategory } from './definitions';
import { Sprout, Package, Tractor, Leaf, UtensilsCrossed, Wheat } from 'lucide-react';
import { CowIcon, HerbalPowderIcon, PickleJarIcon, SmoothieIcon } from '@/components/icons';

export const products: Product[] = [
  {
    name: 'Herbal & Vegetable Powders',
    description: 'Nutrient-rich powders from dehydrated vegetables and herbs to boost your health.',
    image: 'product-herbal-powder',
    icon: HerbalPowderIcon,
  },
  {
    name: 'Dry Fruit Powders',
    description: 'A blend of finely ground dry fruits, perfect for adding to milk, smoothies, or desserts.',
    image: 'product-dry-fruit-powder',
    icon: HerbalPowderIcon,
  },
  {
    name: 'Health Smoothies',
    description: 'Delicious and nutritious smoothie mixes for a quick, healthy meal on the go.',
    image: 'product-smoothie',
    icon: SmoothieIcon,
  },
  {
    name: 'Chutneys & Pickles',
    description: 'Homemade, traditional chutneys and pickles to add a flavorful punch to your meals.',
    image: 'product-pickles',
    icon: PickleJarIcon,
  },
  {
    name: 'Ready to Eat Snacks',
    description: 'Healthy and tasty snacks, perfect for guilt-free munching anytime.',
    image: 'product-snacks',
    icon: UtensilsCrossed,
  },
  {
    name: 'Organic Masalas',
    description: 'Aromatic and flavorful organic spices to elevate your cooking.',
    image: 'product-masalas',
    icon: Wheat,
  },
  {
    name: 'Cow Dung Products',
    description: 'Eco-friendly and traditional products promoting a sustainable lifestyle.',
    image: 'product-cow-dung',
    icon: CowIcon,
  },
];

export const journeySteps: JourneyStep[] = [
  {
    title: 'Organic Sowing',
    description: 'We begin with non-GMO, organic seeds, sown with care in nutrient-rich soil, free from any chemical fertilizers.',
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
      'Our herbal powders can be mixed with warm water, milk, or added to your favorite smoothies. A typical dosage is one teaspoon per day. For best results, take it in the morning on an empty stomach. Always start with a smaller dose to see how your body reacts.',
  },
  {
    title: 'Preparing Our Smoothies',
    content:
      'Simply blend one scoop of our smoothie mix with 250ml of water, milk, or a plant-based alternative. Add fresh fruits like bananas or berries for extra flavor and nutrients. Our smoothies are a perfect replacement for a quick breakfast or a post-workout snack.',
  },
  {
    title: 'Health Benefits & Disclaimer',
    content:
      'Our products are intended to support a healthy lifestyle. The health benefits described are based on traditional knowledge and general research. These products are not intended to diagnose, treat, cure, or prevent any disease. Please consult with a healthcare professional before starting any new dietary supplement. Results may vary from person to person.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Mrs. Prerna Kolhatkar',
    role: 'Music and social services',
    bio: 'Committed to community health awareness.',
  },
  {
    name: 'Mr. Sanjeev Joshi',
    role: 'MBA, ex-COO in fibre optics industry',
    bio: 'Founder of Fincare for Life, experienced in startups and financial management.',
  },
  {
    name: 'Ms. Shriya Kavishwar',
    role: 'Pursuing CA, strong financial background',
    bio: 'Managing finances for esteemed clients.',
  },
];

export const navLinks = [
    { name: 'Why Us?', href: '/#why-choose-us' },
    { name: 'Products', href: '/products' },
    { name: 'Our Farm', href: '/our-farm' },
    { name: 'Wellness Guide', href: '/#wellness' },
    { name: 'AI Health Tool', href: '/#ai-tool' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/#contact' },
];

export const detailedProducts: DetailedProductCategory[] = [
  {
    title: 'Herbal & Vegetable Powders',
    description: 'Pure, single-ingredient powders made from organically grown leaves and vegetables.',
    items: [
      {
        title: 'Leaf Powders',
        subItems: [
          'Moringa leaf powder',
          'Curry leaves powder',
          'Mint leaves powder',
          'Basil (Tulsi) powder',
          'Jamun leaves powder',
          'Mango leaves powder',
          'Custard apple leaves powder',
        ],
      },
      {
        title: 'Vegetable Powders',
        subItems: ['Coriander leaves powder', 'Spinach powder', 'Beetroot powder', 'Cucumber powder'],
      },
    ],
  },
  {
    title: 'Dry Fruit / Fruit Powders',
    description: '',
    items: [
      {
        subItems: [
          'Guava fruit powder',
          'Apple powder',
          'Banana powder',
        ],
      },
    ],
  },
  {
    title: 'Smoothies',
    description: 'These smoothies help improve gut health, digestion, metabolism, weight balance and daily nutrition. Available in multiple flavours.',
    items: [
      {
        title: 'Specially curated for:',
        subItems: [
          'Diabetic & Hypothyroid & Kidney support',
          'Diabetic management',
          'Health conscious individuals, youngsters & children',
        ],
      },
    ],
  },
  {
    title: 'Chutneys & Pickles',
    description: '',
    items: [
      {
        subItems: ['Curry leaves chutney', 'Ginger Turmeric pickle'],
      },
    ],
  },
  {
    title: 'Ready to Eat & Masala',
    description: '',
    items: [
      {
        subItems: ['Dry snacks', 'Masala sprinkles', 'Tea powders', 'Organic Bhaji Masala'],
      },
    ],
  },
  {
    title: 'Cow Dung & Eco Products',
    description: 'Pure, traditional and environment friendly products for home, puja and gardening.',
    items: [
      {
        subItems: [
          'Cow dung cakes',
          'Cow dung diya',
          'Cow dung incense sticks',
          'Cow dung fertilizer',
          'Cow ghee for homa',
        ],
      },
    ],
  },
];
