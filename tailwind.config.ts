import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': '#000000',
        'txt-2': '#0c1a3c',
        'background': '#fcfcfc',
        'background-2': '#0032A0',
        'primary': '#0245d4',
        'secondary': '#0c1a3c',
        'secondary-light': '#374975',
        'accent': '#f59700',
        'accent-light': '#f2ae40',
       },
    },
  },
  plugins: [],
}
export default config
