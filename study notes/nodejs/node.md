<!--
 * @Author: your name
 * @Date: 2021-09-14 21:08:31
 * @LastEditTime: 2021-09-25 12:50:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Front-end development learning\document\notes\study notes\nodejs\node.md
-->

- **在浏览器端调试** nodejs node --inspect --inspect-brk get.js
- **node 进程管理工具** supervisor nodemon forever pm2

#### 什么是 Node.js

- Node.js 是 JavaScript 运行时环境,构建在 v8 引擎之上，事件驱动，非阻塞 I/O 模型
- nodejs 是单词加载
- node-inspector 调试工具

#### 基本原理

- 谷歌的 v8 是 Javascript 引擎
- Node.js 内置 v8 引擎，所以他是 Javascript 语法
- Javascript 最大的特征是单线程，也就是说同一时间只能做一件事
- 单线程就意味着要排队
- 排队量大不代表 cpu 忙碌，只是因为是单线程，因为 I/O 很慢，不得不等着结果出来，再往下执行
- cpu 可以完全不管 I/O 设备，挂起处于等待中的任务，先运行排在后面的任务
- 将等待中的 I/O 任务放到 Event Loop 里
- 由 Event Loop 将 I/O 任务放到线程池里

#### 应用场景

- 跨平台: ：覆盖你能想到的面向用户的所有平台，传统的 PC Web 端，以及 PC 客户端 nw.js/electron 、移动端 cordova、HTML5、react-native、weex，硬件 ruff.io 等
- Web 应用开发: 网站、Api、RPC 服务等
- 前端: 三大框架 React \ Vue \ Angular 辅助开发，以及工程化演进过程（使用 Gulp /Webpack 构建 Web 开发工具）
- npm 上各种工具模块，包括各种前端预编译、构建工具 Grunt / Gulp、脚手架，命令行工具，各种奇技淫巧等
- 具体场景: 传统网站;Api;Api 代理;IM 即时聊天;反向代理;前端构建工具;命令行工具;操作系统;跨平台打包工具;P2P;编辑器;物联网与硬件

#### Node 核心：异步流程控制

1. Api 写法：Error-first Callback 和 EventEmitter

- 回调函数的第一个参数返回的 error 对象，如果 error 发生了，它会作为第一个 err 参数返回，如果没有，一般做法是返回 null。
- 回调函数的第二个参数返回的是任何成功响应的结果数据。如果结果正常，没有 error 发生，err 会被设置为 null，并在第二个参数就出返回成功结果数据。

2. 中流砥柱：Promise
3. 终极解决方案：Async/Await

#### 全局对象

- Node.js 中的全局对象是 global， process 是一个全局变量，即 global 的属性，他用于描述当前 Node.js 进程状态的对象

1. process.argv 第一个元素是 node，第二个元素是脚本文件名 从第三个元素开始每个元素是一个运行参数
2. process.stdout 是标准输出流
3. process.stdin 是标准输入流
4. process.nextTick(callback)的功能是为事件循环设置一项任务

#### 常用工具 util

- util.inherits(constructor,superConstructor),实现对象间原型继承的函数
- util.inspect(object,[showHidden],[depth],[colors]) 将任意对象转换为字符串的方法通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象

#### 时间驱动 events

1. 事件发射器 events.EventEmitter,核心是事件发射与事件监听器功能的封装，eventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递
2. EventEmitter.on(event,listener)为指定事件注册一个监听器
3. EventEmitter.emit(event,[arg1],[arg2],[arg3]...) 发射 event 事件，传递若干个可选参数到事件监听器的参数表
4. EventEmitter.once(event, listener)为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻解除该监听器。
5. EventEmitter.removeListener(event, listener) 移除指定事件的某个监听器，listener 必须是该事件已经注册过的监听器
6. EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器，如果指定 event，则移除指定事件的所有监听器

---

7. error 事件，EventEmitter 定义了一个特殊的事件 error，它包含错误的语义，我们在遇到异常的时候通常会发射 error
   事件，如果 EventEmitter 没有响应的监听器 Node.js 会把它当作异常，退出程序并打印调用栈。

#### 文件系统

- fs 模块是文件操作的封装，它包括了文件的读取，写入，更名，删除，遍历目录，链接等，fs 模块其中都提供了异步与同步的两个版本

1. fs.readFile(filename,[encoding],[callback(err,data)]) 读取文件的函数，
2. fs.readFileSync(filename,[encoding],[callback(err,data)])
3. fs.open(path,flags,[mode],[callback(err,fd)]) 异步的打开文件 flags 的值可以为

   - r 以读取模式打开
   - r+ 以读写模式打开
   - w 以写入模式打开文件，如果文件不存在则创建
   - w+ 以读写模式打开文件，如果文件不存在则创建
   - a 以追加模式打开文件，如果文件不存在则创建
   - a+ 以读取追加模式打开文件，如果文件不存在则创建

4. fs.read(fd,buffer,offset,length,position,[callback(err,bytesRead,buffer)]) 从指定文件描述符 fd 中读取数据并写入 buffer 指向缓冲区对象
5. fs.open(path,flags,[mode],[callback(err,fs.openSync(path, flags, [mode]), fd)])
6. fs.close(fd, [callback(err)])

#### http 服务器

1. http.serverResponse() 是返回给客户端的信息，决定了用户最终能看到的结果
2. get 请求
3. post 请求
4. http.ServerResponse 是返回给客户端的信息，决定了用户最终能看到的结果。它也是由 http.Server 的 request 事件发送的，作为第二个参数传递，一般简称为 response 或 res

#### http 客户端

- http.request(options,callback) // host; port; method; path; headers
- http.get(options, callback)
- http.post(options, callback) // post 要添加头部信息 headers
- http.ClientRequest() 是由 http.request 和 http.get 返回产生的对象，表示一个已经产生而且正在进行中的 http 请求，他提供一个 response 事件 http.request 或 http.get 第二个参数指定的回调函数的绑定对象。

#### 跨域解决办法

- jsonp
- cros
- http-proxy-middware
- 爬虫

#### MVC 模式

- 模型-视图-控制器
- 模型是对象及数据结构的实践 module
- 视图是用户界面，在网页中通常是 HTML 的组织结构 view
- 控制器用于处理用户请求和数据流，复杂模型，将输出传递给视图 controller

#### MVVM 模式

- module // 业务逻辑处理
- view // html css 模板文件
- viewModule // js runtime compiler 是由前端开发人员组织生成和维护的视图数据层。在这一层，前端开发者对从后端获取的 Model 数据进行转换处理，做二次封装，以生成符合 View 层使用预期的视图数据模型

#### express 框架

- 功能:路由控制，模板解析支持，动态视图，用户会话，CSRF 保护，静态文件服务，访问控制器，访问日志，缓存，插件支持
- REST(Representational State Transfer)表征状态转移，他是一种基于 HTTP 协议的网络应用的接口风格，充分利用 http 的方法实现统一风格接口的服务
- http 协议定义了八种标准的方法

1. GET 请求获取指定资源 获取
2. HEAD 请求指定资源的响应头
3. POST 向指定资源提交数据 新增
4. PUT 请求服务器存储一个资源 更新
5. DELETE 请求服务器删除指定数据 删除
6. TRACE 回显服务器收到的请求，主要用于测试或诊断
7. CONNECT HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。
8. OPTIONS 返回服务器支持的 HTTP 请求方法。

- 控制权转移 express 支持同一路径绑定多个路由响应函数

#### 模板引擎

- <% code %> JavaScript 代码
- <%= code %> 显示替换过 HTML 特定字符的内容
- <%- code %> 显示原始 HTML 内容
- 片段视图 include 是一种视图助手
- 视图助手: 允许在视图中访问一个全局的函数或对象，不用每次调用视图解析的时候单独传入
  - 静态视图助手 可以是任何类型的对象，包括接受任意参数的函数，但访问到的对象必须是与用户请求无关的。静态视图助手可以通过 app.helpers() 函数注册，它接受一个对象，对象的每个属性名称为视图助手的名称，属性值对应视图助手的值
  - 动态视图助手 只能是一个函数，这个函数不能接受任何参数，但可以访问 req 和 res 对象。动态视图助手则通过 app.dynamicHelpers()注册，方法与静态视图助手相同，但每个属性的值必须为一个函数，该函数提供 req 和 res

#### 建立微博网站

- 功能分析:
  1. 以用户为中心的登陆，注册功能
  2. 微博网站的核心功能是信息发放表，包括数据库访问，前端显示，信息的评论，转发，圈点用户

#### MongoDB 文档型数据库

- 数据库操作
  - db //查询当前数据库
  - show dbs //查询所有的数据库
  - use [name] //创建/切换数据库
  - db.stats() //显示数据库状态
  - db.version() // 查看 db 的版本
  - db.getMongo() //查看当前 DB 的链接机器的地址
  - db.dropDatabase() // 删除数据库
- 集合操作
  - db.createCollection('collectionName') // 创建集合
  - db.getCollection('指定的名称') /// 得到指定名称的集合
  - db.getCollectionNames() //得到当前 db 的所有集合
  - db.printCollectionStats() // 显示当前集合的所有状态
  - db.adao.drop() //删除集合
- 文档操作
  - db.users.insert([{name: "jenny", num: '111'}]) //插入数据
  - db.users.save([{name: "jenny", num: '222'}]) //插入数据
  - db.users.find() //查看插入的情况
  - db.adao.update({name: "jenny"},{$set: {num: '333'}}) // 修改数据
  - db.users.update({name: "jenny"}, {$inc: {num: 200}}) // 修改数据,在原有的基础上增加数值
  - db.users.update() // 修改数据
  - db.users.remove({})
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
