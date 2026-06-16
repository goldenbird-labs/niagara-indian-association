import {
  Sparkles, Flag, Award, UtensilsCrossed, Home, Users,
  Heart, ShieldCheck, Crown, Activity, BookOpen, Music2
} from 'lucide-react';

const categories = {
  Cultural:  { text: 'text-orange-600',  bg: 'bg-orange-50',   border: 'border-orange-200', tag: 'bg-orange-100 text-orange-700', icon: 'text-orange-500', iconBg: 'bg-orange-100' },
  Business:  { text: 'text-blue-700',    bg: 'bg-blue-50',     border: 'border-blue-200',   tag: 'bg-blue-100 text-blue-700',    icon: 'text-blue-600',   iconBg: 'bg-blue-100'   },
  Community: { text: 'text-emerald-700', bg: 'bg-emerald-50',  border: 'border-emerald-200',tag: 'bg-emerald-100 text-emerald-700',icon:'text-emerald-600', iconBg:'bg-emerald-100'},
  Sports:    { text: 'text-violet-700',  bg: 'bg-violet-50',   border: 'border-violet-200', tag: 'bg-violet-100 text-violet-700', icon: 'text-violet-600', iconBg: 'bg-violet-100' },
};

const programs = [
  { Icon: Sparkles,       category: 'Cultural',  title: 'Niagara India Cultural Festival',       subtitle: '2-Day Event',                featured: true  },
  { Icon: Flag,           category: 'Cultural',  title: 'Independence Day Celebration',           subtitle: 'Flag Raising Ceremony',      featured: true  },
  { Icon: Award,          category: 'Business',  title: 'Indian Business Excellence Awards',      subtitle: 'Recognizing Achievers'                       },
  { Icon: UtensilsCrossed,category: 'Cultural',  title: 'Niagara Indian Food Festival',           subtitle: 'Flavours of India'                           },
  { Icon: Home,           category: 'Business',  title: 'Indian Realtor & Home Expo',             subtitle: 'Real Estate & Living'                        },
  { Icon: Users,          category: 'Business',  title: 'Business Networking Events',             subtitle: 'Connect & Grow'                              },
  { Icon: Heart,          category: 'Community', title: 'Family Community Gatherings',            subtitle: 'Together as One'                             },
  { Icon: ShieldCheck,    category: 'Community', title: 'Senior Support Programs',                subtitle: 'Caring for Our Elders'                       },
  { Icon: Crown,          category: 'Community', title: "Women's Empowerment Programs",           subtitle: 'Strength & Leadership'                       },
  { Icon: Activity,       category: 'Sports',    title: 'Sports Tournaments & Recreation',        subtitle: 'Compete & Connect'                           },
  { Icon: BookOpen,       category: 'Community', title: 'Community Magazine & Business Directory',subtitle: 'Stories That Matter'                         },
  { Icon: Music2,         category: 'Cultural',  title: 'Talent Shows & Heritage Celebrations',   subtitle: 'Culture & Arts'                              },
];

function ProgramCard({ program, large = false }) {
  const c = categories[program.category];
  const { Icon } = program;

  return (
    <div className={`group card-hover bg-white rounded-2xl border ${c.border} overflow-hidden flex flex-col ${large ? 'sm:flex-row' : ''}`}>
      {/* Top accent bar */}
      <div className={`h-1 w-full ${c.iconBg} ${large ? 'sm:h-full sm:w-1' : ''}`} style={{ minHeight: large ? undefined : '4px', minWidth: large ? '4px' : undefined }} />

      <div className={`p-6 flex flex-col gap-4 flex-1 ${large ? '' : ''}`}>
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className={`w-11 h-11 rounded-xl ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
            <Icon size={20} className={c.icon} strokeWidth={1.8} />
          </div>
          <span className={`text-[10px] font-body font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${c.tag}`}>
            {program.category}
          </span>
        </div>

        {/* Text */}
        <div>
          <h3 className={`font-display font-bold text-gray-900 leading-snug ${large ? 'text-lg' : 'text-sm'}`}>
            {program.title}
          </h3>
          <p className={`font-body text-xs mt-1 font-medium ${c.text}`}>{program.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function Programs() {
  const featured = programs.filter(p => p.featured);
  const rest = programs.filter(p => !p.featured);

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1 rounded-full bg-india-green/10 text-india-green-800 font-body text-xs font-semibold tracking-widest uppercase">
            Programs & Events
          </span>
        </div>
        <div className="text-center mb-3">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            What We Plan to Organize
          </h2>
        </div>
        <p className="text-center font-body text-gray-400 text-base mb-14 max-w-xl mx-auto">
          Celebrating Indian culture, fostering connections, and building a stronger community across Niagara.
        </p>

        {/* Category legend */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {Object.entries(categories).map(([name, c]) => (
            <span key={name} className={`flex items-center gap-1.5 text-xs font-body font-medium px-3 py-1 rounded-full ${c.tag}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${c.iconBg} ${c.icon}`} />
              {name}
            </span>
          ))}
        </div>

        {/* Featured 2 */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {featured.map((p, i) => (
            <ProgramCard key={i} program={p} large />
          ))}
        </div>

        {/* Remaining 10 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((p, i) => (
            <ProgramCard key={i} program={p} />
          ))}
        </div>

        <div className="mt-16 text-center border-t border-gray-100 pt-10">
          <p className="font-display italic text-gray-500 text-lg">
            "Stronger Together. Proud of Our Heritage. Committed to Our Community."
          </p>
        </div>
      </div>
    </section>
  );
}
