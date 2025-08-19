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
      },
      colors: {
        background: '#0D0D0D',
        surface: '#1A1A1A',
        primary: '#FFFFFF',
        secondary: '#808080',
        accent: '#00A8FF',
      },
      boxShadow: {
        'neumorphic-light': '5px 5px 10px #0a0a0a, -5px -5px 10px #101010',
        'neumorphic-light-inset': 'inset 5px 5px 10px #0a0a0a, inset -5px -5px 10px #101010',
      }
    },
  },
  plugins: [],
}
export default config
