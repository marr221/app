// ============================================
// FILE KONFIGURASI STOK MAR STORE
// Edit file ini untuk menambah/mengubah/menghapus stok produk
// ============================================

export interface StockItem {
  id: string;
  name: string;
  details: string;
  price: number;
  status: 'available' | 'sold' | 'reserved';
  image?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  icon: string;
  stock: StockItem[];
}

// ============================================
// DATA STOK AKUN FREE FIRE
// ============================================
export const freeFireStock: StockItem[] = [
  {
    id: 'ff-001',
    name: '12',
    details: 'ada',
    price: 1000,
    status: 'sold'
  },
  {
    id: 'ff-002',
    name: 'Akun FF Sultan Bundle',
    details: 'Level 65+, 100+ bundle, 50+ senjata evo, Diamond 10K+',
    price: 1800000,
    status: 'sold'
  },
  {
    id: 'ff-003',
    name: 'Akun FF Pro Player',
    details: 'Level 80+, Rank Heroic, KD 5+, Bundle pro player, Senjata lengkap',
    price: 1200000,
    status: 'sold'
  },
  {
    id: 'ff-004',
    name: 'Akun FF Mid Tier',
    details: 'Level 50+, Elite Pass 10+, Bundle 30+, Senjata evo 5+',
    price: 500000,
    status: 'sold'
  },
  {
    id: 'ff-005',
    name: 'Akun FF Starter Pack',
    details: 'Level 30+, Elite Pass 5+, Bundle basic, Cocok untuk pemula',
    price: 150000,
    status: 'sold'
  },
  {
    id: 'ff-006',
    name: 'Akun FF Budget',
    details: 'Level 20+, Beberapa bundle, Harga terjangkau',
    price: 50000,
    status: 'sold'
  }
];

// ============================================
// DATA STOK AKUN MOBILE LEGENDS
// ============================================
export const mobileLegendsStock: StockItem[] = [
  {
    id: 'ml-001',
    name: 'Akun entry-mid',
    details: 'High rank honor 43, roger transformers, tamuz kungfu panda, lance epic, martis zodiac dan masih banyak yang bagus',
    price: 105000,
    status: 'available'
  },
  {
    id: 'ml-002',
    name: 'Akun ML Mythic Skins',
    details: 'Mythic rank, 300+ skin, 20+ skin epic limit, Starlight 50+',
    price: 3500000,
    status: 'sold'
  },
  {
    id: 'ml-003',
    name: 'Akun ML Pro Gamer',
    details: 'Mythic, 200+ skin, Skin marksman lengkap, Emote battle',
    price: 2000000,
    status: 'sold'
  },
  {
    id: 'ml-004',
    name: 'Akun ML Mid Tier',
    details: 'Legend/Mythic, 100+ skin, Starlight 20+, Hero lengkap',
    price: 800000,
    status: 'sold'
  },
  {
    id: 'ml-005',
    name: 'Akun ML Starter',
    details: 'Epic/Legend, 50+ skin, Hero 70+, Cocok belajar',
    price: 300000,
    status: 'sold'
  },
  {
    id: 'ml-006',
    name: 'Akun ML Budget',
    details: 'Master/Grandmaster, 20+ skin, Hero 50+, Harga murah',
    price: 100000,
    status: 'sold'
  },
  {
    id: 'ml-007',
    name: 'Akun ML Smurf',
    details: 'Rank rendah, Skin basic, Untuk smurf/push rank',
    price: 50000,
    status: 'sold'
  },
  {
    id: 'ml-008',
    name: 'Akun ML Newbie',
    details: 'Level 15+, Beberapa hero, Starter pack',
    price: 20000,
    status: 'sold'
  }
];

// ============================================
// DATA STOK AKUN ROBLOX
// ============================================
export const robloxStock: StockItem[] = [
  {
    id: 'rb-001',
    name: 'Akun Roblox Sultan',
    details: 'Robux 50K+, Limited items langka, Gamepass multiple games, Premium 5+ tahun',
    price: 1500000,
    status: 'sold'
  },
  {
    id: 'rb-002',
    name: 'Akun Roblox Rich',
    details: 'Robux 20K+, Limited items, Avatar lengkap, Multiple premium items',
    price: 800000,
    status: 'sold'
  },
  {
    id: 'rb-003',
    name: 'Akun Roblox Pro',
    details: 'Robux 10K+, Gamepass populer, Avatar keren, Level tinggi multiple games',
    price: 500000,
    status: 'sold'
  },
  {
    id: 'rb-004',
    name: 'Akun Roblox Mid',
    details: 'Robux 5K+, Beberapa gamepass, Avatar bagus, Aktif 2+ tahun',
    price: 250000,
    status: 'sold'
  },
  {
    id: 'rb-005',
    name: 'Akun Roblox Starter',
    details: 'Robux 1K+, Avatar custom, Beberapa items, Cocok pemula',
    price: 100000,
    status: 'sold'
  },
  {
    id: 'rb-006',
    name: 'Akun Roblox Basic',
    details: 'Robux 500+, Avatar basic, Items standar',
    price: 50000,
    status: 'sold'
  },
  {
    id: 'rb-007',
    name: 'Akun Roblox Budget',
    details: 'Robux 100+, Avatar simple, Harga terjangkau',
    price: 20000,
    status: 'sold'
  },
  {
    id: 'rb-008',
    name: 'Akun Roblox Fresh',
    details: 'Akun baru, Robux 50+, Siap custom',
    price: 5000,
    status: 'sold'
  },
  {
    id: 'rb-009',
    name: 'Akun Roblox Starter Pack',
    details: 'Akun kosong, Siap pakai, Harga paling murah',
    price: 2000,
    status: 'sold'
  }
];

// ============================================
// DATA KATEGORI PRODUK
// ============================================
export const productCategories: ProductCategory[] = [
  {
    id: 'freefire',
    name: 'Akun Free Fire',
    description: 'Akun Free Fire berkualitas dengan berbagai tier, dari budget hingga sultan. Semua akun aman dan full garansi.',
    priceRange: 'Rp 50.000 - 2.500.000',
    icon: 'Gamepad2',
    stock: freeFireStock
  },
  {
    id: 'mobilelegends',
    name: 'Akun Mobile Legends',
    description: 'Akun ML dengan skin lengkap, rank tinggi, dan hero beragam. Pilihan dari smurf hingga akun sultan.',
    priceRange: 'Rp 20.000 - 5.000.000',
    icon: 'Gamepad2',
    stock: mobileLegendsStock
  },
  {
    id: 'roblox',
    name: 'Akun Roblox',
    description: 'Akun Roblox dengan robux, limited items, dan gamepass. Cocok untuk berbagai kebutuhan gaming.',
    priceRange: 'Rp 2.000 - 1.500.000',
    icon: 'Gamepad2',
    stock: robloxStock
  }
];

// ============================================
// DATA PRODUK LAINNYA (TANPA STOK SPESIFIK)
// ============================================
export const otherProducts = [
  {
    id: 'boost',
    name: 'Jasa Boost Rank',
    category: 'Jasa',
    price: 'Rp 5.000 - 5.000.000',
    description: 'Layanan boosting rank profesional dengan jaminan aman dan cepat. Diurus oleh player berpengalaman dengan winrate tinggi. Tersedia untuk berbagai game.',
    icon: 'TrendingUp',
    badge: 'Populer'
  },
  {
    id: 'suntik',
    name: 'Jasa Suntik Followers, Like, View',
    category: 'Sosial Media',
    price: 'Rp 2.000 - 80.000',
    description: 'Layanan penambah followers, like, dan view untuk Instagram, TikTok, Twitter, dan platform sosial media lainnya. Fast delivery dan bergaransi.',
    icon: 'Users',
    badge: 'Best Seller'
  },
  {
    id: 'joki',
    name: 'Jasa Joki Game',
    category: 'Jasa',
    price: 'Rp 3.000 - 50.000',
    description: 'Jasa joki game oleh player profesional. Misi, event, atau rank bisa kami bantu selesaikan dengan cepat dan aman.',
    icon: 'Zap'
  },
  {
    id: 'streaming',
    name: 'Akun Streaming Premium',
    category: 'Entertainment',
    price: 'Rp 2.000 - 50.000',
    description: 'Akun Netflix, Spotify, Disney+, YouTube Premium, dan layanan streaming lainnya dengan harga terjangkau. Full garansi.',
    icon: 'Crown',
    badge: 'Hemat'
  }
];

// ============================================
// FUNGSI HELPER
// ============================================

// Format harga ke rupiah
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

// Get total available stock
export function getTotalAvailableStock(categoryId: string): number {
  const category = productCategories.find(cat => cat.id === categoryId);
  if (!category) return 0;
  return category.stock.filter(item => item.status === 'available').length;
}

// Get all available items from a category
export function getAvailableStock(categoryId: string): StockItem[] {
  const category = productCategories.find(cat => cat.id === categoryId);
  if (!category) return [];
  return category.stock.filter(item => item.status === 'available');
}
