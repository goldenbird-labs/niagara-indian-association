import { Target, Users, Handshake, Leaf } from 'lucide-react';

const pillars = [
  {
    icon: <Users size={22} className="text-saffron" />,
    title: 'Stronger Together',
    desc: 'We promote collaboration, not competition — building collective strength across all Indian organizations.',
  },
  {
    icon: <Leaf size={22} className="text-india-green-600" />,
    title: 'Respecting Our Diversity',
    desc: 'We welcome all Indian cultural, religious, social, sports, and professional organizations.',
  },
  {
    icon: <Target size={22} className="text-gold" />,
    title: 'Building a Better Future',
    desc: 'We create opportunities for organizations to network, partner, and grow together.',
  },
  {
    icon: <Handshake size={22} className="text-saffron" />,
    title: 'Proudly Indian. Uniquely Niagara.',
    desc: 'We provide a common platform to engage with government, businesses, and the broader community.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream mandala-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1 rounded-full bg-saffron/10 text-saffron font-body text-xs font-semibold tracking-widest uppercase">
            About Us
          </span>
        </div>

        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: What is NIA */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src="/nia-logo.png" alt="NIA Logo" className="w-16 h-16 object-contain flex-shrink-0" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                What is the Niagara Indian Association?
              </h2>
            </div>
            <div className="tricolor-bar-thick w-16 mb-6 rounded-full" />
            <p className="font-body text-gray-600 text-base leading-relaxed mb-6">
              The Niagara Indian Association (NIA) is a community organization established to bring together Indian families, professionals, businesses, cultural organizations, religious groups, sports clubs, youth, seniors, and community leaders across the Niagara Region.
            </p>
            <p className="font-body text-gray-600 text-base leading-relaxed mb-8">
              NIA is not here to replace or compete with any existing organization. Instead, we aim to create a platform where all Indian organizations can work together, support one another, and strengthen our collective voice while maintaining their own identity, traditions, and independence.
            </p>

            {/* Tagline card */}
            <div className="relative pl-5 py-1">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-saffron via-white to-india-green" />
              <p className="font-display italic text-xl text-gray-800 font-semibold">
                "Stronger Community. Greater Connections. Brighter Future."
              </p>
            </div>
          </div>

          {/* Right: Vision card */}
          <div
            className="rounded-2xl p-8 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0D1A08 0%, #1A3A10 100%)' }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-saffron/10 -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-india-green/20 translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-saffron/20 flex items-center justify-center">
                  <Target size={16} className="text-saffron" />
                </div>
                <span className="font-body text-saffron text-sm font-semibold tracking-wider uppercase">Our Vision</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4">Our Vision Is Simple</h3>

              <div className="flex items-center gap-3 mb-6">
                {['One Community', 'One Vision', 'One Niagara'].map((v, i) => (
                  <span key={i} className="font-body text-gold text-xs font-medium">
                    {v}{i < 2 && <span className="text-white/30 ml-3">•</span>}
                  </span>
                ))}
              </div>

              <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
                NIA serves as the unifying platform for all Indian community members and organizations in the Niagara Region — creating a stronger, more connected, and more impactful community.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { num: '12+', label: 'Programs Planned' },
                  { num: '5', label: 'Pillars of Service' },
                  { num: '1', label: 'United Community' },
                  { num: '∞', label: 'Possibilities' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="font-display text-xl font-bold text-gold">{s.num}</div>
                    <div className="font-body text-white/50 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why NIA Different */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Why is NIA Different?
          </h2>
          <div className="section-divider">
            <span className="text-gold text-lg">✦</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                {p.icon}
              </div>
              <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{p.title}</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
