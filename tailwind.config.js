module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: "#E1B26B",
        black: "#090C04",
        orange: "#FF9501",
        seafoam: "#C3CDA7",
        gray: "#AEB2A6",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Alice", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
