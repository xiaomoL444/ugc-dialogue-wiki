---
order: 800
---

# 重置镜头（v7.1）

## 效果演示

<video src="/assets/public-event/reset-camera/demo.mp4" autoplay muted loop playsinline aria-label="对话结束后镜头恢复常规视角" style="width: 100%; border-radius: 8px;"></video>

## 事件片段

<!-- ![重置镜头的时间轴片段和参数面板](/assets/public-event/reset-camera/view.png) -->

| 事件别名 | 事件名 |
| --- | --- |
| 重置镜头（v7.1） | NOLOC_ResetCamera |

## 事件参数

| 参数名 | 参数类型 | 参数作用 |
| --- | --- | --- |
| 是否立即到达 | 布尔值 | 选「是」时立即恢复镜头，选「否」时使用过渡。默认「否」。 |

## 事件功能

在演出收尾时添加「重置镜头」，用「是否立即到达」控制恢复方式。需要直接恢复画面时选「是」，希望保留镜头过渡时选「否」。

可以先放一个[演出注目实体](./focus-on-entity.md)，再分别用两种设置重置，比较画面恢复的时机和过渡。
