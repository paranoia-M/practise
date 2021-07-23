<!--
 * @Author: your name
 * @Date: 2021-07-11 14:40:21
 * @LastEditTime: 2021-07-17 20:25:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\study notes\css-study\css-style6.md
-->

## 第六章 用户体验

-   **选择合适的鼠标指针**
-   **扩大可点击区域**
-   **自定义复选框**

```
<input type="checkbox" id="awesome" />
<label for="awesome">Awesome!</label>

/* 定义复选框样式 */
			input[type='checkbox'] + label::before {
				content: '\a0'; /* 不换行空格 */
				display: inline-block;
				vertical-align: 0.2em;
				width: 0.8em;
				height: 0.8em;
				margin-right: 0.2em;
				border-radius: 0.2em;
				background: silver;
				text-indent: 0.15em;
				line-height: 0.65;
			}
			/* 定义选中样式 */
			input[type='checkbox']:checked + label::before {
				content: '\2713';
				background: yellowgreen;
			}
			/* 不损失可访问性隐藏默认复选框 */
			input[type='checkbox'] {
				position: absolute;
				clip: rect(0, 0, 0, 0);
			}
			/* 聚焦时改变样式 */
			input[type='checkbox']:focus + label::before {
				box-shadow: 0 0 0.1em 0.1em #58a;
			}
			/* 禁用时改变样式 */
			input[type='checkbox']:disabled + label::before {
				background: gray;
				box-shadow: none;
				color: #555;
			}
```

-   **通过阴影来弱化背景**
-   **通过模糊来弱化背景**
-   **滚动提示**
-   **交互式的图片对比控件**
-   **范围输入控件**

## 第七章 结构与布局

-   **自适应内部元素**
-   `width: min-content;`将解析为这个容器内部最大的不可断行元素的宽度（即最宽的单词、图片或具有固定宽度的盒元素）
-   **精确控制表格列宽**
-   `table-layout` : 自动表格布局算法`table {table-layout: fixed;width: 100%;}`
-   **根据兄弟元素的数量来设计样式**
-   只有一个列表项时 `li:only-child; :first-child:last-child; li:first-child:nth-last-child(1)`
-   `li:first-child:nth-last-child(4) ~ li /* 当列表正好包含四项时，命中所有列表项 */`
-   `:nth-child(n+4)`表示选中除了第一 二 三 个之外的所有元素
-   **满幅的背景,定宽的内容**
-   就不用给 footer 设置多余的容器来包裹这个元素,同样可以达到效果

```
footer {
 padding: 1em;
 padding: 1em calc(50% - 450px);
 background: #333;
}
```

-   **垂直居中**
-   h5 新增的语义话标签: `header nav footer section article aside figure figcaption`
-   块级元素:`div p h1-h6 br ul ol ` 11 个
-   行内元素:`a span strong b em i img input select` 9 个
-   不仅建议行内元素其那套块级元素
-   对一个元素实现水平居中: 如果是行内元素则给他的父元素设置 `text-align: center` 如果是一个块级元素 就对自身应用 `margin: auto`
-   **基于绝对定位的解决方案**
-   在要求元素有固定的宽高后

```
main {
 position: absolute;
 top: 50%;
 left: 50%;
 margin-top: -3em; /* 6/2 = 3 */
 margin-left: -9em; /* 18/2 = 9 */
 width: 18em;
 height: 6em;
 <!-- 简化版 -->
 top: calc(50% - 3em);
 left: calc(50% - 9em);
 width: 18em;
 height: 6em;
}
```

-   不需要固定宽高的方法

```
main {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
}

```

-   **基于视口单位的解决方案**
-

```
main {
 width: 18em;
 padding: 1em 1.5em;
 margin: 50vh auto 0;
 transform: translateY(-50%);
}

```

-   **flexbox 解决方案**
-   给父元素应用 flex 给子元素应用` margin: auto;` 同样可以达到居中的效果
-   也可以让容器内容居中: `justify-content: center; align-items: center;`
-   **紧贴底部的页脚**
-   **固定高度的解决方案**
-   减去页脚实际高度

```
main {
min-height: calc(100vh - 2.5em - 7em);
/* 避免内边距或边框搞乱高度的计算： */
box-sizing: border-box;
}
```

-   **flex 解决方案**
-   给 footer 元素的父元素设置 `display: flex; flex-flow: column;`这样 footer 的高度会根据内容决定并且会跟随在 container 之下

```
body {
 display: flex;
 flex-flow: column;
 min-height: 100vh;
}
main { flex: 1; }
```
