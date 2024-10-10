/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#fe772d',
        secondary: '#333333',
        purple: '#000015',
        whiteSmoke: '#f5f5f5',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        jolly: ['Jolly Lodger', 'cursive'],
      },
    },
  },
  plugins: [],
};
