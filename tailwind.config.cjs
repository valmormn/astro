module.exports = {
  // ...
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          padding: theme('spacing.4'),
          margin: 'auto'
        }
      })
    }
  ]
}