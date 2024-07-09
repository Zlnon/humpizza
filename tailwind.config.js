/** @type {import('tailwindcss').Config} */

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/app/(tabs)/menu/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./compontes/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          text: "#000",
          background: "#fff",
          tint: tintColorLight,
          tabIconDefault: "#ccc",
          tabIconSelected: tintColorLight,
        },
        dark: {
          text: "#fff",
          background: "#000",
          tint: tintColorDark,
          tabIconDefault: "#ccc",
          tabIconSelected: tintColorDark,
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
