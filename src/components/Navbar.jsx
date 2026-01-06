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
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-brown-primary/5'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-brown rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
              <Baby className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-heading text-xl md:text-2xl font-bold text-gradient">
                BabyNest
              </span>
              <p className="text-[10px] text-tan -mt-1 hidden sm:block">
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
                    ? 'bg-brown-primary text-white'
                    : 'text-brown-dark hover:bg-brown-light/20 hover:text-brown-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2.5 rounded-full hover:bg-brown-light/20 transition-colors">
              <Search className="w-5 h-5 text-brown-dark" />
            </button>
            <button className="p-2.5 rounded-full hover:bg-brown-light/20 transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-brown-dark" />
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brown-primary text-white text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
            <a
              href="https://wa.me/62812BABYNEST"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-md"
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
              className="p-2.5 rounded-full bg-green-600 text-white shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full hover:bg-brown-light/20 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-brown-dark" />
              ) : (
                <Menu className="w-6 h-6 text-brown-dark" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-beige px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? 'bg-brown-primary text-white'
                  : 'text-brown-dark hover:bg-brown-light/20'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-cream-dark text-brown-dark border border-beige">
              <Search className="w-5 h-5" />
              <span>Cari</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-brown-light/20 text-brown-primary relative border border-brown-light/30">
              <ShoppingBag className="w-5 h-5" />
              <span>Keranjang</span>
              <span className="absolute top-1 right-4 w-5 h-5 bg-brown-primary text-white text-xs rounded-full flex items-center justify-center font-bold">
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
