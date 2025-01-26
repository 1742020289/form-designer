module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": "off", // 根据需求自定义
    "quotes": ["error", "single"], // 使用单引号
    "semi": ["error", "always"], // 强制使用分号
    "no-undef": "error", // 禁止使用未定义的变量
    "eqeqeq": ["error", "always"], // 强制使用全等
    "no-console": process.env.NODE_ENV === 'production' ? "error" : "off", // 生产环境禁止使用 console
    "max-len": ["error", { "code": 80 }], // 最大行长度为 80
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }], // 键值对冒号前后空格
    "space-in-parens": ["error", "never"], // 禁止圆括号内的空格
    "space-before-function-paren": ["error", "never"], // 函数括号前无空格
    "array-bracket-spacing": ["error", "never"], // 数组括号内无空格
    "object-curly-spacing": ["error", "always"], // 对象大括号内有空格
  },
};
