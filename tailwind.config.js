module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans':["Inter", "sans-serif"],
      'sistema':["Segoe UI"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
