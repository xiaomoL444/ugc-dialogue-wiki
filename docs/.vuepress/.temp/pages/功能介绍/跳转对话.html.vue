<template><div><h1 id="跳转对话" tabindex="-1"><a class="header-anchor" href="#跳转对话"><span>跳转对话</span></a></h1>
<p>你可能会觉得说，正常的对话不是一个对话节点跳另一个对话节点，一条一条播放吗？</p>
<p>但在回看原宝本身的对话时，我发现一个很有意思的地方，就是人物与人物之间它是可能会有时间间隔，并且伴随对话框闪烁一下。但是同一个人对话是没有停顿，并且也不会闪烁</p>
<p>因此我把<code v-pre>一个人+多段对话</code>做成一个小节点，每个小节点都是内容从上播到下，播完小节点后，<code v-pre>对话列表</code>切换到下一个小节点播放，直到最后进入跳转对话字段。</p>
<p><img src="/assets/dialogue-function-introduction/对话列表往下读.png" alt="示例"></p>
<p>而这个对话结构体就是类似大节点，跳转对话的作用是从一个大节点跳转到另一个大节点，通常的作用是切换对话类型（例如站桩-&gt;黑幕，站桩-&gt;选项卡-&gt;站桩）</p>
<p>1.这里有一系列对话类型。在想要跳转的对话类型后面，填上变量名（触发节点图我们后面说），便可以在该对话结束后，跳转到另一个储存对话的变量中。若不填写，则会结束对话（<strong>执行退出对话流操作</strong>）
<img src="/assets/dialogue-function-introduction/跳转对话.png" alt="示例"></p>
<p>2.例如我们想让伊蕾娜的对话结束后，接上一个黑幕文本作为过渡，便创建一个0.5秒的黑幕对话的变量作为过渡（这里不多赘述，请自行查看 <a href="#_3-%E4%B8%BA%E5%AF%B9%E8%AF%9D%E6%B7%BB%E5%8A%A0%E8%87%AA%E5%AE%9A%E4%B9%89%E6%92%AD%E6%94%BE%E6%97%B6%E9%97%B4-%E8%BE%B9%E8%B5%B0%E8%BE%B9%E8%AF%B4%E5%AF%B9%E8%AF%9D%E4%B8%8E%E9%BB%91%E5%B9%95%E6%96%87%E6%9C%AC%E7%A4%BA%E4%BE%8B">3.为对话添加自定义播放时间-边走边说对话与黑幕文本示例</a> )</p>
<p>（创建了一个0.5s的黑幕对话用来作过渡）
<img src="/assets/dialogue-function-introduction/创建了一个黑幕过渡.png" alt="示例"></p>
<p>（填入跳转对话中想要跳转的类型后面，比如这里的黑幕）
<img src="/assets/dialogue-function-introduction/在想要的类型后面填入变量名.png" alt="示例"></p>
<p>3.进入游戏后测试，可以成功看见我们在对话后面接上了一段黑幕对话
<video src="/assets/dialogue-function-introduction/跳转对话视频.mp4"
autoplay
muted
loop
playsinline
style="width: 100%; border-radius: 8px;">
</video></p>
</div></template>


