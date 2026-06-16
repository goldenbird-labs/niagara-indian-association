import { CheckCircle2, CalendarDays, Handshake, MapPin, Users, TrendingUp, HeartHandshake, Medal, BookMarked, Palette, Sprout } from 'lucide-react';

const benefits = [
  { Icon: CalendarDays,   text: 'Access to community events and programs' },
  { Icon: Handshake,      text: 'Networking with businesses and professionals' },
  { Icon: MapPin,         text: 'Newcomer support and local resource connections' },
  { Icon: Users,          text: 'Youth, family, and senior-focused programs' },
  { Icon: TrendingUp,     text: 'Business promotion and networking opportunities' },
  { Icon: HeartHandshake, text: 'Volunteer and leadership opportunities' },
  { Icon: Medal,          text: 'Community recognition and awards' },
  { Icon: BookMarked,     text: 'Access to trusted local contacts and service providers' },
  { Icon: Palette,        text: 'Participation in cultural, social, and educational activities' },
  { Icon: Sprout,         text: 'Opportunity to help shape the future of the Indian community in Niagara' },
];

export default function MemberBenefits() {
  return (
    <section
      id="benefits"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D1A08 0%, #122B0C 50%, #0F2010 100%)' }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-saffron/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-india-green/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1 rounded-full bg-saffron/15 text-saffron font-body text-xs font-semibold tracking-widest uppercase">
            Membership
          </span>
        </div>
        <div className="text-center mb-3">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Member Benefits
          </h2>
        </div>
        <p className="text-center font-body text-white/50 text-base mb-12 max-w-lg mx-auto">
          As a member of NIA, you gain access to a powerful network and a range of exclusive benefits.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/5 hover:bg-white/8 border border-white/8 hover:border-saffron/25 rounded-xl px-5 py-4 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/8 group-hover:bg-saffron/15 flex items-center justify-center transition-colors">
                <b.Icon size={16} className="text-saffron/70 group-hover:text-saffron transition-colors" strokeWidth={1.8} />
              </div>
              <div className="flex items-center gap-2.5 flex-1">
                <CheckCircle2 size={13} className="text-india-green-500 flex-shrink-0" />
                <p className="font-body text-white/70 text-sm leading-snug group-hover:text-white/90 transition-colors">
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <div className="inline-flex flex-col items-center gap-5 p-8 rounded-2xl border border-white/10 bg-white/4 max-w-sm mx-auto">
            <div className="text-center">
              <p className="font-display text-white text-xl font-semibold">Join Us</p>
              <p className="font-body text-white/50 text-sm mt-1">
                Be part of a stronger, connected community.
              </p>
            </div>
            <div className="tricolor-bar-thick w-16 rounded-full" />
            <button
              onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-saffron hover:bg-saffron-700 text-white font-body font-semibold text-sm rounded-full transition-all hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-0.5"
            >
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
