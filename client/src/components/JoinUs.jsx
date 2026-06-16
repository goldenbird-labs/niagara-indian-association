import { useState } from 'react';
import axios from 'axios';
import { CheckCircle2, AlertCircle, Loader2, UserPlus, User, Users, GraduationCap, HeartPulse, Building2 } from 'lucide-react';

const membershipTypes = [
  { value: 'individual', label: 'Individual', desc: 'Single adult member',  Icon: User         },
  { value: 'family',     label: 'Family',     desc: 'Household membership', Icon: Users        },
  { value: 'student',    label: 'Student',    desc: 'Full-time student',    Icon: GraduationCap},
  { value: 'senior',     label: 'Senior',     desc: '65 years & above',     Icon: HeartPulse   },
  { value: 'corporate',  label: 'Corporate',  desc: 'Business membership',  Icon: Building2    },
];

const interestOptions = [
  'Cultural Events & Festivals',
  'Business Networking',
  'Sports & Recreation',
  'Youth & Family Programs',
  'Senior Programs',
  "Women's Empowerment",
  'Community Service',
  'Arts & Music',
];

const howHeardOptions = [
  'Social Media',
  'Word of Mouth',
  'Community Event',
  'Local Business',
  'Online Search',
  'Other',
];

const initialForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  city: '',
  membership_type: 'individual',
  interests: [],
  how_heard: '',
  message: '',
};

export default function JoinUs() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const toggleInterest = (interest) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter((i) => i !== interest)
        : [...f.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      await axios.post('/api/members', form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  const handleReset = () => {
    setStatus(null);
    setErrorMsg('');
  };

  if (status === 'success') {
    return (
      <section id="join" className="py-24 bg-cream">
        <div className="max-w-xl mx-auto px-4 text-center">
          <img src="/nia-logo.png" alt="NIA Logo" className="w-24 h-24 object-contain mx-auto mb-4" />
          <div className="w-12 h-12 rounded-full bg-india-green/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={28} className="text-india-green" />
          </div>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">Welcome to NIA!</h2>
          <p className="font-body text-gray-600 text-base mb-2">
            Your membership has been registered successfully.
          </p>
          <p className="font-body text-gray-500 text-sm mb-8">
            We'll be in touch soon with details about upcoming events and how you can get involved.
          </p>
          <div className="tricolor-bar-thick w-20 mx-auto mb-8 rounded-full" />
          <p className="font-display italic text-gray-600 text-lg mb-8">
            "Together We Grow, Together We Thrive"
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 border border-gray-300 hover:border-saffron text-gray-600 hover:text-saffron font-body text-sm font-medium rounded-full transition-colors"
          >
            Register Another Member
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1 rounded-full bg-saffron/10 text-saffron font-body text-xs font-semibold tracking-widest uppercase">
            Join NIA
          </span>
        </div>
        <div className="text-center mb-3">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Become a Member
          </h2>
        </div>
        <p className="text-center font-body text-gray-500 text-base mb-12 max-w-lg mx-auto">
          Join thousands of Indian community members across Niagara. Fill in the form below to get started.
        </p>

        <div className="section-divider">
          <span className="text-gold text-lg">✦</span>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-8 sm:p-10">

          {/* Personal Info */}
          <div className="mb-8">
            <h3 className="font-display font-semibold text-gray-800 text-lg mb-4 flex items-center gap-2">
              <UserPlus size={18} className="text-saffron" />
              Personal Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  First Name <span className="text-saffron">*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  placeholder="Arjun"
                  required
                  className="nia-input"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Last Name <span className="text-saffron">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  placeholder="Sharma"
                  required
                  className="nia-input"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-saffron">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="arjun@example.com"
                  required
                  className="nia-input"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="905-XXX-XXXX"
                  className="nia-input"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  City / Town in Niagara
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="St. Catharines, Niagara Falls, Welland..."
                  className="nia-input"
                />
              </div>
            </div>
          </div>

          {/* Membership Type */}
          <div className="mb-8">
            <h3 className="font-display font-semibold text-gray-800 text-lg mb-4">
              Membership Type
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {membershipTypes.map((type) => {
                const active = form.membership_type === type.value;
                return (
                  <label
                    key={type.value}
                    className={`relative flex flex-col items-center text-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      active ? 'border-saffron bg-saffron/5 shadow-sm' : 'border-gray-200 hover:border-saffron/40 bg-white'
                    }`}
                  >
                    <input type="radio" name="membership_type" value={type.value} checked={active} onChange={handleChange} className="sr-only" />
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${active ? 'bg-saffron/15' : 'bg-gray-100'}`}>
                      <type.Icon size={16} className={active ? 'text-saffron' : 'text-gray-400'} strokeWidth={1.8} />
                    </div>
                    <span className={`font-body text-xs font-semibold ${active ? 'text-saffron' : 'text-gray-700'}`}>{type.label}</span>
                    <span className="font-body text-[10px] text-gray-400 leading-tight">{type.desc}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Interests */}
          <div className="mb-8">
            <h3 className="font-display font-semibold text-gray-800 text-lg mb-1">
              Areas of Interest
            </h3>
            <p className="font-body text-gray-400 text-xs mb-4">Select all that apply</p>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`px-3 py-1.5 rounded-full text-xs font-body font-medium border transition-all ${
                    form.interests.includes(interest)
                      ? 'bg-saffron text-white border-saffron'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-saffron/50'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* How did you hear */}
          <div className="mb-8">
            <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              How did you hear about NIA?
            </label>
            <select
              name="how_heard"
              value={form.how_heard}
              onChange={handleChange}
              className="nia-input"
            >
              <option value="">Select an option...</option>
              {howHeardOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Why do you want to join NIA? (optional)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us a bit about yourself and your goals..."
              className="nia-input resize-none"
            />
          </div>

          {/* Error state */}
          {status === 'error' && (
            <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
              <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
              <p className="font-body text-red-600 text-sm">{errorMsg}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 py-4 bg-saffron hover:bg-saffron-700 disabled:bg-saffron/60 text-white font-body font-semibold text-base rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Registering...
              </>
            ) : (
              <>
                <UserPlus size={18} />
                Join the Niagara Indian Association
              </>
            )}
          </button>

          <p className="text-center font-body text-gray-400 text-xs mt-4">
            Your information is kept private and will only be used for NIA communications.
          </p>
        </form>
      </div>
    </section>
  );
}
