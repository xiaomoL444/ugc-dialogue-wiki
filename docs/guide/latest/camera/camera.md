---
order: 500
---

# 运镜

2.x 的运镜把**镜头位置（机位）**与**镜头朝向的目标（视点）**分开控制。机位可以移动，视点也可以跟随另一个实体，组合出定点、跟拍、直线移动和环绕等效果。

视频对应：[16:33—20:51](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=993)。首次尝试建议使用超限模式模板。

::: info 经典模式限制
2.1 增加了经典模式支持，但经典模式仍不支持需要获取玩家镜头数据的操作。使用经典模式时，工作区类型选「经典模式元件版」。
:::

## 让镜头切到向导

1. 在演出 Group 的时间轴中添加 Camera 镜头片段；需要复用时，也可使用编辑器的镜头模块管理独立镜头配置。
2. 选择地图中实际存在的镜头模板名。需要增加候选时，见[相机预设](../presets/events-and-assets.md#相机)。
3. 配置机位的运动方式和位置来源。
4. 按需启用视点，设置它注视的位置或实体。视频提示新镜头的视点默认未开启，需要主动检查。
5. 设置移动时长、片段开始时间等属性，按[通用步骤](../editor.md#try-in-game)更新游戏内数据。

![在镜头片段中分别设置机位与视点运动](/images/tutorial-v2/camera-motion.jpg)

*图：视频 [18:30](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=1110)。*

试玩时先确认镜头从哪个位置拍、是否对准向导，再检查动作和台词的时间。若希望镜头先到位再说话，可把台词的开始时间往后排。收尾时用[重置镜头](../public-events/reset-camera.md)并检查画面是否恢复。

## 按设置查阅

| 想设置什么 | 文档 |
| --- | --- |
| 镜头从哪里拍 | [机位位置](./position/position.md) · [固定位置](./position/fixed.md) · [线性移动](./position/linear.md) · [跟随](./position/follow.md) · [环绕](./position/orbit.md) |
| 镜头朝哪边看 | [视点位置](./viewpoint/viewpoint.md) · [固定角度](./viewpoint/angle.md) · [线性移动](./viewpoint/linear.md) · [固定视点位置](./viewpoint/look-at.md) |
| 引用地图点位或实体 | [镜头目标与实体绑定](./targets.md) · [实体注册表](./entity-registry.md) |
| 把机位和视点搭配起来 | [镜头组合与实机对照](./movement.md) |
| 调整开始时间或独立触发 | [镜头过渡与触发时序](./timing.md) · [独立镜头与复用](./reuse.md) |

各模式页沿用 2.0 教程的双画面。左侧显示机位和视点预览，右侧显示实际相机画面。
