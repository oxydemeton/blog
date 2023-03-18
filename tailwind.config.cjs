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
      },
      colors: {
        'main-dark': "var(--cs-main-dark)",
        'main-light': "var(--cs-main-light)",
        'accent-light-sm': "var(--cs-accent-light-sm)",
        'accent-light-lg': "var(--cs-accent-light-lg)",
        'accent-dark-sm': "var(--cs-accent-dark-sm)",
        'accent-dark-lg': "var(--cs-accent-light-lg)"
      }
    },
  },
  plugins: [],
}
