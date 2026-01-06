import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, MessageCircle, Baby } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Produk', path: '/products' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Tentang', path: '/about' },
    { name: 'Testimonial', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Kontak', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-soft to-lavender-soft rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Baby className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-heading text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                BabyNest
              </span>
              <p className="text-[10px] text-gray-500 -mt-1 hidden sm:block">
                Lembut untuk Si Kecil
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-pink-soft text-white'
                    : 'text-gray-600 hover:bg-pink-100 hover:text-pink-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-pink-100 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-pink-100 transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-soft text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <a
              href="https://wa.me/62812BABYNEST"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/62812BABYNEST"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-green-500 text-white"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-pink-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-pink-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? 'bg-pink-soft text-white'
                  : 'text-gray-600 hover:bg-pink-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-100 text-gray-600">
              <Search className="w-5 h-5" />
              <span>Cari</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-pink-100 text-pink-600 relative">
              <ShoppingBag className="w-5 h-5" />
              <span>Keranjang</span>
              <span className="absolute top-1 right-4 w-5 h-5 bg-pink-soft text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
