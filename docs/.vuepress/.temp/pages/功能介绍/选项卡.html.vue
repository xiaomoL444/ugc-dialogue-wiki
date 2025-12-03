<template><div><h1 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡"><span>选项卡</span></a></h1>
<p>因千星的选项卡不支持动态文本，为保证奇匠的创作效率，这里使用了旁门左道实现了动态选项卡，缺点是不同宽度比例的设备，需要在游戏开始前，玩家手动调整UI比例，请参考（我这里没写）如果奇匠确保自己的地图用不上这个功能，就无需让玩家通过这个修改设置。奇匠们可以用移动端体会一下。</p>
<p>1.创建选项卡内容
我们按照同样的步骤，像创建对话文本一样，创建一个结构体，选中选项卡，起名「选项卡」
<img src="/assets/dialogue-function-introduction/创建选项卡变量.png" alt="示例"></p>
<p>2.来到选项卡结构体中，这里只有一个选项卡内容，它的填入内容比较特殊。</p>
<p><img src="/assets/dialogue-function-introduction/选项卡结构体.png" alt="示例"></p>
<p>3.比如我们有两个选项，<code v-pre>选项一</code>和<code v-pre>选项二</code>，我们就用两个\n将它们合并在一起，比如<code v-pre>选项一\n\n选项二</code>，当有多个选项也同样用\n\n连起来（<code v-pre>1\n\n2\n\n3\n\n4</code>）</p>
<p>然后填入选项卡的数量，比如两个选项，就填写<code v-pre>2</code>,最大不能超过<code v-pre>4</code>，每个选项卡的跳转内容对应对应的<code v-pre>选项卡选择值跳转</code>，比如选项一就是进入第一个跳转，这个跳转和<a href="./%E8%B7%B3%E8%BD%AC%E5%AF%B9%E8%AF%9D">跳转对话</a>相同</p>
<p>这里我创建了选项一对话和选项二对话，并在选择后跳转过去</p>
<p><img src="/assets/dialogue-function-introduction/选项卡编辑好.png" alt="示例">
（创建了两个对话变量）</p>
<p><img src="/assets/dialogue-function-introduction/选项卡后面的变量.png" alt="示例">
（在第一个选项卡选择值跳转填入了选项一对话，选项二同理）</p>
<p><img src="/assets/dialogue-function-introduction/选项一对话.png" alt="示例"></p>
<p>4.同样添加触发方式
这里同样选择用选项卡触发，选项卡的注意事项请参考<RouteLink to="/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%AF%9D.html#_2-%E6%B7%BB%E5%8A%A0%E8%A7%A6%E5%8F%91%E6%96%B9%E5%BC%8F-%E7%AB%99%E6%A1%A9%E5%AF%B9%E8%AF%9D%E7%A4%BA%E4%BE%8B">2添加触发方式-站桩对话示例</RouteLink></p>
<p><img src="/assets/dialogue-function-introduction/创建选项卡节点图.png" alt="示例">
5.进入游戏重新测试</p>
<p><video src="/assets/dialogue-function-introduction/选择选项卡视频.mp4"
autoplay
muted
loop
playsinline
style="width: 100%; border-radius: 8px;">
</video></p>
</div></template>


