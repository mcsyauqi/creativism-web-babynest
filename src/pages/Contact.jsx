import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '0812-BABY-NEST',
      subtitle: 'Response < 1 jam',
      href: 'https://wa.me/62812BABYNEST',
      color: 'bg-green-100 text-green-600',
      hoverColor: 'hover:bg-green-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@babynest.id',
      subtitle: 'Response 1x24 jam',
      href: 'mailto:hello@babynest.id',
      color: 'bg-pink-100 text-pink-600',
      hoverColor: 'hover:bg-pink-500',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@babynest.id',
      subtitle: 'DM us anytime',
      href: 'https://instagram.com/babynest.id',
      color: 'bg-purple-100 text-purple-600',
      hoverColor: 'hover:bg-purple-500',
    },
  ];

  const subjects = [
    { value: '', label: 'Pilih subjek...' },
    { value: 'product', label: 'Tanya Produk' },
    { value: 'order', label: 'Tanya Pesanan' },
    { value: 'complaint', label: 'Komplain' },
    { value: 'partnership', label: 'Kerjasama' },
    { value: 'other', label: 'Lainnya' },
  ];

  return (
    <>
      <Helmet>
        <title>Hubungi Kami - BabyNest</title>
        <meta
          name="description"
          content="Hubungi tim BabyNest untuk pertanyaan, bantuan, atau kerjasama. Kami siap membantu via WhatsApp, Email, atau Instagram."
        />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Phone className="w-4 h-4" />
              Contact Us
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hubungi{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Kami
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ada pertanyaan? Tim BabyNest siap membantu Anda dengan sepenuh hati!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover text-center ${method.hoverColor} transition-all`}
              >
                <div
                  className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors`}
                >
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-800 group-hover:text-white mb-1">
                  {method.title}
                </h3>
                <p className="text-gray-800 font-semibold group-hover:text-white mb-1">
                  {method.value}
                </p>
                <p className="text-gray-500 text-sm group-hover:text-white/80">
                  {method.subtitle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
              <h2 className="font-heading font-bold text-2xl text-gray-800 mb-6">
                Kirim Pesan
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Pesan Anda berhasil dikirim! Kami akan segera merespons.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none transition-all bg-white"
                  >
                    {subjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-300 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div>
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-3xl p-8 md:p-10 text-white mb-6">
                <h2 className="font-heading font-bold text-2xl mb-6">
                  Informasi Kantor
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Alamat</h3>
                      <p className="text-white/90">
                        Jl. Cinta Kasih No. 123
                        <br />
                        Kebayoran Baru, Jakarta Selatan
                        <br />
                        DKI Jakarta 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Jam Operasional</h3>
                      <p className="text-white/90">
                        Senin - Jumat: 09:00 - 17:00
                        <br />
                        Sabtu: 09:00 - 14:00
                        <br />
                        Minggu & Libur Nasional: Tutup
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Untuk Return/Exchange</h3>
                      <p className="text-white/90">
                        Kirim paket return ke alamat kantor kami.
                        <br />
                        Pastikan menyertakan nota pembelian.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gray-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop"
                    alt="Map location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-semibold">BabyNest Headquarters</p>
                      <p className="text-sm text-white/80">Jakarta Selatan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-12 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            Butuh respons cepat? Chat langsung via WhatsApp!
          </p>
          <a
            href="https://wa.me/62812BABYNEST"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
