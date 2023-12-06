module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "mainColor": "#24CCA7",
        "purpleColor": "#4A56E2",
        "bgColor": "#FFFFFF",
        "blackColor": "#000000",
        "grayColor": "#AFB1BB",
        "redColor": "#FD5166",
        "whiteText":"#FFF"
      },
      fontFamily: {
        playFair: ['Playfair Display', 'serif'],
        SourceCodePro: ['Source Code Pro', 'monospace'],
      },
      fontSize: {
        big: 'var(--big-font-size)',
        h1: 'var(--h1-font-size)',
        h2: 'var(--h2-font-size)',
        h3: 'var(--h3-font-size)',
        large: 'var(--large-font-size)',
        normal: 'var(--normal-font-size)',
        small: 'var(--small-font-size)',
        tiny: 'var(--tiny-font-size)',
      },
    },
  },
  variants: {},
  plugins: [],
}

