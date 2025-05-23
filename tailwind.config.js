// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if using app directory
  ],
  theme: {
    extend: {},
  },
plugins: [
  function ({ addUtilities }) {
    const newUtilities = {
      ".no-scrollbar::-webkit-scrollbar": {
        display: "none",
      },
      ".no-scrollbar": {
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
    };
    addUtilities(newUtilities);
  },
],

}
