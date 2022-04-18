module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      70: "70vh",
    },
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#22577E",
      secondary: "#5584AC",
      danger: "#F6F2D4",
      main: "#95D1CC",
      color1: "#3E8E7E",
      color2: "#7CD1B8",
      color3: "#39A388",
      color4: "#1C7947",
      color5: "#009DAE",
      color6: "#71DFE7",
      color7: "#C2FFF9",
      color8: "#B4FE98",
      color9: "#77E4D4",
      color10: "#34BE82",
      color11: "#2FDD92",
      color12: "#2F86A6",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
