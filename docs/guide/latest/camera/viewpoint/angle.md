---
order: 100
---

# 视点 · 固定角度

固定角度用来控制相机朝向，例如把原本平视的画面改成仰拍。

1. 打开「配置视点位置」，选「固定角度」。
2. 点位类型选 `NOLOC_Vector3` 时，X、Y、Z 表示方向向量。选 `NOLOC_Rot` 时，才填写旋转角度。
3. 先只改一个轴，在试玩中观察地平线和背景移动的方向。

如果希望镜头始终盯住一个会移动的实体，使用[固定视点位置](./look-at.md)。

![视点位置选中固定角度，点位类型为旋转，显示 X、Y、Z 角度](/assets/camera/viewpoint-angle-settings.jpg)

## 效果演示

左侧看视点标记与角色的位置关系，右侧看固定角度让画面转向天空的效果。

<figure class="camera-demo">
  <figcaption>
    <span>左 · 机位与视点预览</span>
    <span>右 · 实际相机画面</span>
  </figcaption>
  <video src="/assets/camera/viewpoint-angle.mp4" autoplay muted loop playsinline aria-label="左侧是机位和视点预览，右侧是实际相机画面"></video>
</figure>

[2.0 教程 18:59](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=1139)
