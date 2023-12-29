// uncomment to define custom primary color
//const colors = require('tailwindcss/colors');

module.exports = {
  presets: [
    require('./themes/docs/tailwind.preset.js')
  ],
  content: [
    './layouts/**/*.html.twig',
    './themes/**/layouts/**/*.html.twig',
  ],
  // uncomment to define custom primary color
  /*theme: {
    extend: {
      colors: {
        primary: colors.blue, // https://tailwindcss.com/docs/customizing-colors
      },
    },
  }*/
}
