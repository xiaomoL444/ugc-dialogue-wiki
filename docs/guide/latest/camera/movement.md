---
order: 400
---

# 镜头组合与实机对照

机位决定从哪里拍，视点决定朝哪里看。把两者分开配置，同一个机位可以看不同对象，同一个对象也可以用不同机位来拍。

| 想要的画面 | 机位 | 视点 |
| --- | --- | --- |
| 从远处推进到向导附近 | [线性移动](./position/linear.md) | [固定视点位置](./viewpoint/look-at.md)，引用向导 |
| 绕着说话的角色展示两侧 | [环绕](./position/orbit.md) | [固定视点位置](./viewpoint/look-at.md)，引用角色 |
| 相机跟着一个物件走，同时看向人物 | [跟随](./position/follow.md)，引用物件 | [固定视点位置](./viewpoint/look-at.md)，引用人物 |

要单独查某种设置，见[机位位置](./position/position.md)和[视点位置](./viewpoint/viewpoint.md)。

## 2.0 与 2.1 的镜头设置

如果工作区没有 2.0 视频里的旧「固定位置」入口，可以用跟随引用静止实体来做固定机位。修复涉及运镜管理器节点图，见[版本与升级](../upgrade.md#固定位置镜头)。

## 效果演示

左侧看机位和视点标记如何随角色动作变化，右侧看这组运镜的实际构图。

<figure class="camera-demo">
  <figcaption>
    <span>左 · 机位与视点预览</span>
    <span>右 · 实际相机画面</span>
  </figcaption>
  <video src="/assets/camera/movement-compare.mp4" autoplay muted loop playsinline aria-label="左侧是机位和视点预览，右侧是实际相机画面"></video>
</figure>

[2.0 教程 19:46](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=1186)
