import { Helmet } from 'react-helmet-async';
import {
  Ruler,
  Circle,
  MoveHorizontal,
  ArrowUp,
  Baby,
  Sparkles,
  RefreshCw,
  HelpCircle,
  CheckCircle
} from 'lucide-react';
import { sizeChart, measurementTips, sizingTips } from '../data/sizeGuide';

const SizeGuide = () => {
  const iconMap = {
    Ruler,
    Circle,
    MoveHorizontal,
    ArrowUp,
    Baby,
    Sparkles,
    RefreshCw,
  };

  return (
    <>
      <Helmet>
        <title>Panduan Ukuran - BabyNest</title>
        <meta
          name="description"
          content="Panduan lengkap untuk memilih ukuran pakaian bayi BabyNest yang tepat. Temukan ukuran yang sempurna untuk si kecil."
        />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Ruler className="w-4 h-4" />
              Size Guide
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Panduan{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Ukuran
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Pilih ukuran yang tepat untuk si kecil. Gunakan panduan ini untuk memastikan
              kenyamanan maksimal.
            </p>
          </div>
        </div>
      </section>

      {/* Size Chart Table */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-6 text-center">
              Tabel Ukuran BabyNest
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    <th className="px-6 py-4 rounded-tl-2xl text-left font-semibold">Ukuran</th>
                    <th className="px-6 py-4 text-left font-semibold">Usia</th>
                    <th className="px-6 py-4 text-left font-semibold">Berat Badan</th>
                    <th className="px-6 py-4 text-left font-semibold">Tinggi Badan</th>
                    <th className="px-6 py-4 rounded-tr-2xl text-left font-semibold">Lingkar Dada</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-white' : 'bg-pink-50/50'
                      } ${index === sizeChart.length - 1 ? 'rounded-b-2xl' : ''}`}
                    >
                      <td className={`px-6 py-4 font-bold text-pink-500 ${index === sizeChart.length - 1 ? 'rounded-bl-2xl' : ''}`}>
                        {row.size}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{row.age}</td>
                      <td className="px-6 py-4 text-gray-600">{row.weight}</td>
                      <td className="px-6 py-4 text-gray-600">{row.height}</td>
                      <td className={`px-6 py-4 text-gray-600 ${index === sizeChart.length - 1 ? 'rounded-br-2xl' : ''}`}>
                        {row.chest}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {sizeChart.map((row, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-pink-500">{row.size}</span>
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                      {row.age}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-gray-500 text-xs mb-1">Berat</p>
                      <p className="font-semibold text-gray-700">{row.weight}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-gray-500 text-xs mb-1">Tinggi</p>
                      <p className="font-semibold text-gray-700">{row.height}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-gray-500 text-xs mb-1">Dada</p>
                      <p className="font-semibold text-gray-700">{row.chest}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Measure */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-4">
              Cara Mengukur Bayi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ikuti langkah-langkah ini untuk mendapatkan ukuran yang akurat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {measurementTips.map((tip, index) => {
              const Icon = iconMap[tip.icon];
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg card-hover"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-gray-800">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              );
            })}
          </div>

          {/* Illustration */}
          <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&h=400&fit=crop"
                  alt="How to measure baby"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-gray-800 mb-6">
                  Tips Mengukur yang Benar
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Ukur saat bayi dalam kondisi rileks, tidak menangis atau meronta
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Gunakan pita pengukur yang lembut, bukan penggaris kaku
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Untuk tinggi badan, ukur saat bayi terlentang di permukaan rata
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Pastikan kaki bayi lurus saat mengukur tinggi badan
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizing Tips */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Pro Tips
            </div>
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-4">
              Tips Memilih Ukuran
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Panduan tambahan untuk memastikan si kecil nyaman dengan pilihannya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sizingTips.map((tip, index) => {
              const Icon = iconMap[tip.icon];
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm card-hover"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Masih Bingung dengan Ukuran?
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Tim customer service kami siap membantu! Hubungi kami via WhatsApp untuk konsultasi gratis.
            </p>
            <a
              href="https://wa.me/62812BABYNEST"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SizeGuide;
