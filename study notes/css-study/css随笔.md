<!--
 * @Author: your name
 * @Date: 2021-07-13 16:15:59
 * @LastEditTime: 2022-04-08 13:56:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Front-end development learning\document\notes\study notes\css-study\css随笔.md
-->

## css 知识点

- **块级元素**
- 当给一个块级元素固定宽度后，使用`margin: 0 auto`那么容器会自动适应页面布局并且居中显示。Q 当页面小于容器宽度时会出现一个横向的滚动条。S 使用`max-width`
- Q 当创建了一盒子他的宽高不一定是设置的宽高，因为有 padding margin 这些可以撑开元素的高度。S
  `box-sizing: border-box`他不会增加内边距和边框
- **position**
- static: 默认属性，一个元素被设置为它代表这个元素不会有任何影响
- relative: 正常只使用 relative 不会有人不和影响，但是添加了其他属性会有所不同，比如对一个相对定位的元素改变其 left top bottom 等只会影响元素，使其偏移正常位置，但是对其他的元素没有任何影响，也就是只对其本身的位置产生偏移。注意: 偏移是相对于其原始位置，并非是页面的初始位置
- fixed: 元素会相对于视窗来定位，而不是元素的起始位置。同样需要 left top bottom 等元素进行改变。页面滚动也不能影响其定位
- 一个固定定位不会保留他在原本页面应有的空隙。脱离了文档流
- absolute: 相对于最近的 positioned 祖先元素。如果绝对定位的元素没有 positioned 的祖先元素，则他会把文档的 body 元素视为祖先元素，并且它会随着页面滚动而移动。记住一个“positioned”元素是指 position 值不是 static 的元素。
- **float**
- 可以用于实现文字环绕效果
- clear 可以清除浮动
- 媒体查询也可以处理好布局的问题，尤其是移动设备
- 使用`display: inline-block` 也可以替换一些 float 布局，这样就不用给额外的盒子取消浮动
- vertical-align 属性会影响到 inline-block 元素，你可能会把它的值设置为 top
- 在 flex 布局容器中，如果取消某个容器的 flex 会固定他的宽度，使用`flex: 1` 他会显示容器在剩余的部分的占比，就不用设置宽度了
-

# src 和 href 的区别

- 他们都是引入外部资源的属性，例如图片，视频，css 文件，js 文件
- href: Hypertext Reference 超文本引用，属性通过指定 web 资源位置，来定义当前元素或者当前文档与目标资源之间的连接或关系,用在 link 和 a 标签上
- src: 会将属性会将资源嵌入到当前文档中元素搜索在的位置，表示引用资源，替换当前元素，用在 img，script，iframe 上。

link & @import 的区别
link 是 html 标签，@import 属于 css 范畴
link 引入 css 时会在页面载入同时加载，@import 需要页面网页完全载入以后加载
link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。
ink 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。

- flex

```
.container{
    /*or display：inline—flex(区别跟block和inline-block区别一样)，让一个元素变为flex容器*/
    display:flex;


    /*改变items的流向*/
    flex-direction:row;	/*默认的从左到右依次排开*/
    flex-direction:row-reverse; /*从右到左依次排开*/
    flex-direction:column;	/*从上到下依次排开*/
    flex-direction:column-reverse; /*从下到上依次排开*/


    /*是否折行*/
    flex-wrap:nowrap; /*默认是不折行的，弹性排版*/
    flex-wrap: wrap; /*折行*/
    flex-wrap: wrap; /*从下到上排版，然后折行*/


    /*主轴的对齐方式*/
    justify-content: flex-start; /*默认样式，从开始的地方开始排，尽量往后靠*/
    justify-content: flex-end;  /*从最后开始排，尽量往后靠*/
    justify-content: center;  /*尽量往中间靠*/
    justify-content: space-around; /*把空间放到周围*/
    justify-content: space-between; /*把空间全部放到中间*/
    justify-content: space-evenly; /*把空间平均分*/


    /*次轴的对齐方式*/
    align-items:stretch; /*默认的样式，默认拉到跟最长的一样长*/
    align-items:flex-start;/*都往上顶*/
    align-items:flex-end;	/*都往下顶*/


    /*多行对齐*/
    align-content:flex-start; /*都往上顶，把多余的空间放到下面*/
    align-content:flex-end; /*都往下顶，把多余的空间放到上面*/
    align-content:center; /*把多余的行高放到两边*/
    align-content: stretch; /*把多余的空间平均分配*/
    align-content: space-between; /*把多余的空间放到两边*/
    align-around: space-around; /*把多余的空间放到周围*/

}
.item{
    /*用order排列*/
    order:1; /*可以用order来从小到大排列，默认是0，*/


    /*控制item所占的分数*/
    flex-grow:1; /*让item的这个值都为相同的时候会平均分配空间*/

    /*flex-shrink控制如何变瘦*/
    flex-shrink:0;  /*当页面缩小到要挤压当前item时，我不缩小，我的兄弟元素先缩小*/


    /*控制基本宽度*/
    flex-basis:100px;

    /*可以用align-self来定制align-items*/
    align-self：flex-end;
}
```

- css 盒模型
  标准盒模型: 设置:box-sizing: context-box; 包含:content+padding+border+margin width = content width; height = content height
  ie 盒模型: 设置:box-sizing: border-box; 包含:content+padding+border+margin width = content+padding+border; height = content+padding+border
- js 获取和模型的宽高
  dom.style.width/height【只能取到内联元素的宽高】style 标签中和 link 外链获取不到
  dom.currentStyle.width/height【只有 IE 支持】取到的时最终渲染后的宽高，只有 IE 兼容
  document.getComputedStyle(dom,null).width/height，同上，IE9 以上支持。
  dom.getBoundingClientRect().width/height 得到渲染后的宽和高，大多浏览器支持。IE9 以上支持。
  dom.offsetWidth/offsetHeight【常用】包括高度（宽度）、内边距和边框，不包括外边距。最常用，兼容性最好。
- 根据盒模型解释边距重叠
  边距重叠是指垂直相邻的两个块级元素，当上下两个边距相遇时，其外边距会产生重叠现象，且重叠后的外边距等于其中较大者，水平方向不会改变
  重叠后的 margin 都是正值时取较大的，都是负值时取绝对值较大的，然后负向移位，有正有负，选取绝对值大的正负两值然后相加
- 边距重叠解决方案

1. 嵌套块级元素
   为父元素添加 1px 的 padding 值
   父元素设置 overflow:hidden;
   子元素或父元素设置 display: inline-block;
   父元素加前置内容（::before）生成。（推荐）
2. 相邻块（兄弟）元素垂直外边距的合并（外边距塌陷）
   如果上面的元素有下边距 margin-bottom 下面的元素有上边距 margin-top，则会造成塌陷，会取两个之中较大的那一个
   在设置的时候可以设置成统一的 margin
   或者使用 bfc
   浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及 overflow 值不为 visible 的块级盒子，都会为他们的内容创建新的 BFC（块级格式上下文）。
   在 BFC 中，盒子从顶端开始垂直的一个接一个排列，两个盒子之间的垂直间距由他们的 margin 值决定，在同一个 BFC 中，两个相邻块级盒子的垂直外边距会产生折叠。
   在 BFC 中，每一个盒子的左外边缘会触碰到容器的左边缘，对于从右到左的格式来说，则触碰到右边缘。即使在浮动里也是这样的（尽管一个盒子的 line boxes 会因为浮动而收缩），除非这个盒子的内部创建了一个新的 BFC（由于浮动，在这种情况下盒子本身将会变得更窄）

- 创建 BFC
  浮动元素：float:left | float:right;【会导致父元素的宽度丢失,也会导致下边的元素上移】
  定位元素：position:absolute | position:fixed；
  display 的一些值：display:inline-block【转为行内块会导致宽度丢失】 | display:flex | display:table | table-cell、table-caption、inline-table、inline-flex、grid、inline-grid；
  overflow 值不为 visible：overflow:hidden;【将会剪切掉溢出的元素】 | overflow:auto、overflow:scroll;
  display:flow-root【新属性，BFC 创建新方式，没有任何副作用，注意浏览器兼容】
  display:table 也可以生成 BFC 的原因在于 Table 会默认生成一个匿名的 table-cell，是这个匿名的 table-cell 生成了 BFC。
- flex 容器属性

  justify-content: flex-start | flex-end | center | space-between | space-around;定义了项目在主轴的对齐方式。
  flex-start:左对齐(元素整体以左边为起点依次排列)
  flex-end:右对齐(元素整体以右边为起点依次排列)
  center：居中
  space-between: 两端对其项目之间的间隔相等，即剩余空间等分成间隙
  space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍

  align-items: flex-start | flex-end | center | baseline | stretch; 定义了项目在交叉轴上的对齐方式
  flex-start:交叉轴的起点对齐,(垂直轴的起点为页面的顶部)
  flex-end：交叉轴的终点对齐
  center：交叉轴的中点对齐
  baseline: 项目的第一行文字的基线对齐
  stretch:默认值为 stretch 即如果项目未设置高度或者设为 auto，将占满整个容器的高度。

  align-content: flex-start | flex-end | center | space-between | space-around | stretch;定义了多根轴线的对齐方式，如果项目只有一根轴线，那么该属性将不起作用

# flex 项目属性

- flex-direction 主轴方向
  flex-direction: row | row-reverse | column | column-reverse;
  注意，改变主轴方向指的是改变主轴的起始位置和结束位置

- flex-wrap 决定容器内项目是否可以换行,换行后,每一行将成为新的容器
  flex-wrap: nowrap | wrap | wrap-reverse;
  wrap:项目主轴尺寸超出容器时换行，第一行在上方
  nowrap: 不换行，当主轴方向固定，空间不足时，项目尺寸会缩小,应该注意溢出的问题
  wrap-reverse: 换行，第一行在下方

- 上面两个属性的简写
  flex-flow: <flex-direction> || <flex-wrap>; flex-direction 和 flex-wrap 的简写形式; flex-flow: row wrap;

order 定义项目在容器中的排列顺序，数值越小越靠前，可取负值

- flex 元素上的属性
  剩余空间指的是 flex 容器减去所有 flex 项加起来的大小

1. flex-grow 父元素容器宽度富裕时，分配多余的宽度比例，单位是数字

2. flex-shrink 父元素容器宽度不足时，分配欠缺的宽度比例，单位时数字

3. flex-basis 父元素容器分配的基准值，也就是最小的计算单位，单位是数字,他的优先级大于 width
   首先判断盒模型是如何计算宽高:
   默认 box-sizing: content-box; 宽 高 == width height
   box-sizing: border-box; 宽 高 = width + padding + border
   在 border-box 属性下,flex-basis 的宽度等于盒子整体的宽度,这时候就算设置了 padding 也是不会生效的

探究 flex-basic 和 width 的关系:
在 flex 布局下设置 width 是不生效的,生效的是 flex-basic
自身渲染尺寸的优先级 max-width > width >content size
重点: 如果盒子内容区域的 width 小于盒子的最小 width,那么没什么影响,如果盒子的内容区域大于盒子的最小 width,那么盒子的 flex-basic 会自适应
在配合 word-break:break-all 会使内容换行.
同时 flex-basic 会受限于 max-width,他设置的优先级是最高的

4. flex-wrap 都为 1 的同时剩余空间不够了同时 flex-wrap：nowrap 则 grow 将不起作用

align-self: auto | flex-start | flex-end | center | baseline | stretch; 允许单个项目有与其他项目不一样的对齐方式
flex: flex-grow, flex-shrink 和 flex-basis 的简写：
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]

- background-image: url;
  浏览器水平和垂直的显示背景图片，让图片水平的平铺在整个页面上(背景图象总是出现在背景颜色的上面)

# 如何让 img 图片自适应容器的大小

1. 设置图片宽高为 100%
   虽然图片适应了盒子但是失真了(图片比容器小的情况下放大就会失真)处理方法是:
   图片宽高都小于容器时将小于容器的图片水平，垂直居中
   图片宽高大于容器时保持宽高比将 width 和 height 充满容器
   代码如下:
   ```
   max-height: 100%;
   max-weight: 100%;
   margin: auto;
   display: block;
   ```
2. 背景图的方式
   background-size: contain;把图象扩展至最大尺寸，以使其宽度和高度完全适应内容区域
   ```
   height: 400px;
   width: 500px;
   border: 1px solid black;
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   ```

# BFC & margin 塌陷

BFC 就是块级格式化上下文 block formatting context

特性:
BFC 就是页面上一个隔离的独立容器，容器的子元素不会影响到外面的元素
计算 BFC 高度时，浮动元素会被计算进去，可用于清除浮动
内部的 box 会在垂直方向，从顶部开始一个接一个放置，相当于文档流
box 垂直方向的距离由 margin 决定，会叠加而不是取 margin-bottom 和 margin-top 的最大值，可解决 margin 塌陷

触发条件:
position: fixed/absolute; // 绝对定位，固定定位
display: inline-block;
float: left/right;
overflow: 不为 visible(scroll/hidden/auto)

margin 塌陷:
兄弟元素:垂直方向会出现 margin 合并(取较大的值)，水平方向不会合并，正常叠加
父子元素:子元素设置 margin-top 会跳出父元素(同时忽略父元素的 margin-top)，

# display 属性

display 属性：规定元素应该生成的框的类型（改变元素的类型，使用 display 属性）。

none:此元素不会被显示，没有框的类型，没有框类型的元素，是无法在浏览器中显示的，因此达到了隐藏元素的作用。
block:此元素将显示为块级元素，此元素前后会带有换行符
inline:默认，内联元素，没有换行符，
inline-block: 行内块级元素，具备行内元素前后没有换行符可以在一行内并列显示的特性，具备块状元素可以正确解释盒模型属性的特性元素特性，
list-item: 此元素会作为列表显示
run-in:此元素会根据上下文作为块级元素或内联元素显示。
table:此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。
table-caption:此元素会作为一个表格标题显示（类似 <caption>）
table-footer-group:此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。

# position 属性

用来指定一个元素在网页上的位置，

1. static 正常的页面流,每个块级元素占据自己的区块（block），元素与元素之间不产生重叠，这个位置就是元素的默认位置。static 定位所导致的元素是浏览器自主决定的，因此，top，left 等将失去作用
2. relative 相对于默认位置，进行偏移
3. fixed 相对于视口（viewport，浏览器窗口）进行偏移，即定位基点是浏览器窗口。
4. absolute 相对于上一级元素进行偏移，定位基点是父元素，它有一个重要的限制条件：定位基点（一般是父元素）不能是 static 定位，否则定位基点就会变成整个网页的根元素 html
5. sticky 它会产生动态效果，很像 relative 和 fixed 的结合：一些时候是 relative 定位（定位基点是自身默认位置），另一些时候自动变成 fixed 定位（定位基点是视口）。
   sticky 生效的前提是，必须搭配 top、bottom、left、right 这四个属性一起使用，不能省略，否则等同于 relative 定位，不产生"动态固定"的效果。原因是这四个属性用来定义"偏移距离"，浏览器把它当作 sticky 的生效门槛。
   应用:图片的堆叠效果，表格的表头锁定

- 无依赖绝对定位 position: absolute; 可以用来解决登陆页面输入密码错误时的提示文字信息，令他响应式的跟随在输入框的后面

# 1px 问题

物理像素：移动设备出厂时，不同设备自带的不同像素，也称硬件像素；
逻辑像素：css 中记录的像素。

在移动端的开发中，写了 1px，实际上却比 1px 宽，这是因为两个 px 的含义是不一样的，UI 设计师要求的 1px 实际上是指设备的物理像素，而 css 里面记录的像素是逻辑像素，它们之间存在一个比例关系，通常可以用 javascript 中的 window.devicePixelRatio 来获取，也可以用媒体查询的 -webkit-min-device-pixel-ratio 来获取。当然，比例多少与设备相关。

解决方案:

1. 使用 0.5px 实现。IOS 及 Android 老设备不支持
2. 使用 border-image 实现。修改颜色不方便
3. 通过 viewport + rem 实现。和 0.5px 一样，机型不兼容
4. 使用伪类 + transform 实现。 不支持圆角
5. box-shadow 模拟边框实现。 box-shadow 不在盒子模型，需要注意预留位置

# rem 和 vw 做移动端适配

rem 实现移动端适配
通过计算不同移动端下 html 根字体大小，即可以计算出相对应的 rem 尺寸，利用 rem 尺寸，就可以在不同的设备上展实现移动端适配，重点在于计算根字体的大小

vw 实现移动端适配
vw 是视口单位，在桌面端指的是浏览器的可视区域，Layout Viewport，1vw = 视口宽度的 1%，针对不同的机型，我们只要算出 ui 设计稿尺寸（一般为 1080px）与视口尺寸（假设为 375px）的比例关系，然后用 vw 尺寸去代替 px 尺寸就好了

百分比适配
利用%单位来实现移动端适配，每个元素的大小都相对于父元素的大小利用百分比的单位来实现，使用来定义子元素的宽度。

@media 适配
@media 是 css3 的新属性，它的原理是监控移动端设备的宽度，然后根据不同的宽度，适配不同的 css 样式，来实现移动端适配

# 清除浮动

浮动用途:使元素脱离文档流，按照指定方向发生移动，遇到父组件边界或相邻的浮动元素停了下来

浮动后外层的 div 元素无法自动程撑开，原因在于当一个内层元素浮动之后，如果没有关闭浮动(清除浮动)，其父元素也就不在包含这个浮动的内层元素，因为此时浮动元素已经脱离了文档流，因此外层不能被撑开。 除了高度无法撑开，还存在背景不能显示，padding 设置无效等问题

解决方法:

1. clear:both;
2. 父级元素使用 overflow:auto;
3. 伪元素: 利用伪元素在元素内部插入元素块，从而达到清除浮动的效果

# width 属性

width: auto;
充分利用可用空间 fill-available
收缩与包裹 典型的例子是浮动，绝对定位，inline-block 元素，table 元素 fit-content
收缩到最小 min-content
超出容器限制

当元素为块级元素的时候，表现为外部尺寸的元素一旦设置宽度就会失去流动性，因为 width:100%; 是包含 width padding border margin 内容区域自动分配

内部尺寸:
包裹性 shrink - to - fit
首选最小宽度:元素最适合的最小宽度。
最大宽度: 元素可以有的最大宽度

margin: auto;填充规则
如果一侧定值，一侧 auto，则 auto 为剩余空间大小
如果两侧均是 auto，则平均分配空间

# 层叠上下文，z-index 解析

css2.1 的层叠顺序:
background/border
负 z-index
block 块状水平盒子
float 浮动盒子
inline/inline-block 水平盒子
z-index:auto/z-index:0
正 index

层叠规则:
谁大谁上:当具有明显的层叠水平标示的时候，如识别的 z-index 值，在同一层叠上下文领域，层叠水平值大的那一个，覆盖小的那一个
后来居上:当元素的层叠水平一致，层叠顺序相同的时候，在 dom 流中处于后面的元素会覆盖前面的元素

层叠上下文的特性:
层叠上下文的层叠水平要比普通元素高
层叠上下文可以阻断元素的混合模式
层叠上下文可以嵌套，内部层叠上下文及其所有子元素均受制于外部的层叠上下文。
每个层叠上下文和兄弟元素独立，也就是当进行层叠变化或渲染的时候，只需要考虑后代元素。
每个层叠上下文是自成体系的，当元素发生层叠的时候，整个元素被认为是在父层叠上下文的层叠顺序中。

层叠上下文的创建
根层叠上下文: <html>
定位元素与传统的层叠上下文:对于包含有 position:relative/position:absolute 的定位元素,当其 z-index 值不是 auto 的时候，会创建层叠上下文。
css3 新增:
z-index 不为 auto 的 flex 项，就是父元素为 display:flex|inline-flex
元素的 opacity 值不是 1
元素的 transform 值不是 none
元素的 filter 值不是 none

新增的层叠规则：
background/border
负 z-index
block 块状水平盒子
float 浮动盒子
inline/inline-block 水平盒子，不依赖 z-index 的层叠上下文
z-index:auto/z-index:0
正 index

# stylus less sass 的区别
