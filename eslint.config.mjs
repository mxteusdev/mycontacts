import globals, { commonjs } from "globals";
import pluginJs from "@eslint/js";

module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
  },
}


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];
