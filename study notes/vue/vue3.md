<!--
 * @Author: your name
 * @Date: 2022-03-05 11:18:46
 * @LastEditTime: 2022-03-15 14:14:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Front-end development learning\document\notes\study notes\vue\vue3.md
-->

# vue3

- reactive 是有深层响应性的，它返回的是一个代理对象，对深层的对象也是返回对象的
  代理而不是原对象，对代理调用 reactive 只能返回他自己，同时只能代理数组，对象
  ，map，set 这样的集合类型，而对 number，string，等这样的基础类型没有作用，会失
  去响应性，

如果把响应式对象的某个基础类型属性传入函数，或是从响应式对象中结构属性时也会失去
响应行

- ref() 定义响应式变量，解决 reactive() 带来的限制，它可以装填任意值类型，ref()
  从参数中获取到值，将其包装为一个带 .value 属性的对象。将 ref 传递给函数或者从
  一般对象上被结构时，不会丢失响应性

ref()在响应对象中的解包：当一个 ref 作为一个响应式对象(reactive)的 property，他
会自动解包，同时如果将一个新的 ref 赋值给响应式对象某个已经为 ref 的对象，那么他
会替换掉旧的 ref 对象，只有当嵌套在一个深层反应式对象的时候，才会发生 ref 解包。

当从数组或 Map 这样的原生集合类型访问 ref 时，也不会进行解包。

ref 在模板中会自动解包，包括计算属性也是一样，但是在 setup 里面不应该解包，不然
会失去响应行

- 计算属性和方法计算属性值会基于其响应式依赖被缓存，

一个计算属性仅会在其响应式依 赖更新时重新计算， filter,concat,slice 会返回一个新
数组，所以应该在调用这些方 法之前创建一个原数组的副本

- 事件处理  
  内联事件处理器 @click = "count++" @click = "foo()"

  在内联处理器中调用方法 @click = "say('hello')" 在内联处理器中访问参数
  @click="(event) => warn('Form cannot be submitted yet.', event)" 方法事件处理
  器 @click = "handleClick" @click = "handleClick.bar" @click =
  "handleClick[bar]"

- 按键修饰符 @keyup.enter="submit" .exact 修饰符允许控制触发一个事件所需的确定组
  合的系统按键修饰符。

- 响应性基础 api

reactive:返回对象的响应式副本，他的响应式转换是深层的，同时 reactive 将解包所有
深层的 refs，同时维护 ref 的响应性，当将 ref 分配给 reactive property 时，ref 将
被自动解包。(也就是不用.value 来获取)

readonly:接受一个对象(响应式或纯对象)或 ref 并返回原始对象的只读代理，只读代理是
深层的

isProxy:检查对象是否由 reactive 创建的 proxy

isReactive:检查对象是否是由 reactive 创建的响应式代理。

toRaw 返回 reactive 或 readonly 代理的原始对象。这是一个“逃生舱”，可用于临时读取
数据而无需承担代理访问/跟踪的开销，也可用于写入数据而避免触发更改。不建议保留对
原始对象的持久引用。请谨慎使用。

markRaw 标记一个对象，使其永远不会转换为 proxy。返回对象本身。

shallowReactive 创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套
对象的深层响应式转换 (暴露原始值)。

shallowReadonly 创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深
度只读转换 (暴露原始值)。

ref 接受一个内部值并返回一个响应式且可变的 ref 对象 ref 对象仅有一个 .value
property，指向该内部值。

unref 如果参数是一个 ref 则返回内部值，否则返回参数本身 这是 val = isRef(val) ?
val.value : val 的语法糖函数。

toRef 可以用来为源响应式对象(reactive 对象)上的某个 property 新创建一个 ref，然
后 ref 可以被传递，他会保持对其源 property 的响应式连接 (解释:一般如果给函数传递
一个响应式对象，可以通过解构来实现但是不会是响应式对象，那么 toRef 将 reactive
对象里面的某个属性拿出来变成响应式对象之后在作为参数传递过来)

toRefs 将响应式对象转换为普通对象，其中结果对象的每个 property 都指向原始对象相
应 property 的 ref，当从组合式函数返回响应式对象时，toRefs 非常有用，这样消费组
件就可以在不丢失响应性的情况下对返回的对象进行解构/展开：

isRef 检查值是否为一个 ref 对象

customRef 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显示控制，它需要一
个工厂函数，该函数接收 track 和 trigger 函数作为参数并且应该返回一个带有 get 和
set 的对象。

shallowRef 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的

triggerRef 手动执行与 shallowRef 关联的任何作用 (effect)。
