---
order: 300
---

# 视点 · 固定视点位置

镜头一直朝向一个目标。目标可以是地图上的点，也可以是人物或物件。绑定移动实体时，镜头的朝向会跟着实体的位置变化。

1. 打开「配置视点位置」，选「固定视点位置」。
2. 填写[坐标、GUID 或实体注册键名](../targets.md)。需要看向人物头部时，可按实际模型调整挂接点和偏移。
3. 想在演出一开始就看向目标，打开「是否立即抵达目标」。想从当前朝向转过去，则关闭它并在试玩中检查过渡时间。

![视点位置选中固定视点位置，右侧显示目标实体 GUID 和是否立即抵达目标](/assets/camera/viewpoint-look-at-settings.jpg)

## 效果演示

左侧看场景中的机位和视点标记，右侧看相机移动时如何持续朝向白色方块。

<figure class="camera-demo">
  <figcaption>
    <span>左 · 机位与视点预览</span>
    <span>右 · 实际相机画面</span>
  </figcaption>
  <video src="/assets/camera/viewpoint-look-at.mp4" autoplay muted loop playsinline aria-label="左侧是机位和视点预览，右侧是实际相机画面"></video>
</figure>

[2.0 教程 19:29](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=1169)
