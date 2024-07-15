/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily:{
        'cormorant':['Cormorant SC'],
        'poppins':['Poppins'],
      },
      backgroundImage:{
        'first':"url('/assets/1.png')",
        'second':"url('/assets/2.png')",
        'third':"url('/assets/3.png')",
        'fourth':"url('/assets/4.jpg')",
        'fifth':"url('/assets/5.jpg')",
      },
      keyframes:{
        slideRight:{
          '0%':{ transform: 'translateX(-100%)'},
          '100%':{ transform: 'translateX(100%)'},
        }
      },
      animation:{
        slideRight:'slideRight 10s linear infinite',
      }
    },
  },
  plugins: [],
}


