import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "#01959F",
        "primary-border": "#4DB5BC",
        "primary-surface": "#F7FEFF",
        "secondary-border": "#FEEABC",
        "secondary-surface": "#FFFCF5",
        "secondary-pressed": "#FA9810",
        "success-main": "#43936C",
        "success-border": "#B8DBCA",
        "success-surface": "#F8FBF9",
        "danger-main": "#E11428",
        "danger-border": "#F5B1B7",
        "danger-surface": "#FFFAFA",
      },
    },
  },
  plugins: [],
} satisfies Config;
