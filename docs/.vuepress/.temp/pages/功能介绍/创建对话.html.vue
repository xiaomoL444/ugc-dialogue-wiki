<template><div><h1 id="创建对话-基础教程" tabindex="-1"><a class="header-anchor" href="#创建对话-基础教程"><span>创建对话（基础教程）</span></a></h1>
<p>这里我会边讲边做一个小小的示例，更多内容可以查看其他部分</p>
<h3 id="_1-添加数据" tabindex="-1"><a class="header-anchor" href="#_1-添加数据"><span>1.添加数据</span></a></h3>
<p>1.将动态实体拖入场上，进入<code v-pre>组件</code>后，点击<code v-pre>自定义变量</code>的<code v-pre>详细编辑</code></p>
<p><img src="/assets/dialogue-function-introduction/example0.png" alt="模版图片"></p>
<p>2.根据箭头指引，选择<code v-pre>结构体</code>变量类型，在弹出的页面中选择<code v-pre>对话</code>结构体，再点击<code v-pre>添加变量</code>，添加好的变量可以起任意名，示例中我们给变量名填写<code v-pre>伊蕾娜的自白</code></p>
<p><img src="/assets/dialogue-function-introduction/example1.png" alt="模版图片"></p>
<p>3.点进来后，可以看见有两个字段，<code v-pre>对话列表</code>和<code v-pre>跳转对话</code></p>
<p>我们这里先关注<code v-pre>对话列表</code>，点击对话列表第一个编辑按钮（在基础复杂文本结构体_xxx右边那个小按钮）</p>
<p>跳转对话请参阅<a href="./%E8%B7%B3%E8%BD%AC%E5%AF%B9%E8%AF%9D">跳转对话</a></p>
<p><img src="/assets/dialogue-function-introduction/对话结构体变量内容.png" alt="模版图片"></p>
<p>4.这里所有字段作用可以参考（我这里还没写，只额外说明一点，就是等待显示时间，就是触发对话后n秒才开始播放第一句话，因为原神本体的聊天角色和角色之间会偶尔有较长的停顿，因此有这个）</p>
<p><img src="/assets/dialogue-function-introduction/基础复杂文本结构体内容.png" alt="模版图片"></p>
<p>5.我们先来做个最简单的示例，我们让<code v-pre>伊蕾娜</code>这个人名，说<code v-pre>“天哪，我简直是天底下最美的女人”</code>，<code v-pre>“我真的好喜欢我自己”</code>两句话</p>
<p>就可以在标题处写上名字<code v-pre>伊蕾娜</code>，在内容处，点击一个加号，得到共计2长度的内容列表，并将两句话分别填入进去</p>
<p><img src="/assets/dialogue-function-introduction/伊蕾娜自白.png" alt="模版图片"></p>
<p>至此一个最简单的对话数据就添加完毕了</p>
<h3 id="_2-添加触发方式-站桩对话示例" tabindex="-1"><a class="header-anchor" href="#_2-添加触发方式-站桩对话示例"><span>2.添加触发方式（站桩对话示例）</span></a></h3>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>我们能用多种触发方式<code v-pre>选项卡触发</code>、<code v-pre>碰撞器触发</code>、<code v-pre>信号触发</code>、等等...</p>
<p>这里我们只介绍<code v-pre>选项卡触发</code>方式，因为它涉及添加本地过滤器的步骤，而其他触发方式不需要</p>
</div>
<p>1.我们创建一个新的节点图，拖出<code v-pre>选项卡选中时</code>节点，再通过选择者实体<code v-pre>获取对应的玩家实体</code>，后面接上你想要创建的对话类型，这里我们以<code v-pre>站桩对话</code>作为例子</p>
<p>目前有的对话类型可以参考<a href="#%E5%B7%B2%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8A%9F%E8%83%BD">已实现的功能</a>，触发的节点图可参考（我还没写）</p>
<p><img src="/assets/dialogue-function-introduction/创建节点图.png" alt="模版图片"></p>
<p>2.回到游戏中，添加选项卡</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>请务必注意将节点图挂载到<code v-pre>储存对话数据的实体</code>上，创建对话是<code v-pre>读取自身对话数据</code></p>
<p>当然你也可以点开这个符合节点，发现只是默认传入了自身实体</p>
</div>
<p>按照步骤，在组件中<code v-pre>1.点击添加通用组件</code>，<code v-pre>2.选择选项卡</code>，并<code v-pre>3.进入选项卡的详细编辑中，进行配置</code></p>
<p><img src="/assets/dialogue-function-introduction/添加选项卡.png" alt="模版图片"></p>
<p>3.我们点击每个选项卡，给它们配置过滤节点。</p>
<p>点击<code v-pre>过滤节点图</code>，在弹出的页面中选择<code v-pre>选项卡在进入对话后隐藏</code>（地图模版的这个节点在对话页签下）</p>
<p>这个节点的作用主要是当玩家进入<code v-pre>锁定对话</code>状态后，自动隐藏选项卡（不然会很出戏）</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>同理，你可以获取玩家身上的<code v-pre>（勿删）isOptionEnable</code>变量，若是进入锁定对话后，它会自动设置成<code v-pre>否</code>，反之设置成<code v-pre>是</code>，可以搭配自己的过滤节点使用。</p>
</div>
<p><img src="/assets/dialogue-function-introduction/选择过滤器.png" alt="模版图片"></p>
<p>4.设置好后，我们直接进入游戏查看</p>
<p><video src="/assets/dialogue-function-introduction/伊蕾娜自白视频.mp4"
autoplay
muted
loop
playsinline
style="width: 100%; border-radius: 8px;">
</video></p>
<h3 id="_3-为对话添加自定义播放时间-边走边说对话与黑幕文本示例" tabindex="-1"><a class="header-anchor" href="#_3-为对话添加自定义播放时间-边走边说对话与黑幕文本示例"><span>3.为对话添加自定义播放时间（边走边说对话与黑幕文本示例）</span></a></h3>
<p>1.返回编辑数据的地方，可以看到有一个字段叫<code v-pre>内容显示时间（若需）</code></p>
<p>点击加号，添加<code v-pre>和内容列表相同长度的时间列表</code>，这里我们为每句话配置2秒的显示时间，所以两个值都填2.00</p>
<p><img src="/assets/dialogue-function-introduction/内容显示时间.png" alt="内容显示时间"></p>
<p>2.重新进入游戏测试</p>
<p>在没改变对话类型的情况下，我们发现<code v-pre>下一句话的按钮</code>消失了，取而代之的是经过2s后自定下一句话</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>在设定中，只要时间列表有值，就会代替掉手动下一句话（按钮），并按照内容查询对应的时间下一句</p>
<p>若是时间列表长度小于内容长度，会导致对话卡住，无法下一句话！</p>
</div>
<p><video src="/assets/dialogue-function-introduction/内容显示时间视频.mp4"
autoplay
muted
loop
playsinline
style="width: 100%; border-radius: 8px;">
</video></p>
<p>3.我们尝试替换对话类型，在对话中分别接入<code v-pre>边走边说对话</code>和<code v-pre>黑幕文本</code></p>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>这里我把两次的对话放一起展示了，不是指同时触发！不可以这样写！</p>
</div>
<p><img src="/assets/dialogue-function-introduction/节点图2.png" alt="示例">
边走边说示例：
<video src="/assets/dialogue-function-introduction/边走边说示例.mp4"
autoplay
muted
loop
playsinline
style="width: 100%; border-radius: 8px;">
</video>
黑幕文本示例
<video src="/assets/dialogue-function-introduction/黑幕示例.mp4"
autoplay
muted
loop
playsinline
style="width: 100%; border-radius: 8px;">
</video></p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>这里黑幕依然可以通过不填入时间来使用按钮下一句话</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">建议</p>
<p>因为这个模版本身是仿制原神本体的类型，因此建议</p>
<p><strong>站桩对话</strong>：不填入时间</p>
<p><strong>边走边说</strong>：填入时间自动播放</p>
<p><strong>黑幕文本</strong>：可按需求填入时间</p>
<p><strong>CG字幕文本</strong>：填入时间自动播放</p>
<p><strong>CG插画文本</strong>：可按需求填入时间</p>
<p><strong>中部文本</strong>：不填入时间</p>
</div>
</div></template>


