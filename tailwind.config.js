/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        body: "calc(100vh - 56px - 56px)",
      },
      minHeight: {
        body: "calc(100vh - 56px - 56px)",
      },
    },
  },
  plugins: [],
};
