<template><div><h1 id="任务系统" tabindex="-1"><a class="header-anchor" href="#任务系统"><span>任务系统</span></a></h1>
<p>其实这个并不算严格意义上的<code v-pre>系统</code>，我曾经做过的的任务结束自动接取关联任务，以及子任务的设计，现在全部被砍掉了，只留下了显示UI的部分，但是仅作为显示部分，其实就足够了</p>
<h3 id="_1-添加任务数据" tabindex="-1"><a class="header-anchor" href="#_1-添加任务数据"><span>1.添加任务数据</span></a></h3>
<p>前往<code v-pre>高级数据管理</code>，点击<code v-pre>任务配置列表</code>，我们在这里配置任务。</p>
<p>任务列表的整数代表人物的id，例如这里的1代表这个任务的id为1</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>单个字典最大长度为<code v-pre>100</code>，不要超过这个长度，会导致无法进入游戏</p>
</div>
<p><img src="/assets/dialogue-function-introduction/任务配置列表高级数据管理.png" alt="示例"></p>
<p>点进结构体后，会看见几个关键字段，<code v-pre>标题</code>类似任务的章节，每次接取任务后会出现，并在2s后消失，留下<code v-pre>副标题</code>常驻。</p>
<p>调查预设点是填写预设点的点位，用来放在提醒玩家互动的位置（通常也表明任务位置或任务中心）</p>
<p>调查范围是当玩家处于这个范围内时，显示<code v-pre>已在任务范围内</code>，在范围外则显示距离任务中心点的距离，默认是-1</p>
<p>下面两个则是设置是否显示光标提示和特效提示光柱显示</p>
<p><img src="/assets/dialogue-function-introduction/任务结构体.png" alt="示例"></p>
<p>如下的特效和铭牌</p>
<p><img src="/assets/dialogue-function-introduction/特效和铭牌.png" alt="示例"></p>
<h3 id="_2-接取任务" tabindex="-1"><a class="header-anchor" href="#_2-接取任务"><span>2.接取任务</span></a></h3>
<p>搜索<code v-pre>任务</code>，会有三个节点图</p>
<p>顾名思义，这里需要提醒的是，通常如果是一个任务接一个任务，直接使用<code v-pre>接取任务</code>就可以直接覆盖之前的任务并重新显示。</p>
<p><code v-pre>完成任务</code>是让任务区域显示<code v-pre>任务完成</code>，<code v-pre>放弃任务</code>会直接关闭UI</p>
<p><img src="/assets/dialogue-function-introduction/任务节点图.png" alt="示例"></p>
</div></template>


