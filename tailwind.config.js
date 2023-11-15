/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const theme = {
  extend: {
    colors: {
      'primary-color': '#008000'
    },
    animation: {
      'slide-in-down': 'slide-in-down .5s ease-in-out'
    },
    keyframes: {
      'slide-in-down': {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' }
      }
    }
  }
}
export const plugins = []
