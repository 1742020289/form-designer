module.exports = {
  printWidth: 100, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  useTabs: false, // 是否使用tab进行缩进（默认false）
  semi: false, // 声明结尾使用分号(默认true)
  vueIndentScriptAndStyle: false,
  singleQuote: true, // 使用单引号（默认false）
  quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  trailingComma: 'none', // 多行使用拖尾逗号（默认none）
  jsxBracketSameLine: false,
  jsxSingleQuote: false, // 在 JSX 中使用单引号代替双引号
  arrowParens: 'always', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
  insertPragma: false, // 插入编译指示
  requirePragma: false, // 需要编译指示
  proseWrap: 'never', // 不要包装散文
  htmlWhitespaceSensitivity: 'strict', // HTML 空白敏感度 "strict" - 所有标签周围的空白（或没有空白）被认为是重要的
  endOfLine: 'auto', // 行结束 "auto" - 维护现有的行尾（通过查看第一行之后使用的内容来规范化一个文件中的混合值）
  //  endOfLine: 'lf',
  rangeStart: 0, // 可用于格式化以给定字符偏移量（分别为包含和不包含）开始和结束的代码
  singleAttributePerLine: true
}
