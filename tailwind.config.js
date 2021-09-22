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
      minHeight: {
        minScreen: "  95vh",
      },
      colors: {
        mine: "#9E1FFF",
        mineDarker: "#450D70",
        mine2: "#FF0A78",
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
