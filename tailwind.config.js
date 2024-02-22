/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'slate': {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
      'red':{
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        900: '7f1d1d',
      },
      'esmerald': {
        400: '#34d399', 
        500: '#22c55e',
        600: '#16a34a',
      },
      'white': '#ffff',
    },
    listStyleType: {
      none: 'none',
    },
    extend: {},
  },
  plugins: [],
}

