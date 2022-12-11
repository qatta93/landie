// @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif'],
    },
    colors: {
      'grey-100': '#E9EBEC',
      'grey-200': '#CDD1D4',
      'grey-300': '#B0B8BC',
      'grey-400': '#939EA4',
      'grey-500': '#76848C',
      'grey-600': '#5D6970',
      'grey-700': '#454E54',
      'grey-800': '#393E41',
      'grey-900': '#141719',
      'blue-100': '#E7ECFF',
      'blue-200': '#BAC3E5',
      'blue-300': '#929ECC',
      'blue-400': '#6F7CB2',
      'blue-500': '#505F98',
      'blue-600': '#37447E',
      'blue-700': '#222F65',
      'blue-800': '#111B47',
      'blue-900': '#091133',
      'white': '#FFFFFF',
      'black': '#000000'
    },
    extend: {
      backgroundImage: {
        'pricing_bcg': "url('/images/pricing_bcg.png')",
      }
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1400px',
    }
  },

  plugins: [
    require("tailwindcss-inner-border"),
  ],
}