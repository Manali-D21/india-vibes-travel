export interface Destination {
  id: string;
  name: string;
  state: string;
  region: string;
  mood: 'Adventure' | 'Chill' | 'Nature' | 'Heritage';
  image: string;
  description: string;
  longDescription: string;
  rating: number;
  tags: string[];
  bestTime: string;
  howToReach: string;
  activities: Activity[];
  hotels: Hotel[];
  restaurants: Restaurant[];
  gallery: string[];
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  rating: number;
  priceRange: string;
  tags: string[];
  description: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  mustTry: string;
  description: string;
  tags: string[];
}

export const destinations: Destination[] = [
  {
    id: 'tarkarli',
    name: 'Tarkarli',
    state: 'Maharashtra',
    region: 'Konkan',
    mood: 'Chill',
    image: 'https://images.unsplash.com/photo-1637770577089-608e37d9502c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJrYXJsaSUyMGJlYWNoJTIwY2xlYXIlMjB3YXRlcnxlbnwxfHx8fDE3Njk4OTA3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Crystal-clear waters perfect for snorkeling and dolphin spotting',
    longDescription: 'Tarkarli is a pristine beach destination in Maharashtra\'s Sindhudurg district, famous for its crystal-clear turquoise waters that rival any tropical paradise. The beach stretches for kilometers with soft white sand and gentle waves, making it perfect for water sports and relaxation. The underwater visibility extends up to 20 feet, making it one of India\'s best snorkeling and scuba diving spots. The nearby Devbag beach and backwaters offer a unique blend of sea and river ecosystems.',
    rating: 4.8,
    tags: ['Beach', 'Snorkeling', 'Dolphins', 'Water Sports'],
    bestTime: 'October to March (avoid monsoons)',
    howToReach: 'From Mumbai: 8-9 hours by road via NH66. From Pune: 7-8 hours via Karad-Satara route. Nearest airport: Dabolim (Goa) 120km away.',
    activities: [
      {
        id: 'ta-1',
        name: 'Dolphin Spotting Boat Ride',
        description: 'Early morning boat trips to spot playful dolphins in their natural habitat',
        icon: 'Waves',
        price: '₹500-800 per person'
      },
      {
        id: 'ta-2',
        name: 'Scuba Diving & Snorkeling',
        description: 'Explore vibrant coral reefs and marine life in crystal-clear waters',
        icon: 'Fish',
        price: '₹2,500-4,500'
      },
      {
        id: 'ta-3',
        name: 'Backwater Kayaking',
        description: 'Peaceful kayaking through mangrove-lined backwaters',
        icon: 'Ship',
        price: '₹300-500'
      },
      {
        id: 'ta-4',
        name: 'Beach Sunset Walk',
        description: 'Stroll along the endless white sands during golden hour',
        icon: 'Sunset',
        price: 'Free'
      }
    ],
    hotels: [
      {
        id: 'th-1',
        name: 'Blue Lagoon Resort',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        priceRange: '₹₹₹',
        tags: ['Beachfront', 'Sea View', 'Pool'],
        description: 'Luxury beachfront resort with private beach access and water sports facilities'
      },
      {
        id: 'th-2',
        name: 'Coconut Paradise Homestay',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        priceRange: '₹₹',
        tags: ['Homestay', 'Authentic', 'Budget'],
        description: 'Cozy homestay run by local Malvani family, authentic Konkani experience'
      },
      {
        id: 'th-3',
        name: 'Sea Pearl Beach Cottages',
        image: 'https://images.unsplash.com/photo-1724496328006-3b4706543430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHR1cnF1b2lzZXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        priceRange: '₹₹',
        tags: ['Cottages', 'Beach Access', 'Mid-Range'],
        description: 'Charming beach cottages just steps from the shore'
      }
    ],
    restaurants: [
      {
        id: 'tr-1',
        name: 'Malvani Aswad',
        image: 'https://images.unsplash.com/photo-1750271328082-22490577fbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZWFmb29kJTIwY29hc3RhbCUyMGN1aXNpbmV8ZW58MXx8fHwxNzY5ODkxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        mustTry: 'Malvani Fish Curry, Bombil Fry, Solkadhi',
        description: 'Authentic Malvani seafood served fresh from the catch of the day',
        tags: ['Seafood', 'Authentic', 'Local']
      },
      {
        id: 'tr-2',
        name: 'Tsunami Restaurant',
        image: 'https://images.unsplash.com/photo-1684215031343-ac918cfbfd5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwZGluaW5nfGVufDF8fHx8MTc2OTg2MDc3MXww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        mustTry: 'Prawns Koliwada, Kombdi Vade, Fried Surmai',
        description: 'Popular beachside restaurant with sea views',
        tags: ['Beachfront', 'Multi-cuisine', 'Popular']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1637770577089-608e37d9502c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJrYXJsaSUyMGJlYWNoJTIwY2xlYXIlMjB3YXRlcnxlbnwxfHx8fDE3Njk4OTA3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1687708167574-9a9b4eac3a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9ya2VsaW5nJTIwdW5kZXJ3YXRlciUyMGNvcmFsfGVufDF8fHx8MTc2OTg5MTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1563484218513-e44e9624d1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xwaGluJTIwd2F0Y2hpbmclMjBib2F0fGVufDF8fHx8MTc2OTg5MTM1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1724496328006-3b4706543430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHR1cnF1b2lzZXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1750271328082-22490577fbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZWFmb29kJTIwY29hc3RhbCUyMGN1aXNpbmV8ZW58MXx8fHwxNzY5ODkxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'devgad',
    name: 'Devgad',
    state: 'Maharashtra',
    region: 'Konkan',
    mood: 'Nature',
    image: 'https://images.unsplash.com/photo-1707148280432-0b3c2145b1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNhbmQlMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc2OTg5MTM0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Famous for Alphonso mangoes and pristine beaches',
    longDescription: 'Devgad is a coastal paradise famous for producing India\'s finest Alphonso mangoes. Beyond its agricultural fame, Devgad offers serene beaches, a historic sea fort, and authentic Konkani culture. The beaches here are less crowded, offering peaceful walks and stunning sunset views. During mango season (March-May), the entire region fills with the sweet aroma of Hapus mangoes.',
    rating: 4.6,
    tags: ['Beach', 'Mangoes', 'Fort', 'Peaceful'],
    bestTime: 'October to May (March-May for mangoes)',
    howToReach: 'From Mumbai: 9 hours via NH66. From Pune: 8 hours. Well connected by state transport buses.',
    activities: [
      {
        id: 'dv-1',
        name: 'Mango Orchard Tour',
        description: 'Visit authentic Alphonso mango farms, taste fresh mangoes',
        icon: 'Trees',
        price: '₹200-500'
      },
      {
        id: 'dv-2',
        name: 'Devgad Fort Exploration',
        description: 'Historic sea fort with panoramic ocean views',
        icon: 'Castle',
        price: 'Free'
      },
      {
        id: 'dv-3',
        name: 'Beach Sunset Photography',
        description: 'Capture stunning sunsets on uncrowded beaches',
        icon: 'Camera',
        price: 'Free'
      },
      {
        id: 'dv-4',
        name: 'Local Fishing Experience',
        description: 'Join local fishermen for traditional fishing',
        icon: 'Fish',
        price: '₹800-1200'
      }
    ],
    hotels: [
      {
        id: 'dh-1',
        name: 'Mango Beach Resort',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        priceRange: '₹₹',
        tags: ['Beach View', 'Garden', 'Family'],
        description: 'Surrounded by mango orchards with direct beach access'
      },
      {
        id: 'dh-2',
        name: 'Konkan Heritage Villa',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.3,
        priceRange: '₹',
        tags: ['Heritage', 'Budget', 'Traditional'],
        description: 'Traditional Konkani architecture with modern comforts'
      }
    ],
    restaurants: [
      {
        id: 'dr-1',
        name: 'Devgad Kinara',
        image: 'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB0aGFsaXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        mustTry: 'Ukadiche Modak, Amba Panna, Fresh Fish Thali',
        description: 'Traditional Konkani cuisine with mango specialties',
        tags: ['Konkani', 'Mango Dishes', 'Authentic']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1707148280432-0b3c2145b1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNhbmQlMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc2OTg5MTM0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB0aGFsaXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'ganpatipule',
    name: 'Ganpatipule',
    state: 'Maharashtra',
    region: 'Konkan',
    mood: 'Chill',
    image: 'https://images.unsplash.com/photo-1668078415471-bc8d98b843d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb25rYW4lMjBiZWFjaCUyMGluZGlhJTIwc3Vuc2V0fGVufDF8fHx8MTc2OTg5MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sacred Ganesh temple on pristine white sand beach',
    longDescription: 'Ganpatipule is a spiritual and scenic gem where the 400-year-old Swayambhu Ganpati temple sits on a white sand beach. The temple houses a self-manifested idol of Lord Ganesha. The beach stretches for 3km with crystal-clear water and soft white sand, perfect for swimming and relaxation. The combination of spirituality and natural beauty makes it unique.',
    rating: 4.7,
    tags: ['Temple', 'Beach', 'Spiritual', 'White Sand'],
    bestTime: 'October to March',
    howToReach: 'From Mumbai: 6-7 hours. From Pune: 5-6 hours via Karad. Regular buses from Ratnagiri (30km).',
    activities: [
      {
        id: 'gp-1',
        name: 'Temple Darshan & Beach Walk',
        description: 'Visit the sacred Ganpati temple and stroll on white sands',
        icon: 'ChurchIcon',
        price: 'Free'
      },
      {
        id: 'gp-2',
        name: 'Sunset Beach Meditation',
        description: 'Peaceful meditation sessions during golden hour',
        icon: 'Sparkles',
        price: 'Free'
      },
      {
        id: 'gp-3',
        name: 'Water Sports & Swimming',
        description: 'Safe swimming zone with banana boat, jet ski options',
        icon: 'Waves',
        price: '₹300-1000'
      },
      {
        id: 'gp-4',
        name: 'Coconut Grove Cycling',
        description: 'Cycle through scenic coconut plantations',
        icon: 'Bike',
        price: '₹150-250'
      }
    ],
    hotels: [
      {
        id: 'gph-1',
        name: 'MTDC Ganpatipule Resort',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        priceRange: '₹₹',
        tags: ['Government', 'Beachfront', 'Reliable'],
        description: 'Well-maintained government resort right on the beach'
      },
      {
        id: 'gph-2',
        name: 'Blue Ocean Resort',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        priceRange: '₹₹₹',
        tags: ['Luxury', 'Pool', 'Spa'],
        description: 'Premium resort with spa and wellness center'
      }
    ],
    restaurants: [
      {
        id: 'gpr-1',
        name: 'Atithi Bamboo Restaurant',
        image: 'https://images.unsplash.com/photo-1750271328082-22490577fbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZWFmb29kJTIwY29hc3RhbCUyMGN1aXNpbmV8ZW58MXx8fHwxNzY5ODkxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        mustTry: 'Solkadhi, Kombdi Vade, Modak (prasad)',
        description: 'Eco-friendly bamboo structure serving authentic Konkani',
        tags: ['Konkani', 'Eco-friendly', 'Temple Food']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1668078415471-bc8d98b843d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb25rYW4lMjBiZWFjaCUyMGluZGlhJTIwc3Vuc2V0fGVufDF8fHx8MTc2OTg5MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    region: 'North',
    mood: 'Adventure',
    image: 'https://images.unsplash.com/photo-1599831413648-97eae03f743d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hbGklMjBoaW1hY2hhbCUyMGluZGlhfGVufDF8fHx8MTc2OTg5MTM0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Himalayan adventure hub with skiing, trekking, and stunning valleys',
    longDescription: 'Manali is the crown jewel of Himachal Pradesh, nestled in the Kullu Valley at 2,050m altitude. Surrounded by snow-capped peaks, lush forests, and the Beas River, Manali offers year-round adventure. From skiing in Solang Valley to trekking in the Himalayas, from ancient temples to vibrant cafes, Manali perfectly blends adventure with culture.',
    rating: 4.9,
    tags: ['Mountains', 'Skiing', 'Trekking', 'Adventure'],
    bestTime: 'October to June (December-February for snow)',
    howToReach: 'From Delhi: 12-14 hours by road, overnight buses available. Nearest airport: Bhuntar (50km). Train to Chandigarh, then bus.',
    activities: [
      {
        id: 'mn-1',
        name: 'Solang Valley Skiing',
        description: 'Ski down pristine slopes or try paragliding',
        icon: 'Mountain',
        price: '₹1500-3000'
      },
      {
        id: 'mn-2',
        name: 'Rohtang Pass Trek',
        description: 'Epic high-altitude pass with snow activities',
        icon: 'Footprints',
        price: '₹2000-4000'
      },
      {
        id: 'mn-3',
        name: 'River Rafting in Beas',
        description: 'Thrilling white-water rafting experience',
        icon: 'Waves',
        price: '₹800-1500'
      },
      {
        id: 'mn-4',
        name: 'Old Manali Cafe Hopping',
        description: 'Explore vibrant cafes and local culture',
        icon: 'Coffee',
        price: '₹300-800'
      }
    ],
    hotels: [
      {
        id: 'mnh-1',
        name: 'The Himalayan',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        priceRange: '₹₹₹₹',
        tags: ['Luxury', 'Mountain View', 'Spa'],
        description: '5-star luxury with panoramic Himalayan views'
      },
      {
        id: 'mnh-2',
        name: 'Zostel Manali',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        priceRange: '₹',
        tags: ['Hostel', 'Backpacker', 'Social'],
        description: 'Popular backpacker hostel with vibrant community'
      }
    ],
    restaurants: [
      {
        id: 'mnr-1',
        name: 'Johnson\'s Cafe',
        image: 'https://images.unsplash.com/photo-1684215031343-ac918cfbfd5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwZGluaW5nfGVufDF8fHx8MTc2OTg2MDc3MXww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        mustTry: 'Trout Fish, Tibetan Momos, Apple Pie',
        description: 'Iconic riverside cafe serving continental & local',
        tags: ['Continental', 'Riverside', 'Iconic']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1599831413648-97eae03f743d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hbGklMjBoaW1hY2hhbCUyMGluZGlhfGVufDF8fHx8MTc2OTg5MTM0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVra2luZyUyMG1vdW50YWluJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2OTg5MTM1NXww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'ladakh',
    name: 'Leh-Ladakh',
    state: 'Ladakh',
    region: 'North',
    mood: 'Adventure',
    image: 'https://images.unsplash.com/photo-1668602393098-6f5d6e73da3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWRha2glMjBsYW5kc2NhcGUlMjBpbmRpYXxlbnwxfHx8fDE3Njk4OTEzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High-altitude desert with monasteries, pristine lakes, and dramatic landscapes',
    longDescription: 'Ladakh, the Land of High Passes, is a mesmerizing high-altitude desert in the Himalayas. With crystal-clear blue skies, snow-capped peaks, ancient Buddhist monasteries, and surreal landscapes, Ladakh offers an otherworldly experience. Pangong Lake, Nubra Valley, and Khardung La pass are must-visits.',
    rating: 4.9,
    tags: ['Mountains', 'Biking', 'Monasteries', 'High Altitude'],
    bestTime: 'May to September',
    howToReach: 'Fly to Leh from Delhi/Mumbai. Road trip from Manali (2 days) or Srinagar (2 days) - roads open May-Sep.',
    activities: [
      {
        id: 'ld-1',
        name: 'Pangong Lake Visit',
        description: 'Witness the mesmerizing blue waters of Pangong Tso',
        icon: 'Waves',
        price: '₹3000-5000 (permits+transport)'
      },
      {
        id: 'ld-2',
        name: 'Nubra Valley Sand Dunes',
        description: 'Desert safari and double-humped camel rides',
        icon: 'Mountain',
        price: '₹500-1000'
      },
      {
        id: 'ld-3',
        name: 'Monastery Circuit',
        description: 'Visit ancient Thiksey, Hemis, Diskit monasteries',
        icon: 'Church',
        price: '₹100-300 per monastery'
      },
      {
        id: 'ld-4',
        name: 'Khardung La Pass Drive',
        description: 'World\'s highest motorable road at 18,380 ft',
        icon: 'Mountain',
        price: '₹2000-4000'
      }
    ],
    hotels: [
      {
        id: 'ldh-1',
        name: 'The Grand Dragon Ladakh',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        priceRange: '₹₹₹',
        tags: ['Luxury', '5-Star', 'Oxygen Support'],
        description: 'Premium hotel with oxygen-enriched rooms'
      },
      {
        id: 'ldh-2',
        name: 'Ladakh Homestays',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        priceRange: '₹',
        tags: ['Homestay', 'Cultural', 'Budget'],
        description: 'Authentic Ladakhi family experience'
      }
    ],
    restaurants: [
      {
        id: 'ldr-1',
        name: 'Gesmo Restaurant',
        image: 'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB0aGFsaXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        mustTry: 'Thukpa, Momos, Butter Tea, Tingmo',
        description: 'Famous for Ladakhi and Tibetan cuisine',
        tags: ['Tibetan', 'Ladakhi', 'Authentic']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1668602393098-6f5d6e73da3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWRha2glMjBsYW5kc2NhcGUlMjBpbmRpYXxlbnwxfHx8fDE3Njk4OTEzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    region: 'South',
    mood: 'Nature',
    image: 'https://images.unsplash.com/photo-1720591658325-90372cc7da02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW5uYXIlMjB0ZWElMjBnYXJkZW5zJTIwa2VyYWxhfGVufDF8fHx8MTc2OTg5MTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Rolling tea gardens, misty mountains, and cool climate',
    longDescription: 'Munnar is a hill station in Kerala\'s Western Ghats, famous for its endless tea plantations, mist-covered hills, and cool climate. At 1,600m altitude, Munnar offers breathtaking views of rolling green hills carpeted with tea bushes. Wildlife sanctuaries, waterfalls, and the rare Neelakurinji flowers (blooms once in 12 years) add to its charm.',
    rating: 4.8,
    tags: ['Tea Gardens', 'Mountains', 'Nature', 'Wildlife'],
    bestTime: 'September to May',
    howToReach: 'From Kochi: 4-5 hours by road. From Bangalore: 10 hours. Nearest airport: Cochin (110km).',
    activities: [
      {
        id: 'mu-1',
        name: 'Tea Plantation Tour',
        description: 'Visit working tea estates, learn tea processing',
        icon: 'Leaf',
        price: '₹200-500'
      },
      {
        id: 'mu-2',
        name: 'Eravikulam National Park Trek',
        description: 'Spot Nilgiri Tahr, endemic wildlife',
        icon: 'Trees',
        price: '₹600-800'
      },
      {
        id: 'mu-3',
        name: 'Mattupetty Dam Boating',
        description: 'Scenic lake boating with mountain views',
        icon: 'Ship',
        price: '₹200-400'
      },
      {
        id: 'mu-4',
        name: 'Attukal Waterfalls Trek',
        description: 'Hike to beautiful cascading waterfalls',
        icon: 'Waves',
        price: 'Free'
      }
    ],
    hotels: [
      {
        id: 'muh-1',
        name: 'Windermere Estate',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        priceRange: '₹₹₹',
        tags: ['Plantation', 'Heritage', 'Luxury'],
        description: 'Colonial-era bungalow on tea estate'
      },
      {
        id: 'muh-2',
        name: 'Tea Valley Resort',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        priceRange: '₹₹',
        tags: ['Valley View', 'Mid-Range', 'Family'],
        description: 'Comfortable resort with valley views'
      }
    ],
    restaurants: [
      {
        id: 'mur-1',
        name: 'Saravana Bhavan',
        image: 'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB0aGFsaXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        mustTry: 'Kerala Sadya, Appam with Stew, Filter Coffee',
        description: 'Authentic South Indian vegetarian cuisine',
        tags: ['South Indian', 'Vegetarian', 'Traditional']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1720591658325-90372cc7da02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW5uYXIlMjB0ZWElMjBnYXJkZW5zJTIwa2VyYWxhfGVufDF8fHx8MTc2OTg5MTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'goa-palolem',
    name: 'Palolem Beach, Goa',
    state: 'Goa',
    region: 'West',
    mood: 'Chill',
    image: 'https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc2OTg3ODE3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Crescent-shaped beach with beach huts, parties, and laid-back vibes',
    longDescription: 'Palolem is Goa\'s most picturesque crescent-shaped beach in South Goa, known for calm waters, palm-fringed shores, and colorful beach huts. Unlike North Goa\'s party beaches, Palolem offers a more relaxed atmosphere perfect for swimming, kayaking, and dolphin watching. Silent disco nights and beachside yoga are popular.',
    rating: 4.7,
    tags: ['Beach', 'Party', 'Relaxation', 'Water Sports'],
    bestTime: 'November to March',
    howToReach: 'From Mumbai: Flight to Dabolim (65km). From Bangalore: Direct flights. Well connected by trains and buses.',
    activities: [
      {
        id: 'gp-1',
        name: 'Silent Disco on Beach',
        description: 'Unique headphone party experience on sand',
        icon: 'Music',
        price: '₹500-800'
      },
      {
        id: 'gp-2',
        name: 'Kayaking to Butterfly Beach',
        description: 'Paddle to secluded Butterfly Beach',
        icon: 'Ship',
        price: '₹800-1200'
      },
      {
        id: 'gp-3',
        name: 'Dolphin Watching Tour',
        description: 'Early morning boat trips to spot dolphins',
        icon: 'Waves',
        price: '₹300-500'
      },
      {
        id: 'gp-4',
        name: 'Beach Yoga & Wellness',
        description: 'Sunrise yoga sessions on the beach',
        icon: 'Sparkles',
        price: '₹500-1000'
      }
    ],
    hotels: [
      {
        id: 'gph-1',
        name: 'Ciaran\'s Beach Huts',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        priceRange: '₹₹',
        tags: ['Beach Huts', 'Beachfront', 'Popular'],
        description: 'Iconic beach huts right on Palolem sands'
      },
      {
        id: 'gph-2',
        name: 'The Palolem Retreat',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        priceRange: '₹₹₹',
        tags: ['Boutique', 'Pool', 'Modern'],
        description: 'Boutique resort with modern amenities'
      }
    ],
    restaurants: [
      {
        id: 'gpr-1',
        name: 'Magic Italy',
        image: 'https://images.unsplash.com/photo-1750271328082-22490577fbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZWFmb29kJTIwY29hc3RhbCUyMGN1aXNpbmV8ZW58MXx8fHwxNzY5ODkxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        mustTry: 'Wood-fired Pizza, Goan Fish Curry, Prawn Balchão',
        description: 'Beachfront Italian-Goan fusion',
        tags: ['Italian', 'Goan', 'Beachfront']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc2OTg3ODE3MXww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    region: 'North',
    mood: 'Adventure',
    image: 'https://images.unsplash.com/photo-1683318528842-bd5f1fd0ff9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNoaWtlc2glMjBnYW5nZXMlMjBpbmRpYXxlbnwxfHx8fDE3Njk4OTEzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Yoga capital with white-water rafting, Beatles Ashram, and Ganga Aarti',
    longDescription: 'Rishikesh, the Yoga Capital of the World, sits on the banks of the holy Ganges in the Himalayan foothills. Beyond spirituality, Rishikesh offers thrilling adventures like white-water rafting, bungee jumping, and cliff jumping. The iconic Lakshman Jhula bridge, Beatles Ashram, and evening Ganga Aarti create a magical atmosphere.',
    rating: 4.8,
    tags: ['Yoga', 'Rafting', 'Spiritual', 'Adventure'],
    bestTime: 'September to June (avoid monsoon)',
    howToReach: 'From Delhi: 5-6 hours by road. Trains to Haridwar (25km), then taxi. Nearest airport: Dehradun (35km).',
    activities: [
      {
        id: 'ri-1',
        name: 'White-Water Rafting',
        description: '16-36km rafting on Ganges rapids',
        icon: 'Waves',
        price: '₹500-2000'
      },
      {
        id: 'ri-2',
        name: 'Bungee Jumping',
        description: 'India\'s highest bungee at 83m',
        icon: 'Mountain',
        price: '₹3500-4000'
      },
      {
        id: 'ri-3',
        name: 'Yoga & Meditation Retreat',
        description: 'Multi-day yoga courses in ashrams',
        icon: 'Sparkles',
        price: '₹500-3000/day'
      },
      {
        id: 'ri-4',
        name: 'Evening Ganga Aarti',
        description: 'Attend sacred fire ceremony by the river',
        icon: 'Flame',
        price: 'Free'
      }
    ],
    hotels: [
      {
        id: 'rih-1',
        name: 'Aloha on the Ganges',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        priceRange: '₹₹₹',
        tags: ['Riverside', 'Luxury', 'Spa'],
        description: 'Luxury resort on Ganges riverbank'
      },
      {
        id: 'rih-2',
        name: 'Zostel Rishikesh',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        priceRange: '₹',
        tags: ['Hostel', 'Backpacker', 'Social'],
        description: 'Vibrant hostel near Lakshman Jhula'
      }
    ],
    restaurants: [
      {
        id: 'rir-1',
        name: 'Little Buddha Cafe',
        image: 'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB0aGFsaXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        mustTry: 'Israeli Shakshuka, Pancakes, Garhwali Thali',
        description: 'Rooftop cafe with Ganges views',
        tags: ['Cafe', 'Multi-cuisine', 'Rooftop']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1683318528842-bd5f1fd0ff9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNoaWtlc2glMjBnYW5nZXMlMjBpbmRpYXxlbnwxfHx8fDE3Njk4OTEzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    region: 'West',
    mood: 'Heritage',
    image: 'https://images.unsplash.com/photo-1673807095836-0904031b4f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWlwdXIlMjBwYWxhY2UlMjByYWphc3RoYW58ZW58MXx8fHwxNzY5ODkxMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pink City with majestic forts, palaces, and vibrant bazaars',
    longDescription: 'Jaipur, the Pink City, is Rajasthan\'s vibrant capital known for its magnificent forts, grand palaces, and colorful markets. The Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar showcase Rajput architecture. The bustling bazaars offer jewelry, textiles, and handicrafts. Don\'t miss traditional Rajasthani thalis and folk performances.',
    rating: 4.7,
    tags: ['Heritage', 'Forts', 'Culture', 'Shopping'],
    bestTime: 'October to March',
    howToReach: 'From Delhi: 5 hours by road, frequent trains. Direct flights from major cities. Well connected.',
    activities: [
      {
        id: 'jp-1',
        name: 'Amber Fort Elephant Ride',
        description: 'Traditional elephant ride to hilltop fort',
        icon: 'Castle',
        price: '₹1100-1500'
      },
      {
        id: 'jp-2',
        name: 'City Palace & Museums',
        description: 'Explore royal palaces and art collections',
        icon: 'Museum',
        price: '₹200-700'
      },
      {
        id: 'jp-3',
        name: 'Bazaar Shopping Tour',
        description: 'Shop for jewelry, textiles, handicrafts',
        icon: 'ShoppingBag',
        price: 'Free (purchases vary)'
      },
      {
        id: 'jp-4',
        name: 'Evening Cultural Show',
        description: 'Folk dance and music performances',
        icon: 'Music',
        price: '₹400-1000'
      }
    ],
    hotels: [
      {
        id: 'jph-1',
        name: 'Taj Rambagh Palace',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        priceRange: '₹₹₹₹',
        tags: ['Palace', 'Heritage', 'Ultra Luxury'],
        description: 'Former royal palace turned luxury hotel'
      },
      {
        id: 'jph-2',
        name: 'Alsisar Haveli',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        priceRange: '₹₹₹',
        tags: ['Haveli', 'Heritage', 'Boutique'],
        description: 'Traditional haveli with royal charm'
      }
    ],
    restaurants: [
      {
        id: 'jpr-1',
        name: 'Chokhi Dhani',
        image: 'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB0aGFsaXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        mustTry: 'Dal Baati Churma, Laal Maas, Ghevar',
        description: 'Ethnic village resort with Rajasthani thali',
        tags: ['Rajasthani', 'Buffet', 'Cultural']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1673807095836-0904031b4f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWlwdXIlMjBwYWxhY2UlMjByYWphc3RoYW58ZW58MXx8fHwxNzY5ODkxMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1697453513640-67db07473ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb3J0JTIwaGlzdG9yaWNhbHxlbnwxfHx8fDE3Njk4OTEzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'varkala',
    name: 'Varkala',
    state: 'Kerala',
    region: 'South',
    mood: 'Chill',
    image: 'https://images.unsplash.com/photo-1672060519409-8b4f23f52297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJrYWxhJTIwYmVhY2glMjBjbGlmZnMlMjBrZXJhbGF8ZW58MXx8fHwxNzY5ODkxMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Dramatic red cliffs overlooking pristine beach and clifftop cafes',
    longDescription: 'Varkala is Kerala\'s most dramatic beach destination where red laterite cliffs tower over golden sands and turquoise waters. The clifftop is lined with cafes, yoga centers, and shops offering stunning sunset views. Varkala is also a pilgrimage site with the ancient Janardhana Swamy Temple and natural springs believed to have healing properties.',
    rating: 4.7,
    tags: ['Beach', 'Cliffs', 'Yoga', 'Cafes'],
    bestTime: 'October to March',
    howToReach: 'From Thiruvananthapuram: 51km, 1.5 hours by road. Train station in Varkala. Nearest airport: Trivandrum.',
    activities: [
      {
        id: 'vk-1',
        name: 'Clifftop Sunset Watching',
        description: 'Watch sunset from scenic cliff cafes',
        icon: 'Sunset',
        price: 'Free (food/drinks separate)'
      },
      {
        id: 'vk-2',
        name: 'Beach Swimming & Surfing',
        description: 'Swim in calm waters, try surfing lessons',
        icon: 'Waves',
        price: '₹500-1500'
      },
      {
        id: 'vk-3',
        name: 'Ayurvedic Spa & Massage',
        description: 'Traditional Kerala Ayurvedic treatments',
        icon: 'Sparkles',
        price: '₹800-3000'
      },
      {
        id: 'vk-4',
        name: 'Janardhana Temple Visit',
        description: 'Ancient 2000-year-old temple',
        icon: 'Church',
        price: 'Free'
      }
    ],
    hotels: [
      {
        id: 'vkh-1',
        name: 'Cliff Edge Boutique Hotel',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        priceRange: '₹₹₹',
        tags: ['Clifftop', 'Sea View', 'Boutique'],
        description: 'Stunning ocean views from clifftop location'
      },
      {
        id: 'vkh-2',
        name: 'Soul & Surf Varkala',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        priceRange: '₹₹',
        tags: ['Surf Camp', 'Yoga', 'Social'],
        description: 'Surf and yoga retreat with communal vibes'
      }
    ],
    restaurants: [
      {
        id: 'vkr-1',
        name: 'Clafouti',
        image: 'https://images.unsplash.com/photo-1750271328082-22490577fbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZWFmb29kJTIwY29hc3RhbCUyMGN1aXNpbmV8ZW58MXx8fHwxNzY5ODkxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        mustTry: 'Seafood Platter, Kerala Fish Curry, Fresh Juices',
        description: 'Popular clifftop cafe with ocean views',
        tags: ['Seafood', 'Clifftop', 'Continental']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1672060519409-8b4f23f52297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJrYWxhJTIwYmVhY2glMjBjbGlmZnMlMjBrZXJhbGF8ZW58MXx8fHwxNzY5ODkxMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'gokarna',
    name: 'Gokarna',
    state: 'Karnataka',
    region: 'South',
    mood: 'Nature',
    image: 'https://images.unsplash.com/photo-1642516864588-aa717e16d1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2thcm5hJTIwYmVhY2glMjBrYXJuYXRha2F8ZW58MXx8fHwxNzY5ODkwNzc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Hidden beaches, beach treks, and spiritual temple town',
    longDescription: 'Gokarna is a sacred temple town that doubles as a haven for beach lovers seeking tranquility. Unlike commercialized Goa, Gokarna offers pristine, secluded beaches accessible via scenic coastal treks. Om Beach (shaped like ॐ), Paradise Beach, and Half Moon Beach offer peace, yoga, and stunning sunsets. The Mahabaleshwar Temple is a major pilgrimage site.',
    rating: 4.6,
    tags: ['Beach', 'Trekking', 'Spiritual', 'Secluded'],
    bestTime: 'October to March',
    howToReach: 'From Bangalore: 10 hours by road. Train to Gokarna Road (10km). From Goa: 4 hours by road.',
    activities: [
      {
        id: 'gk-1',
        name: 'Beach Trek (Om to Paradise)',
        description: 'Scenic coastal trek across 4 beaches',
        icon: 'Footprints',
        price: 'Free'
      },
      {
        id: 'gk-2',
        name: 'Beach Camping',
        description: 'Overnight camping on secluded beaches',
        icon: 'Tent',
        price: '₹500-1000'
      },
      {
        id: 'gk-3',
        name: 'Mahabaleshwar Temple Visit',
        description: 'Ancient Shiva temple pilgrimage',
        icon: 'Church',
        price: 'Free'
      },
      {
        id: 'gk-4',
        name: 'Sunset Yoga on Om Beach',
        description: 'Group yoga sessions during golden hour',
        icon: 'Sparkles',
        price: '₹300-500'
      }
    ],
    hotels: [
      {
        id: 'gkh-1',
        name: 'Namaste Cafe & Guesthouse',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        priceRange: '₹',
        tags: ['Beach Shacks', 'Budget', 'Backpacker'],
        description: 'Iconic beach shacks on Om Beach'
      },
      {
        id: 'gkh-2',
        name: 'SwaSwara Wellness Retreat',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        priceRange: '₹₹₹₹',
        tags: ['Wellness', 'Luxury', 'Yoga'],
        description: 'High-end wellness resort with Ayurveda'
      }
    ],
    restaurants: [
      {
        id: 'gkr-1',
        name: 'Prema Restaurant',
        image: 'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB0aGFsaXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        mustTry: 'South Indian Thali, Seafood, Banana Pancakes',
        description: 'Popular vegetarian restaurant in town',
        tags: ['Vegetarian', 'South Indian', 'Budget']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1642516864588-aa717e16d1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2thcm5hJTIwYmVhY2glMjBrYXJuYXRha2F8ZW58MXx8fHwxNzY5ODkwNzc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'spiti',
    name: 'Spiti Valley',
    state: 'Himachal Pradesh',
    region: 'North',
    mood: 'Adventure',
    image: 'https://images.unsplash.com/photo-1636567652095-f59e54ed6d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGl0aSUyMHZhbGxleSUyMGluZGlhfGVufDF8fHx8MTc2OTg5MTM1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Remote Himalayan valley with monasteries and stark landscapes',
    longDescription: 'Spiti Valley, meaning "The Middle Land," sits between India and Tibet at altitudes above 12,000 ft. This cold desert mountain valley offers breathtaking landscapes of barren mountains, ancient Buddhist monasteries, turquoise rivers, and crystal-clear starry nights. Key Monastery, Chandratal Lake, and Pin Valley are highlights. Spiti is for adventure seekers seeking raw, untouched beauty.',
    rating: 4.8,
    tags: ['Mountains', 'Monasteries', 'Remote', 'Stargazing'],
    bestTime: 'May to October (roads closed in winter)',
    howToReach: 'From Manali: 2 days via Rohtang and Kunzum Pass. From Shimla: 2 days via Kinnaur. No direct flights/trains.',
    activities: [
      {
        id: 'sp-1',
        name: 'Chandratal Lake Trek',
        description: 'Visit the mesmerizing Moon Lake at 14,100 ft',
        icon: 'Mountain',
        price: '₹2000-4000 (permits+camping)'
      },
      {
        id: 'sp-2',
        name: 'Monastery Circuit Tour',
        description: 'Visit Key, Tabo, Dhankar ancient monasteries',
        icon: 'Church',
        price: '₹100-200 per monastery'
      },
      {
        id: 'sp-3',
        name: 'Stargazing & Astrophotography',
        description: 'World-class dark skies for stargazing',
        icon: 'Stars',
        price: 'Free (equipment rental ₹500-2000)'
      },
      {
        id: 'sp-4',
        name: 'Pin Valley Trek',
        description: 'Spot snow leopards and Himalayan wildlife',
        icon: 'Footprints',
        price: '₹5000-15000 (multi-day)'
      }
    ],
    hotels: [
      {
        id: 'sph-1',
        name: 'Zostel Kaza',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        priceRange: '₹',
        tags: ['Hostel', 'Social', 'Budget'],
        description: 'Cozy hostel in Kaza town, backpacker hub'
      },
      {
        id: 'sph-2',
        name: 'Spiti Heritage Guesthouse',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.3,
        priceRange: '₹₹',
        tags: ['Homestay', 'Traditional', 'Local'],
        description: 'Traditional Spitian homestay experience'
      }
    ],
    restaurants: [
      {
        id: 'spr-1',
        name: 'Sol Cafe',
        image: 'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB0aGFsaXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        mustTry: 'Thukpa, Momos, Butter Tea, Thenthuk',
        description: 'Warm cafe serving Tibetan and local food',
        tags: ['Tibetan', 'Comfort Food', 'Local']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1636567652095-f59e54ed6d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGl0aSUyMHZhbGxleSUyMGluZGlhfGVufDF8fHx8MTc2OTg5MTM1MHww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwaters',
    state: 'Kerala',
    region: 'South',
    mood: 'Nature',
    image: 'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaW5kaWF8ZW58MXx8fHwxNzY5ODkwNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Houseboat cruises through serene network of lagoons and canals',
    longDescription: 'Kerala\'s backwaters are a labyrinth of tranquil canals, lagoons, and lakes lined with coconut palms and villages. The Alleppey-Kumarakom stretch offers the iconic houseboat experience where you drift through waterways, watch village life, spot birds, and enjoy freshly caught fish. This is pure relaxation and immersion in Kerala\'s natural beauty.',
    rating: 4.8,
    tags: ['Houseboats', 'Nature', 'Relaxation', 'Canals'],
    bestTime: 'November to February',
    howToReach: 'Fly to Kochi. Alleppey (75km from Kochi) and Kumarakom are main houseboat hubs, 1.5-2 hours by road.',
    activities: [
      {
        id: 'kb-1',
        name: 'Houseboat Day/Night Cruise',
        description: 'Private houseboat with crew through backwaters',
        icon: 'Ship',
        price: '₹8000-25000 per boat'
      },
      {
        id: 'kb-2',
        name: 'Village Canoe Ride',
        description: 'Small canoe through narrow village canals',
        icon: 'Waves',
        price: '₹300-600'
      },
      {
        id: 'kb-3',
        name: 'Bird Watching at Kumarakom',
        description: 'Spot migratory birds at sanctuary',
        icon: 'Bird',
        price: '₹50-200'
      },
      {
        id: 'kb-4',
        name: 'Toddy Tapping Experience',
        description: 'Watch traditional coconut toddy collection',
        icon: 'Trees',
        price: '₹200-500'
      }
    ],
    hotels: [
      {
        id: 'kbh-1',
        name: 'Vivanta Kumarakom',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        priceRange: '₹₹₹₹',
        tags: ['Luxury', 'Lakefront', 'Spa'],
        description: '5-star resort on Vembanad Lake'
      },
      {
        id: 'kbh-2',
        name: 'Backwater Homestay',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        priceRange: '₹',
        tags: ['Homestay', 'Authentic', 'Budget'],
        description: 'Family-run homestay on canal edge'
      }
    ],
    restaurants: [
      {
        id: 'kbr-1',
        name: 'Thaff Restaurant',
        image: 'https://images.unsplash.com/photo-1750271328082-22490577fbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZWFmb29kJTIwY29hc3RhbCUyMGN1aXNpbmV8ZW58MXx8fHwxNzY5ODkxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.6,
        mustTry: 'Karimeen Pollichathu, Appam with Stew, Kerala Sadya',
        description: 'Authentic Kerala cuisine, famous for fish',
        tags: ['Kerala', 'Seafood', 'Authentic']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaW5kaWF8ZW58MXx8fHwxNzY5ODkwNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'rajasthan-fort',
    name: 'Amber Fort, Jaipur',
    state: 'Rajasthan',
    region: 'West',
    mood: 'Heritage',
    image: 'https://images.unsplash.com/photo-1711881666228-f7129f2153d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBmb3J0JTIwaW5kaWF8ZW58MXx8fHwxNzY5ODkwNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Majestic hilltop fort with stunning architecture and history',
    longDescription: 'Amber Fort is a magnificent hilltop fortress overlooking Maota Lake near Jaipur. Built in 1592 with red sandstone and marble, it showcases stunning Rajput architecture with mirror-work chambers, intricate carvings, and grand courtyards. The light and sound show brings history alive. Elephant rides to the fort entrance are iconic.',
    rating: 4.8,
    tags: ['Fort', 'Architecture', 'History', 'UNESCO'],
    bestTime: 'October to March',
    howToReach: 'From Jaipur city center: 11km, 30 minutes. Easily accessible by taxi/auto. Part of Jaipur tourism circuit.',
    activities: [
      {
        id: 'af-1',
        name: 'Fort Architecture Tour',
        description: 'Explore Sheesh Mahal, courtyards, palaces',
        icon: 'Castle',
        price: '₹200-500 (tickets+guide)'
      },
      {
        id: 'af-2',
        name: 'Light & Sound Show',
        description: 'Evening show narrating fort\'s history',
        icon: 'Music',
        price: '₹200-400'
      },
      {
        id: 'af-3',
        name: 'Photography Session',
        description: 'Capture stunning Rajput architecture',
        icon: 'Camera',
        price: 'Free (camera fees ₹50-200)'
      },
      {
        id: 'af-4',
        name: 'Elephant Experience',
        description: 'Photo with decorated elephants (not rides)',
        icon: 'Mountain',
        price: '₹300-500'
      }
    ],
    hotels: [
      {
        id: 'afh-1',
        name: 'Samode Haveli',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        priceRange: '₹₹₹',
        tags: ['Heritage', 'Luxury', 'Traditional'],
        description: '18th-century heritage haveli hotel'
      }
    ],
    restaurants: [
      {
        id: 'afr-1',
        name: 'Chokhi Dhani',
        image: 'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB0aGFsaXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        mustTry: 'Dal Baati Churma, Ker Sangri, Bajre ki Roti',
        description: 'Traditional Rajasthani village dining experience',
        tags: ['Rajasthani', 'Cultural', 'Traditional']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1711881666228-f7129f2153d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBmb3J0JTIwaW5kaWF8ZW58MXx8fHwxNzY5ODkwNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  // Adding more Maharashtra/Konkan destinations
  {
    id: 'murud-janjira',
    name: 'Murud-Janjira',
    state: 'Maharashtra',
    region: 'Konkan',
    mood: 'Heritage',
    image: 'https://images.unsplash.com/photo-1697453513640-67db07473ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb3J0JTIwaGlzdG9yaWNhbHxlbnwxfHx8fDE3Njk4OTEzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Invincible sea fort on an island, never conquered in history',
    longDescription: 'Janjira Fort is a 15th-century island fortress in the Arabian Sea, known as the only fort on India\'s west coast never conquered by foreigners. Accessible by boat, the fort stands majestically with 19 bastions still intact. The nearby Murud beach offers pristine sands and water sports. This unique combination of history and beach makes Murud-Janjira special.',
    rating: 4.7,
    tags: ['Fort', 'Beach', 'History', 'Island'],
    bestTime: 'October to March',
    howToReach: 'From Mumbai: 4-5 hours via Alibag-Murud route. From Pune: 5-6 hours. Boats to fort from Rajapuri jetty.',
    activities: [
      {
        id: 'mj-1',
        name: 'Janjira Fort Boat Tour',
        description: 'Boat ride to explore the island fortress',
        icon: 'Ship',
        price: '₹25-50 (boat) + ₹10 (entry)'
      },
      {
        id: 'mj-2',
        name: 'Murud Beach Swimming',
        description: 'Enjoy clean beach with gentle waves',
        icon: 'Waves',
        price: 'Free'
      },
      {
        id: 'mj-3',
        name: 'Siddheshwar Temple Visit',
        description: 'Hilltop temple with panoramic views',
        icon: 'Church',
        price: 'Free'
      },
      {
        id: 'mj-4',
        name: 'Local Seafood Experience',
        description: 'Fresh catch from fishing village',
        icon: 'Fish',
        price: '₹300-800'
      }
    ],
    hotels: [
      {
        id: 'mjh-1',
        name: 'Golden Swan Beach Resort',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.3,
        priceRange: '₹₹',
        tags: ['Beachfront', 'Fort View', 'Mid-Range'],
        description: 'Beach resort with fort views'
      }
    ],
    restaurants: [
      {
        id: 'mjr-1',
        name: 'Patil Khanaval',
        image: 'https://images.unsplash.com/photo-1750271328082-22490577fbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZWFmb29kJTIwY29hc3RhbCUyMGN1aXNpbmV8ZW58MXx8fHwxNzY5ODkxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        mustTry: 'Fried Pomfret, Surmai Curry, Solkadhi',
        description: 'Famous for fresh seafood thalis',
        tags: ['Seafood', 'Konkani', 'Local']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1697453513640-67db07473ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb3J0JTIwaGlzdG9yaWNhbHxlbnwxfHx8fDE3Njk4OTEzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'diveagar',
    name: 'Diveagar',
    state: 'Maharashtra',
    region: 'Konkan',
    mood: 'Chill',
    image: 'https://images.unsplash.com/photo-1724496328006-3b4706543430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHR1cnF1b2lzZXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Peaceful 5km stretch of beach with casuarina trees and temples',
    longDescription: 'Diveagar is one of Konkan\'s most peaceful and pristine beaches, a 5km stretch of golden sand lined with swaying casuarina and betel nut trees. The calm waters are perfect for swimming, and the beach is never crowded. The Suvarna Ganesh temple, believed to be self-manifested, is a major attraction. Diveagar is perfect for families seeking tranquil beach time.',
    rating: 4.6,
    tags: ['Beach', 'Peaceful', 'Temple', 'Family'],
    bestTime: 'October to May',
    howToReach: 'From Mumbai: 5 hours via Mangaon-Shrivardhan route. From Pune: 4-5 hours. Well connected by state buses.',
    activities: [
      {
        id: 'dv-1',
        name: 'Beach Swimming & Relaxation',
        description: 'Safe swimming in calm, clean waters',
        icon: 'Waves',
        price: 'Free'
      },
      {
        id: 'dv-2',
        name: 'Suvarna Ganesh Darshan',
        description: 'Visit the golden Ganesh temple',
        icon: 'Church',
        price: 'Free'
      },
      {
        id: 'dv-3',
        name: 'Casuarina Grove Walk',
        description: 'Peaceful walks under tree canopy',
        icon: 'Trees',
        price: 'Free'
      },
      {
        id: 'dv-4',
        name: 'Local Homestay Experience',
        description: 'Stay with Konkani families',
        icon: 'Home',
        price: '₹800-1500/night'
      }
    ],
    hotels: [
      {
        id: 'dvh-1',
        name: 'Sagar Sawali Beach Resort',
        image: 'https://images.unsplash.com/photo-1743521715397-bed8ffd33859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        priceRange: '₹₹',
        tags: ['Beach View', 'Family', 'AC Rooms'],
        description: 'Comfortable resort near beach'
      },
      {
        id: 'dvh-2',
        name: 'Exotica Suvarna Samudra',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.5,
        priceRange: '₹₹₹',
        tags: ['Luxury', 'Pool', 'Garden'],
        description: 'Premium resort with modern amenities'
      }
    ],
    restaurants: [
      {
        id: 'dvr-1',
        name: 'Atithi Bamboo',
        image: 'https://images.unsplash.com/photo-1750271328082-22490577fbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzZWFmb29kJTIwY29hc3RhbCUyMGN1aXNpbmV8ZW58MXx8fHwxNzY5ODkxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        mustTry: 'Prawns Fry, Bangda Curry, Ukdiche Modak',
        description: 'Eco-friendly Konkani cuisine',
        tags: ['Konkani', 'Seafood', 'Eco-friendly']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1724496328006-3b4706543430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiZWFjaCUyMHR1cnF1b2lzZXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'bhogwe',
    name: 'Bhogwe Beach',
    state: 'Maharashtra',
    region: 'Konkan',
    mood: 'Chill',
    image: 'https://images.unsplash.com/photo-1668078415471-bc8d98b843d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb25rYW4lMjBiZWFjaCUyMGluZGlhJTIwc3Vuc2V0fGVufDF8fHx8MTc2OTg5MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Secluded pristine beach with black sand and peaceful atmosphere',
    longDescription: 'Bhogwe is a hidden gem in Sindhudurg district, a secluded black sand beach surrounded by coconut groves. Unlike touristy beaches, Bhogwe remains peaceful with hardly any crowds. The unique black sand, clear waters, and tranquil atmosphere make it perfect for those seeking complete relaxation away from commercialization.',
    rating: 4.5,
    tags: ['Beach', 'Secluded', 'Black Sand', 'Offbeat'],
    bestTime: 'November to March',
    howToReach: 'From Mumbai: 9-10 hours. From Pune: 8 hours. Nearest town Kudal (8km). Best accessed with own vehicle.',
    activities: [
      {
        id: 'bh-1',
        name: 'Beach Solitude & Meditation',
        description: 'Peaceful beach perfect for relaxation',
        icon: 'Sparkles',
        price: 'Free'
      },
      {
        id: 'bh-2',
        name: 'Black Sand Walk',
        description: 'Unique black sand beach experience',
        icon: 'Footprints',
        price: 'Free'
      },
      {
        id: 'bh-3',
        name: 'Coconut Grove Exploration',
        description: 'Walk through surrounding coconut plantations',
        icon: 'Trees',
        price: 'Free'
      },
      {
        id: 'bh-4',
        name: 'Sunset Photography',
        description: 'Capture stunning sunsets on empty beach',
        icon: 'Camera',
        price: 'Free'
      }
    ],
    hotels: [
      {
        id: 'bhh-1',
        name: 'Bhogwe Beach Homestay',
        image: 'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGluZGlhJTIwYmVkcm9vbXxlbnwxfHx8fDE3Njk4OTEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.3,
        priceRange: '₹',
        tags: ['Homestay', 'Budget', 'Local'],
        description: 'Simple homestay with authentic Konkani hospitality'
      }
    ],
    restaurants: [
      {
        id: 'bhr-1',
        name: 'Local Homemade Food',
        image: 'https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB0aGFsaXxlbnwxfHx8fDE3Njk4OTEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.4,
        mustTry: 'Homestyle Fish Curry, Fresh Prawns, Solkadhi',
        description: 'Most food is homestay-based, authentic home cooking',
        tags: ['Homemade', 'Authentic', 'Malvani']
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1668078415471-bc8d98b843d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb25rYW4lMjBiZWFjaCUyMGluZGlhJTIwc3Vuc2V0fGVufDF8fHx8MTc2OTg5MTM0M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  }
];

export const states = [
  'All States',
  'Maharashtra',
  'Kerala',
  'Himachal Pradesh',
  'Goa',
  'Uttarakhand',
  'Rajasthan',
  'Ladakh',
  'Karnataka',
  'Tamil Nadu'
];

export const moods = ['All', 'Adventure', 'Chill', 'Nature', 'Heritage'];
