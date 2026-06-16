import { Phone, Mail, Globe, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'About NIA', href: '#about' },
  { label: 'Programs & Events', href: '#programs' },
  { label: 'Member Benefits', href: '#benefits' },
  { label: 'Become a Member', href: '#join' },
  { label: 'Sponsorship', href: '#sponsorship' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      style={{ background: 'linear-gradient(180deg, #0A1005 0%, #060C04 100%)' }}
    >
      <div className="tricolor-bar" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/nia-logo.png"
                alt="NIA Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">
                  Niagara Indian Association
                </div>
                <div className="font-body text-white/40 text-[10px] tracking-widest uppercase leading-tight mt-0.5">
                  One Community · One Vision · One Niagara
                </div>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-5">
              Bringing together Indian families, professionals, businesses, and cultural organizations across the Niagara Region.
            </p>
            <div className="tricolor-bar-thick w-16 rounded-full mb-5" />
            <p className="font-display italic text-white/40 text-sm">
              "Together We Grow, Together We Thrive"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-white/50 hover:text-saffron text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:9053474347"
                  className="flex items-center gap-3 text-white/50 hover:text-saffron transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-saffron/10 flex items-center justify-center transition-colors">
                    <Phone size={14} className="text-saffron" />
                  </div>
                  <span className="font-body text-sm">905-347-4347</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:niagaraindians@gmail.com"
                  className="flex items-center gap-3 text-white/50 hover:text-saffron transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-saffron/10 flex items-center justify-center transition-colors">
                    <Mail size={14} className="text-saffron" />
                  </div>
                  <span className="font-body text-sm">niagaraindians@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.niagaraindianassociation.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-saffron transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-saffron/10 flex items-center justify-center transition-colors">
                    <Globe size={14} className="text-saffron" />
                  </div>
                  <span className="font-body text-sm">niagaraindianassociation.ca</span>
                </a>
              </li>
            </ul>

            {/* Upcoming event highlight */}
            <div className="mt-6 p-4 rounded-xl border border-gold/20 bg-gold/5">
              <p className="font-body text-gold text-xs font-semibold uppercase tracking-wider mb-1">Inaugural Event</p>
              <p className="font-display font-bold text-white text-sm">July 18, 2026 — Saturday</p>
              <p className="font-body text-white/40 text-xs mt-0.5">NIA Inauguration & Founding Day Celebration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs">
            © 2025 Niagara Indian Association. All rights reserved.
          </p>
          <p className="font-body text-white/30 text-xs flex items-center gap-1">
            Made with <Heart size={11} className="text-saffron fill-saffron" /> for the NIA Community
          </p>
        </div>
      </div>
    </footer>
  );
}
