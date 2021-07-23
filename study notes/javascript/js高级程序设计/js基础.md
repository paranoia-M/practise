<!--
 * @Author: your name
 * @Date: 2021-07-20 11:18:53
 * @LastEditTime: 2021-07-22 18:10:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Front-end development learning\document\notes\study notes\javascript\js高级程序设计\js基础.md
-->

-   **Object 类型**
-   Object 类型都具有下列属性和方法

1. constructor 保存设用于创建当前对象的函数
2. hasOwnProperty(propertyName) 用于检查给定的属性在当前对象实例中(而不是在实例原型中是否存在)
3. isPrototypeOf(object)用于检查传入的对象是否是另一个对象的原型
4. propertyIsEnumerable(propertyName) 用于检查给定的属性是否可以用 for-in 语句来枚举
5. toLocalString() 返回对象的字符串表示,该字符串与执行环境的地区相对应
6. toString() 返回对象的字符串表示
7. valueOf() 返回对象的字符串 数值或布尔值表示,通常与 toString 方法的返回值相同

-   **语句**

1. if 语句;
2. do-while 语句;是一种后测试循环语句
3. while 语句; 是一种前测试循环语句
4. for 语句; 前测试循环语句
5. for-in 语句; 精准的迭代语句,可以用来迭代对象
6. label 语句; 可以在代码中添加标签
7. break 和 continue 语句; 循环中精确的控制代码
8. with 语句; 将代码的作用域设置到一个特定的对象中,就不用对一个对象进行多次相同的调用
9. switch 语句;

-   **函数**
-   函数的参数: 参数是以数组的形式存储在内部,可以通过 arguments 对象来访问这个参数数组从而获取传递到的参数,也就是说不用在乎传递了对少个参数,因为他每次访问的都是这个数组.还可以通过访问 arguments 对象的 length 属性来获取传入其中参数的个数
-   arguments 参数可以与命名参数一起使用,他们的值与对应的命名参数保持同步,但是他们的存储空间时相互独立的.如果只有一个命名参数,那么设置的 arguments[1]是不会映射到命名参数中,因为 arguments 对象的长度是由传入的参数决定的.(严格模式不能在没有命名参数的情况下设置参数的值,也不能重写)
-   没有重载: 例如 java 中可以为一个函数编写两个定义,只要参数的类型和数量不同即可,但是 js 函数不能这样
-   **复制变量值**
-   基本数据类型的复制会复制一份新值给新的变量,
-   引用数据类型的复制会复制指针,这个指针指向相同的地址,修改一个变量另一个也会改变
-   **检测数组**
-   value instanceof Array 可以确定某个对象是不是数组.他的全局环境是单一的,如果有多个不同的全局环境(多个框架),Array.isArray(value)用于确定某个值是不是数组,不管在那个框架

1. 栈方法: push() pop()
2. 队列方法:shift() unShift() 重排序方法:reverse() sort() sort 方法比较的是字符串因为它会调用数组每项的 toString()方法然后比较得到的字符串,所以使用他的时候就要传递两个参数进行比较 `a>b ? -1 : 1`
3. 操作方法: concat() slice() 这两个会创建新的方法 splice() 可以删除 插入 替换
4. 位置方法: indexOf() lastIndexOf()
5. 迭代方法: every() filter() some() forEach() map()
6. 缩小方法: reduce(前一个值 当前值 项的索引 数组对象) reduceRight()

-   **Date 类型**
-   new Date()返回当前日期 Date.now()返回当前日期的毫秒数
-   **RegExp 类型**
-   /pattern /flags g 表示全局匹配 i 表示不区分大小写 m 表示多行模式
-   **Function 类型**
-   函数声明和函数表达式 `function sum(num1, num2) // 函数声明 let sum = function (num1, num2) // 函数表达式`,解析器在执行环境中加载数据时,会率先读取函数声明,并使其在执行任何代码之前可用,函数表达式必须等到解析器执行他所在的那一行代码时才执行
-   **函数的内部属性**
-   arguments 和 this 使用 arguments.callee 指向拥有这个 arguments 对象的函数(乘阶函数),arguments.caller 保存着调用当前函数的函数引用,如果是在全局作用域中调用当前函数,他的值为 null(严格模式不能使用)
-   **函数的属性和方法**
-   每个函数包含两个属性 length: 表示希望接受的命名参数的个数 prototype: 保存着实例方法的真正所在
-   每个函数都包含两个非继承来的属性: apply() call() 用于设置函数内 this 的值
-   apply() 两个参数 1.当前函数的作用域 this 2. 参数数组 arguments
-   call()的确的参数数组必须明列出来
-   bind()这个方法会创建一个函数的实例,其 this 值会被绑定到传给 bind()函数的值
-   这三个的主要作用时扩充作用域
-   **基本包装类型**
-   Boolean Number String 1.创建实例 2.在实例上调用指定方法 3.销毁这个实例
-   eval() 这个方法就像是一个完整的解析器,他只接受一个参数,即将要执行的字符串.在 eval() 中创建的任何变量或函数都不会被提升,因为在解析代码的时候他们被包含在一个字符串中,他们只在 eval()只需的时候创建
-   **Math 对象**
-   Math.min() Math.max() Math.ceil() Math.floor() Math.round() Math.random()

## 面向对象的程序设计

-   **属性类型**
-   数据属性和访问属性
-   数据属性包含一个数据值的位置,在这个位置可以读取和写入值,有四个描述其行为的特性

1. [[Configurable]] 表示能否通过 delete 删除属性从而重新定义属性,能否修改属性的特性,默认值是 true
2. [[Enumerable]] 表示能否通过 for-in 循环返回属性,默认 true
3. [[Writeable]] 表示能否修改属性的值,默认 true
4. [[Value]] 包含这个属性的属性值,读取的时候从这里读取,写入的时候从这里写入,默认 undefined

-   访问属性器 他不能直接调用,必须使用 Object.defineProperty() 来定义

1. [[Configurable]] 表示能否通过 delete 删除属性从而重新定义属性,能否修改属性的特性,默认值是 true
2. [[Enumerable]] 表示能否通过 for-in 循环返回属性,默认 true
3. [[Get]] 读取属性时调用的函数.默认 undefined
4. [[Set]] 写入属性时调用的函数.默认 undefined

-   **创建自定义类型的方式**:组合使用构造函数模式和原型模式,构造函数模式用于定义实例属性,原型模式用于定义方法和共享属性,

```
function Person(name, age, job) {
				this.name = name;
				this.age = age;
				this.job = job;
				this.friends = ['aaa', 'bbb'];
			}
			Person.prototype = {
				constructor: Person,
				sayName: function () {
					alert(this.name);
				},
			};
			const person1 = new Person('he', 19, 'web font');
			const person2 = new Person('zha', 20, 'web end');
			person1.friends.push('ccc');
			console.log(person1.friends);
			console.log(person2.friends);
			console.log(person1.friends == person2.friends); // false
			console.log(person1.sayName == person2.sayName); // true
```

-   **借用构造函数** 在子类型构造函数的内部调用超类型也就是改变 this 指向,也可以达到继承的效果,同时也可以传递参数
-   **组合继承** 将原型链和借用构造函数的技术组合到一起

```
function SuperType(name) {
				this.name = name;
				this.colors = ['red', 'black', 'pink'];
			}
			SuperType.prototype.sayName = function () {
				console.log(this.name);
			};
			function SubType(name, age) {
				SuperType.call(this, name);
				this.age = age;
			}
			SubType.prototype = new SuperType();
			SubType.prototype.sayAge = function () {
				console.log(this.age);
			};
			const instance1 = new SubType('ddd', 123);
			instance1.colors.push('white');
			console.log(instance1.colors);
			instance1.sayName();
			instance1.sayAge();
			const instance2 = new SubType('fff', 456);
			console.log(instance2.colors);
			instance2.sayName();
			instance2.sayAge();
```

-   **原型式继承**
-   Object.create() 或者在 object()函数内部创建一个临时性的构造函数,然后将传入的对象,作为这个构造函数的原型

## 函数表达式

-   **闭包**
-   有权访问另一个函数作用域中的变量的函数,
-   _私有变量_ 特权方法: 有权访问私有变量和私有函数的公有方法 (例如对象的 get set 方法)
-   _静态私有变量_
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
