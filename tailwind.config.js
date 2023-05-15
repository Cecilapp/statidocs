module.exports = {
  content: [
    './layouts/**/*.html.twig',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D49C8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'markdown',
    }),
  ],
}
