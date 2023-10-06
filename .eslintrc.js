module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                ".ts",
                ".tsx"
            ],
            "parserOptions": {
              "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "prettier",
        "eslint-plugin-prettier"
    ],
    "rules": {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-var-requires": "off",
      "func-names": "off",
      "no-console": "off",
      "no-undef": "error",
      "no-unused-vars": "off",
      "object-curly-spacing": ["warn", "always"],
      "object-shorthand": "off",
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "always",
          bracketSpacing: true,
          endOfLine: "auto",
          printWidth: 120,
          semi: false,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "none",
          useTabs: false
        }
      ],
      quotes: ["error", "double"],
      "react/jsx-curly-newline": "off",
      "react/jsx-filename-extension": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off"
    }
}
