/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   'sm': { 'max': '767px'},
    //   // => @media (min-width: 640px and max-width: 767px) { ... }
    //
    //   'md': {'min': '768px', 'max': '1023px'},
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }
    //
    //   'lg': {'min': '1024px', 'max': '1279px'},
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }
    //
    //   'xl': {'min': '1280px', 'max': '1535px'},
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }
    //
    //   '2xl': {'min': '1536px'},
    //   // => @media (min-width: 1536px) { ... }
    // },
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
