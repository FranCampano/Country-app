/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  // Esta es la forma correcta de configurar DaisyUI
  daisyui: {
    themes: ["sunset"],
  },
}
