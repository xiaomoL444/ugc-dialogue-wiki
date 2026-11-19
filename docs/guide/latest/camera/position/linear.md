---
order: 200
---

# 机位 · 线性移动

线性移动让机位沿直线从起点移到终点。

1. 在「相机位置」选「线性移动」，先填终点。
2. 需要每次从固定位置开始时，再加起点。当只有一个点位时，该点位即为终点，会获取当前玩家镜头位置作为起点进行过过渡（注意：模板内获取玩家镜头位置只能获取主机玩家镜头，若要适配多人模式需要做其他的操作）。

![时间轴上的相机片段和线性移动的起点、终点](/assets/camera/movement.png)

点位引用移动实体时，可以看[镜头过渡与触发时序](../timing.md)里的「需要客户端位置」。

## 效果演示

左侧看机位标记移动到终点，右侧看实际镜头沿路径移动时构图的变化。

<figure class="camera-demo">
  <figcaption>
    <span>左 · 机位与视点预览</span>
    <span>右 · 实际相机画面</span>
  </figcaption>
  <video src="/assets/camera/position-linear.mp4" autoplay muted loop playsinline aria-label="左侧是机位和视点预览，右侧是实际相机画面"></video>
</figure>

[2.0 教程 17:51](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=1071)
