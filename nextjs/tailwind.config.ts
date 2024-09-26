import { Config } from "tailwindcss";
import typographyPlugin from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poetsenOne: ['Poetsen One', 'sans-serif'],
        MrDafoe: ['Mr Dafoe', 'sans-serif'],
        LakkiReddy: ['Lakki Reddy', 'sans-serif'],
        MajorMono: ['Major Mono', 'sans-serif']

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [typographyPlugin],
};

export default config;
