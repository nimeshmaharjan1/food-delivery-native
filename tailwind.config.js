/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6C44", //orange
        transparentPrimray: "rgba(227, 120, 75, 0.4)",
        orange: "#FFA133",
        lightOrange: "#FFA133",
        lightOrange2: "#FDDED4",
        lightOrange3: "#FFD9AD",
        green: "#27AE60",
        red: "#FF1717",
        blue: "#0064C0",
        darkBlue: "#111A2C",
        darkGray: "#525C67",
        darkGray2: "#757D85",
        gray: "#898B9A",
        gray2: "#BBBDC1",
        gray3: "#CFD0D7",
        lightGray1: "#DDDDDD",
        lightGray2: "#F5F5F8",
        white2: "#FBFBFB",
        white: "#FFFFFF",
        black: "#000000",
        transparent: "transparent",
        transparentBlack1: "rgba(0, 0, 0, 0.1)",
        transparentBlack7: "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
