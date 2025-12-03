<template><div><h1 id="已实现的功能" tabindex="-1"><a class="header-anchor" href="#已实现的功能"><span>已实现的功能</span></a></h1>
<details class="hint-container details"><summary>站桩对话（锁定对话）</summary>
<p>官方：<video src="/assets/dialogue-function-introduction/对话实例1官方.mp4"
    autoplay
    muted
    loop
    playsinline
    style="width: 100%; border-radius: 8px;"></video>
模板：<video src="/assets/dialogue-function-introduction/self1.mp4"
    autoplay
    muted
    loop
    playsinline
    style="width: 100%; border-radius: 8px;"></video></p>
</details>
<details class="hint-container details"><summary>选项卡（锁定对话）</summary>
<p><a href="./%E9%80%89%E9%A1%B9%E5%8D%A1">跳转选项卡文档</a></p>
</details>
<details class="hint-container details"><summary>边走边说（非锁定对话）</summary>
<p>官方：<video src="/assets/dialogue-function-introduction/offcial2.mp4"
    autoplay
    muted
    loop
    playsinline
    style="width: 100%; border-radius: 8px;"></video>
模板：<video src="/assets/dialogue-function-introduction/self2.mp4"
    autoplay
    muted
    loop
    playsinline
    style="width: 100%; border-radius: 8px;"></video></p>
</details>
<details class="hint-container details"><summary>黑幕文本（锁定对话）</summary>
<p>官方：</p>
<p><video src="/assets/dialogue-function-introduction/offcial3.mp4"
autoplay
muted
loop
playsinline
style="width: 100%; border-radius: 8px;">
</video></p>
<p>模板：</p>
<p><video src="/assets/dialogue-function-introduction/self3.mp4"
autoplay
muted
loop
playsinline
style="width: 100%; border-radius: 8px;">
</video></p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>模板同样支持点击按钮后才下一步</p>
<p></p>
</div>
</details>
<details class="hint-container details"><summary>（不常用）CG字幕文本（锁定对话）</summary>
<p>官方：<img src="/assets/dialogue-function-introduction/offcial4.png" alt="模版图片">
模板：<img src="/assets/dialogue-function-introduction/self4.png" alt="模版图片"></p>
</details>
<details class="hint-container details"><summary>（不常用）CG插画文本（锁定对话）</summary>
<p>官方：<img src="/assets/dialogue-function-introduction/offcial5.png" alt="模版图片">
模板：<img src="/assets/dialogue-function-introduction/self5.png" alt="模版图片"></p>
</details>
<details class="hint-container details"><summary>（不常用）中部文本（非锁定对话）</summary>
<p>官方：无</p>
<p>模板：<img src="/assets/dialogue-function-introduction/self6.png" alt="模版图片"></p>
</details>
<details class="hint-container details"><summary>创建一段Tip</summary>
<p>官方：没找，通常是完成挑战</p>
<p>模板：<img src="/assets/dialogue-function-introduction/self7.png" alt="模版图片"></p>
<p><RouteLink to="/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E9%80%9A%E7%94%A8%E8%8A%82%E7%82%B9.html#%E5%88%9B%E5%BB%BA%E4%B8%80%E6%AE%B5%E5%B0%8Ftip">创建一段小Tip</RouteLink></p>
</details>
<div class="hint-container info">
<p class="hint-container-title"><code v-pre>锁定对话</code>和<code v-pre>非锁定对话</code></p>
<p><code v-pre>锁定对话</code>：指在触发对话时，玩家会被固定在空气盒中，无法移动，并且关闭屏幕上基础的ui</p>
<p><code v-pre>非锁定对话</code>：与锁定对话刚好相反，仅仅只显示文字，不做任何其他操作</p>
</div>
<div class="hint-container info">
<p class="hint-container-title"><code v-pre>CG字幕文本</code>、<code v-pre>CG插画文本</code>和<code v-pre>中部文本</code></p>
<p>本质上是同一种对话类型，只是文本在屏幕上的搞不不一样，并且中部文本为非锁定对话</p>
</div>
</div></template>


