<template><div><h1 id="节点图事件触发" tabindex="-1"><a class="header-anchor" href="#节点图事件触发"><span>节点图事件触发</span></a></h1>
<p>节点图触发，是在播放对话时，执行节点图事件的行为。</p>
<p>每播放一句话，就会触发一次对应序号的事件，若字典里有对应的键值，就会触发对应名字的事件</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>在程序中，通常列表第一位序号为0</p>
</div>
<p>例如在这里，播放第一句话时会触发序号为<code v-pre>0</code>名为<code v-pre>触发第一句话事件</code>的事件，播放第三句话就会触发序号为<code v-pre>2</code>名为<code v-pre>触发第三句话事件</code>的事件</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>特殊的，当这个人对话完（例如说完第三句话），准备跳转下一个人物的对话时，会额外触发触发一个序号<code v-pre>N+1</code>的事件，比如这里的<code v-pre>触发结束事件</code></p>
</div>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>特殊的，当对话结束（即<strong>退出对话流时</strong>，或是跳转对话没内容时，结束对话时），会额外触发一个<code v-pre>***对话结束***</code>事件（有三个星号）</p>
</div>
<p><img src="/assets/dialogue-function-introduction/节点图触发事件.png" alt="示例"></p>
<p>而在跳转对话中，同样存在<code v-pre>跳转节点图</code>，原理和上面的<code v-pre>节点图事件触发</code>一样，在跳转对话时，会<code v-pre>触发节点图事件</code></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>若在跳转对话中进入了节点图，会<strong>脱离对话流</strong>，无法执行关闭UI等默认退出对话流事件，需要使用关闭对话节点主动退出对话，或者若只是进行节点图判断，会立刻重新回到对话流，则可以不用关闭对话</p>
</div>
<p><img src="/assets/dialogue-function-introduction/跳转对话的触发节点图.png" alt="示例"></p>
<p>节点图这边，当触发节点图事件时，<code v-pre>对话事件触发时</code>会收到事件，变量名和事件名顾名思义，需要对他们两个值进行多分支才能获取到正确的事件</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>当奇匠使用<code v-pre>跳转节点</code>跳转到其他变量对话内容时，事件触发时变量名也是跳转后的变量名</p>
</div>
<p><img src="/assets/dialogue-function-introduction/节点图事件触发界面.png" alt="示例"></p>
</div></template>


