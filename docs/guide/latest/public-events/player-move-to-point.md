---
order: 300
---

# 玩家移动到指定位置（v7.1）

## 效果演示

<video src="/assets/public-event/player-move-to-point/demo.mp4" autoplay muted loop playsinline aria-label="玩家沿直线跑到指定位置" style="width: 100%; border-radius: 8px;"></video>

## 事件片段

<!-- ![玩家移动到指定位置的时间轴片段和参数面板](/assets/public-event/player-move-to-point/view.png) -->

| 事件别名 | 事件名 |
| --- | --- |
| 玩家移动到指定位置（v7.1） | NOLOC_PlayerMoveToPoint |

## 事件参数

| 参数名 | 参数类型 | 参数作用 |
| --- | --- | --- |
| 方式 | 整数 | 控制玩家移动到目标位置时使用的方式。预设选项为行走（0）、跑步（1）和冲刺（2）。 |
| X轴 | 浮点数 | 目标位置的 X 坐标。 |
| Z轴 | 浮点数 | 目标位置的 Z 坐标。 |

## 事件功能

选择「方式」，再填目标的 X 轴与 Z 轴坐标。适合让玩家在演出里走到城门口的标记位置，保留移动过程。

先单独播放这个片段，检查移动方式和落点。下一句需要等玩家到位时，给移动留出时间，并验证普通点击不会抢先切到下一 Group。需要直接换站位时，用[玩家传送](./player-teleport.md)。
