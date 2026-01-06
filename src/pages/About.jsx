import { Helmet } from 'react-helmet-async';
import {
  Heart,
  Shield,
  Sparkles,
  Target,
  Users,
  Award,
  CheckCircle,
  Clock,
  RefreshCcw
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Setiap produk melalui quality control ketat dan sudah tersertifikasi SNI',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Heart,
      title: 'Comfort Always',
      description: 'Bahan lembut yang tidak bikin gerah, nyaman untuk kulit sensitif bayi',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: Sparkles,
      title: 'Practical Design',
      description: 'Dibuat oleh ibu, untuk ibu. Setiap detail dirancang untuk kemudahan',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  const promises = [
    {
      icon: CheckCircle,
      title: '100% Satisfaction Guarantee',
      description: 'Tidak puas? Kami akan memberikan solusi terbaik untuk Anda',
    },
    {
      icon: RefreshCcw,
      title: 'Easy Return 7 Hari',
      description: 'Return atau tukar produk dengan mudah dalam 7 hari',
    },
    {
      icon: Clock,
      title: 'Responsive Customer Service',
      description: 'Tim CS kami siap membantu via WhatsApp, response < 1 jam',
    },
  ];

  const team = [
    {
      name: 'Sarah Wijaya',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      quote: 'Saya memulai BabyNest karena kesulitan mencari baju bayi berkualitas untuk anak saya.',
    },
    {
      name: 'Maya Indah',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      quote: 'Setiap produk kami adalah hasil riset dan feedback dari ribuan ibu Indonesia.',
    },
    {
      name: 'Dewi Kusuma',
      role: 'Customer Success',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop',
      quote: 'Kepuasan pelanggan adalah prioritas utama kami di BabyNest.',
    },
  ];

  const milestones = [
    { year: '2020', event: 'BabyNest didirikan di Jakarta' },
    { year: '2021', event: 'Melayani 10,000 keluarga pertama' },
    { year: '2022', event: 'Mendapat sertifikasi GOTS & SNI' },
    { year: '2023', event: 'Ekspansi ke seluruh Indonesia' },
    { year: '2024', event: '50,000+ keluarga terlayani' },
  ];

  return (
    <>
      <Helmet>
        <title>Tentang Kami - BabyNest</title>
        <meta
          name="description"
          content="Cerita di balik BabyNest - brand pakaian bayi premium Indonesia yang berkomitmen pada keamanan dan kenyamanan kulit sensitif bayi."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-cream-white"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Our Story
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Cerita di Balik{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  BabyNest
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Berawal dari keresahan seorang ibu yang kesulitan mencari pakaian bayi berkualitas dengan harga terjangkau di Indonesia.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=500&fit=crop"
                alt="BabyNest Team"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">50K+</p>
                    <p className="text-sm text-gray-500">Happy Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              <span className="font-bold text-pink-500">Tahun 2020</span>, Sarah Wijaya, seorang ibu muda, merasa frustasi.
              Bayinya yang berusia 3 bulan memiliki kulit yang sangat sensitif. Hampir setiap baju bayi yang dibelinya
              membuat si kecil ruam dan rewel.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Setelah berbulan-bulan mencari, ia tidak menemukan baju bayi yang benar-benar lembut, aman,
              dan dengan desain yang praktis untuk ibu. Baju bayi premium kebanyakan impor dengan harga selangit.
              Yang lokal seringkali menggunakan bahan yang kasar atau desain yang tidak praktis.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <span className="font-bold text-purple-500">"Kenapa tidak buat sendiri?"</span> pikir Sarah.
              Dengan background di industri tekstil dan semangat seorang ibu, ia mulai merancang baju bayi impiannya:
              100% katun organik, hypoallergenic, dengan desain yang memudahkan ganti popok.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dari garasi rumah dengan 50 pieces produksi pertama, kini BabyNest sudah melayani lebih dari
              <span className="font-bold text-pink-500"> 50,000 keluarga Indonesia</span>.
              Misi kami tetap sama: memberikan yang terbaik untuk si kecil, dengan harga yang terjangkau untuk semua ibu Indonesia.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold text-gray-800 text-center mb-10">
              Perjalanan Kami
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 to-purple-300"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    }`}
                  >
                    <div className="bg-white p-4 rounded-xl shadow-lg inline-block">
                      <span className="font-heading font-bold text-pink-500 text-lg">
                        {milestone.year}
                      </span>
                      <p className="text-gray-600 text-sm mt-1">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Our Values
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nilai yang Kami Pegang
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tiga prinsip utama yang menjadi fondasi setiap keputusan di BabyNest
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg card-hover text-center"
              >
                <div
                  className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Janji Kami untuk Anda
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Komitmen BabyNest untuk setiap pelanggan
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {promises.map((promise, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <promise.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {promise.title}
                  </h3>
                  <p className="text-white/80 text-sm">{promise.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tim di Balik BabyNest
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Orang-orang yang berdedikasi untuk memberikan yang terbaik untuk si kecil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-pink-500 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm italic">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
