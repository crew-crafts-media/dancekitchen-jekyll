module.exports = {
  mode: 'jit',
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
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
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}