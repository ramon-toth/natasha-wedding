/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f3f4f6",

          secondary: "#a64e2d",

          accent: "#d6dfd1",

          neutral: "#191D24",

          info: "#3ABFF8",

          success: "#22c55e",

          warning: "#FBBD23",

          error: "#e11d48",

          "base-100": "#ffffff",
        },
      },
    ],
  },
};
