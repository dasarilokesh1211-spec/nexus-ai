/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { brand: { DEFAULT: "#6d4aff", soft: "#a78bfa" } } } },
  plugins: [],
};
