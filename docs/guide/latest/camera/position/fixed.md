---
order: 100
---

# 机位 · 固定位置

固定位置让相机停在一个静止的点上（曾经支持临时获取挂接点位置停在挂接点上，但是后来发现实现结果出现了问题，因此删除了挂接点位置，可以用跟随代替）

1. 在编辑器的「相机位置」选「固定位置」。
2. 点位类型选择 `NOLOC_Vector3` （固定三维坐标），使用地图中实际需要的 X、Y、Z 坐标值。

![相机位置选中固定位置，时间轴右侧显示固定点的 Vector3 坐标](/assets/camera/position-fixed-settings.jpg)

## 效果演示

左侧看机位标记相对场景的位置，右侧看切到固定机位后角色的取景。

<figure class="camera-demo">
  <figcaption>
    <span>左 · 机位与视点预览</span>
    <span>右 · 实际相机画面</span>
  </figcaption>
  <video src="/assets/camera/position-fixed.mp4" autoplay muted loop playsinline aria-label="左侧是机位和视点预览，右侧是实际相机画面"></video>
</figure>

[2.0 教程 17:46](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=1066)
