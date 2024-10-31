const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        strawberry: "#ff78b5",
        lemon: "#fff6a1",
        mint: "#b0f2c2",
        water: "#89d7f7",
        lavender: "#d5a7f9",
        tomato: "#ff7a63",
      },
      textColor: {
        strawberry: "#8B1C4A", // Complementary deeper shade for strawberry
        lemon: "#847B36", // A darker muted tone for lemon
        mint: "#4B7C61", // Soft, muted green for mint
        water: "#40708D", // Slightly darker muted blue for water
        lavender: "#4F205A", // Deep muted purple for lavender
        tomato: "#8B4432", // Muted deep orange for tomato
      },
    },
  },
  plugins: [addVariablesForColors],
};

 
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}