/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/safelist.txt'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-safelist-generator')({
      path: './src/safelist.txt',
      patterns: [
        'bg-{color}',
        'border-{color}',
      ]
    })
  ],
}
