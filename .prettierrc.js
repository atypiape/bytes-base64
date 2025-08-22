/**
 * 参见 https://prettier.io/docs/en/options.html
 */
module.exports = {
  /** 箭头函数只有一个参数的时候，也需要括号 */
  arrowParens: 'always',
  /** 是否将多行HTML（HTML、JSX、Vue、Angular）元素的>放在最后一行的末尾，而不是单独放在下一行 */
  bracketSameLine: true,
  /** 对象、数组的花括号内的首位需要空格，如：{ foo: bar } */
  bracketSpacing: true,
  /** 是否格式化文件中嵌入的引用代码 */
  embeddedLanguageFormatting: 'auto',
  /** 换行符使用 lf */
  endOfLine: 'lf',
  /** 根据显示样式决定 html 要不要折行 */
  htmlWhitespaceSensitivity: 'css',
  /** 不需要自动在文件开头插入 @prettier */
  insertPragma: false,
  /** 一行最多 80 字符, 超过换行 */
  printWidth: 80,
  /** 使用默认的折行标准 */
  proseWrap: 'preserve',
  /** 对象的 key 仅在必要时用引号 */
  quoteProps: 'as-needed',
  /** 每个文件格式化的范围是文件的全部内容 */
  rangeStart: 0,
  rangeEnd: Infinity,
  /** 句尾要有分号 */
  semi: true,
  /** 是否使用单引号 */
  singleQuote: true,
  /** 使用 2 个空格缩进 */
  tabWidth: 2,
  /** 对象、数组成员末尾加逗号,none 末尾没有逗号, es5 有效的地方保留, all 在可能的地方都加上逗号 */
  trailingComma: 'all',
  /** 不使用制表符，而使用空格 */
  useTabs: false,
};
