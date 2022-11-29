const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica"', ...defaultTheme.fontFamily.sans],
        lora: ["'Lora', serif"],
        dm: "'DM Mono', monospace",
        console: "'Lucida Console', 'Courier New', monospace",
        rubik: "'Rubik Glitch', 'cursive'",
        anton: "'Anton', 'sans-serif'"
      },
       height: theme => ({
        "screen-map": "120vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      left: them => ({
        "left-2/5": "40%"
      }),
      container: { 
        center: true, 
        padding: '1rem',
        width: '100%'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
