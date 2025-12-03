<template><div><h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h1>
<h2 id="_2025-12-3" tabindex="-1"><a class="header-anchor" href="#_2025-12-3"><span>2025.12.3</span></a></h2>
<ul>
<li>修复了元件版调整Gamecoordinator节点图的按键索引后仍然无法正常使用下一句话按钮的问题<details class="hint-container details"><summary>手动修复</summary>
<p>1.在节点图中找到<code v-pre>（勿删！）Gamecoordinator</code></p>
<p><img src="@source/assets/更新日志/找到Gamecoordinator.png" alt="图片">
2.双击进入后，注意到红框这里的<code v-pre>界面控件触发时</code>，后面的<code v-pre>Int32.Equals复合节点</code></p>
<p><img src="@source/assets/更新日志/找到Gamecoordinator的问题.png" alt="图片">	
3.拉出一个获取节点图变量，小齿轮类型设置成整数（或者直接从节点图变量处拉出来获取节点图变量），节点图变量名设置成<code v-pre>「（勿删）对话下一句按钮」索引</code>即可</p>
<p><img src="@source/assets/更新日志/拉出Gamecoordinator节点图变量.png" alt="图片"></p>
</details>
</li>
<li>修复了<code v-pre>（勿删！）Gamecoordinator</code>节点图创建管理器时可能会出现的飞线问题</li>
</ul>
<h1 id="_2025-11-25-v0-1-10-9" tabindex="-1"><a class="header-anchor" href="#_2025-11-25-v0-1-10-9"><span>2025.11.25 v0.1.10.9</span></a></h1>
<ul>
<li>更新了运镜功能</li>
</ul>
</div></template>


