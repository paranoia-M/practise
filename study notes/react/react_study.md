<!--
 * @Author: your name
 * @Date: 2021-11-09 10:45:20
 * @LastEditTime: 2021-11-24 11:16:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Front-end development learning\document\notes\study notes\react\react_study.md
-->

## react

# 使用 jsx 描述 UI 信息

- jsx-->javascript 对象-->DOM 结构
- 不直接转换为 dom 结构的原因
  - 不一定会把元素渲染到浏览器页面上，有可能渲染到 canvas 上，或者是手机 app 上，因此可以在这一步利用插件进行转换
  - 当数据变换，需要更新组件的时候，就可以用更快的算法来更新
- 类名: class = "header" --> className = {header}
- label 标签里面的 for 属性 for = "a" --> htmlFor = "a"
-
-

# 元素渲染

- 应该专注于 ui 在任意给定时刻的状态，而不是修改整个界面

# 组件

- 一个函数就是一个组件
- ES6 的 class 定义组件
- 组合组件
- react 组件都必须向纯函数一样保护他们的 props 不被更改
- 通过 es6 向 class 组件中添加局部的 state
- state 数据是向下流动的，并且在一个组件中可以选择把他的 state 作为 props 向下传递到子组件中
- state 和 props
  - state 主要用于保存，控制，修改自己可变状态
  - props 主要作用是让使用该组件的父组件可以传入参数来配置该组件
- 组件内部状态:局部状态，可以保存，修改，删除存储在组件内部的属性，
- 受控组件，由 react 控制的输入表单元素而改变其值的方式，称为受控组件
- 非受控组件:表单数据由 dom 本身处理，不受 setState()的控制，与传统的 HTML 表单输入相似，input 输入值即显示最新值，可以使用 ref 从 dom 获取表单值
- 可组合组件
- 函数式无状态组件(不需要本地状态或者组件生命周期方法时，就使用函数式无状态组件)
- 给组件声明样式
- 组件之间的传值
  - 父子组件
  - 子夫组件
  - 任意两个组件之间
    - contextType 只能使用一个 context 问题 const numberContext = React.createContext(); numberContext.Provider 和 numberContext.consumer
    - useContext const numberContext = React.createContext(); 父组件的形式一样，在子组件里面可以使用 useContext
-
-

# 生命周期(三个阶段)

- 旧的生命周期 v16.0 之前
- Mounting 加载阶段(6)
  **_constructor(组件实例化并且插入 dom) --> 默认 props --> 初始化 state --> componentWillMount() --> render(组件更新，state，props) --> componentDidMount()_**

1.  constructor() 加载的时候调用一次,可以初始化 state
2.  getDefaultProps() 设置默认的 props，也可以用 defaultProps 设置组件的默认属性
3.  getInitialState() 初始化 state，可以直接在 constructor 中定义 this.state
4.  componentWillMount() 组件加载时调用，以后组件更新不调用，整个生命周期之调用一次，此时可以修改 state,请求数据,定时器的启动
5.  render() 创建虚拟 dom 进行 diff 算法，更新 dom 树都在此进行
6.  componentDidMount() 组件渲染之后调用，只调用一次

- Updating 更新阶段(5)
  **_接收新的 props(加载时不调用)--> 接收新的 props --> 更新时(加载时不调用) --> 渲染 --> 更新完成时(加载时不调用)_**

1. componentWillReceiveProps(nextProps) 组件加载时不调用，组件接受新的 props 时调用
2. shouldComponentUpdate(nextProps,nextState) 组件接收到新的 props 时调用，return true 更新 dom return false 阻止更新
3. componentWillUpdate(nextProps,nextState) 组件加载时不调用，只有在组将更新时才调用
4. render() 创建虚拟 dom 进行 diff 算法，更新 dom 树都在此进行
5. componentDidUpdate() 组件加载时不调用，组件更新完成后调用

- Unmounting 卸载阶段(1)
  - componentWillUnmount() 组件即将卸载前调用，只调用一次。
- 新的生命周期
- Mounting 加载阶段(4)

1. constructor()
2. static getDerivedStateFromProps(props, state) 组件每次被重新渲染的时候，包括组件构造之后(虚拟 dom 之后，实际 dom 挂载之前)，每次获取新的 props 或 state 之后，每次接收到新的 props 之后都会返回一个对象作为新的 state，返回 null 则说明不需要更新 state，配合 componentDidUpdate，可以覆盖 componentWillReceiveProps 的所有用法
3. componentWillMount()

- Updating 更新阶段(5)

1. static getDerivedStateFromProps(props, state)
2. shouldComponentUpdate(nextProps, nextState)
3. render()
4. getSnapshotBeforeUpdate(prevProps, prevState) update 发生的时候，在 render 之后，在组件 dom 渲染之前；返回一个值，作为 componentDidUpdate 的第三个参数；配合 componentDidUpdate, 可以覆盖 componentWillUpdate 的所有用法
5. componentDidUpdate()

- Unmounting 卸载阶段(1)
  - componentWillUnmount()
- 错误处理
- static getDerivedStateFromError()
- componentDidCatch(error，info)

# 事件处理

- 事件中的 this 一般指实例本身，但是载单独的事件处理函数中 this 值为 null 或 undefined。所以需要手动的将 this 绑定
- 不能通过返回 false 的方式来阻止默认，必须显式的使用 preventDefault，
- 如果在事件处理函数中携程这样 onCliCK = {handleClick()} 他会在浏览器打开时立即执行，由于监听表达式是函数执行的返回值而不是函数，所以点击按钮时没有任何发生，如果是一个函数就会在点击按钮时执行

# 条件渲染

- 创建不同的组件来封装不同的行为，然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。
- 元素变量:使用变量来储存元素，可以有条件的渲染一部分，而其他渲染部分并不会因此而改变
- ref 属性:获取已经挂载的元素的 DOM 节点

# 列表

- 注意 key 应该放在组件上而不是放在循环的那个标签上

# 表单

# 状态提升

- 当多个组件需要反应相同的变化数据，就可以将共享状态提升到最近的共同父组件中去，

# React-HOOKS

- Hooks 只能在函数组件内或自定义组件内调用

1. react-hooks: 使用函数式生命代替 class，可以把大的组件分离成小的组件
2. useCallback: useMemo 版本的回调函数
3. useContext: 自由获取 context。获取父级组件传过来的值(在类组件中:const appContext = createContext(); static contextType = appContext; const value = this.contextType; 在函数组件中: const value = useContext(appContext))
4. useEffect: 可以在函数组件渲染后执行不同的副作用操作。类似于 componentDidMount and componentDidUpdate componentWillUnmount 的组合

- 副作用: 在纯函数(只要和外部存在交互就是不纯，例如引用外部变量，调用外部函数，)里面会有副作用。(纯函数)相同的输入一定会有相同的输出。也就是说非纯函数的操作 == 副作用。只要不是在组件渲染时用到的变量，所有的操作都是副作用.每一次运行副作用函数都是新的函数，组件销毁的时候也会执行副作用函数
- 执行的时间:初次渲染以后 DidMount, 组件更新之后 DidUpdate，真实 DOM 已经构建完成以后才会执行 useEffect 而(DidMount，DidUpdate 是在真实 dom 构建之前执行的两个钩子)
- 不需要清除数据
- react 更新 dom 之后运行一些额外的代码，发送网络请求，变更 dom，计时器，存储相关，记录日志等不需要清除数据(在每次更新之后都执行 useEffect)
- 需要清除数据如订阅外部数据源
- useEffect(() => {},[第二个参数:判断 state 的值是否与重新渲染的值一样，一样旧跳过])
- 清理函数: 第一次: render-->effect--> 第二次: render-->clear effect --> effect
- 组件更新挂在完成--> 执行 useLayoutEffect 回调 --> 浏览器 dom 绘制完成 --> 执行 useEffect 回调 。

5. useLayoutEffect: dom 渲染更新之前的 useEffect
6. useMemo:useMemo 小而香性能优化
7. useReducer: 无状态组件中的 redux
8. useRef: 获取元素，缓存数据
9. useState: 数据存储，派发更新。useState 返回值是一个数组，数组第一项用于读取此时的 state 的值，第二项为派发数据，数据更新，组件渲染到函数，函数的参数就是需要更新的值

- setCount 是异步代码，不能在当前的事件处理函数中拿到最新的 count 值，在 setCount 里面传一个回调函数另 count 作为一个参数传递进去就会编程一个最新的值
- 当 state 的值是原始值的时候，页面不会刷新

-
-
-
-
-

# 高阶组件

- 高阶组件就是一个函数,一个参数是组件返回值也是组件的函数，传给他一个组件，他返回一个新的组件
- 作用
  - 抽取重复代码，页面复用
  - 条件渲染，控制组件的渲染逻辑，控制权限
  - 捕获劫持被处理组件的生命周期，组件渲染性能追踪，日志打点
- mixin 继承模式
- extends 继承模式
- HOC 模式

1. 属性代理
   - 本质上是使用组合的方式，通过将组件包装在容器组件中实现功能
   - 属性代理方式实现的高阶组件和原组件的生命周期关系完全是 React 父子组件的生命周期关系，所以该方式实现的高阶组件会影响原组件某些生命周期等方法。
   - 返回一个无状态组件
   - 返回一 class 类组件

- 操作 props
  - 返回无状态组件
  - 返回有状态组件
- 抽离 state
  - 通过属性代理的方式实现的高阶组件无法直接操作原组件的 state，但是可以通过 props 和回调函数对 state 进行抽离
  - 常见的例子是实现非受控组件到受控组件的转变：
- 获取 refs 的引用
- 通过 props 实现条件渲染
  - 通过属性代理方式实现的高阶组件无法直接实现对原组件进行渲染劫持（即对原组件内部 render 的控制并不是很强），但可以通过 props 来控制是否渲染及传入数据：
-
-

2. 反向继承

- 两者的差异:
  - 原组件能否被包裹
  - 原组件是否被继承
  - 能否读取操作原组件的 state
  - 能否读取操作原组件的 props
  - 能否通过 ref 访问到原组件的 dom 元素
  - 能否影响原组件某些生命周期等方法
  - 能否取到原组件 static 方法
  - 能否劫持原组件生命周期方法
  - 能否渲染劫持
- 场景: 权限控制，组件渲染性能追踪，页面复用
- 引用 dom 元素:
  - 访问 Dom Api(focus 事件，媒体播放)
  - 调用命令式 dom 节点动画
  - 与需要 dom 节点的第三方库集成
  - ref 属性可以让我们访问元素中的一个节点，
  - ref 在类组件:
  - ref 在函数组件:
-

# Redux

- 一种架构模式
- 所有 state 都存储在一个单一的 store 中，唯一改变 state 的方法时触发 action，一个描述发生什么的对象，为了描述 action 如何该百年 state 树，需要编写 reducers
- 三大原则: 单一数据源，state 是只读的，使用纯函数来执行修改
- React-Redux 将所有组件分成两大类: UI 组件和容器组件 UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。
- UI 组件
  - 只负责 UI 呈现，不带有任何逻辑组件
  - 没有状态(即不使用 this.state)
  - 所有数据都由参数 this.props 提供
  - 不使用任何 redux 的 API
- 容器组件
  - 负责管理数据和业务，不负责 UI 呈现
  - 带有内部状态
  - 使用 Redux 的 API
- mapStateToProps(state, [ownProps:容器组件的 props 对象])connect 的第一个参数建立一个从外部的 state 对象到 ui 组件 props 对象的映射关系
- mapDispatchToProps(dispatch,ownProps) connect 的第二个参数，用来建立 UI 组件的参数到 store.dispatch 方法的映射，它定义了哪些用户的操作应该当作 action
- <provide>组件可以让容器拿到 state，就不用一层一层的嵌套下去
-
-

# React-redux

1. store 存放数据的仓库 const store = createStore(reducer)
2. state 数据仓库当中存储的数据 store.getState()
3. action 对象:用来描述当前如何操作 state 状态 const action = {type: "ADD", num: 2}
4. dispatch 用来更改当前 state 的唯一方法 store.dispatch(action)
5. reducer 函数: 返回一个新的 state，更新当前 state. const reducer = (state,action) => {}

- useState: 步骤，先创建 action 用来描述当前如何操作 state，然后创建 reducer，根据 state 和 action 来返回对应的方法，最后创建 store,
  - 当 useState 的参数是对象的时候应该用 useReducer
- 抽离 actions 抽离 actions 类型 抽离 reducer
- 响应到视图的时候要使用 store.subscribe(render) 来进行监听，因此使用 react-redux 进行数据监听
  **文档**
- Provider 组件，能将 Redux store 提供给你的 app <Provider store = {store}></Provider>
- Hooks React-redux 提供了一系列 react hooks，能够联系组件和 store
  - useSelector 从存储状态中读取值，并订阅更新，而 useDispatch 返回

1. state 状态

- DomainDate:服务器端数据，如获取用户信息，商品列表
- Ui State: 决定当前 Ui 展示的状态，如弹框的显示和隐藏，受控组件
- App State: App 级别状态，如当前是否请求 loading，当前路由信息等可能被多个和组件区使用到的状态

2. action 事件

- 是把数据从应用传到 store 的载体，他是 store 数据的唯一来源，我们可以将 store.dispatch()将 action 传递给 store

3. reducer(state,action)

- 本质是函数，用来响应发送过来的 action，然后经过处理，把 state 发送给 store

4. store

- 把 action 和 reducer 联系到一起的对象
- 维持应用的 state
- 提供 getState() 方法获取 state
- 提供 dispatch()方法发送 action
- 通过 subscribe() 来注册监听 (在页面里面知道什么时候返回数据)
- 通过 subscribe() 返回值来注销监听
- 异步 Action
  - 发起请求的时刻，接收到响应的时刻，这两个时刻都会更改 state，因此需要 dispatch 同步到 action 一般情况下，每个 API 请求都需要 dispatch 至少三种 action：
  - 一种通知 reducer 请求开始的 action。
  - 一种通知 reducer 请求成功的 action。
  - 一种通知 reducer 请求失败的 action。
-
- **React-redux**

- 分为展示组件和容器组件
- 展示组件
- 容器组件 Provider
- thunk 异步处理
- mapStateToProps(state,ownProps) 哪个组件想要接收数据就使用它,必须要返回值。 state:redux 中的 store; ownProps: 自己的 props
- mapDispatchToProps(dispatch,ownProps) 哪个组件想要发送数据就使用它,返回值是对象
- todoList: 组件
  - components/Todo.js //展示每条 li
  - components/TodoList.js // ul 组件,用于显示 ul 列表
  - components/Link.js //带有 callback 回调功能的链接
  - components/Footer.js // 一个允许用户改变可见 todo 过滤器的组件。
-

# react-router

- 安装: npm install -S react-router npm install react-router-dom
- 路由器 Router 就是 react 的一个组件，他本身是一个容器，要通过 Route 组件定义
- Router 组件有两种类型的路由

1. BrowserRouter http://example.com/about

- 要求服务端对发送的不同 url 都要返回对应的 Html，同时如果没有 url 相应的页面就会返回 404
- 在 URL 中使用哈希符#来使服务端忽略#后面的所有 url 内容，，这样服务端只需要对相应的路由做处理并返回 html，然后后面的内容全部交给客户端来处理，也就是我们的 spa 应用，所以在任意路由进行页面刷新都不会是 404
- 每个 router 组件都会创建一个 history 对象。他记录了当前的位置(history.location)，还记录了以前的位置，在当前的位置发生变化时页面会被重新渲染，就有了跳转导航的感觉
- history.push 和 history.replace 可以进行路由跳转
  - 当你点击一个 <Link> 组件时，history.push 就会被调用，
  - <Redirect> 组件时，history.replace 就会被调用。

2. HashRouter http://example.com/#/about

- Router 组件有一个 path 属性，如果当前位置与路径名称相匹配就会被渲染，
- Link 组件被用来在页面之间进行导航(在不刷新的条件下)，类似于 a 标签，，是对他的封装
- NavLink 组件与 Link 组件功能一样，区别在于可以判断其 to 属性是否是当前匹配到的路由，style 或 className 可以接收一个函数，函数接收一个 isActive 参数，可根据该参数调整样式
- 使用 useNavigate 钩子函数生成 navigate 对象，取代了之前的 useHistory
- 动态路由参数
  - 在 Route 组件中 path 属性中定义路径参数
  - 在组件中通过 useParams hook 访问路径参数
  - v6 移除了 withRouter 所以在类组件中无法从 props 获取到参数，因此应当将类组件改写为函数组件或者使用 HOC
- search 参数
  - 查询参数不需要在路由中定义
  - 使用 useSearchParams hook 来访问查询参数，用法与 useState 类似，会返回当前对象和更改他的方法
  - 更改 searchParams 时，必须传入所有的查询参数，否则会覆盖已有的参数
- 嵌套路由
  - 注意要在父组件中使用 Outlet 来显示匹配到的子路由
- 默认路由
  - 在嵌套路由中，如果 url 仅匹配了父级 url，则 Outlet 中会显示带有 index 属性的路由，也就是说如果有多个子路由并且都没有引用则会显示带有 index 的那个子路由
- 全路由匹配
  - path 取值为\*时，可以匹配任何非空路由,同时该匹配用于最低的优先级可以用来设置 404 页面
- 多组路由
  - 通常一个应用中只有一个 Routes 组件，但根据实际需要也可以定义多个路由出口(如侧边栏和主页面都需要根据 url 而变化)
- 重定向
  - 挡在某个/a 路径下，要重定向到路径/bs 时可以通过 Navigate 组件进行重定向到其他路径
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
