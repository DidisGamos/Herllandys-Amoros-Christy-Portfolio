/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Michroma: ["Michroma", "sans-serif"],
        SpaceGrotesk:["SpaceGrotesk","sans-serif"],
      },
    },
  },
  plugins: [],
};
