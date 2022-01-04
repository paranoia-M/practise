<!--
 * @Author: your name
 * @Date: 2021-07-13 16:15:59
 * @LastEditTime: 2022-01-04 12:52:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Front-end development learning\document\notes\study notes\css-study\css随笔.md
-->

## 记录 css 知识点

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

1. src 和 href 的区别

- 他们都是引入外部资源的属性，例如图片，视频，css 文件，js 文件
- href 超文本引用，属性通过指定 web 资源位置，来定义当前元素或者当前文档与目标资源之间的连接或关系
- src 会将属性会将资源嵌入到当前文档中元素搜索在的位置
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
  重叠后的 margin 都是正值时取较大的，都是赋值时取绝对值较大的，然后负向移位，有正有负，选取绝对值大的正负两值然后相加
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
