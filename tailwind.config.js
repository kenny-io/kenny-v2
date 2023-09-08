/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    screens: {
      xxl: '1728px',
      xl: '1440px',
      lg: '976px',
      md: '768px',
      sm: '565px',
    },
    extend: {
      fontFamily: {
        'suisseIntl': ["'suisse-intl'"],
        'suisseIntlCond': ["'suisse-intl-cond'"],
        'suisseIntlWorks': ["'suisse-intl-works'"]
      },
      colors: {
        gray: {
          300: '#858585'
        }
      }
    },
  },
  plugins: [],
}

