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
        hero: "url('../images/hero.png')",
        "menu-open": "url('../images/hamburger.png')",
        "menu-close": "url('../images/close.png')",
      },
      fontFamily: {
        heading: ["'Segoe UI'", "Arial", "sans-serif"],
        primary: ["Verdana", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      translate: ["active"],
      transform: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
