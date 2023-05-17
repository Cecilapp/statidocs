const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './layouts/**/*.html.twig',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'markdown',
    }),
  ],
}
