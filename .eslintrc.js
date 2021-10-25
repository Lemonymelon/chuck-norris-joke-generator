module.exports = {
  root: true,
  extends: "airbnb",
  rules: {
    "arrow-parens": [1, "as-needed"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    indent: ["error", 4],
    quotes: [2, "double", { avoidEscape: true }],
  },
  parser: "babel-eslint",
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
  },
};
