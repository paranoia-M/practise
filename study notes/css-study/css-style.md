<!--
 * @Author: your name
 * @Date: 2021-07-07 17:46:49
 * @LastEditTime: 2021-07-07 19:31:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\study notes\css-study\css-style.md
-->
# css揭秘 学习记录
## 第一章
  * em: em的值不是固定的会继承父级元素的字体大小。
  * rem: rem相对于根元素
  * 在使用他们的时候要注意设置相对应的根元素的大小
  ---
  * 半透明的黑色或白色叠加在主色调上，即可产生主色调的亮
色和暗色变体，
  * `background: #58a linear-gradient(#77a0bb, #58a);` 
  转变为 :
  `background: #58a linear-gradient(hsla(0,0%,100%,.2),transparent);`
  ---
  * 技巧: 某一边缺少时可分开写
    `border-width: 10px 10px 10px 0;`
    `border-width: 10px;border-left-width: 0;`
  * **currentColor**: 它并没有绑定固定的颜色值，并且一直被解析为一个color就成为了一个变量
    例如:（所有 <hr> 元素）自动与文本的颜色保持一致 `background: currentColor;`
  * 



