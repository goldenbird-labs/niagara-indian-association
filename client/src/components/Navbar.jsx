import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',       href: '#about'       },
  { label: 'Programs',    href: '#programs'    },
  { label: 'Benefits',    href: '#benefits'    },
  { label: 'Sponsorship', href: '#sponsorship' },
  { label: 'Contact',     href: '#footer'      },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1A08]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="tricolor-bar" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/nia-logo.png"
              alt="NIA Logo"
              className="w-10 h-10 object-contain drop-shadow-md"
            />
            <div className="text-left hidden sm:block">
              <div className="text-white font-display font-bold text-sm leading-tight tracking-wide">
                Niagara Indian Association
              </div>
              <div className="text-white/50 font-body text-[9px] leading-tight tracking-widest uppercase">
                One Community · One Vision · One Niagara
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-white/75 hover:text-white font-body text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#join')}
              className="ml-2 px-5 py-2 bg-saffron hover:bg-saffron-700 text-white font-body font-semibold text-sm rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Join NIA
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1A08]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-white/80 hover:text-white font-body text-sm font-medium py-2 text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#join')}
              className="mt-2 px-5 py-2.5 bg-saffron text-white font-body font-semibold text-sm rounded-full"
            >
              Join NIA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
