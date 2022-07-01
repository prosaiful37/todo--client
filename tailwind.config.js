/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#030733",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#3D4451",

        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
