import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        japanese: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        background: '#F5F5F5', // Off-white for a clean, serene base
        surface: '#FFFFFF',
        primary: '#FFB7C5', // Deep cherry blossom pink
        secondary: '#2F4F4F', // Traditional indigo
        accent: '#FFD700', // Gold
        natural: '#8FBC8F', // Bamboo green
        neutral: {
          light: '#EAEAEA',
          medium: '#D3D3D3',
          dark: '#A9A9A9',
        },
      },
      boxShadow: {
        'neumorphic-light': '5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff',
        'neumorphic-light-inset': 'inset 5px 5px 10px #d9d9d9, inset -5px -5px 10px #ffffff',
      }
    },
  },
  plugins: [],
}
export default config
