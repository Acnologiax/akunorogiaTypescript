module.exports = {
  mode: "JIT",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or false or 'class'
  theme: {
    extend: {
      inset: {
        cTop: "40%",
      },
      minHeight: {
        minScreen: "  95vh",
      },
      colors: {
        mine: "#9E1FFF",
        mineDarker: "#450D70",
        mine2: "#FF0A78",
        mine2Darker: "#730737",
      },
      animation: {
        spinSlow: "spin 6s linear infinite",
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },

    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
