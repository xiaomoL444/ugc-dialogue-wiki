<template><div><h1 id="v6-4-月之五-自定义事件跨对话执行" tabindex="-1"><a class="header-anchor" href="#v6-4-月之五-自定义事件跨对话执行"><span>v6.4（月之五）-自定义事件跨对话执行</span></a></h1>
<h2 id="现象" tabindex="-1"><a class="header-anchor" href="#现象"><span>现象</span></a></h2>
<p>在v6.4（月之五）及之前的版本中，存在当对话处于说话人最后一句的时候，执行事件无法触发，转而触发下一位说话人的执行事件</p>
<h2 id="修复方法" tabindex="-1"><a class="header-anchor" href="#修复方法"><span>修复方法</span></a></h2>
<p>进入下图节点图「[对话模板]对话流程控制器_Default」中</p>
<p><img src="@source/assets/历史遗留Bug/Bug1-0.jpg" alt="图片"></p>
<p>看到中间这里</p>
<p><img src="@source/assets/历史遗留Bug/Bug2-0.jpg" alt="image-20261102001027940"></p>
<p>我们重新规划连线，让双分支出口先连接节点束，再连接下面的自定义变量整数自增</p>
<p><img src="@source/assets/历史遗留Bug/Bug2-1.jpg" alt="image-20261102001442839"></p>
<p>即可完成修复</p>
</div></template>


