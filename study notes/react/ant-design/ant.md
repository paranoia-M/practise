<!--
 * @Author: your name
 * @Date: 2021-11-22 16:51:20
 * @LastEditTime: 2021-11-24 15:58:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Front-end development learning\document\notes\study notes\react\ant-design\ant.md
-->

# ant-design

- 创建: yarn create umi // npx @umijs/create-umi-app -- > 选择 app --> 选择 antd 和 dva --> yarn --> yarn start
- 创建: npx @umijs/create-umi-app --> yarn --> yarn start
- 创建: (create-react-app) 使用 yarn create react-app ant-demo-01
- 创建: npm create umi --> yarn --> yarn start

1. Dva: 是 react 和 redux 的最佳实践

- dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch
- modules 存放各种数据，与数据交互
- services 请求后台接口
- components 组件
- dva new dva-app --> cnpm install antd babel-plugin-import --save --> npm i dva@版本号 --save

- 数据流向
- 数据的改变通常是用户的交互行为或浏览器行为(路由跳转等)，当此类行为会改变数据的时候可以通过 dispatch 发起一个 action，如果是同步的则直接通过 reducers 改变 state，如果是异步行为(副作用)，会先触发 Effects，然后流向 reducers 最终改变 state

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

2. antd: 中台前端/设计解决方案，UI 框架
3. umi: 引入 UI 工具 antd，打包工具 roadhog，路由 react-router，状态管理器 dva，

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
-
-
-
-
