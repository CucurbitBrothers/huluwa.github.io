(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{427:function(l,_,v){"use strict";v.r(_);var t=v(44),i=Object(t.a)({},(function(){var l=this,_=l.$createElement,v=l._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[v("h1",{attrs:{id:"_11-垃圾回收-garbage-collection"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-垃圾回收-garbage-collection"}},[l._v("#")]),l._v(" 11-垃圾回收（Garbage Collection）")]),l._v(" "),v("p",[l._v("垃圾回收：")]),l._v(" "),v("p",[l._v("在计算机科学中是一种自动的"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%A8%98%E6%86%B6%E9%AB%94%E7%AE%A1%E7%90%86",title:"存储器管理",target:"_blank",rel:"noopener noreferrer"}},[l._v("存储器管理"),v("OutboundLink")],1),l._v("机制。当一个计算机上的动态存储器不再需要时，就应该予以释放，以让出存储器，这种存储器资源管理，称为**垃圾回收。**垃圾回收器可以让程序员减轻许多负担，也减少程序员犯错的机会。垃圾回收最早起源于"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/LISP",title:"LISP",target:"_blank",rel:"noopener noreferrer"}},[l._v("LISP"),v("OutboundLink")],1),l._v("语言")]),l._v(" "),v("ul",[v("li",[v("p",[l._v("Python的存储机理")]),l._v(" "),v("ul",[v("li",[l._v("python采用的是引用计数机制为主，标记-清除，分代收集两种机制为辅的策略")]),l._v(" "),v("li",[l._v("底层实现借助于c语言的  malloc和 free")])])]),l._v(" "),v("li",[v("p",[l._v("引用计数")]),l._v(" "),v("ul",[v("li",[l._v("每一个对象，都维护这一个指向该对象的引用的计数。")]),l._v(" "),v("li",[l._v("当变量被绑定在一个对象上的时候，该变量的引用计数就是1，(还有另外一些情况也会导致变量引用计数的增加),")]),l._v(" "),v("li",[l._v("系统会自动维护这些标签，并定时扫描，当某标签的引用计数变为0的时候，该对象就会被回收。")]),l._v(" "),v("li",[l._v("但它不能处理")])])]),l._v(" "),v("li",[v("p",[l._v("标记-清除")]),l._v(" "),v("ul",[v("li",[l._v("标记清除就是用来解决循环引用的问题的，只有容器对象才会出现引用循环，比如列表、字典、类、元组。")]),l._v(" "),v("li",[l._v("标记-清除算法中，有两个集中营，一个是\n"),v("ul",[v("li",[l._v("python标记删除时通过l两个容器来完成的：死亡容器、存活容器。")]),l._v(" "),v("li",[l._v("标记删除第一步：对执行删除操作后的每个引用-1，此时c的引用为0，d的引用为0，把他们都放到死亡容器内。把那些引用仍然大于0的放到存活容器内。")]),l._v(" "),v("li",[l._v("标记删除第二步：遍历存活容器，查看是否有的存活容器引用了死亡容器内的对象，如果有就把该对象(注意是对象，比如0x7f94bb602f80，不是对象的引用)从死亡容器内取出，放到存活容器内。")]),l._v(" "),v("li",[l._v("由于c、d都没有对象引用他们了，所以经过这一步骤，他们还是在死亡组。")]),l._v(" "),v("li",[l._v("标记删除第三步：将死亡组所有对象删除。")]),l._v(" "),v("li",[l._v("这样就完成了对从c、d的删除。")])])])])]),l._v(" "),v("li",[v("p",[l._v("分代收集")]),l._v(" "),v("ul",[v("li",[v("strong",[l._v("垃圾回收=垃圾检测+释放")])]),l._v(" "),v("li",[l._v("分代回收是一种以空间换时间的操作方式，Python将内存根据对象的存活时间划分为不同的集合，每个集合称为一个代。\n"),v("ul",[v("li",[l._v("Python将内存分为了3“代”，分别为年轻代（第0代）、中年代（第1代）、老年代（第2代），他们对应的是3个链表，它们的垃圾收集频率随对象的存活时间的增大而减小。新创建的对象都会分配在年轻代，年轻代链表的总数达到上限时，Python垃圾收集机制就会被触发，把那些可以被回收的对象回收掉，而那些不会回收的对象就会被移到中年代去，依此类推，老年代中的对象是存活时间最久的对象，甚至是存活于整个系统的生命周期内。\n"),v("ul",[v("li",[l._v("弱代假说：")])])]),l._v(" "),v("li",[l._v("分代回收是建立在标记清除技术基础之上。分代回收同样作为Python的辅助垃圾收集技术处理那些容器对象")])])])])]),l._v(" "),v("li",[v("p",[l._v("内存池")]),l._v(" "),v("ul",[v("li",[l._v("-1，-2层主要由操作系统进行操作")]),l._v(" "),v("li",[l._v("第0层是C中的malloc，free等内存分配和释放函数进行操作")]),l._v(" "),v("li",[l._v("第1层和第2层是内存池，由Python的接口函数PyMem_Malloc函数实现，当对象小于256K时由该层直接分配内存，当释放后，重新回到内存池，并不会直接调用C的free")]),l._v(" "),v("li",[l._v("第3层是最上层，也就是我们对Python对象的直接操作")]),l._v(" "),v("li",[l._v("小整数池\n"),v("ul",[v("li",[l._v("小整数[-5,257)共用对象，常驻内存，在程序一开始就被预定义。")])])])])])]),l._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[l._v("Python 在运行期间会大量地执行 malloc 和 free 的操作，频繁地在用户态和核心态之间进行切\n换，这将严重影响 Python 的执行效率。为了加速 Python 的执行效率，Python 引入了一个内存池\n机制，用于管理对小块内存的申请和释放。\nPython 内部默认的小块内存与大块内存的分界点定在 256 个字节，当申请的内存小于 256 字节\n时，PyObject_Malloc 会在内存池中申请内存；当申请的内存大于 256 字节时，PyObject_Malloc 的\n行为将蜕化为 malloc 的行为。当然，通过修改 Python 源代码，我们可以改变这个默认值，从而改\n变 Python 的默认内存管理行为。\n")])])]),v("ul",[v("li",[l._v("gc模块\n"),v("ul",[v("li",[l._v("Python中的垃圾回收模块")]),l._v(" "),v("li",[l._v("gc模块提供一个接口给开发者设置垃圾回收的选项,主要功能就是解决循环引用")])])]),l._v(" "),v("li",[l._v("调优手段\n"),v("ul",[v("li",[l._v("手动垃圾回收")]),l._v(" "),v("li",[l._v("调高垃圾回收阈值")]),l._v(" "),v("li",[l._v("避免循环引用（手动解除循环引用，使用弱引用）")])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);