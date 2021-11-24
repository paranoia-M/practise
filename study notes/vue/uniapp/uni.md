<!--
 * @Author: your name
 * @Date: 2021-11-22 14:22:59
 * @LastEditTime: 2021-11-22 16:26:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Front-end development learning\document\notes\study notes\vue\uniapp\uni.md
-->

# uniApp

## 创建

- dev 模式: 开发模式编译的代码存放在根目录下的/dist/dev/目录，打开各平台开发工具选择对应的平台目录即可进行预览（h5 平台不会在此目录，存在于缓存中）
- build 模式:生产模式编译出的各平台代码存放于根目录下的 /dist/build/ 目录，发布时选择此目录进行发布
- 区别: dev 模式有 SourceMap 可以方便的进行断点调试 build 模式进行代码进行压缩，体积更小更适合发布为正式版应用
- <pinker>普通选择器 == H5 的 select
- <radio-group> 单项选择器

# 生命周期

- 应用生命周期:控制应用全局的生命周期，监听应用的初始化，启动，报错等状态，只有在 app.vue 里面生效，App.vue 文件是应用配置文件，用来配置 App 全局样式以及监听应用生命周期。
  - onLaunch 初始化完成时触发一次;一般用于查看用户是否授权，获取用户的设备信息
  - onShow 当应用启动，从后台进入前台显示时触发，可触发多次;一般用于重新进入应用的消息提示或者数据刷新
  - onHide 监听应用从前台进入后台;一般用于退出应用时的消息提示
  - onError 应用报错时触发;用于检测并处理错误
- 页面生命周期:是控制单个页面的生命周期，监听页面渲染、加载、显示、下拉、滚动、分享等状态。
  - onLoad
  - onShow
  - onReady
  - onHide
  - onUnload
  - onResize
  - onPullDownRefresh
  - onReachBottom
  - onTabItemTap
  - onShareAppMessage
  - onPageScroll
  - onNavigationBarButtonTap
  - onBackPress
  - onNavigationBarSearchInputChanged
  - onNavigationBarSearchInputConfirmed
  - onNavigationBarSearchInputClicked
- 执行顺序，应用生命周期优先于页面生命周期

# 基础组件

- view == div
  - hover-class: 点击效果
  - hover-stop-propagation: 是否阻止本届点的祖先节点出现点击效果，默认不阻止
  - hover-start-time: 按住多久出现点击效果
  - hover-stay-time: 手指松开后点击效果的保留时间
- text (span == text)
  - selectable: 文本是否可选
  - space:显示连续空格
  - decode:是否解码
  - 组件内只支持嵌套 text，不支持其他组件或者自定义组件，否则不同平台会有渲染差异
  - decode 可以解析的有`< > & ' `
  - 除了文本节点以外的其他节点都无法长按选中
- button
  - size 按钮大小
  - type 按钮样式类型
  - plain 按钮是否镂空，背景色透明
  - disable 是否禁用
  - loading 名称前是否带有 loading 图标
- navigator == a
  - url 应用内的跳转链接
  - open-type 跳转方式
  - delta
  - animation-type
  - animation-duration
- image
  - src 图片资源地址，支持相对路径和绝对路径
  - mode 图片裁剪、缩放的模式

# uni-app 自定义组件

# 条件编译

- 条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里卖面的代码编译到不同的平台。写法：以 #ifdef 或 #ifndef 加 %PLATFORM% 开头，以 #endif 结尾。

```
#ifdef H5
表示代码仅在H5平台上面执行，其他平台不执行
#endif

#ifndef H5
表示代码在H5平台不执行，在其他平台执行
#endif

#ifndef H5 ||APP-PLUS
表示代码在H5和APP-PLUS上面执行，其他不执行
#endif
```

-
-
-
-
-
-
-
-
-
-
