module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked"
  ],
  "rules": {
    "arrow-parens": [
      "error",
      "always"
    ],
    "function-call-argument-newline": [
      "error",
      "consistent"
    ],
    "function-paren-newline": [
      "error",
      "consistent"
    ],
    "indent": [
      "error",
      2
    ],
    "max-len": "off",
    "no-console": "warn",
    "no-unused-labels": "warn",
    "space-in-parens": [
      "error",
      "never"
    ],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "Function": false
        }
      }
    ],
    "@typescript-eslint/brace-style": [
      "error",
      "stroustrup",
      {
        "allowSingleLine": false
      }
    ],
    "@typescript-eslint/comma-dangle": [
      "error",
      "always-multiline"
    ],
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "type"
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "leadingUnderscore": "forbid",
        "trailingUnderscore": "forbid",
        "custom": {
          "match": false,
          "regex": "^\\$"
        },
        "format": [
          "strictCamelCase",
          "StrictPascalCase",
          "UPPER_CASE"
        ]
      },
      {
        "selector": "memberLike",
        "filter": {
          "match": true,
          "regex": "^\\$\\$"
        },
        "leadingUnderscore": "forbid",
        "trailingUnderscore": "forbid",
        "prefix": [
          "$$"
        ],
        "format": [
          "strictCamelCase",
          "StrictPascalCase",
          "UPPER_CASE"
        ]
      },
      {
        "selector": "memberLike",
        "filter": {
          "match": true,
          "regex": "^\\$$"
        },
        "leadingUnderscore": "forbid",
        "trailingUnderscore": "forbid",
        "prefix": [
          "$"
        ],
        "format": []
      },
      {
        "selector": "memberLike",
        "filter": {
          "match": true,
          "regex": "^\\$"
        },
        "leadingUnderscore": "forbid",
        "trailingUnderscore": "forbid",
        "prefix": [
          "$"
        ],
        "custom": {
          "match": true,
          "regex": "^[a-zA-Z0-9_]+"
        },
        "format": [
          "strictCamelCase",
          "UPPER_CASE"
        ]
      },
      {
        "selector": "memberLike",
        "filter": {
          "match": true,
          "regex": "__TypeRef$"
        },
        "leadingUnderscore": "forbid",
        "trailingUnderscore": "forbid",
        "suffix": [
          "__TypeRef"
        ],
        "format": [
          "StrictPascalCase"
        ]
      },
      {
        "selector": "memberLike",
        "leadingUnderscore": "allowDouble",
        "trailingUnderscore": "forbid",
        "format": [
          "strictCamelCase",
          "UPPER_CASE"
        ]
      },
      {
        "selector": "parameter",
        "custom": {
          "match": false,
          "regex": "^\\$"
        },
        "format": [
          "strictCamelCase"
        ]
      },
      {
        "selector": "parameter",
        "modifiers": [
          "unused"
        ],
        "leadingUnderscore": "allow",
        "trailingUnderscore": "forbid",
        "custom": {
          "match": false,
          "regex": "^\\$"
        },
        "format": [
          "strictCamelCase"
        ]
      },
      {
        "selector": "typeLike",
        "leadingUnderscore": "forbid",
        "trailingUnderscore": "forbid",
        "custom": {
          "match": false,
          "regex": "^\\$"
        },
        "format": [
          "StrictPascalCase"
        ]
      },
      {
        "selector": "typeParameter",
        "leadingUnderscore": "forbid",
        "trailingUnderscore": "forbid",
        "prefix": [
          "T"
        ],
        "custom": {
          "match": false,
          "regex": "^\\$"
        },
        "format": [
          "StrictPascalCase"
        ]
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-declaration-merging": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "all",
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        "ignoreConditionalTests": true,
        "ignoreMixedLogicalExpressions": false,
        "ignoreTernaryTests": false,
        "ignorePrimitives": {
          "string": true,
          "bigint": true,
          "boolean": true,
          "number": true
        }
      }
    ],
    "@typescript-eslint/prefer-reduce-type-parameter": "off",
    "@typescript-eslint/prefer-return-this-type": "warn",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/unbound-method": "warn"
  }
};
