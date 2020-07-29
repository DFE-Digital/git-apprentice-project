module.exports = {
  purge: [],
  theme: {
    screens: {      
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px', 
    },
    
    fontFamily: {
      display: [],
      body: [],
      },

      borderWidth: {
        default: '1px',
        '0' : '0',
        '2px' : '2px',
        '4px' : '4px',
      },
    extend: {
      colors: {

      },
    },
  },
  variants: {},
  plugins: [],

  // this adds the prefix: 'tw-' to all tailwind utilities, 
  // i.e tw-text-left as a class will set align text to the left.
    prefix: 'tw-',
}
