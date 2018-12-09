# JDJR-VUE

## 记录

Q: ESLint报错：`Error while loading rule 'eslint-comments/no-unused-disable': Cannot read property 'report' of undefined`
A: 原因是`eslint-comments/no-unused-disable`规则在`ESLint 5.0.0`上崩溃，需要将`eslint-plugin-eslint-comments`升级到最新的，具体操作`npm install eslint-plugin-eslint-comments@next`，[查看解答](https://github.com/mysticatea/eslint-plugin-eslint-comments/issues/12)