/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%,100%': { transform: 'translateY(0)' },
          '25%,75%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(-20%)' },
        }
      },
      animation: {
        wave: "wave 1s forwards linear"
      }
    },
  },
  plugins: [],
}

