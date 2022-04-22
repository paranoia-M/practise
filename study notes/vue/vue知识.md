<!--
 * @Author: your name
 * @Date: 2021-07-10 10:28:58
 * @LastEditTime: 2022-04-18 16:11:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\study notes\vue\vue知识.vue
-->

1. v-model 是一个语法糖，真正实现的是 v-bind: 响应式绑定数据 和 触发 input 事件，并传递数据

2. data props computed 数据不可以同名，因为在数据挂载阶段，data props 已经挂载到 vm 上

# 组件传值

普通的父子组件传值:
通过 props 获取父组件里面的值
子向父传值，事件分发，通过$emit $on 获取从子组件向父组件传的值
子向父传值，父组件动态绑定，在父组件的子组件里面动态绑定数据
父组件主动获取子组件的实例或方法，通过在父组件的子组件里面绑定ref，就可以通过this.$ref 读取到子组件里面的 state
子组件主动获取父组件的数据和方法,通过在子组件俩面调用 this.$parent 就可以获取到父组件的 state
总结： 父向子传值props，子向父传值事件分发$emit，在父组件的子组件里面动态绑定数据，通过 ref 获取子组件的数据，通过 parent 获取父组件数据

$attrs 用于给类似于爷-孙组件之间的传值，因为使用 props 传值的话需要在每个层级的组件之间相互传递，但是我们只需要给某两个组件传值的话就需要使用$attrs。给中间的组件使用 v-bind = "$attrs"绑定，然后在孙子组件里面通过this.$attrs 拿到父组件里面的值，但是一定得注意，孙子组件里面拿到的值是除过子组件里面的值，也就是说子组件使用过的数据不会被渲染过来。一般搭配 inheritAttrs: false 使用

当组件的根元素不具备一些 DOM 事件，但是根元素内部元素具备相对应的
DOM 事件，那么可以使用$listeners 获取父组件传递进来的所有事件函数，再通过 v-on = "xxx"绑定到相对应的内部元素上即可。
事件总线 EventBus 如果两个页面没有任何引入和被引入的关系，使用 EventBus 进行组件之间的通信。

在 Vue 中可以使用 EventBus 来作为沟通桥梁的概念，就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接受事件，所以组件都可以上下平行的通知其他组件
创建方式: 第一种: 在一个 js 文件里面 import Vue from 'vue'; export const EventBus = new Vue() 第二种: 在 app.js 里面 Vue.prototype.$EventBus = new Vue()

- 发送事件 EventBus.$emit("eventHandle", "data")
- 接受事件 EventBus.$on("eventHandle", (res) => { this.res = res})
- 移除事件监听 EventBus.$off("eventHandle", {}) // 移除某个，不添加参数就移除所有
- 全局 EventBus 工作原理是发布订阅方法
-

1. 访问根实例

- this.$root.baz

7. 访问父级组件实例

- this.$parent.baz

8. 访问子组件实例或者子元素

- this.$refs。 $refs 只会在组件渲染完成之后生效，并且他们不是响应式的，应该避免在模板或经计算属性中访问$refs

9. 依赖注入

- provide 允许我们指定我们想要提供给后代组件的数据/方法
- inject 在任何后代组件里面我们都可以用 inject 选项来接收指定的我们想要添加在这个实例的 property

10. 程序化的事件侦听器

11. 过度和动画 对应用动画的部分使用 transition 包裹起来

- v-enter 定义进入过渡的开始状态，在元素插入之前生效，在元素被插入之后的下一帧移除
- v-enter-active 定义进入过渡生效时的状态
- v-enter-to 定义进入过渡的结束状态
- v-leave 定义离开过渡的开始状态
- v-leave-active 定义离开过渡生效时的状态
- v-leave-to 定义离开过渡的结束状态

12. 混入

- 分发 Vue 组件中可复用功能，一个混入对象可以包含任意组件选项，当组件使用混入对象时，所有混入对象的选项将被混合进入该组件本身的选项

13. 路由

- 动态路径参数 path: '/user/:id',
  响应路由参数变化
  捕获所有路由或 404 not found 路由。 所有的 path: '\*' 以 user 开头的 path: '/user-\*'
- 嵌套路由: 在子组件里面设置 router-view 在到路由里面设置 children
- 编程式导航 router.push(location,onComplete?,onAbort?) this.$router.push(),这个没有回退，
  router.push()=router-link-to 这个方法会向 history 栈添加一个新的记录，所以当用户点击浏览器的回退按钮时，则回到之前的 url
 router.replace()
 router.go()
 命名路由: routes 的 name 选项
 命名视图: 在同一个页面种有不同的组件，每个组件展示不同的 router-view，就需要设置 name 属性
 重定向和别名 redirect alias
 路由组件传参 通过 props 解耦$routes 的参数
- 导航守卫
  全局前置守卫: router.beforeEach(to,from,next) => {} 当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
  全局解析守卫: router.beforeResolve() 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
  全局后置钩子: router.afterEach((to, from) => {}这些钩子不会接受 next 函数也不会改变导航本身：
  路由独享的守卫: 你可以在路由配置上直接定义 beforeEnter 守卫
  组件内的守卫: beforeRouteEnter beforeRouteUpdate beforeRouteLeave
- 执行顺序
  全局前置守卫 beforeEach:在路由跳转前触发，主要用于登陆验证，也就是路由还没有跳转提前告知，以免跳转了在通知为时已晚

  路由独享守卫 beforeEnter:是指在单个路由配置的时候也可以设置钩子函数，类似于组件内的生命周期，

  组件内守卫 beforeRouteEnter,此时 this 并不指向该组件实例
  组件内守卫 beforeRouteUpdate
  组件内守卫 beforeRouteLeave

  全局解析守卫 beforeResolve:也是路由跳转前触发，和前置守卫的区别是，在导航确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用

  全局后置守卫 afterEach:他是在路由跳转完成后触发，
  组件生命周期 beforeCreate
  组件生命周期 created
  组件生命周期 beforeMount
  组件生命周期 mounted
  组件内守卫 next 的回调

1.  data 的 return: 因为每个.vue 文件都是组件，如果 data 是对象，那么每个复用这个实例的组件都返回同一份数据，就造成了数据污染
2.  watch 和 computed 的区别

- 侦听属性: immediate:表示是否要在第一次渲染时执行这个函数。deep: 如果我们监听一个对象，那么我们是否要看这个对象里面属性的变化，如果某个属性变化了，就去执行一个函数。
- 计算属性: 计算一个值，并且会缓存下来

16. hash 和 history
    location.protocal 协议
    location.hostname 主机名
    location.host 主机
    location.port 端口号
    location.patchname 访问页面
    location.search 搜索内容
    location.hash 哈希值

- hash 虽然出现在 url 中，但不会包含在 http 请求中，对后端没有影响，因此改变 hash 不会重新加载页面
- history 利用了 h5 新增的 interface 的 pushState()和 replaceState()方法，这两个方法应用于浏览器记录栈，在当前已有的 back,forWord,go 基础之上，它们提供了对历史记录的修改功能，当他们执行时，虽然 url 发生改变，但浏览器不会立即向后端发送请求。
- history 的优势
  - pushState 设置的 url 可以是同源下的任意 url，而 hash 只能修改#后面部分，因此只能设置当前 url 的同文档 url
  - pushState 设置的新的 url 可以与当前 url 一样，这样也会把记录添加到栈中，hash 不能这样设置，不然会重新赋值
  - pushState 通过 stateObject 参数可以将任何数据类型添加到记录中，hash 只能添加短字符串
  - pushState 可以设置额外的 title 属性供后续使用
- history 的劣势
  - history 在刷新页面时，如果服务器中没有相应的响应或资源，就会出现 404，因此如果 url 匹配不到任何静态资源，则应该返回同一个 index.html 页面这个页面就是你 app 依赖的页面
  - hash 模式下，仅#之前的内容包含在 http 请求，对后端来说即使没有对路由做到全面覆盖，也不会报 404

17. src 和 href

- href: 超文本引用，指向网络资源所在位置。用于在当前文档和引用资源之间确立联系
  - 当浏览器遇到 href 会并行下载资源并且不会停止对当前文档的处理
- src: 把文件下载到 html 页面中去。用于替换当前内容
  - 当浏览器解析到 src，会暂停其他资源的下载和处理，直到将该资源加载完毕

18. link 和 @import

- link
  - link 是 html 标签
  - 不仅能引入 css 还可以做其他的事
  - 不存在兼容性问题
- @import
  - @import 是 css 提供的一种引入方式
  - 只能引入 css
  - IE5 以上
- 从属关系: @import 是 css 提供的语法规则，只有导入样式表的作用，link 是 html 提供的标签，不仅可以加载 css 文件，还可以定义 RSS 和 rel 连接等属性
- 加载顺序区别: link 同时加载，@import 在页面加载完毕后加载
- 兼容性区别: link 是 html 标签，无兼容性问题，@import 得在 IE5 以上
- dom 可控性区别: 可以通过 js 操作 dom，插入 link 标签来改变样式，无法使用@import 来插入样式

19. 实例方法和全局 api

- 数据相关的实例方法(stateMixin)
  vm.$watch vm.$set vm.$del
- 事件相关的实例方法(eventMixin)
  vm.$on(event,callback) vm.$emit(event,[...args]) vm.$once(event,callback) vm.$off([event,callback])
- 生命周期相关的实例方法(后两个是从 lifeCycleMixin 获取，第二个是从 renderMixin 获取，第一个是在跨平台的代码中挂载到 vue 构造函数的 prototype 属性上)
  vm.$mount vm.$nextTick vm.$forceUpdate  vm.$destroy

# nextTick

vue2:
dom 更新机制，当更改响应式状态后，dom 也会自动更新，然而 dom 的更新不是同步的，相反无论你改变了多少个状态，vue 都会将他们推入更新循环的下个 tick 执行，以确保每个需要更新的组件都只更新一次，若要等待一个状态改变后的 dom 更新完成，可以使用 nextTick()
深层次的响应也可以监听到

# 计算属性和方法

计算属性的值会基于其响应式依赖被缓存，一个计算属性仅会在其响应式依赖更新时才重新计算，
方法调用总是在重新渲染时再次执行函数

v-if 比 v-for 的优先级高，这意味着 v-if 的条件将无法访问到 v-for 作用域定义的变量别名

# 数组变化侦测

vue 包装了一批侦听数组的变更方法，以至于这些方法可以触发视图的更新(更改原数组的方法应该放在 methods 中，计算属性中不应该这么做)
push pop shift unshift splice sort reverse

替换一个数组: filter concat slice 不会更改原数组，他们总是返回一个新数组

vue2.0
watch 回调的刷新时机，当你更改了响应式状态，他可能会同时触发 vue 组件更新和侦听器调用，默认情况下，用户创建的侦听器回调，都会在 Vue 组件更新之前被调用。这意味着你在侦听器回调中访问的 DOM 将是被 Vue 更新之前的状态。如果想在侦听器回调中能访问被 Vue 更新之后的 DOM，你需要指明 flush: 'post' 选项：

# 事件修饰符

.stop 单击事件将停止传递
.prevent 提交事件将不在重新加载页面
.self 事件处理器不来自子元素
.capture 指向内部元素的事件，在被内部元素处理前，先被外部处理
.once 点击事件最多被触发一次
.passive 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成

# provide & inject

vue2
provide/inject 依赖注入是在类似于爷/孙组件(不限于爷/孙组件，指在同一组件树下都可以)
当 provide 返回一个对象，只是普通的传递值，当 provide 返回对象的函数，将会传递响应式数据的值

如果在 app.vue 里面 provide 数据就可以在整个组件实例里面获取到值，相当于全局变量
通过 provide 可以做页面刷新

# 异步渲染

当数据在同步变化的时候页面订阅的响应操作为什么不会与数据变化完全对应，而是在所有的数据变化操作做完之后，页面才会得到响应，完成页面渲染。

vue 中如何实现异步渲染:
实际是在数据每次发生变化时，将其所要引起页面变化的部分都放到一个异步 api 的回调函数里面，直到同步代码执行完毕后，异步回调开始执行，最终将同步代码里所有的需要渲染变化的部分合并起来，最终执行一次渲染操作。

步骤:
当使用

1. this.value = '123' 赋值的时候，value 属性所绑定的 Object.defineProperty()的 setter 函数触发，setter 函数将所订阅的 notify 函数触发执行
2. notify 函数中，将所有的订阅组件 watcher 中的 update 方法执行一遍
3. update 函数得到执行后，默认情况下 lazy 是 false，sync 也是 false，直接进入把所有响应变化存储进全局数组 queueWatcher 函数下。
4. queueWatcher 函数里，会先将组件的 watcher 存进全局数组变量 queue 里。默认情况下 config.async 是 true，直接进入 nextTick 的函数执行，nextTick 是一个浏览器异步 API 实现的方法，它的回调函数是 flushSchedulerQueue 函数。
5. nextTick 函数的执行后，传入的 flushSchedulerQueue 函数又一次 push 进 callbacks 全局数组里，pending 在初始情况下是 false，这时候将触发 timerFunc。
6. timerFunc 函数是由浏览器的 Promise、MutationObserver、setImmediate、setTimeout 这些异步 API 实现的，异步 API 的回调函数是 flushCallbacks 函数。
7. flushCallbacks 函数中将遍历执行 nextTick 里 push 的 callback 全局数组，全局 callback 数组中实际是第 5 步的 push 的 flushSchedulerQueue 的执行函数。
8. callback 遍历执行的 flushSchedulerQueue 函数中，flushSchedulerQueue 里先按照 id 进行了优先级排序，接下来将第 4 步中的存储 watcher 对象全局 queue 遍历执行，触发渲染函数 watcher.run。
9. watcher.run 的实现在构造函数 Watcher 原型链上，初始状态下 active 属性为 true，直接执行 Watcher 原型链的 set 方法。
10. get 函数中，将实例 watcher 对象 push 到全局数组中，开始调用实例的 getter 方法，执行完毕后，将 watcher 对象从全局数组弹出，并且清除已经渲染过的依赖实例。
11. 实例的 getter 方法实际是在实例化的时候传入的函数，也就是下面 vm 的真正更新函数\_update
12. 实例的\_update 函数执行后，将会把两次的虚拟节点传入传入 vm 的 patch 方法执行渲染操作

# 角色权限 菜单权限 按钮权限
