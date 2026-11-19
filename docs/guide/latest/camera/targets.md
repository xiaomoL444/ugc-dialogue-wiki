---
order: 300
---

# 镜头目标与实体绑定

机位和视点各有自己的点位。可以让机位跟着场地里的参考物，视点跟着说话的向导。

| 点位类型 | 填写内容 | 何时使用 |
| --- | --- | --- |
| `NOLOC_Vector3` | X、Y、Z | 直接指定地图中的一个点 |
| `NOLOC_Guid` | 地图中该实体的 GUID | 引用已经放在地图里的实体 |
| `NOLOC_Entity` | 实体注册表中的字符串键名 | 引用游戏运行中生成或通过节点注册的实体 |

「固定角度」里的三维向量表示方向，见[固定角度](./viewpoint/angle.md)。机位「跟随」需要 GUID 或注册键名。

![视点位置引用实体键名](/assets/camera/targets.png)

图中视点引用了 `city_gate_guide`。这个键必须和[实体注册表](./entity-registry.md)里登记的键一致。工作区可用[实体预设](../presets/entities.md)保存常用的值。

## 坐标空间、挂接点与偏移

使用实体作为点位时，可以从该实体的挂接点出发，再加入偏移。「Local」和「World」分别按局部轴和世界轴理解。目标会旋转时，试玩比较偏移是否跟着实体的朝向旋转。可以先用默认挂接点和零偏移确认能找到实体，再逐项改动。

## 效果演示

左侧看场地中被引用的目标，右侧看实际相机朝向悬浮球体的效果。

<figure class="camera-demo">
  <figcaption>
    <span>左 · 机位与视点预览</span>
    <span>右 · 实际相机画面</span>
  </figcaption>
  <video src="/assets/camera/targets-compare.mp4" autoplay muted loop playsinline aria-label="左侧是机位和视点预览，右侧是实际相机画面"></video>
</figure>

[2.0 教程 17:09](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=1029)
