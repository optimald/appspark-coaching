/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(0, 102, 255)',
        'custom-cyan': 'rgb(0, 245, 255)',
        'space-dark': 'rgb(0, 0, 20)',
        'space-blue': 'rgb(0, 0, 40)',
        'nebula-pink': 'rgb(236, 72, 153)',
        'nebula-purple': 'rgb(139, 92, 246)',
        'nebula-blue': 'rgb(45, 149, 208)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      zIndex: {
        '-1': '-1',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulseSlow 3s infinite',
        'sparkle': 'sparkle 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        sparkle: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}
