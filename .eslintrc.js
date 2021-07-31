module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        project: "tsconfig.json",
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "no-constant-condition": "off",
        "@typescript-eslint/no-this-alias": "off",
        "no-empty-pattern": "off",


        // Stylistics
        "quote-props": ["error", "as-needed"],
        "@typescript-eslint/naming-convention": [
            "error",
            { selector: "typeLike", format: ["PascalCase"] },
            {
                selector: "typeProperty",
                format: ["UPPER_CASE", "camelCase", "snake_case"],
            },
            {
                selector: "objectLiteralProperty",
                format: ["UPPER_CASE", "camelCase", "snake_case"],
            },
            { selector: "method", format: ["camelCase"] },
            {
                selector: "property",
                format: ["camelCase"],
            },
            { selector: "parameterProperty", format: ["camelCase"] },
            {
                selector: "variableLike",
                format: ["camelCase"],
                leadingUnderscore: "allow",
            },
        ],
    },
};
