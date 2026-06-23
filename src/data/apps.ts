export type AppStatus = 'available' | 'coming-soon' | 'in-development';

export type QuietToolApp = {
  name: string;
  slug: string;
  status: AppStatus;
  shortTagline: string;
  description: string;
  features: string[];
  category: string;
  websiteUrl?: string;
  appStoreUrl?: string;
  supportUrl?: string;
  privacyUrl?: string;
  image?: string;
  fallbackImage?: string;
  accent?: string;
};

export const apps: QuietToolApp[] = [
  {
    name: 'MealCost',
    slug: 'mealcost',
    status: 'available',
    shortTagline: 'Know what your meals really cost.',
    description:
      'MealCost helps people track the real cost of meals using grocery receipts, ingredient prices, dining-out entries, meal costs, cost per person, and simple price trends.',
    features: [
      'Grocery receipt items',
      'Meals from ingredients',
      'Cost per person',
      'Dining-out totals',
      'Simple price trends',
    ],
    category: 'Food & budgeting',
    websiteUrl: 'https://www.mealcostapp.com/',
    supportUrl: 'https://www.mealcostapp.com/support.html',
    privacyUrl: 'https://www.mealcostapp.com/privacy.html',
    image: 'assets/app-placeholders/mealcost.svg',
    accent: '#F68A45',
  },
  {
    name: 'TripQuest',
    slug: 'tripquest',
    status: 'available',
    shortTagline: 'Turn the ride into the game.',
    description:
      'TripQuest is a family-friendly road trip game app for families, kids, parents, grandparents, friends, carpools, camping groups, and casual get-togethers. It is made for shared play out loud.',
    features: [
      'Trivia',
      'True or False',
      'What Animal Am I?',
      'Would You Rather',
      'Backseat Stories',
      'Themed packs',
      'Trip Mode',
    ],
    category: 'Games & family',
    websiteUrl: 'https://www.thetripquestapp.com/',
    supportUrl: 'https://www.thetripquestapp.com/support.html',
    privacyUrl: 'https://www.thetripquestapp.com/privacy.html',
    image: 'assets/app-placeholders/tripquest.svg',
    accent: '#6FAFC0',
  },
  {
    name: 'FixLog',
    slug: 'fixlog',
    status: 'available',
    shortTagline: 'Keep maintenance records in one place.',
    description:
      'FixLog helps homeowners and small businesses track assets, repairs, maintenance, reminders, warranties, documents, costs, QR labels, and reports.',
    features: [
      'Assets and spaces',
      'Reminders',
      'Repair logs',
      'Warranty details',
      'Cost tracking',
      'Reports',
    ],
    category: 'Maintenance & records',
    websiteUrl: 'https://www.fixlogapp.com/',
    supportUrl: 'https://www.fixlogapp.com/support.html',
    privacyUrl: 'https://www.fixlogapp.com/privacy.html',
    image: 'assets/app-placeholders/fixlog.svg',
    accent: '#082B4F',
  },
  {
    name: 'Homestead Keeper Planner',
    slug: 'homestead-keeper-planner',
    status: 'coming-soon',
    shortTagline: 'A calmer way to manage a busy homestead.',
    description:
      'Homestead Keeper Planner helps organize the many moving parts of a homestead or rural property. It focuses on animals, gardens, equipment, property care, seasonal chores, maintenance, costs, and records.',
    features: [
      'Animals and gardens',
      'Equipment and places',
      'Seasonal reminders',
      'Maintenance history',
      'Reports and logbooks',
    ],
    category: 'Homestead & property',
    websiteUrl: 'https://homesteadkeeper.com/',
    supportUrl: 'https://homesteadkeeper.com/support',
    privacyUrl: 'https://homesteadkeeper.com/privacy',
    image: 'assets/app-icons/homesteadkeeper.png',
    fallbackImage: 'assets/app-placeholders/homesteadkeeper.svg',
    accent: '#7FAFB3',
  },
];

export const categories = Array.from(new Set(apps.map((app) => app.category)));
