module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderWidth:{
        '0.5': '1px'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    colors:{
      transparent: 'transparent',
      black: '#000',
      white: '#FFFFFF',
      gray: '#B3B8C0',
      primary: '#222831',
      secondary: '#4E596F',
      red: '#F66663',
      'red-100': '#fd7371',
      'red-200': '#e55250',
    },
    fontFamily:{
      'sans': ['Noto Sans', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}