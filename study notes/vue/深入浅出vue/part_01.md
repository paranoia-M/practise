<!--
 * @Author: your name
 * @Date: 2021-10-21 15:24:38
 * @LastEditTime: 2022-03-23 15:09:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Front-end development learning\document\notes\study notes\vue\深入浅出vue\part_01.md
-->

# 变化侦测

- 渐进式框架: 就是把框架分层 视图层渲染->组件机制->路由机制->状态管理->构建工具。有一个现成的服务端应用，非单页应用，可以将 vue.js 作为改应用的一部分嵌入其中，带来更加丰富的交互体验
- 渲染: 从状态生成 dom，在输出到用户界面显示的一整套流程叫作渲染

-

## Object 变化侦测

渲染:从状态生成 dom，在输出到用户界面显示的一整套流程叫做渲染，应用在运行时回不断的重新渲染。
在运行时应用内部的状态会不停的发生变化，此时需要不断的重新渲染，这时，如何确定状态中发生了什么变化。

- 追踪变化，当状态发生变化时，vue.js 立刻就知道了，而且在一定程度上知道哪些状态变了，但同时开销也就变大了，因此在 vue2.0，一个状态依赖的不再是具体的 dom 节点，而是一个组件，这样状态变化之后，会通知到组件，组件内部在使用虚拟 dom 进行对比

利用 Object.defineProperty()来追踪数据的变化，

- 收集依赖
  什么是收集依赖:之所以要观察数据，目的是当数据的属性发生变化时，可以通知那些曾经使用了该数据的地方，
  如何收集依赖：在 getter 中收集依赖，在 setter 中触发依赖
  会在变化侦测中创建一个数组用来添加被侦测的数据，在 getter 时，将数据添加到依赖数组中，当 setter 时，会循环遍历依赖数组

依赖收集到哪里:

- watcher
  数据发生变化时通知他，然后他在通知其他地方

- vue.js 通过 Object.defineProperty()来将对象的 key 转换成 getter/setter 的形式来追踪变化，但 getter/setter 只能追踪一个数据是否被修改，无法追踪新增属性和删除属性，为了解决这个问题，vue 提供了 vm.$set  vm.$delete

# 变化侦测相关的 api 实现原理

vm.$watch( expOrFn, callback, [options] )
用于观察一个表达式或 computed 函数在 vue.js 实例上的变化，回调函数调用时，会从参数得到新数据和旧数据
deep: true 用于深层监听对象的值的变化
immediate:true 将立即以表达式的当前值触发回调
flush: 'post' 在侦听器中访问被 vue 更新之后的 dom

vm.$set(target,key,value)
向响应式对象添加 一个 property，并确保这个新的 property 是响应式的，且触发视图更新，他必须用于响应式对象添加新的 property，因为 vue 无法侦测到普通对象的新增 property

vm.$delete( target, propertyName/index )
删除对象的 property，如果对象是响应式的，确保删除能更新视图，这个方法主要用于避开 vue 不能检测到 property 被删除的限制，

# 其他的一些 vue 实例

Vue.extend(options)
使用基础 vue 构造器，创建一个子类，参数是一个包含组件选项的对象

Vue.nextTick( [callback, context] )
在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

Vue.directive(id,[definition])
注册或获取全局指令(用于自定义指令)

Vue.filter(id,[definition])
注册或获取全局过滤器

Vue.component(id,[definition])
注册或获取全局组件，注册还会自动使用给定的 id 设置组件的名称

Vue.use(plugin)
安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
该方法需要在调用 new Vue() 之前被调用。
当 install 方法被同一个插件多次调用，插件将只会被安装一次。

Vue.mixin(mixin)
全局注册一个混入，影响注册之后所有创建的每个 Vue 实例插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。

Vue.compile(template)
将一个模板字符串编译成 render 函数。只在完整版时可用。

Vue.Observable(object)
让一个对象可响应，vue 内部会用 他来处理 data 函数返回的对象

Vue.version()
提供字符串形式的 Vue 安装版本号,
