const openColor = require('open-color');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const formReset = require('@tailwindcss/forms');
const bootstrapGrid = require('tailwind-bootstrap-grid');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: openColor,
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      // xxl: '1400px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
      },
      boxShadow: {
        card: 'rgba(0, 0, 0, 0.08) 0px 10px 24px 0px',
        business: `${openColor.blue[6]} 0px 10px 24px 0px`,
        personal: `${openColor.grape[6]} 0px 10px 24px 0px`,
        wildcard: `${openColor.yellow[6]} 0px 10px 24px 0px`,
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    aspectRatio,
    formReset,
    bootstrapGrid({
      gridGutterWidth: '2rem',
      gridGutters: {
        0: 0,
        1: '0.25rem',
        2: '0.5rem',
        3: '1rem',
        4: '1.5rem',
        5: '2rem',
        6: '4rem',
        7: '6rem',
        8: '8rem',
      },
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
    }),
    plugin(({ addUtilities }) => {
      addUtilities(
        {
          '.optimize-legibility': {
            'text-rendering': 'optimizeLegibility',
          },
        },
        ['responsive', 'hover'],
      );
    }),
  ],
};
