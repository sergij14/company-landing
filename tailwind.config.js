module.exports = {
  content: ["./*.html", "./partials/*.html"],
  dark: "media",
  theme: {
    extend: {
      colors: {
        primary: "#c83253",
        "primary-darker": "#72041b",
        secondary: "#454545",
        tertiary: "#d5d5d5",
      },
      backgroundImage: {
        hero: "url('../assets/images/hero.png')",
        "menu-open": "url('../assets/images/hamburger.png')",
        "menu-close": "url('../assets/images/close.png')",
      },
      fontFamily: {
        heading: ["'Segoe UI Regular'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
