/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          DEFAULT: '#FF6B2B',
        },
        'india-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
          DEFAULT: '#138808',
        },
        gold: {
          light: '#F0C040',
          DEFAULT: '#D4A017',
          dark: '#A07810',
        },
        cream: '#FFF9F0',
        'dark-bg': '#0D1A08',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(ellipse at 50% 0%, rgba(255,107,43,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(19,136,8,0.1) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
