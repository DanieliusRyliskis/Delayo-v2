/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9F366",
        secondary: "#494636",
        accent: "#50B19A",
      },
    },
  },
  plugins: [],
};
