/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#f4f8f5",
        paper: "#ffffff",
        ink: "#102523",
        "ink-soft": "#526461",
        forest: "#13483f",
        "forest-deep": "#0b302a",
        mint: "#56c7ad",
        line: "rgba(19, 72, 63, 0.12)",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(11, 48, 42, 0.10)",
        panel: "0 32px 90px rgba(9, 40, 34, 0.16)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 15%, rgba(86, 199, 173, 0.28), transparent 30%), radial-gradient(circle at 80% 0%, rgba(19, 72, 63, 0.14), transparent 28%), linear-gradient(180deg, #ffffff 0%, #f4f8f5 48%, #edf4f1 100%)",
        "dark-glow":
          "radial-gradient(circle at top left, rgba(86, 199, 173, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(86, 199, 173, 0.12), transparent 36%), linear-gradient(140deg, #0b302a 0%, #13483f 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.45", transform: "scaleX(0.96)" },
          "50%": { opacity: "0.95", transform: "scaleX(1)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-line": "pulseLine 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
