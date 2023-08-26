/** @type {import('tailwindcss').Config} */
module.exports = {
  blocklist: [
    // 'container',
    'collapse',
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
