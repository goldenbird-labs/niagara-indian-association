import { ChevronDown, Calendar } from 'lucide-react';

const SpinningChakra = ({ size = 200 }) => (
  <svg
    width={size} height={size} viewBox="0 0 200 200" fill="none"
    className="animate-spin-slow absolute inset-0 w-full h-full"
  >
    <circle cx="100" cy="100" r="94" stroke="#D4A017" strokeWidth="2" strokeOpacity="0.6" />
    <circle cx="100" cy="100" r="86" stroke="#D4A017" strokeWidth="0.5" strokeOpacity="0.3" />
    <circle cx="100" cy="100" r="16" fill="none" stroke="#D4A017" strokeWidth="2" strokeOpacity="0.6" />
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      const x1 = 100 + 19 * Math.cos(angle);
      const y1 = 100 + 19 * Math.sin(angle);
      const x2 = 100 + 90 * Math.cos(angle);
      const y2 = 100 + 90 * Math.sin(angle);
      return (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#D4A017" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.55" />
      );
    })}
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = ((i * 15 + 7.5) * Math.PI) / 180;
      const cx = 100 + 90 * Math.cos(angle);
      const cy = 100 + 90 * Math.sin(angle);
      return <circle key={i} cx={cx} cy={cy} r="3" fill="#D4A017" fillOpacity="0.5" />;
    })}
  </svg>
);

const MandalaBg = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
    viewBox="0 0 800 800"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
  >
    {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((r, i) => (
      <circle key={i} cx="400" cy="400" r={r} stroke="#FF6B2B" strokeWidth="1" />
    ))}
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={400 + 40 * Math.cos(angle)} y1={400 + 40 * Math.sin(angle)}
          x2={400 + 360 * Math.cos(angle)} y2={400 + 360 * Math.sin(angle)}
          stroke="#D4A017" strokeWidth="0.5"
        />
      );
    })}
  </svg>
);

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D1A08 0%, #0F2010 40%, #0A1C12 70%, #0D1A08 100%)' }}
    >
      <MandalaBg />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-saffron/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-india-green/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-saffron/5 blur-[80px] pointer-events-none" />

      {/* Founding event badge */}
      <div className="relative z-10 mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-body font-medium tracking-wider">
        <Calendar size={12} />
        <span>Inaugural Celebration — July 18, 2026</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">

        {/* Logo inside spinning Ashoka Chakra ring */}
        <div className="relative mb-8 w-52 h-52 sm:w-60 sm:h-60 mx-auto flex items-center justify-center">
          {/* Outer ambient glow */}
          <div className="absolute inset-0 rounded-full bg-gold/10 blur-2xl pointer-events-none" />
          {/* Spinning chakra ring */}
          <SpinningChakra size={200} />
          {/* Actual logo, centered and static */}
          <img
            src="/nia-logo.png"
            alt="Niagara Indian Association Logo"
            className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-[0_0_24px_rgba(255,107,43,0.4)]"
          />
        </div>

        {/* Title */}
        <h1 className="font-display text-white leading-none mb-4">
          <span className="block text-5xl sm:text-7xl lg:text-8xl font-black text-saffron tracking-tight">
            NIAGARA
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-1">
            INDIAN
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-1">
            ASSOCIATION
          </span>
        </h1>

        {/* Tricolor divider */}
        <div className="tricolor-bar-thick w-64 mx-auto my-7 rounded-full opacity-80" />

        {/* Taglines */}
        <p className="font-body text-white/60 text-sm sm:text-base tracking-[0.2em] uppercase mb-2">
          One Community &bull; One Vision &bull; One Niagara
        </p>
        <p className="font-display italic text-gold/80 text-lg sm:text-xl mt-1">
          Together We Grow, Together We Thrive
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-saffron hover:bg-saffron-700 text-white font-body font-semibold text-base rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-orange-600/40 hover:-translate-y-0.5"
          >
            Join NIA Today
          </button>
          <button
            onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 border border-white/30 hover:border-gold/60 text-white hover:text-gold font-body font-semibold text-base rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Explore Programs
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 mt-14 pt-8 border-t border-white/10 w-full">
          {[
            { label: 'Community', value: 'Niagara Region' },
            { label: 'Vision',    value: 'One Platform'    },
            { label: 'Goal',      value: 'Stronger Together'},
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-saffron font-display font-bold text-lg">{stat.value}</div>
              <div className="text-white/40 font-body text-xs tracking-wider uppercase mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold transition-colors animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 tricolor-bar opacity-60" />
    </section>
  );
}
