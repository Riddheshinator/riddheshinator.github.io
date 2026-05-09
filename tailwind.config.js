/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      colors: {
        ink: '#10233f',
        panel: '#ffffff',
        line: '#d9e2ec',
        mist: '#334155',
        cyan: '#0f766e',
        mint: '#2f855a',
        amber: '#b7791f',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(16, 35, 63, 0.08)',
        lift: '0 24px 80px rgba(16, 35, 63, 0.13)',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.68 },
          '50%': { opacity: 1 },
        },
        progress: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(140%)' },
        },
      },
      animation: {
        floatY: 'floatY 7s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3.4s ease-in-out infinite',
        progress: 'progress 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
