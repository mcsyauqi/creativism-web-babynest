import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ShoppingBag,
  Star,
  Heart,
  Filter,
  X,
  ChevronDown,
  Grid3X3,
  LayoutGrid,
  SlidersHorizontal
} from 'lucide-react';
import { products, categories } from '../data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  const sizes = ['NB', 'S', 'M', 'L', 'XL', 'XXL', 'One Size'];

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      if (selectedSizes.length > 0) {
        const hasSize = product.sizes.some((size) => selectedSizes.includes(size));
        if (!hasSize) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
        default:
          return b.id - a.id;
      }
    });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 200000]);
    setSelectedSizes([]);
    setSortBy('newest');
    setSearchParams({});
  };

  return (
    <>
      <Helmet>
        <title>Koleksi Produk - BabyNest</title>
        <meta
          name="description"
          content="Jelajahi koleksi pakaian bayi premium BabyNest. 100% katun organik, hypoallergenic, dan desain praktis untuk si kecil."
        />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Koleksi{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                BabyNest
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan pakaian terbaik untuk si kecil. Semua produk dibuat dengan 100% katun organik
              dan sudah tersertifikasi SNI.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-pink-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-40 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading font-bold text-lg text-gray-800">Filter</h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-pink-500 hover:text-pink-600"
                  >
                    Reset
                  </button>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Harga</h4>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                      placeholder="Min"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                      placeholder="Max"
                    />
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Ukuran</h4>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                          selectedSizes.includes(size)
                            ? 'bg-pink-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-pink-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Urutkan</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white"
                  >
                    <option value="newest">Terbaru</option>
                    <option value="price-low">Harga: Terendah</option>
                    <option value="price-high">Harga: Tertinggi</option>
                    <option value="rating">Rating Tertinggi</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Mobile Filter Button */}
              <div className="lg:hidden flex items-center justify-between mb-6">
                <p className="text-gray-600">{filteredProducts.length} produk</p>
                <button
                  onClick={() => setShowFilters(true)}
                  className="flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-medium"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter
                </button>
              </div>

              {/* Results count - Desktop */}
              <div className="hidden lg:flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Menampilkan <span className="font-semibold">{filteredProducts.length}</span> produk
                </p>
                {(selectedCategory !== 'all' || selectedSizes.length > 0) && (
                  <div className="flex items-center gap-2">
                    {selectedCategory !== 'all' && (
                      <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        {categories.find((c) => c.id === selectedCategory)?.name}
                        <button onClick={() => handleCategoryChange('all')}>
                          <X className="w-4 h-4" />
                        </button>
                      </span>
                    )}
                    {selectedSizes.map((size) => (
                      <span
                        key={size}
                        className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        {size}
                        <button onClick={() => toggleSize(size)}>
                          <X className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div
                  className={`grid gap-4 md:gap-6 ${
                    viewMode === 'grid'
                      ? 'grid-cols-2 lg:grid-cols-3'
                      : 'grid-cols-1 md:grid-cols-2'
                  }`}
                >
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all card-hover"
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {product.badge && (
                          <span
                            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                              product.badge === 'Best Seller'
                                ? 'bg-pink-500 text-white'
                                : product.badge === 'Sale'
                                ? 'bg-red-500 text-white'
                                : 'bg-purple-500 text-white'
                            }`}
                          >
                            {product.badge}
                          </span>
                        )}
                        <span className="absolute top-4 right-4 bg-white/90 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          {categories.find((c) => c.id === product.category)?.name.split(' ')[0]}
                        </span>
                        <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pink-500 hover:text-white">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="p-4 md:p-6">
                        <h3 className="font-heading font-semibold text-gray-800 mb-2 truncate">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-500 ml-1">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="font-bold text-lg text-pink-500">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.sizes.map((size) => (
                            <span
                              key={size}
                              className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                        <button className="w-full bg-pink-100 hover:bg-pink-500 text-pink-500 hover:text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                          <ShoppingBag className="w-5 h-5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-12 h-12 text-pink-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-2">
                    Tidak ada produk ditemukan
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Coba ubah filter atau kategori untuk menemukan produk lainnya
                  </p>
                  <button
                    onClick={clearFilters}
                    className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowFilters(false)}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-bold text-xl text-gray-800">Filter</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">Harga</h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  placeholder="Min"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">Ukuran</h4>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedSizes.includes(size)
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">Urutkan</h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-3 border border-gray-200 rounded-lg text-sm bg-white"
              >
                <option value="newest">Terbaru</option>
                <option value="price-low">Harga: Terendah</option>
                <option value="price-high">Harga: Tertinggi</option>
                <option value="rating">Rating Tertinggi</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-semibold"
              >
                Reset
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 bg-pink-500 text-white py-3 rounded-xl font-semibold"
              >
                Terapkan ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
