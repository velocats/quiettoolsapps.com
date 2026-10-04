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
    name: 'Cast Your Line',
    slug: 'cast-your-line',
    status: 'coming-soon',
    shortTagline: 'Keep the days you spend fishing.',
    description:
      'A private fishing journal for iPhone, iPad, and Mac. Keep trips, catches, places, photos, routes, and notes together, then revisit them through your calendar, yearly recaps, and keepsake photo books. No account required.',
    features: ['Trip and catch logs', 'Optional GPS routes', 'Recaps and photo books'],
    category: 'Fishing & outdoors',
    websiteUrl: 'https://castyourlineapp.com/',
    supportUrl: 'https://castyourlineapp.com/support/',
    privacyUrl: 'https://castyourlineapp.com/privacy/',
    image: 'assets/app-icons/cast-your-line.png',
  },
  {
    name: 'Hobby Tracker',
    slug: 'hobby-tracker',
    status: 'available',
    shortTagline: 'Look at everything you made time for.',
    description:
      'A private, pressure-free place to remember the activities, projects, progress, and moments behind the hobbies you enjoy.',
    features: ['Monthly reflection', 'Flexible activity records', 'Visual recaps', 'Private and offline'],
    category: 'Hobbies & reflection',
    websiteUrl: '/hobby-tracker/',
    appStoreUrl: 'https://apps.apple.com/us/app/hobby-tracker-hobby-log/id6797727531',
    supportUrl: '/hobby-tracker/support/',
    privacyUrl: '/hobby-tracker/privacy/',
    image: 'assets/optimized/hobby-tracker-app-icon.webp',
    accent: '#e87b62',
  },
  {
    name: 'Around The House',
    slug: 'around-the-house',
    status: 'available',
    shortTagline: 'Give your home a memory.',
    description:
      'Around The House keeps repairs, reminders, warranties, receipts, photos, notes, service history, costs, and important home details organized in one private app.',
    features: [
      'Home item records',
      'Repairs and reminders',
      'Receipts and warranties',
      'Photos and notes',
      'Reports and cost tracking',
      'Private iCloud sync',
    ],
    category: 'Home & maintenance',
    websiteUrl: 'https://www.aroundthehouseapp.com/',
    supportUrl: 'https://www.aroundthehouseapp.com/support/',
    privacyUrl: 'https://www.aroundthehouseapp.com/privacy/',
    image: 'assets/optimized/aroundthehouse.webp',
    accent: '#244C42',
  },
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
    image: 'assets/optimized/mealcost.webp',
    fallbackImage: 'assets/app-placeholders/mealcost.svg',
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
    image: 'assets/optimized/tripquest.webp',
    fallbackImage: 'assets/app-placeholders/tripquest.svg',
    accent: '#6FAFC0',
  },
  {
    name: 'FixLog',
    slug: 'fixlog',
    status: 'available',
    shortTagline: 'Keep maintenance records in one place.',
    description:
      'FixLog helps small businesses track assets, repairs, maintenance, reminders, warranties, documents, costs, QR labels, and reports.',
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
    image: 'assets/optimized/fixlog.webp',
    fallbackImage: 'assets/app-placeholders/fixlog.svg',
    accent: '#082B4F',
  },
  {
    name: 'Homestead Keeper Planner',
    slug: 'homestead-keeper-planner',
    status: 'available',
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
    appStoreUrl: 'https://apps.apple.com/us/app/homestead-keeper-planner/id6778182157',
    supportUrl: 'https://homesteadkeeper.com/support',
    privacyUrl: 'https://homesteadkeeper.com/privacy',
    image: 'assets/optimized/homesteadkeeper.webp',
    fallbackImage: 'assets/app-placeholders/homesteadkeeper.svg',
    accent: '#7FAFB3',
  },
];
