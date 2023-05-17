/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors:{
        'darkCyan':"hsl(158, 36%, 37%)",
        'Cream':"hsl(30, 38%, 92%)",
        'veryDarkBlue':"hsl(212, 21%, 14%)",
        'darkGrayishBlue':"hsl(228, 12%, 48%)",
        'white':"hsl(0, 0%, 100%)"
      },
fontFamily:{
  sans:['Montserrat','system-ui','sans-serif'],
  serif:['Fraunces','system-ui','serif']
}
    },
    
  },
  plugins: [],
}
