# constructor

- 在 js 中 constructor 是专门为 function 设计的，它存在于每一个 function 的 prototype 中，这个 constructor 保存了指向 function 的一个引用
- 在创建一个函数的时候会为改函数添加一个原型，之后在为 prototype 对象添加一个 constructor 属性，并且该属性保存指向函数的一个引用。这样当我们把这个函数作为自定义构造函数来创建对象的时候，对象实例内部会自动保存指向函数的一个引用
- 继承: 一个子类对象可以获得其父类对象的所有属性和方法
-

# prototype 和 _proto_

- 只有函数对象具有 prototype 这个属性
- prototype 和 _proto_ 都是 JavaScript 在定义一个函数或对象时自动创建的 预定义属性
- prototype 被实例 *proto*所指向
- *proto*指向 prototype 对象

# 继承

- 类式继承
  - 通过 son.prototype = new father() 来实现继承
- 构造函数式继承
  - 通过 father.apply() 实现 但是不能继承父类方法
- 组合式继承
  - 组合上面两种
  - 子类仍无法动态的传递参数给父类
  - 父类的构造函数被调用了两次
- 原型继承
  - 对组合式继承的一种封装
  - 浅拷贝
- 寄生继承
  - 寄生继承是依托于一个对象而生成的一种继承方式，因此称为寄生
- 寄生组合式继承
  - 子类继承父类的属性和方法，同时属性没有被创建在原型链上，因此多个子类不会共享同一个属性
  - 子类可以传递动态参数给父类
  - 父类的构造函数值执行了一次
- 终极版继承
- Es6 继承
  - 在 Es6 里面的 class 可以通过 extends 关键字继承，Es5 只能通过修改原型链来改变，子类一定要在 constructor 方法里面调用 super()方法，执行父类的 constructor
  - super() == father.prototype.constructor.call(this)
-
-
-
-
