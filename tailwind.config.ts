import type { Config } from 'tailwindcss'

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
    extend: {
        colors: {
            cal_poly_green: {
              DEFAULT: '#214e34',
              100: '#07100a',
              200: '#0d2015',
              300: '#142f1f',
              400: '#1a3f2a',
              500: '#214e34',
              600: '#398759',
              700: '#57b980',
              800: '#8fd0aa',
              900: '#c7e8d5',
            },
            snow: {
              DEFAULT: '#fffbfc',
              100: '#650019',
              200: '#ca0032',
              300: '#ff3064',
              400: '#ff95af',
              500: '#fffbfc',
              600: '#fffbfc',
              700: '#fffcfd',
              800: '#fffdfd',
              900: '#fffefe',
            },
            licorice: {
              DEFAULT: '#170312',
              100: '#050104',
              200: '#090107',
              300: '#0e020b',
              400: '#12020e',
              500: '#170312',
              600: '#6c0e55',
              700: '#c21998',
              800: '#e953c3',
              900: '#f4a9e1',
            },
            taupe_gray: {
              DEFAULT: '#847979',
              100: '#1b1818',
              200: '#353131',
              300: '#504949',
              400: '#6a6262',
              500: '#847979',
              600: '#9d9595',
              700: '#b6afaf',
              800: '#cecaca',
              900: '#e7e4e4',
            },
            redwood: {
              DEFAULT: '#a63d40',
              100: '#220c0d',
              200: '#43191a',
              300: '#652527',
              400: '#863234',
              500: '#a63d40',
              600: '#c25b5f',
              700: '#d28487',
              800: '#e1adaf',
              900: '#f0d6d7',
            },
          },
    },
  },
  plugins: [],
} satisfies Config

