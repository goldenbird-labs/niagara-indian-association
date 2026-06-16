import { Star, Award, Gem, Layers, CircleDot, Minus } from 'lucide-react';

const tiers = [
  {
    level: 'Title Sponsor',
    amount: '$5,000',
    Icon: Gem,
    iconStyle: 'text-violet-300',
    iconBg: 'bg-violet-500/30',
    gradient: 'from-violet-600/20 to-purple-700/10',
    border: 'border-violet-500/30',
    badge: 'bg-violet-900/50 text-violet-300',
    featured: true,
    benefits: [
      'Main stage naming rights',
      'Keynote speaking opportunity',
      'Premium booth placement',
      'Logo on all event materials',
      'Full social media campaign',
      'Recognition in community magazine',
    ],
  },
  {
    level: 'Diamond Sponsor',
    amount: '$2,500',
    Icon: Layers,
    iconStyle: 'text-sky-300',
    iconBg: 'bg-sky-500/20',
    gradient: 'from-sky-500/10 to-cyan-600/5',
    border: 'border-sky-500/20',
    badge: 'bg-sky-900/40 text-sky-300',
    featured: false,
    benefits: [
      'Large logo display',
      'Booth opportunity',
      'Social media recognition',
      'Logo on event materials',
      'Name in program guide',
    ],
  },
  {
    level: 'Gold Sponsor',
    amount: '$1,000',
    Icon: Star,
    iconStyle: 'text-amber-300',
    iconBg: 'bg-amber-500/20',
    gradient: 'from-amber-500/10 to-yellow-600/5',
    border: 'border-amber-500/20',
    badge: 'bg-amber-900/40 text-amber-300',
    featured: false,
    benefits: [
      'Banner display at venue',
      'Stage recognition during event',
      'Social media shoutout',
      'Logo on sponsor board',
    ],
  },
  {
    level: 'Silver Sponsor',
    amount: '$500',
    Icon: CircleDot,
    iconStyle: 'text-slate-300',
    iconBg: 'bg-slate-500/20',
    gradient: 'from-slate-500/10 to-gray-600/5',
    border: 'border-slate-500/20',
    badge: 'bg-slate-800/60 text-slate-300',
    featured: false,
    benefits: [
      'Website recognition',
      'Social media recognition',
      'Logo on sponsor board',
    ],
  },
  {
    level: 'Bronze Sponsor',
    amount: '$250',
    Icon: Minus,
    iconStyle: 'text-orange-400',
    iconBg: 'bg-orange-700/20',
    gradient: 'from-orange-700/10 to-amber-800/5',
    border: 'border-orange-700/20',
    badge: 'bg-orange-900/40 text-orange-300',
    featured: false,
    benefits: [
      'Logo on sponsor board',
      'Social media mention',
    ],
  },
];

export default function Sponsorship() {
  return (
    <section
      id="sponsorship"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D1A08 0%, #0A1005 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4A017 0px, #D4A017 1px, transparent 1px, transparent 40px)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1 rounded-full bg-gold/15 text-gold font-body text-xs font-semibold tracking-widest uppercase">
            Be a Sponsor
          </span>
        </div>
        <div className="text-center mb-3">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Sponsorship Opportunities
          </h2>
        </div>
        <p className="text-center font-body text-white/50 text-base mb-12 max-w-xl mx-auto">
          Support the NIA Inauguration & Founding Day Celebration on{' '}
          <span className="text-gold font-semibold">July 18, 2026</span>. Your sponsorship helps build a stronger Indian community in Niagara.
        </p>

        {/* Featured tier */}
        {tiers.filter(t => t.featured).map((tier) => (
          <div
            key={tier.level}
            className={`mb-8 rounded-2xl border ${tier.border} overflow-hidden bg-gradient-to-br ${tier.gradient}`}
          >
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${tier.iconBg} flex items-center justify-center`}>
                <tier.Icon size={24} className={tier.iconStyle} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-display font-bold text-white text-xl">{tier.level}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${tier.badge}`}>
                    Top Tier
                  </span>
                </div>
                <div className="font-display text-3xl font-black text-gold mb-4">{tier.amount}</div>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {tier.benefits.map((b, i) => (
                    <span key={i} className="flex items-center gap-1.5 font-body text-white/60 text-xs">
                      <Star size={9} className="text-gold fill-gold flex-shrink-0" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="mailto:niagaraindians@gmail.com?subject=Title Sponsorship Inquiry"
                className="flex-shrink-0 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-body font-semibold text-sm rounded-full transition-all hover:shadow-lg hover:shadow-violet-600/30"
              >
                Contact Us
              </a>
            </div>
          </div>
        ))}

        {/* Other tiers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.filter(t => !t.featured).map((tier) => (
            <div
              key={tier.level}
              className={`card-hover rounded-2xl border ${tier.border} p-6 flex flex-col gap-4 bg-gradient-to-br ${tier.gradient}`}
            >
              <div className={`w-11 h-11 rounded-xl ${tier.iconBg} flex items-center justify-center`}>
                <tier.Icon size={20} className={tier.iconStyle} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">{tier.level}</h3>
                <div className="font-display text-2xl font-black text-gold mt-1">{tier.amount}</div>
              </div>
              <ul className="flex flex-col gap-2 flex-1">
                {tier.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-white/55 text-xs">
                    <Award size={11} className="text-gold/70 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:niagaraindians@gmail.com?subject=${tier.level} Inquiry`}
                className="mt-1 block text-center py-2 rounded-full border border-white/15 hover:border-gold/40 text-white/50 hover:text-gold font-body text-xs font-medium transition-colors"
              >
                Inquire
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-white/30 text-sm">
            For custom sponsorship packages, contact{' '}
            <a href="mailto:niagaraindians@gmail.com" className="text-gold hover:underline">
              niagaraindians@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
