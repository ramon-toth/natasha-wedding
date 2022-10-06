/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f3f4f6",

          "secondary": "#b35642",

          "accent": "#5f8575",

          "neutral": "#191D24",

          "base-100": "#2A303C",

          "info": "#3ABFF8",

          "success": "#22c55e",

          "warning": "#FBBD23",

          "error": "#e11d48",

          "base-100": "#ffffff",

        },
      },
    ],
  },
}
