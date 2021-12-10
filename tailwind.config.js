module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cgreen: {
          lightest: "#EAF0ED",
          light: "#8DA291",
          DEFAULT: "#3F5D45",
          dark: "#2C4832",
        },
        cyellow: "#FFE180",
        cwhite: "#EAF0ED",
      },
      letterSpacing: {
        widest1: "0.25rem",
        widest2: "0.5rem",
      },

      lineHeight: {
        "lh2.5": "2.5",
      },
      padding: {
        1.8: "1.875rem",
      },

      fontFamily: {
        NotoSansTC: ["Noto Sans TC", "sans-serif"],
        NotoSerifsTC: ["Noto Serif TC", "serif"],
        Roboto: ["Roboto", "sans-serif"],
        TimesNewRoman: ["Times New Roman", " serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
