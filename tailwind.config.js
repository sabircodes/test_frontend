/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#1640D6',
        primary_backgound:'#DCF2F1'
      },
      backgroundImage: {
        'bgfabric': "url('/src/assets/bluefabric.png')",
        'bg3':"url('/src/assets/bg3.png')"
        
      },
      fontFamily: {
        Noto: ['Noto Serif Display', 'serif'],
        
      },

    },
  },
  plugins: [],
}

