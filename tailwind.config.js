/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1D6EE3',
        'brand-dark': '#1251BE',
        'brand-cyan': '#06D6F5',
        hero: '#03060E',
        navy: '#050D1E',
        'navy-2': '#0A1628',
        'navy-3': '#0F1E36',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, #1D6EE3 0%, #06D6F5 100%)',
        'grad-hero':  'linear-gradient(135deg, #03060E 0%, #07112A 60%, #0A1628 100%)',
        'grad-text':  'linear-gradient(90deg, #06D6F5, #3B82F6, #7C3AED)',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s infinite',
        'scan':      'scan 2s ease-in-out infinite',
        'float':     'float 4s ease-in-out infinite',
        'float-d':   'float 4s ease-in-out 1.5s infinite',
        'factor':    'factorPulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { transform: 'scale(1)', opacity: '1' },
          '50%':     { transform: 'scale(1.6)', opacity: '0.5' },
        },
        scan: {
          '0%':   { top: '4px', opacity: '0' },
          '20%':  { opacity: '1' },
          '80%':  { opacity: '1' },
          '100%': { top: 'calc(100% - 4px)', opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        factorPulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(6,214,245,0)' },
          '50%':     { boxShadow: '0 0 0 6px rgba(6,214,245,0.08)' },
        },
      },
      boxShadow: {
        'blue':    '0 8px 32px rgba(29,110,227,0.28)',
        'blue-lg': '0 12px 40px rgba(29,110,227,0.4)',
        'glow':    '0 0 48px rgba(6,214,245,0.18)',
        'card':    '0 32px 80px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
