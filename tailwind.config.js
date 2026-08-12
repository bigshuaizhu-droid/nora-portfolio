/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#FAFAFA',
        'text-primary': '#1D1D1F',
        'text-secondary': '#86868B',
        'border-light': '#E5E5E7',
        'card-dark': '#1A1A1A',
        'accent': '#2563EB',
      },
    },
  },
  plugins: [],
}
