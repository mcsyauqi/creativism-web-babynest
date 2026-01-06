import { Helmet } from 'react-helmet-async';
import { Star, Quote, Users, Repeat, Award } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Families' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
    { icon: Repeat, value: '98%', label: 'Repeat Customers' },
  ];

  return (
    <>
      <Helmet>
        <title>Testimonial Pelanggan - BabyNest</title>
        <meta
          name="description"
          content="Baca pengalaman para ibu Indonesia yang sudah mempercayakan BabyNest untuk pakaian bayi tercinta mereka."
        />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Testimonials
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Kata Para{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Bunda
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              50,000+ keluarga Indonesia sudah mempercayakan BabyNest untuk si kecil tercinta
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 md:p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />
                </div>
                <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-3xl p-6 md:p-8 shadow-lg card-hover ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <Quote className="w-10 h-10 text-pink-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-pink-100"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Ibu dari bayi {testimonial.childAge}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Produk: <span className="text-pink-500 font-medium">{testimonial.product}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-80 h-80 border-[40px] border-white rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 border-[30px] border-white rounded-full"></div>
            </div>
            <div className="relative z-10">
              <Quote className="w-16 h-16 text-white/30 mb-6" />
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                "Sebagai ibu baru, saya sangat khawatir dengan kulit sensitif anak saya.
                Setelah mencoba BabyNest, semua kekhawatiran hilang. Bahannya benar-benar
                lembut dan tidak membuat ruam. Sekarang saya selalu beli di BabyNest!"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Featured reviewer"
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-white/30"
                />
                <div>
                  <h4 className="font-heading font-bold text-xl">Anisa Putri</h4>
                  <p className="text-white/80">Pelanggan sejak 2021 • 15+ pesanan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-800 mb-4">
            Jadilah Bagian dari Keluarga BabyNest
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan 50,000+ keluarga Indonesia yang sudah mempercayakan BabyNest
            untuk kenyamanan si kecil.
          </p>
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-300 transition-all"
          >
            Mulai Belanja
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
