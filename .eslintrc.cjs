module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
    "airbnb"
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'src/shared/api/kinopoiskDev/api-scheme.ts',
    'src/shared/api/kinopoiskUnofficial/api-scheme.ts'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".jsx", ".tsx"] }
    ],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off", 
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/function-component-definition": [
      2,
      { "namedComponents": "arrow-function" }
    ],
    "react/jsx-no-constructed-context-values": "error",
    "react/hook-use-state": "warn",
    "react/jsx-indent": [2, 2],
    "no-unused-vars": "off",
    "import/no-unresolved": [2, { ignore: ['\.svg'] }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "@typescript-eslint/no-restricted-imports": [
      "warn",
      {
        "name": "react-redux",
        "importNames": ["useSelector", "useDispatch"],
        "message": "Use typed hooks `useAppDispatch` and `useAppSelector` instead."
      }
    ],
    "default-param-last": "off",
    "object-shorthand": "warn",
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-cycle": "error",
    "arrow-body-style": [1, "as-needed"],
    "linebreak-style": [1, "unix"],
    "arrow-parens": [1, "as-needed"],
    "no-plusplus": "warn",
    "no-param-reassign": "off",
    "no-return-assign": "off",
    "class-methods-use-this": "warn",
    "jsx-a11y/label-has-associated-control": "warn",
    "max-len": [
      "error",
      150,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error"
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never",
        "js": "never"
      }
    ],
    "camelcase": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": [
          "camelCase"
        ],
        "leadingUnderscore": "allow",
        "trailingUnderscore": "allow"
      },
      {
        "selector": "variable",
        "format": [
          "camelCase",
          "UPPER_CASE",
          "PascalCase"
        ],
        "leadingUnderscore": "allow",
        "trailingUnderscore": "allow"
      },
      {
        "selector": "typeLike",
        "format": [
          "PascalCase",
        ]
      },
      {
        "selector": "typeProperty",
        "format": [
          "camelCase",
          "snake_case"
        ]
      },
      {
        "selector": "objectLiteralProperty",
        "format": [
          "camelCase",
          "snake_case",
          "UPPER_CASE"
        ]
      },
      {
        "selector": "classProperty",
        "leadingUnderscore": "allow",
        "format": [
          "camelCase",
          "snake_case"
        ]
      },
      {
        "selector": "enumMember",
        "format": [
          "camelCase",
          "snake_case",
          "UPPER_CASE"
        ]
      }
    ],
    "no-shadow": "off",
    "no-unused-expressions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/no-onchange": "off"
  }
}
