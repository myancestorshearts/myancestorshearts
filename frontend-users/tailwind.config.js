/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#cecfd8",
          200: "#9d9fb0",
          300: "#6b7089",
          400: "#3a4061",
          500: "#09103a",
          600: "#070d2e",
          700: "#050a23",
          800: "#040617",
          900: "#02030c"
        },
        secondary: {
          // indigo
          100: "#dee1f2",
          200: "#bdc2e6",
          300: "#9ba4d9",
          400: "#7a85cd",
          500: "#5967c0",
          600: "#47529a",
          700: "#353e73",
          800: "#24294d",
          900: "#121526"
        },
        netural: {
          // yellow
          100: "#f7f7f7",
          200: "#f0f0f0",
          300: "#e8e8e8",
          400: "#e1e1e1",
          500: "#d9d9d9",
          600: "#aeaeae",
          700: "#828282",
          800: "#575757",
          900: "#2b2b2b"
        },
        main: {
          // white
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333"
        },
      }
    },
  },
  plugins: [],
}


