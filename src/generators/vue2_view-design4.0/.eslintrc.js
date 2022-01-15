module.exports = {
  root: true,
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  env: { browser: true, es6: true, node: true },
  rules: {
    'generator-star-spacing': 'off', // allow async-await
    'no-debugger': process.env.NODE_ENV !== 'development' ? 'off' : 'error', // allow debugger during development
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-undef': 'off',
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'linebreak-style': 'off', // 强制使用一致的换行符风格
    camelcase: 'off',
    indent: ['error', 2], //缩进为 2 个空格
    quotes: ['error', 'single'], // 使用单引号
    semi: ['error', 'always'], // 结束添加分号
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  parser: 'vue-eslint-parser', // 格式化工具
};
