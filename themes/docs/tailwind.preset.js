const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './layouts/**/*.html.twig',
    './themes/**/layouts/**/*.html.twig',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue, // https://tailwindcss.com/docs/customizing-colors
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'markdown',
    }),
  ],
  darkMode: 'class',
  safelist: [
    'dark:brightness-90',
  ],
}
