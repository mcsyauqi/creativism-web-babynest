import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { HelpCircle, ChevronDown, MessageCircle, Search } from 'lucide-react';
import { faqData } from '../data/faq';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allQuestions = faqData.flatMap((category) =>
    category.questions.map((q) => ({ ...q, category: category.category }))
  );

  const filteredQuestions = allQuestions.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...faqData.map((c) => c.category)];

  return (
    <>
      <Helmet>
        <title>FAQ - Pertanyaan Umum - BabyNest</title>
        <meta
          name="description"
          content="Temukan jawaban untuk pertanyaan umum tentang produk, ukuran, pemesanan, dan pembayaran di BabyNest."
        />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Pertanyaan{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Umum
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-pink-100'
                }`}
              >
                {category === 'all' ? 'Semua' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory === 'all' ? (
            // Grouped by category
            faqData.map((category) => {
              const categoryQuestions = category.questions.filter(
                (q) =>
                  q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  q.answer.toLowerCase().includes(searchQuery.toLowerCase())
              );

              if (categoryQuestions.length === 0) return null;

              return (
                <div key={category.category} className="mb-10">
                  <h2 className="font-heading font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {categoryQuestions.map((item) => (
                      <div
                        key={item.id}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="font-semibold text-gray-800 pr-4">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-pink-500 flex-shrink-0 transition-transform ${
                              openItems[item.id] ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openItems[item.id] ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Filtered questions
            <div className="space-y-3">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="font-semibold text-gray-800 pr-4">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-pink-500 flex-shrink-0 transition-transform ${
                          openItems[item.id] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openItems[item.id] ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Tidak ada pertanyaan yang cocok dengan pencarian Anda
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Masih Punya Pertanyaan?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Tim customer service kami siap membantu Anda. Hubungi kami via WhatsApp
              dan dapatkan respons dalam waktu kurang dari 1 jam!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/62812BABYNEST"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat WhatsApp
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
