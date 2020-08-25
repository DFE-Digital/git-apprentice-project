module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
    variants: {
        backgroundColor: ['responsive', 'focus', 'hover', 'active', 'visited'],
        accessibility: ['responsive', 'focus', 'hover', 'active']

    },
    plugins: [],
    future: {
        removeDeprecatedGapUtilities: true,
    }
}


