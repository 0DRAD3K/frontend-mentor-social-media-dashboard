/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'lime-green': 'hsl(163, 72%, 41%)',
        'very-dark-blue' : 'hsl(230, 17%, 14%)',
        'top-bg-pattern' : ' hsl(232, 19%, 15%)',
        'card-bg' : 'hsl(228, 28%, 20%)',
        'text' : 'hsl(228, 34%, 66%)',
        'left-dark' : 'hsl(210, 78%, 56%)',
        'right-dark' : 'hsl(146, 68%, 55%)',
        'gram' : 'hsl(329, 70%, 58%)',
        'insta' : 'hsl(37, 97%, 70%)',
      },
    },
  },
  plugins: [],
}

