/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            DEFAULT: '#D71932',
            hover: '#B51226',
            dark: '#930E1E',
            light: '#FDECEE',
            50: '#FEF5F6',
            100: '#FDECEE',
            500: '#D71932',
            600: '#B51226',
            700: '#930E1E',
          },
          navy: {
            DEFAULT: '#123467',
            dark: '#0A1F3D',
            light: '#1B478A',
            deep: '#061427',
            50: '#F3F7FB',
            100: '#E4EDF7',
            200: '#CADBEF',
            800: '#123467',
            900: '#0A1F3D',
            950: '#061427',
          },
          bg: '#F3F7FB',
          text: '#172033',
          muted: '#526079',
          border: '#DDE5EE',
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"Outfit"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 12px rgba(18, 52, 103, 0.05)',
        'premium': '0 10px 30px -5px rgba(18, 52, 103, 0.09)',
        'hover': '0 20px 35px -10px rgba(18, 52, 103, 0.16)',
        'float': '0 12px 36px -4px rgba(18, 52, 103, 0.22)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}
