/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      /* ---------------- COLORS ---------------- */
      colors: {
        background: "#0B0B0B",
        arcadisOrange: "#E85C0D",
        card: "#151515",
        accent: "#F4B400",
        muted: "#B5B5B5",
      },

      /* ---------------- FONTS ---------------- */
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      /* ---------------- ANIMATIONS ---------------- */
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
