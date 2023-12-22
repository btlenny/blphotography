/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      green: "#ccd2bd",
      darkgreen: "6c7c6b",
    },
    fontSize: {
      xs: ".5rem",
    },
    extend: {},
  },
  plugins: [],
}

