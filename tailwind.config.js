module.exports = {
    purge: [
      './partials/**/*.hbs', 
      './pages/**/*.hbs',
      './templates/**/*.hbs',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
        primary: "#FF073A",
        secondary: "#02066F",
        background: "#00022E",
      },
      textColor: theme => theme('colors'),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  