/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1.2'],
      sm: ['0.875rem;', '1.2'],
      base: ['1rem', '1.2'],
      lg: ['1.125rem;', '1.2'],
      xl: ['1.25rem', '1.2'],
      '2xl': ['1.5rem', '1.2'],
      '3xl': ['1.875rem', '1'],
      '4xl': ['2.25rem', '1'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    extend: {
      
      lineHeight: {
        'tight': '.85',
        'snug': '.95',
        '12': '3rem',
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
        '1/3': '33.33%',
        '1/2': '50%',
        '2/3': '75%',
        '1/1': '100%',
      },
      aspectRatio: {
        '5/3': '5 / 3',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
      },
      aspectRatio: {
        'landscape': '3 / 2',
        'portrait-tall': '5/8',
        'portrait': '4/5',
      },
      colors: {
        'dark': 'rgb(63 63 70);',
        'light': 'rgb(244 244 245);',
        'featured': 'rgb(248 113 113);',
  
        'dk-blue-l'   :'#0CB8FF',
        'dk-blue'     : '#00A1E4',
        'dk-blue-d'   : '#0085BD',

        'dk-blue-app'   : '#1077d5ff',
        'dk-blue-app-l' : '#2a86dcff',
        'dk-orange-app' : '#f6702aff',

        'dk-orange-l' : '#FD945C',
        'dk-orange'   : '#FD7A35',
        'dk-orange-d' : '#F55602',

        'dk-navy-l'   :'#004A70',
        'dk-navy'     : '#003049',
        'dk-navy-d'   : '#002335',

        'dk-grey-l' : '#F9F8F8',
        'dk-grey'   : '#F0EDEE',
        'dk-grey-d' : '#DED8DA',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
