const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './layouts/**/*.html.twig',
    './themes/**/layouts/**/*.html.twig',
  ],
  theme: {
    extend: {
      // https://tailwindcss.com/docs/customizing-colors
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
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
