/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-blue': '#a7d8ff',
        'pink': '#f8c6d4',
        'muted': '#555555',
        'card': '#fdfdfd',
      },
      boxShadow: {
        custom: '0 6px 20px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        custom: '16px',
      },
      maxWidth: {
        container: '1100px',
      },
    },
  },
  plugins: [],
}
