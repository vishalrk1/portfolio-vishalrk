/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BgBlack: "#222831",
        CustomGrey: "#EEEEEE",
        CustomYellow: "#FFD369",
        BgDarkGray: "#393E46",
      },
    },
  },
  plugins: [],
};
