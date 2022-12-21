/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "0.3rem",
      },
      colors: {
        fondo: "#0e1015",
        white: "#dcdee3",
        dark: "#13151b",
        medium: "#252933",
        primary: "#181a20",
        secondary: "#7fcb29",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      margin: "2rem",
    },
  },
  plugins: [],
};