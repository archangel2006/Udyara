export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E",
        secondary: "#1E3A8A",
        accent: "#F59E0B",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
