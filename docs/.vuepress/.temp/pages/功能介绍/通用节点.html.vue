<template><div><h1 id="通用节点" tabindex="-1"><a class="header-anchor" href="#通用节点"><span>通用节点</span></a></h1>
<h2 id="关闭ui" tabindex="-1"><a class="header-anchor" href="#关闭ui"><span>关闭UI</span></a></h2>
<p><img src="/assets/dialogue-function-introduction/关闭UI.png" alt="示例"></p>
<p>当奇匠通过<code v-pre>跳转对话</code>中的<code v-pre>跳转节点图事件</code>而脱离对话流时，需要自行使用<code v-pre>关闭对话UI</code>节点执行关闭对话的操作，通常情况下不需要强制关闭</p>
<h2 id="剧情中限制位移的传送" tabindex="-1"><a class="header-anchor" href="#剧情中限制位移的传送"><span>剧情中限制位移的传送</span></a></h2>
<p>（好绕的名字）</p>
<p>站桩对话、选项卡、黑幕文本、CG字幕文本、CG插画文本五种<code v-pre>锁定对话</code>，都会有空气盒子限制玩家移动。</p>
<p>因此如果在对话时，让玩家传送到某处，需要连带空气盒一起移动，因此这个节点的作用就是让玩家在对话传送时，连带空气盒和人物一起传送。</p>
<p><img src="/assets/dialogue-function-introduction/剧情中限制位移的传送.png" alt="示例"></p>
<h2 id="添加对话时需要隐藏的自定义ui" tabindex="-1"><a class="header-anchor" href="#添加对话时需要隐藏的自定义ui"><span>添加对话时需要隐藏的自定义UI</span></a></h2>
<p>很多时候可能自己想要添加UI，但是站桩对话等<code v-pre>锁定对话</code>只会隐藏屏幕上的默认UI，因此需要该节点，添加自定义需要隐藏的UI。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>想要隐藏的控件UI，只要设置一次即可，它会保存下来，并在每次进入<code v-pre>锁定对话</code>时把添加进的控件id进行隐藏，然后退出对话的时候再<strong>打开</strong></p>
<p>所以请注意如果有想要关闭的UI请使用移除控件组，不然它还会在对话完后重新开启</p>
</div>
<p><img src="/assets/dialogue-function-introduction/对话隐藏UI.png" alt="示例"></p>
<h2 id="创建一段小tip" tabindex="-1"><a class="header-anchor" href="#创建一段小tip"><span>创建一段小Tip</span></a></h2>
<p>顾名思义，在屏幕上方创建一段Tip，仿制类似挑战完成等UI</p>
<p><img src="/assets/dialogue-function-introduction/创建一段Tip.png" alt="示例"></p>
<h2 id="创建调整选项卡比例选项" tabindex="-1"><a class="header-anchor" href="#创建调整选项卡比例选项"><span>创建调整选项卡比例选项</span></a></h2>
<p>因千星的选项卡不支持动态文本，为保证奇匠的创作效率，这里使用了旁门左道实现了动态选项卡，缺点是不同宽度比例的设备，需要在游戏开始前，玩家手动调整UI比例，直接用该节点即可开启设置，并且如果一个关卡内有多个调整的地方，需要保证它们的<code v-pre>标识符</code>的字符串是独立唯一的，才能正确获取调整完毕事件</p>
<p><img src="/assets/dialogue-function-introduction/创建调整选项卡比例选项.png" alt="示例"></p>
</div></template>


