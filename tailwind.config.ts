import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#D9D9D9",
        button: "#121212",
        para: "#4C4C4C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '44px': '44px',
        '32px': '32px',
        '28px': '28px',
      },
      fontWeight: {
        '400': '400', 
        '700': '700', 
       
      },
    },
  },
  plugins: [],
};

export default config;
