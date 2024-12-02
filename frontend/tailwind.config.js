/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        samarkan: ['"Samarkan"', "sans-serif"], // Add your font here
      },
    },
  },
  plugins: [],
};
