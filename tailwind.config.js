/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#1E2022',
        'second': '#121415',
        'naranja': '#e8505b',
        'gris': '#455a64',
        'mangeta': '#ff00ff'
      }
    },
  },
  plugins: [],
}

