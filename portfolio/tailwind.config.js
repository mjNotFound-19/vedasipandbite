/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AEEF",     // Electric blue accent
        secondary: "#000000",   // True black background
        textLight: "#EDEDED",   // Light text
        cardDark: "#111111",    // Card surface
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 174, 239, 0.35)"
      }
    },
  },
  plugins: [],
}