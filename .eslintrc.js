module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    // 不对微信全局变量检测报错
    window: true,
    Component: true,
    App: true,
    wx: true,
    Page: true,
    getApp: true,
    getCurrentPages: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'camelcase': 0, // 不检测驼峰命名
    'no-unused-vars': 0, // 不检测未使用变量
    'no-case-declarations': 1, // 提醒不恰当的声明
    'no-console': 0, // 不检测console
    'no-cond-assign': 1, // 禁止条件表达式中出现赋值操作符
  }
}
