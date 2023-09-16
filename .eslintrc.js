module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": __dirname,
    "project": "./tsconfig.json"
  },
  "extends": [
    "./src/index.js"
  ],
  "env": {
    "browser": true
  },
  "overrides": [
    {
      "files": [
        "./.eslintrc.js",
        "./src/**/*"
      ],
      "env": {
        "browser": true,
        "node": true
      },
      "rules": {
        "array-bracket-newline": [
          "error",
          "always"
        ],
        "array-element-newline": [
          "error",
          "always"
        ],
        "comma-dangle": "off",
        "comma-style": [
          "error",
          "last"
        ],
        "object-curly-newline": [
          "error",
          "always"
        ],
        "object-property-newline": "error",
        "quotes": "off",
        "quote-props": [
          "error",
          "always"
        ],
        "@typescript-eslint/comma-dangle": [
          "error",
          "never"
        ],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/quotes": [
          "error",
          "double"
        ]
      }
    }
  ]
};
