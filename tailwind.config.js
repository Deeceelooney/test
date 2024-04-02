module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: {
          200: "#eaeaea",
          500: "#9c9c9c",
          600: "#6d737a",
          800: "#424242",
          900: "#1b1d1f",
          "900_01": "#0f1320",
          "800_01": "#363a3d",
          "200_01": "#e7e9eb",
        },
        indigo: { 300: "#6e80b4", 500: "#4a60a1" },
        teal: { "900_99": "#05305299", "900_b2": "#053052b2" },
        blue_gray: { 50: "#edeff6", 400: "#889099", 600: "#566073", 800: "#2c3a61", 900: "#1e2640" },
        black: { "900_7f": "#0000007f" },
      },
      boxShadow: { xs: "0px 0px 24px 0px #00000007", sm: "0px 24px 68px 0px #3b4d8114" },
      fontFamily: { roboto: "Roboto", inter: "Inter", publicsans: "Public Sans", poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #3b4d817f,#3b4d817f)",
        gradient1: "linear-gradient(180deg, #3b4d81b2,#3b4d81b2)",
        gradient2: "linear-gradient(180deg, #3b4d81cc,#3b4d81cc)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
