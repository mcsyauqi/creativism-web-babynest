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
  CheckCircle2,
  Baby
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
    },
    {
      icon: Shield,
      title: 'SNI & Hypoallergenic',
      description: 'Aman untuk kulit sensitif, lulus uji dermatologis',
    },
    {
      icon: Sparkles,
      title: 'Desain Praktis',
      description: 'Kancing depan, bukaan lebar, mudah ganti popok',
    },
    {
      icon: Wallet,
      title: 'Harga Terjangkau',
      description: 'Kualitas premium tanpa menguras kantong',
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
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-cream">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-brown-light/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-beige/50 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-brown-light/20 text-brown-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Baby className="w-4 h-4" />
                New Collection 2024
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-dark mb-6 leading-tight">
                Pakaian Bayi yang{' '}
                <span className="text-gradient">Dicintai</span>{' '}
                Kulit Sensitif
              </h1>

              <p className="text-lg text-cocoa/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                100% katun organik, SNI certified, hypoallergenic.{' '}
                <span className="font-semibold text-brown-primary">
                  Karena si kecil layak yang terbaik.
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link
                  to="/products"
                  className="btn-shine bg-gradient-brown text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-brown-primary/30 hover:shadow-xl hover:shadow-brown-primary/40 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Lihat Koleksi
                </Link>
                <Link
                  to="/products"
                  className="bg-white text-brown-primary border-2 border-brown-light px-8 py-4 rounded-full font-semibold text-lg hover:bg-brown-light/10 transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Promo Hari Ini
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-beige"
                  >
                    <badge.icon className="w-5 h-5 text-brown-primary" />
                    <span className="text-sm font-medium text-brown-dark">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Main Image */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-brown-primary/20">
                  <img
                    src="https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&h=700&fit=crop"
                    alt="Happy baby in cute outfit"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating Card - Top Left */}
                <div className="absolute -top-4 -left-4 lg:top-8 lg:-left-8 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce-soft">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-brown-dark text-sm">GOTS Certified</p>
                      <p className="text-xs text-tan">Organic Cotton</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card - Bottom Right */}
                <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce-soft" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                      <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40&h=40&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-brown-dark">50K+</p>
                      <p className="text-xs text-tan">Happy Families</p>
                    </div>
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
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-dark mb-4">
              Temukan yang Tepat untuk Si Kecil
            </h2>
            <p className="text-tan max-w-2xl mx-auto">
              Pilih kategori sesuai usia dan kebutuhan bayi Anda
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group"
              >
                <div className="bg-cream-dark rounded-3xl p-5 h-full card-hover border border-beige/50">
                  <div className="aspect-square mb-4 overflow-hidden rounded-2xl bg-white">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brown-dark mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-brown-primary font-medium mb-1">{category.age}</p>
                  <p className="text-xs text-tan">{category.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-gradient-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-14 gap-4">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-dark mb-2">
                Best Sellers
              </h2>
              <p className="text-tan">Produk favorit para Bunda</p>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-2 text-brown-primary hover:text-brown-dark font-semibold transition-colors"
            >
              Lihat Semua
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-beige/50 card-hover">
                <div className="relative aspect-square overflow-hidden bg-cream-dark">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold ${
                        product.badge === 'Best Seller'
                          ? 'bg-brown-primary text-white'
                          : product.badge === 'Sale'
                          ? 'bg-red-500 text-white'
                          : 'bg-cocoa text-white'
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md hover:bg-brown-primary hover:text-white">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-brown-dark mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-tan ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-lg text-brown-primary">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-tan line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <button className="w-full bg-cream-dark hover:bg-brown-primary text-brown-primary hover:text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 border border-beige hover:border-brown-primary">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BabyNest */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-dark mb-4">
              Kenapa Pilih BabyNest?
            </h2>
            <p className="text-tan max-w-2xl mx-auto">
              Kami berkomitmen memberikan yang terbaik untuk si kecil dan ketenangan untuk Bunda
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBabyNest.map((item, index) => (
              <div
                key={index}
                className="bg-cream rounded-3xl p-8 text-center card-hover border border-beige/50"
              >
                <div className="w-16 h-16 bg-brown-light/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-brown-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brown-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-tan text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-dark mb-4">
              Kata Para Bunda
            </h2>
            <p className="text-tan">
              50,000+ keluarga sudah mempercayakan BabyNest
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {displayedTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                      <Quote className="w-12 h-12 text-brown-light/50 mb-6" />
                      <p className="text-lg md:text-xl text-brown-dark mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-cream-dark"
                        />
                        <div>
                          <h4 className="font-heading font-bold text-brown-dark">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-tan">
                            Ibu dari bayi {testimonial.childAge}
                          </p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-amber-400 fill-amber-400"
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

            {/* Navigation */}
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev - 1 + displayedTestimonials.length) % displayedTestimonials.length
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-cream transition-colors border border-beige"
            >
              <ChevronLeft className="w-6 h-6 text-brown-dark" />
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial((prev) => (prev + 1) % displayedTestimonials.length)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-cream transition-colors border border-beige"
            >
              <ChevronRight className="w-6 h-6 text-brown-dark" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {displayedTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentTestimonial === index ? 'bg-brown-primary w-8' : 'bg-brown-light/40 w-2'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-brown-primary hover:text-brown-dark font-semibold transition-colors"
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
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-brown text-white px-6 py-2.5 rounded-full mb-4">
              <Instagram className="w-5 h-5" />
              <span className="font-semibold">@babynest.id</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-dark mb-4">
              Follow Kami di Instagram
            </h2>
            <p className="text-tan">Dapatkan inspirasi OOTD si kecil setiap hari</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
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
                <div className="absolute inset-0 bg-brown-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-4 text-white text-sm">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-white" />
                      {post.likes}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-brown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Dapatkan Tips Parenting & Promo Eksklusif
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Subscribe newsletter kami dan dapatkan diskon 10% untuk pembelian pertama!
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-6 py-4 rounded-full text-brown-dark placeholder-tan focus:outline-none focus:ring-2 focus:ring-brown-light"
            />
            <button
              type="submit"
              className="bg-white text-brown-primary hover:bg-cream px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
