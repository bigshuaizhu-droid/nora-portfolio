/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', 'sans-serif'],
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
