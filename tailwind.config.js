module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.100'),
            h1: {
              color: theme('colors.gray.200')
            },
            h2: {
              color: theme('colors.gray.200')
            },
            h3: {
              color: theme('colors.gray.200')
            },
            h4: {
              color: theme('colors.gray.200')
            },
            'ol > li::before': {
              color: theme('colors.gray.300'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.purple.400'),
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
