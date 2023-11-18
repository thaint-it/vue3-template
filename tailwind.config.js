/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter','sans-serif']
    },
    extend: {
      colors:{
        primary:"#1161FB",
        secondary:'#F2F2F7',
        light: '#137DFF',
        gray:'#E3E8F1',
        icon:'#2D314B',
      },
      padding:{
        button: "8px 16px 8px 16px"
      },
      width:{
        "sidebar": '228px',
        "menu-icon": '16px',
        "tab-icon":'24px'

      },
      height:{
       "menu-icon":'16px',
       'cover-image':'160px',
       "tab-icon":'24px'
      }
    },
  },
  plugins: [],
}

