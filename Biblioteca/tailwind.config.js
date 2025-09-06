import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json",
  ],
  darkMode: "class", // ⬅️ aqui
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};
