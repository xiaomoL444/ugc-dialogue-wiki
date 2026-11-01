<template><div><h1 id="v6-4-月之五-选项卡无法触发自定义事件" tabindex="-1"><a class="header-anchor" href="#v6-4-月之五-选项卡无法触发自定义事件"><span>v6.4（月之五）-选项卡无法触发自定义事件</span></a></h1>
<h2 id="现象" tabindex="-1"><a class="header-anchor" href="#现象"><span>现象</span></a></h2>
<p>在v6.4（月之五）及之前的版本中，存在当选项卡无法正常触发事件的情况</p>
<h2 id="修复方法" tabindex="-1"><a class="header-anchor" href="#修复方法"><span>修复方法</span></a></h2>
<p>进入下图节点图「[对话模板]对话流程控制器_Default」中</p>
<p><img src="@source/assets/历史遗留Bug/Bug1-0.jpg" alt="图片"></p>
<p>看到下方这里</p>
<p><img src="@source/assets/历史遗留Bug/Bug3-0.jpg" alt="image-20261102001713579"></p>
<p>我们重新规划连线，让减法连接后面的以键按查询值</p>
<p><img src="@source/assets/历史遗留Bug/Bug3-1.jpg" alt="image-20261102001806958"></p>
<p>即可完成修复</p>
</div></template>


