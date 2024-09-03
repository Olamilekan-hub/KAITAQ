// tailwind.config.js
module.exports = {
  content: [
    './*.html',             // For HTML files in the root directory
    './assets/**/*.{js}', 
    "./assets/**/*.css",  // For JS and JSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}