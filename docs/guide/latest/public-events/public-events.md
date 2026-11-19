---
order: 400
---

# 公共事件

公共事件用于在演出中播放现成行为，比如移动玩家、锁定 BGM、触发物件朝向或重置镜头。2.0 视频从 [13:32](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=812) 开始演示。

## 添加一个事件片段

1. 在「节点编辑」中选中任意片段的 Group，打开时间轴。
2. 在时间轴上添加「公共事件」片段，单击「公共事件」片段，右侧可以填入公共事件设置
3. 填好目标和所需参数。GUID、技能配置 ID、实体注册表键名分别按对应字段填写。
4. 分别把片段放到第 0 秒和第 1 秒，按[通用步骤](../editor.md#try-in-game)更新游戏里的数据并试玩，比较动作与台词的先后。

![从公共事件候选列表选择事件并配置参数](/images/tutorial-v2/public-events.jpg)

*图：2.0 视频 [14:10](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=850)。*

## 事件片段的时间设置 {#event-timing}

开始时间控制行为何时触发。2.1 在公共事件预设中加入「是否可拖拽 Clip 边缘」。开启后可调整片段持续时间，实际行为能持续多久还取决于事件的实现。演出是否继续由 [Group 的推进方式](../dialogue/performance/timeline/progression.md)决定。

## 模板自带哪些公共事件

- [玩家播放技能动画（v7.1）](./player-skill.md)
- [玩家传送（v7.1）](./player-teleport.md)
- [玩家移动到指定位置（v7.1）](./player-move-to-point.md)
- [播放简单黑幕（v7.1）](./simple-black-screen.md)
- [锁定并播放 BGM（v7.1）](./lock-and-play-bgm.md)
- [解锁 BGM（v7.1）](./unlock-bgm.md)
- [演出注目实体（v7.1）](./focus-on-entity.md)
- [重置镜头（v7.1）](./reset-camera.md)
- [触发实体朝向（仅物件）（v7.1）](./object-facing.md)
- [玩家朝向实体（v7.2）](./player-facing.md)
- [设置实体预设状态（v7.3）](./set-preset-status.md)

## 添加自定义公共事件 {#custom-events}

如果多段演出都会开门，可以到[公共事件预设](../presets/events-and-assets.md#公共事件参数)新建「打开机关」，加一个 String 参数来传递机关的注册键名。游戏节点图接收事件后，用键名找到对应的门并打开它。

回到时间轴添加这个片段，分别填写城门和侧门的键名，试玩确认每次只打开指定的门。如果只想在某段演出里向节点图发一次信号，可以用[节点图事件触发](../dialogue/performance/timeline/node-events.md)。
