module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "extends": [
    "mysticatea",
    "mysticatea/modules",
    "plugin:vue/recommended"
  ],
  "plugins": [
    "node"
  ],
  "env": {
    "browser": false
  },
  "globals": {
    "applicationCache": false,
    "atob": false,
    "btoa": false,
    "console": false,
    "document": false,
    "location": false,
    "window": false
  },
  "rules": {
    "node/no-extraneous-import": "error",
    "node/no-missing-import": "error",
    "node/no-unpublished-import": "error",
    "vue/html-indent": ["error", 2], // 缩进为2个空格
    "vue/max-attributes-per-line": "off",
    
    //以下为自己新增
    "indent": ["error", 2], // 缩进为2个空格
    "linebreak-style": "off", // 关闭换行符限制
    "no-unused-expressions": 0, // 对程序状态没有影响的未使用表达式表示逻辑错误，设为0就可以使用短路表达式和三元表达式
    "quotes": [ 
      "error",
      "single", // 使用单引号
      {
        avoidEscape: true // 允许字符串使用单引号或双引号
      }
    ],
    "vue/component-name-in-template-casing": 0  // 关闭对组件名称写法限制，比如<MyComponent>或者<my-component>都可以
  }
}