// ============================================
// FILE KONFIGURASI UTAMA MAR STORE
// Semua konten website bisa diedit dari file ini
// ============================================

// ============================================
// KONTAK & INFO UTAMA
// ============================================
export const CONTACT_INFO = {
  whatsapp: '6285136506343',
  email: 'marstoree12@gmail.com',
  linktree: 'https://linktr.ee/mar_store',
  storeName: 'MAR Store',
  tagline: 'Solusi Digital Terpercaya untuk Kebutuhan Gaming & Sosial Media Anda'
};

// ============================================
// CERITA SINGKAT MAR STORE
// Edit bagian ini untuk mengubah cerita di popup
// ============================================
export const STORE_STORY = {
  title: 'Cerita Singkat MAR Store',
  // Ganti teks di bawah ini untuk mengubah cerita
  content: `MAR Store didirikan pada tahun 2020 dari passion kami terhadap dunia gaming dan teknologi digital. 

Berawal dari hobi bermain game dan seringnya bertukar akun dengan teman-teman, kami menyadari banyak pemain yang mencari akun berkualitas dengan harga terjangkau.

Dengan modal kepercayaan dan pelayanan yang jujur, MAR Store mulai berkembang dari penjualan akun pribadi menjadi platform terpercaya yang telah melayani banyak pelanggan.

Kami berkomitmen untuk terus memberikan produk berkualitas, harga kompetitif, dan pelayanan terbaik untuk semua kebutuhan digital Anda.

Terima kasih telah mempercayai MAR Store! 💜`,
  // Ganti URL di bawah untuk mengubah gambar cerita (opsional, bisa dikosongkan)
  image: '' 
};

// ============================================
// POSTER DI BAGIAN ATAS POPUP
// Ganti URL di bawah untuk mengubah poster popup
// ============================================
export const POPUP_POSTER = {
  // URL gambar poster di bagian atas popup
  image: 'https://files.catbox.moe/yov61s.jpg',
  // Judul poster (opsional, bisa dikosongkan)
  title: '',
  // Link jika poster diklik (opsional, bisa dikosongkan)
  link: ''
};

// ============================================
// MENU "LAINNYA" - POSTER YANG BISA DITAMBAH/DIEDIT
// Tambahkan objek baru di array untuk menambah poster
// ============================================
export const LAINNYA_POSTERS = [
  {
    id: 'promo-1',
    // Judul poster
    title: 'Harga topup',
    // Deskripsi singkat
    description: 'Topup game murah meriah!',
    // URL gambar poster
    image: 'https://i.ibb.co.com/hx4B2f9b/In-Collage-20260214-215941789.jpg',
    // Link jika poster diklik
    link: '',
    // Warna badge (opsional: 'red', 'blue', 'green', 'yellow', 'purple')
    badgeColor: 'red',
    // Teks badge (kosongkan jika tidak ingin badge)
    badgeText: 'HOT'
  },
  {
    id: 'event-1',
    title: 'DANA KAGET',
    description: 'Ikuti saluran mar store dan gabung grubnya agar tidak ketinggalan dana kaget!',
    image: '', // Kosongkan jika belum ada gambar
    link: 'https://linktr.ee/mar_store',
    badgeColor: 'purple',
    badgeText: 'EVENT'
  },
  {
    id: 'info-1',
    title: 'Mar store menyediakan',
    description: 'Jual beli akun freefire, mobile legends, roblox, mc/rekber, suntik sosmed, jasa pengamanan akun, japost, jasa cari akun, topup game',
    image: '',
    link: '',
    badgeColor: 'blue',
    badgeText: 'INFO'
  }
  // Tambahkan poster baru di sini dengan format yang sama
];

// ============================================
// GAMBAR PRODUK
// Ganti URL di bawah untuk mengubah gambar setiap produk
// ============================================
export const PRODUCT_IMAGES = {
  // Gambar untuk kategori akun (ditampilkan di halaman produk)
  categories: {
    freefire: 'https://i.ibb.co.com/zWPJPF0s/3dbc8e72c27f1ab25550ee3374e48bec.jpg',      // Ganti dengan gambar Free Fire
    mobilelegends: 'https://i.ibb.co.com/RKGTTq9/71d2141b6bedf4841528fce2c181597e.jpg', // Ganti dengan gambar ML
    roblox: 'https://i.ibb.co.com/1YbzHxVq/6d966996c332777b1675e0fbb113203a.jpg'         // Ganti dengan gambar Roblox
  },
  
  // Gambar untuk setiap item stok (ditampilkan di detail stok)
  // Format: 'ID_PRODUK': 'URL_GAMBAR'
  stockItems: {
    // Free Fire
    'ff-001': '',
    'ff-002': '',
    'ff-003': '',
    'ff-004': '',
    'ff-005': '',
    'ff-006': '',
    
    // Mobile Legends
    'ml-001': 'https://i.ibb.co.com/YFxqtc9L/STOK-AKUN-ML-1-20260218-070730-0000.png',
    'ml-002': '',
    'ml-003': '',
    'ml-004': '',
    'ml-005': '',
    'ml-006': '',
    'ml-007': '',
    'ml-008': '',
    
    // Roblox
    'rb-001': '',
    'rb-002': '',
    'rb-003': '',
    'rb-004': '',
    'rb-005': '',
    'rb-006': '',
    'rb-007': '',
    'rb-008': '',
    'rb-009': ''
  }
};

// ============================================
// GAMBAR DEFAULT (jika produk tidak punya gambar)
// ============================================
export const DEFAULT_IMAGES = {
  // Gambar default untuk kategori produk
  categoryDefault: 'https://files.catbox.moe/yov61s.jpg',
  
  // Gambar default untuk item stok
  stockDefault: '',
  
  // Gambar default untuk poster
  posterDefault: 'https://files.catbox.moe/yov61s.jpg'
};

// ============================================
// FUNGSI HELPER
// ============================================

// Mendapatkan gambar kategori
export function getCategoryImage(categoryId: string): string {
  return PRODUCT_IMAGES.categories[categoryId as keyof typeof PRODUCT_IMAGES.categories] 
    || DEFAULT_IMAGES.categoryDefault;
}

// Mendapatkan gambar item stok
export function getStockImage(stockId: string): string {
  return PRODUCT_IMAGES.stockItems[stockId as keyof typeof PRODUCT_IMAGES.stockItems] 
    || DEFAULT_IMAGES.stockDefault;
}

// Mendapatkan gambar poster
export function getPosterImage(posterImage: string): string {
  return posterImage || DEFAULT_IMAGES.posterDefault;
}
