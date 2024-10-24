/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage : {
        'hero_image' : "url('./assets/images/women1.jpg')",
        'fact_bg' : "url('./assets/images/fact.jpg')",
      },
      colors:{
       
      },
      fontFamily:{
        'Raleway-font': 'Raleway',
        'Open-sans' : '"Open Sans"',
        'Architect-sans' : '"Architects Daughter"',
      }
    },
  },
  plugins: [],
}

