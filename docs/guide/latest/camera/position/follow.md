---
order: 300
---

# 机位 · 跟随

机位跟随选定实体的位置。用移动实体可以跟拍，用静止实体可以得到稳定机位。

1. 在「相机位置」选「跟随」，填写参考实体的 [GUID 或注册键名](../targets.md)。
2. 用「挂接点」选取参考位置，再用「偏移」把相机移到参考点侧面、上方或后方。
3. 开启「是否立即抵达目标」可直接切到跟随机位。关闭后，模板会从当前镜头位置过渡过去。

如果希望相机跟着甲实体移动、同时拍摄乙实体，把两者分别填到相机位置和[固定视点位置](../viewpoint/look-at.md)。

![相机位置选中跟随，右侧显示目标实体 GUID、挂接点、偏移和是否立即抵达目标](/assets/camera/position-follow-settings.jpg)

## 效果演示

左侧看机位标记与跟随目标的位置关系，右侧看跟随过程中角色和地面的构图变化。

<figure class="camera-demo">
  <figcaption>
    <span>左 · 机位与视点预览</span>
    <span>右 · 实际相机画面</span>
  </figcaption>
  <video src="/assets/camera/position-follow.mp4" autoplay muted loop playsinline aria-label="左侧是机位和视点预览，右侧是实际相机画面"></video>
</figure>

[2.0 教程 18:04](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=1084)
