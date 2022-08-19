module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Noto Serif"', 'serif'],
        secondary: ['"Quattrocento Sans"', 'sans-serif']
      }
    }
  },
  plugins: [],
}
