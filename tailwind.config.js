module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/**/*.html",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
