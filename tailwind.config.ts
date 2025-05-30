import type { Config } from 'tailwindcss';
import { colors, white, black, currentColor, transparent } from './src/tokens/colors';

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      ...colors,
      white,
      black,
      currentColor,
      transparent,
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
    },
  },
} satisfies Config;
