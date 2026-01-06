export const products = [
  {
    id: 1,
    name: "Sleepsuit Polos Premium",
    price: 89000,
    originalPrice: null,
    rating: 4.9,
    reviews: 234,
    category: "newborn",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop",
    badge: "Best Seller",
    sizes: ["NB", "S", "M"],
    description: "Sleepsuit super lembut untuk tidur nyenyak si kecil"
  },
  {
    id: 2,
    name: "Set Baju Harian 3pcs",
    price: 159000,
    originalPrice: 199000,
    rating: 4.8,
    reviews: 189,
    category: "baby",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop",
    badge: "Sale",
    sizes: ["S", "M", "L"],
    description: "Set lengkap untuk aktivitas harian bayi"
  },
  {
    id: 3,
    name: "Jumper Lucu Animal Series",
    price: 79000,
    originalPrice: null,
    rating: 4.9,
    reviews: 312,
    category: "baby",
    image: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=400&h=400&fit=crop",
    badge: "Best Seller",
    sizes: ["S", "M", "L"],
    description: "Jumper dengan motif binatang yang menggemaskan"
  },
  {
    id: 4,
    name: "Celana Panjang Katun",
    price: 59000,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    category: "baby",
    image: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=400&h=400&fit=crop",
    badge: null,
    sizes: ["S", "M", "L", "XL"],
    description: "Celana panjang nyaman untuk sehari-hari"
  },
  {
    id: 5,
    name: "Topi Bayi Soft Cotton",
    price: 35000,
    originalPrice: null,
    rating: 4.8,
    reviews: 98,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1587920149371-bc4aff539e08?w=400&h=400&fit=crop",
    badge: "New",
    sizes: ["One Size"],
    description: "Topi lembut untuk melindungi kepala si kecil"
  },
  {
    id: 6,
    name: "Sarung Tangan Kaki Set",
    price: 29000,
    originalPrice: null,
    rating: 4.9,
    reviews: 267,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&h=400&fit=crop",
    badge: "Best Seller",
    sizes: ["One Size"],
    description: "Set sarung tangan dan kaki untuk bayi baru lahir"
  },
  {
    id: 7,
    name: "Dress Bayi Floral",
    price: 99000,
    originalPrice: 129000,
    rating: 4.8,
    reviews: 145,
    category: "baby",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
    badge: "Sale",
    sizes: ["S", "M", "L"],
    description: "Dress cantik dengan motif bunga untuk si kecil"
  },
  {
    id: 8,
    name: "Romper Stripe Classic",
    price: 85000,
    originalPrice: null,
    rating: 4.7,
    reviews: 178,
    category: "toddler",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop",
    badge: null,
    sizes: ["M", "L", "XL"],
    description: "Romper klasik dengan motif garis yang timeless"
  },
  {
    id: 9,
    name: "Kaos Oblong Polos 5pcs",
    price: 129000,
    originalPrice: null,
    rating: 4.9,
    reviews: 289,
    category: "toddler",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=400&fit=crop",
    badge: "Best Seller",
    sizes: ["L", "XL", "XXL"],
    description: "Set kaos polos warna-warni untuk toddler aktif"
  },
  {
    id: 10,
    name: "Baju Tidur Set Piyama",
    price: 109000,
    originalPrice: null,
    rating: 4.8,
    reviews: 134,
    category: "toddler",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop",
    badge: "New",
    sizes: ["L", "XL", "XXL"],
    description: "Set piyama nyaman untuk tidur malam"
  },
  {
    id: 11,
    name: "Selimut Bayi Premium",
    price: 149000,
    originalPrice: 179000,
    rating: 4.9,
    reviews: 212,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    badge: "Sale",
    sizes: ["One Size"],
    description: "Selimut super lembut dan hangat"
  },
  {
    id: 12,
    name: "Bodysuit Newborn Set",
    price: 119000,
    originalPrice: null,
    rating: 4.8,
    reviews: 198,
    category: "newborn",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    badge: null,
    sizes: ["NB", "S"],
    description: "Set bodysuit untuk bayi baru lahir"
  }
];

export const categories = [
  { id: "all", name: "Semua", icon: "Grid3X3" },
  { id: "newborn", name: "Newborn (0-3 bln)", icon: "Baby" },
  { id: "baby", name: "Baby (3-12 bln)", icon: "Heart" },
  { id: "toddler", name: "Toddler (1-3 thn)", icon: "Smile" },
  { id: "accessories", name: "Accessories", icon: "Star" }
];

export const featuredCategories = [
  {
    id: "newborn",
    name: "Newborn",
    age: "0-3 bulan",
    tagline: "Lembut untuk kulit baru",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop",
    color: "from-pink-200 to-pink-100"
  },
  {
    id: "baby",
    name: "Baby",
    age: "3-12 bulan",
    tagline: "Nyaman untuk eksplorasi",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop",
    color: "from-purple-200 to-purple-100"
  },
  {
    id: "toddler",
    name: "Toddler",
    age: "1-3 tahun",
    tagline: "Aktif dan stylish",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop",
    color: "from-yellow-200 to-yellow-100"
  },
  {
    id: "accessories",
    name: "Accessories",
    age: "All ages",
    tagline: "Pelengkap menggemaskan",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    color: "from-green-200 to-green-100"
  }
];
