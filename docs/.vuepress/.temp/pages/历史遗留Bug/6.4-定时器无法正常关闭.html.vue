<template><div><h1 id="v6-4-月之五-定时器无法正常关闭" tabindex="-1"><a class="header-anchor" href="#v6-4-月之五-定时器无法正常关闭"><span>v6.4（月之五）-定时器无法正常关闭</span></a></h1>
<h2 id="现象" tabindex="-1"><a class="header-anchor" href="#现象"><span>现象</span></a></h2>
<p>在v6.4（月之五）及之前的版本中，存在对话结束无法正常关闭自动下一句话定时器的问题，表现为若提前关闭对话，会导致莫名重新推进对话。该问题在演出模版2.0中不存在</p>
<h2 id="修复方法" tabindex="-1"><a class="header-anchor" href="#修复方法"><span>修复方法</span></a></h2>
<p>进入下图节点图「[对话模板]对话流程控制器_Default」中</p>
<p><img src="@source/assets/历史遗留Bug/Bug1-0.jpg" alt="图片"></p>
<p>来到最上方这里</p>
<p><img src="@source/assets/历史遗留Bug/Bug1-1.jpg" alt="image-20261101235546431"></p>
<p>我们添加一个终止定时器，目标实体为自身实体，定时器名称为「DialogueAutoNext」</p>
<p><img src="@source/assets/历史遗留Bug/Bug1-2.jpg" alt="image-20261101235718798"></p>
<p>即可完成修复</p>
</div></template>


