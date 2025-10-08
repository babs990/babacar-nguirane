/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
       ombre1 : '0px 0px 50px rgba(0, 0, 0, 0.25)',
       ombre2 : '10px 10px 30px rgba(249, 115, 22, 0.05)'
      },
      keyframes :{
        fadeUp : {
          "0%" : { transform : "translateY(30px) scale(0.9)", opacity : '0'},
          "100%" : { transform : "translateY(0) scale(1)", opacity : '1'},
        },
        fadeIn : {
          "0%" : { transform : "translateY(-30px) scale(0.9)", opacity : '0'},
          "100%" : { transform : "translateY(0) scale(1)", opacity : '1'},
        },
        fadeRight : {
          "0%" : { transform : "translateX(30px) scale(0.9)", opacity : '0'},
          "100%" : { transform : "translateX(0) scale(1)", opacity : '1'},
        },
        fadeLeft : {
          "0%" : { transform : "translateX(-30px) scale(0.9)", opacity : '0'},
          "100%" : { transform : "translateX(0) scale(1)", opacity : '1'},
        },
      },
      animation :{
        fadeUp1 : "fadeUp 3s",
        fadeUp2 : "fadeUp 5s",
        fadeIn : "fadeIn 1s",
        fadeRight : "fadeRight 4s",
        fadeLeft : "fadeLeft 3s",
      }
    },
  },
  plugins: [],
}
