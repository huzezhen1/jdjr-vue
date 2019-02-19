# JDJR-VUE

练手项目，仿<京东金融>H5页面

## 记录

Q: ESLint报错：`Error while loading rule 'eslint-comments/no-unused-disable': Cannot read property 'report' of undefined`

A: 原因是`eslint-comments/no-unused-disable`规则在`ESLint 5.0.0`上崩溃，需要将`eslint-plugin-eslint-comments`升级到最新的，具体操作`npm install eslint-plugin-eslint-comments@next`，[查看解答](https://github.com/mysticatea/eslint-plugin-eslint-comments/issues/12)

Q: 报错: `Vue中提示报错handlers[i].call is not a function`

A: 原因是在`.vue`文件中写了空的钩子函数，比如：`mounted: function{ }`，然后里面并没有写什么内容

## 链接

https://m.jr.jd.com

https://www.npmjs.com/package/vue-awesome-swiper

https://www.swiper.com.cn/demo/index.html

https://cn.vuejs.org/v2/api/#methods