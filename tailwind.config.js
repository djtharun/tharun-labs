/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#090B0A',
          secondary: '#101411',
          surface: '#151B16',
          elevated: '#1B231D',
          hover: '#202B22'
        },
        text: {
          primary: '#E8EEE7',
          secondary: '#929C91',
          muted: '#5A6659'
        },
        accent: {
          DEFAULT: '#B5FF55',
          dim: 'rgba(181, 255, 85, 0.15)',
          glow: 'rgba(181, 255, 85, 0.25)',
          secondary: '#65D9C7',
          secondaryDim: 'rgba(101, 217, 199, 0.15)'
        },
        border: {
          subtle: '#1C261F',
          default: '#243228',
          accent: 'rgba(181, 255, 85, 0.35)',
          secondary: 'rgba(101, 217, 199, 0.35)'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(181, 255, 85, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(181, 255, 85, 0.03) 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(rgba(181, 255, 85, 0.08) 1px, transparent 1px)",
        'scanline': "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)"
      },
      boxShadow: {
        'phosphor': '0 0 15px rgba(181, 255, 85, 0.15)',
        'phosphor-lg': '0 0 25px rgba(181, 255, 85, 0.2)',
        'cyan': '0 0 15px rgba(101, 217, 199, 0.15)'
      }
    },
  },
  plugins: [],
}
