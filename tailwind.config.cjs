/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        'sm': "var(--ft-size-sm)",
        'base': "var(--ft-size-nm)",
        'md': "var(--ft-size-md)",
        'lg': "var(--ft-size-lg)",
        'xl': "var(--ft-size-xl)",
        '2xl': "var(--ft-size-2xl)",
        '3xl': "var(--ft-size-3xl)",
        '4xl': "var(--ft-size-4xl)",
        '5xl': "var(--ft-size-5xl)"
      }
    },
  },
  plugins: [],
}
