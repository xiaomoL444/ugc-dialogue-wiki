<template><div><h1 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h1>
<h2 id="关闭透明度过渡" tabindex="-1"><a class="header-anchor" href="#关闭透明度过渡"><span>关闭透明度过渡</span></a></h2>
<p>若游玩过程中出现负载过高的情况，可在元件库中将<code v-pre>对话框管理器</code>元件拖出，点击编辑节点图变量，将文字透明度过渡关闭，通常不需要关闭黑幕过渡，会导致视觉效果不好</p>
<p>拖出对话管理器元件，点击节点图的编辑节点图变量</p>
<p><img src="/assets/dialogue-function-introduction/对话管理器.png" alt="示例"></p>
<p>里面有<code v-pre>是否开启文字透明度过渡</code>和<code v-pre>是否开启黑幕透明度过渡</code></p>
<p><img src="/assets/dialogue-function-introduction/对话管理器开关过渡.png" alt="示例"></p>
<h2 id="延迟生成管理器实体" tabindex="-1"><a class="header-anchor" href="#延迟生成管理器实体"><span>延迟生成管理器实体</span></a></h2>
<p>若关卡初始化负载过高导致无法试玩关卡，可以进入玩家身上的节点图变量中，延长管理器的生成时间，降低初始化的负担。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>由于管理器是进入游戏后才生成，因此不允许在玩家刚进入游戏后立马触发创建对话，如在玩家出生点创建碰撞箱触发对话等，需要等待管理器生成完毕才能触发对话</p>
</div>
<p>在玩家模版这里，找到玩家身上的节点图<code v-pre>（勿删！）GameCoordinator</code>，点击编辑节点图变量</p>
<p><img src="/assets/dialogue-function-introduction/玩家身上节点图.png" alt="示例"></p>
<p>里面有<code v-pre>对话管理器延迟生成</code>时间和<code v-pre>任务管理器延迟生成</code>时间，修改它们就可以让它们延迟生生</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>任务管理器是接在对话管理器生成之后的才开始自己的倒计时</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>2025.12.3以前下载的地图建议不要修改时间，目前发现已知Bug，将在2025.12.4凌晨修复上传</p>
</div>
<p><img src="/assets/dialogue-function-introduction/玩家身上节点图变量.png" alt="示例"></p>
</div></template>


