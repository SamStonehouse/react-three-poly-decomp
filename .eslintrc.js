module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended'],
  overrides: [
    // typescript
    {
      "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
      },
      env: {
        browser: true,
      },
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint', "import", "react-hooks", "prettier"],
      extends: [
        'airbnb',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
      ],
      rules: {
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
          }
        ],
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/*.spec.ts", "**/*.spec.tsx"] }],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",

        'react/jsx-filename-extension': [2, { 'extensions': ['.tsx'] }],
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-array-index-key": "off",
        "react/require-default-props": "off",

        "jsx-a11y/label-has-associated-control": "off",
        "jsx-quotes": ["error", "prefer-single"],

        "arrow-body-style": "off",
        "lines-between-class-members": "off",
        "max-len": ["error", { "code": 260, "tabWidth": 2 }],
        "no-case-declarations": "off",
        'no-empty-pattern': 'off',
        "no-multiple-empty-lines": "off",
        "no-nested-ternary": "off",
        "no-plusplus": "off",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "no-use-before-define": "off",
        "object-curly-newline": "off",
      },
      settings: {
        "react": {
          "pragma": "React",
          "version": "detect"
        },
        "import/resolver": {
          "typescript": {
            "alwaysTryTypes": true,
            "project": ".",
          },
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          },
        },
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"]
        },
      },
    },
    {
      files: ['**/*.js',],
      env: {
        node: true,
      },
    },
  ],

}