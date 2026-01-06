import { Link } from 'react-router-dom';
import {
  Baby,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  Send
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Produk', path: '/products' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'FAQ', path: '/faq' },
  ];

  const helpLinks = [
    { name: 'Kontak Kami', path: '/contact' },
    { name: 'Cara Order', path: '/faq' },
    { name: 'Return Policy', path: '/faq' },
    { name: 'Testimonial', path: '/testimonials' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/babynest.id' },
    { name: 'TikTok', icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ), url: 'https://tiktok.com/@babynest.id' },
    { name: 'Shopee', icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ), url: 'https://shopee.co.id/babynest' },
    { name: 'Tokopedia', icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ), url: 'https://tokopedia.com/babynest' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-pink-50">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-pink-soft to-lavender-soft rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-20 h-20 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 border-4 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rounded-full"></div>
          </div>
          <div className="relative z-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              Dapatkan Tips Parenting & Promo Eksklusif
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Subscribe newsletter kami dan dapatkan diskon 10% untuk pembelian pertama!
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-pink-500 hover:bg-pink-100 px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-soft to-lavender-soft rounded-full flex items-center justify-center">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                BabyNest
              </span>
            </Link>
            <p className="text-gray-600 mb-4 text-sm">
              Lembut untuk Si Kecil, Tenang untuk Bunda. Pakaian bayi premium dengan 100% katun organik untuk kulit sensitif.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-100 hover:bg-pink-soft hover:text-white rounded-full flex items-center justify-center text-pink-500 transition-all"
                  title={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-heading font-bold text-gray-800 mb-4">Bantuan</h4>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-gray-800 mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone className="w-4 h-4 text-pink-500" />
                <span>0812-BABY-NEST</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Mail className="w-4 h-4 text-pink-500" />
                <span>hello@babynest.id</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-pink-500 mt-0.5" />
                <span>Jl. Cinta Kasih No. 123<br />Jakarta Selatan, 12345</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2024 BabyNest. All rights reserved. Created with{' '}
              <Heart className="w-4 h-4 inline text-pink-500" /> by{' '}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                Creativism
              </a>
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link to="/faq" className="hover:text-pink-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/faq" className="hover:text-pink-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
