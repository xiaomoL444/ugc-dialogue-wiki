<template><div><h1 id="运镜-11-25更新" tabindex="-1"><a class="header-anchor" href="#运镜-11-25更新"><span>运镜（11.25更新）</span></a></h1>
<p>在对话结构体变量中，存在<code v-pre>运镜点</code>的字段。</p>
<p>此部分建议参考B站视频1:53部分<a href="https://www.bilibili.com/video/BV11ZS5BCEfG/?share_source=copy_web&amp;vd_source=812e2c82e7fedf05055036fee2e3a635&amp;t=113" target="_blank" rel="noopener noreferrer">点击此处跳转</a></p>
<p>前面的整数同<code v-pre>节点图事件触发</code>的整数一样，代表在内容列表播放到序列n时，播放整数为n的运镜，同样的，在内容列表播放完成后，会额外触发一个n+1的运镜事件</p>
<p>后面的运镜结构体列表，便是储存运镜的数据，它会从列表的第一个运镜数据开始往下播放，直到该列表的末尾，可视为镜头进行多个点位的移动，同时再触发下一次运镜之前，它会一直播放到末尾，不会结束</p>
<p><img src="/assets/dialogue-function-introduction/运镜字段.png" alt="模版图片"></p>
<p>运镜的原理是，通过路径点的设置，从路径的第一个点移动到第二个点，经过<code v-pre>运动时间</code>的时长，同时设置镜头模板。若不配置第二个点，可视为角色切换视角和位置后不动</p>
<p><code v-pre>运动时间</code>则视为多久时间后切换运镜结构体的下一个运镜</p>
<p><img src="/assets/dialogue-function-introduction/运镜结构体.png" alt="模版图片"></p>
<p>比如上面的图片，设置路径索引为<code v-pre>1073741825</code>，开始的点是1，结束点是2，镜头模板名<code v-pre>测试镜头</code>，运动时间1s,就会如下面视频的样子，切换<code v-pre>测试镜头</code>后从从对应路径的点1运动到点2，花费1s时间。</p>
<p><video src="/assets/dialogue-function-introduction/运镜讲解.mp4"
    autoplay
    muted
    loop
    playsinline
    style="width: 100%; border-radius: 8px;"></video></p>
<p>当这一段运镜播放结束时，会自动转到运镜结构体列表的下一个元素，继续进入运镜。</p>
</div></template>


