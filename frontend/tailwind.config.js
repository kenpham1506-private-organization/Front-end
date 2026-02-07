/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#2563EB",
        dark: "#0F172A",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
