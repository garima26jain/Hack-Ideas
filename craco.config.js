module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
        "rules":{
            "css.lint.unknownAtRules": "ignore"
        }
      },
    },
  }