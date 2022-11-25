/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        "input-box": "#C4C4C4",
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': 'rgba(0, 0, 0, 0.5);',
        'btn': '#A38251',
      },
    },
    
    
  },
  plugins: [],
}
