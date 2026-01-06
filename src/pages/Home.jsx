import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ShoppingBag,
  Star,
  ChevronLeft,
  ChevronRight,
  Heart,
  Leaf,
  Shield,
  Sparkles,
  Wallet,
  Instagram,
  ArrowRight,
  Quote,
  CheckCircle2
} from 'lucide-react';
import { products, featuredCategories } from '../data/products';
import { testimonials, instagramPosts } from '../data/testimonials';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const bestSellers = products.slice(0, 6);
  const displayedTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % displayedTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [displayedTestimonials.length]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const trustBadges = [
    { icon: Leaf, text: '100% Organic Cotton' },
    { icon: Shield, text: 'SNI Certified' },
    { icon: Sparkles, text: 'Free Shipping 150rb+' },
  ];

  const whyBabyNest = [
    {
      icon: Leaf,
      title: '100% Katun Organik',
      description: 'Bersertifikat GOTS, bebas pestisida dan bahan kimia berbahaya',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Shield,
      title: 'SNI & Hypoallergenic',
      description: 'Aman untuk kulit sensitif, lulus uji dermatologis',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Sparkles,
      title: 'Desain Praktis',
      description: 'Kancing depan, bukaan lebar, mudah ganti popok',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Wallet,
      title: 'Harga Terjangkau',
      description: 'Kualitas premium tanpa menguras kantong',
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <>
      <Helmet>
        <title>BabyNest - Pakaian Bayi Premium 100% Katun Organik</title>
        <meta
          name="description"
          content="BabyNest menyediakan pakaian bayi premium dengan 100% katun organik, SNI certified, dan hypoallergenic. Lembut untuk si kecil, tenang untuk bunda."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-white via-pink-50 to-purple-50"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                New Collection 2024
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Pakaian Bayi yang{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Dicintai
                </span>{' '}
                Kulit Sensitif
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                100% katun organik, SNI certified, hypoallergenic.{' '}
                <span className="font-semibold text-pink-600">
                  Karena si kecil layak yang terbaik.
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link
                  to="/products"
                  className="btn-shine bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-pink-300 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Lihat Koleksi
                </Link>
                <Link
                  to="/products"
                  className="bg-white text-pink-500 border-2 border-pink-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Promo Hari Ini
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                  >
                    <badge.icon className="w-5 h-5 text-pink-500" />
                    <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&h=700&fit=crop"
                  alt="Happy baby in cute outfit"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute top-10 -left-4 bg-white p-4 rounded-2xl shadow-lg animate-bounce-soft">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">GOTS Certified</p>
                    <p className="text-xs text-gray-500">Organic Cotton</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-20 -right-4 bg-white p-4 rounded-2xl shadow-lg animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://images.unsplash.com/photo-${1494790108377 + i}-be9c29b29330?w=40&h=40&fit=crop`}
                        alt="Customer"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">50K+</p>
                    <p className="text-xs text-gray-500">Happy Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Temukan yang Tepat untuk Si Kecil
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih kategori sesuai usia dan kebutuhan bayi Anda
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group card-hover"
              >
                <div className={`bg-gradient-to-br ${category.color} rounded-3xl p-6 h-full`}>
                  <div className="aspect-square mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-800 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{category.age}</p>
                  <p className="text-xs text-gray-500">{category.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Best Sellers
              </h2>
              <p className="text-gray-600">Produk favorit para Bunda</p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-pink-500 hover:text-pink-600 font-semibold"
            >
              Lihat Semua
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {bestSellers.map((product) => (
              <div key={product.id} className="group card-hover bg-white rounded-3xl overflow-hidden shadow-sm">
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
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pink-500 hover:text-white">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-heading font-semibold text-gray-800 mb-2 truncate">
                    {product.name}
                  </h3>
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
                    <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
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
                  <button className="w-full bg-pink-100 hover:bg-pink-500 text-pink-500 hover:text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/products"
            className="md:hidden mt-8 flex items-center justify-center gap-2 text-pink-500 hover:text-pink-600 font-semibold"
          >
            Lihat Semua Produk
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why BabyNest */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kenapa Pilih BabyNest?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan yang terbaik untuk si kecil dan ketenangan untuk Bunda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBabyNest.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-3xl text-center card-hover border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kata Para Bunda
            </h2>
            <p className="text-gray-600">
              50,000+ keluarga sudah mempercayakan BabyNest
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {displayedTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                      <Quote className="w-12 h-12 text-pink-200 mb-6" />
                      <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-heading font-bold text-gray-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Ibu dari bayi {testimonial.childAge}
                          </p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev - 1 + displayedTestimonials.length) % displayedTestimonials.length
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial((prev) => (prev + 1) % displayedTestimonials.length)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {displayedTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index ? 'bg-pink-500 w-8' : 'bg-pink-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-semibold"
            >
              Lihat Semua Testimoni
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-2 rounded-full mb-4">
              <Instagram className="w-5 h-5" />
              <span className="font-semibold">@babynest.id</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Follow Kami di Instagram
            </h2>
            <p className="text-gray-600">Dapatkan inspirasi OOTD si kecil setiap hari</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com/babynest.id"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex items-center gap-4 text-white text-sm">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-white" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"/>
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
