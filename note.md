# 精彩推荐

## 手记推荐

- [前端成长必经之路：项目设计之美](https://www.imooc.com/article/22808)
- [前端跳槽面试那些事儿](https://www.imooc.com/article/20010)
- [前端工程师是时候学习ES6了](https://www.imooc.com/article/17720)

## 课程推荐

- [ES6 零基础教学 解析彩票项目](https://coding.imooc.com/class/98.html)
- [前端跳槽面试必备技巧](https://coding.imooc.com/class/129.html)
- [前端成长必经之路：组件化思维与技巧](https://coding.imooc.com/class/175.html)
- [Web安全](https://www.imooc.com/learn/812)

## 博客推荐

- [深入学习CSS属性中的百分比](https://segmentfault.com/a/1190000010425830)
- [web开源测试工具-siege](https://segmentfault.com/a/1190000009635163)
- [Web如何防止XSS攻击](https://segmentfault.com/a/1190000007752362)
- [video.js源码分析](https://segmentfault.com/a/1190000007131342)
- [聊聊Ajax那些事儿](https://segmentfault.com/a/1190000006669043)
- [Document.write知多少](https://segmentfault.com/a/1190000006197157)

## 记录

### 操作分支

##### 方式一
在 github 上创建分支 home
在本地 git pull
然后在本地 git checkout home，就会切换到 home 分支下
开发完 home 功能后，git add . 然后 git commit -m 'xxx' ，然后 git push，就会本地 home 分支的内容 push 到 github 上的 home 分支，
然后 git checkout master 切换到 主分支，git merge orign/home 合并 home 分支上的内容到主分支，再 git push 一下把 master 的内容也提交到线上仓库的 master 主分支上

##### 方式二
在本地创建分支 earn，即 git branch earn，然后切换到 earn 分支，即 git checkout earn 
然后git push origin earn，推到远程仓库，即远程上也创建了 earn 分支
然后关联本地分支与远程分支，git branch -u origin/earn 或者 git branch --set-upstream-to origin/earn

### swiper组件相关

##### swiper组件禁止手动滑动
在最外层加上类名 swiper-no-swiping

##### 解决手动滑动之后，自动轮播失效
```
autoplay: {
  disableOnInteraction: false
}
```

##### 属性observer和observeParents
observer启动动态检查器,当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。

将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。

### css问题

##### flex布局使得图片纵向拉伸
解决方案：
1.在父元素没有设置高度的情况下，可以设置图片height:100%，可以解决这个问题。 
2.用div标签包裹图片，这种方案比较通用，但是会产生无用标签。