# 虚拟 Dom

- 当某个状态发生变化时，只更新与这个状态相关联的 dom 节点。虚拟 dom 就是通过状态生成一个虚拟节点树，然后使用虚拟节点树进行渲染，在渲染之前，会使用新生成的虚拟节点树和上一次生成的虚拟节点数进行对比，之渲染不同的部分
- 模板 -> 渲染函数-> vNode ->视图
- 虚拟 dom 的终极目标是将虚拟节点渲染到视图上。
  - 提供与真实 dom 节点所对应的虚拟节点 vnode
  - 将 vnode 与旧的 vnode 进行对比，然后更新视图(位于核心算法 patch)

# VNode

- 在 vue 里面存在一个 VNode 类，使用它可以实例化不同类型的 vnode 实例，不同的实例代表不同类型的 dom 元素
- vnode 类型
  - 注释节点
  - 文本节点
  - 元素节点
    - tag
    - data
    - children
    - context
  - 组件节点
    - componentOptions:组件节点的参数选项
    - componentInstance:组件的实例
  - 函数式组件
    - functionalContext
    - functionalOptions
  - 克隆节点

# patch

- patch 是虚拟 dom 的核心部分，它可以将 vnode 渲染成真实 dom
- 对现有的 dom 进行修改需要做三件事

1. 创建新增的节点

- 当 oldVNode 不存在而 node 存在时(首次渲染)
- 当 oldVNode 和 vnode 完全不是同一个节点时，需要使用 vnode 生成真实的 dom 元素并将其插入到视图当中去
- 只有三种节点会被创建并插入到 Dom 中去，
  - 元素节点，判断是否是元素节点只需要判断是否有 tag 属性即可
  - 注释节点，如果不存在 tag 属性并且 isComment === true 时
  - 文本节点，如果不存在 tag 属性并且 isComment ！== true 时

2. 删除已经废弃的节点

- 当一个节点只在 oldVNode 中的时候就要删除它因为渲染的时候是以 vnode 为标准的

3. 修改需要更新的节点

- 静态节点:(如果是静态节点就不需要更新操作，可以直接跳过更新节点的过程)指那些一旦渲染到界面上之后，无论状态发生怎样的变化，都不会发生任何变化的节点
- 新虚拟节点有文本属性并且和旧虚拟节点的文本属性相同就不需要更改，文本不同就只更改文本内容
- 新虚拟节点无文本属性，那么他就是一个元素节点，元素节点通常会有子节点也就是 children 属性，但可能没有子节点
  - 有 children 的情况
  - 无 children 的情况
- 两个虚拟节点是完全不同的，我们需要以新节点为标准渲染视图，所以可以将就节点删除或创建新增节点
- 新旧节点是同一个节点，我们需要将这两个节点进行比较细致的对比，然后对 oldVNode 在视图中所对应的真实节点进行更新

4. 更新策略

- 创建子节点: 什么情况下需要创建子节点，以及把创建的节点插入到真实 Dom 子节点中的哪个位置
- 更新子节点: 当一个节点同时存在于 newChildren 和 oldChildren 中时需要执行的操作
- 移动子节点: 通常发生在 newChildren 和 oldChildren 中的某个节点是同一个节点，但位置不同，所以在真实的 dom 中需要将这个节点的位置以新虚拟节点的位置为基准进行移动
- 删除子节点: 删除 oldChildren 中存在但是 newChildren 中不存在的节点

5. 优化策略

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
