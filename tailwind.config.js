/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#1161FB",
        secondary:'#F2F2F7',
        light: '#137DFF',
        gray:'#E3E8F1'
      },
      padding:{
        button: "8px 16px 8px 16px"
      },
      width:{
        "sidebar": '228px',
        "menu-icon": '16px'

      },
      height:{
       "menu-icon":'16px'
      }
    },
  },
  plugins: [],
}

