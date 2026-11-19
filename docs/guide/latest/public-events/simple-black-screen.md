---
order: 400
---

# 播放简单黑幕（v7.1）

## 效果演示

<video src="/assets/public-event/simple-black-screen/demo.mp4" autoplay muted loop playsinline aria-label="黑幕淡入、停留后淡出" style="width: 100%; border-radius: 8px;"></video>

## 事件片段

<!-- ![播放简单黑幕的时间轴片段和参数面板](/assets/public-event/simple-black-screen/view.png) -->

| 事件别名 | 事件名 |
| --- | --- |
| 播放简单黑幕（v7.1） | NOLOC_SimpleBlackScreen |

## 事件参数

| 参数名 | 参数类型 | 参数作用 |
| --- | --- | --- |
| 颜色（#RRGGBB 或 #RRGGBBAA） | 字符串 | 设置遮罩颜色。默认 `#000000FF` 为不透明黑色。 |
| 过渡时间 | 浮点数 | 黑幕从出现到达到设定颜色和不透明度所用的秒数，默认 0.5 秒。 |
| 持续时间 | 浮点数 | 黑幕完全出现后的停留秒数，默认 1 秒。 |
| 淡出时间 | 浮点数 | 黑幕消退所用的秒数，默认 0.5 秒。 |

## 事件功能

填写颜色、过渡时间、持续时间和淡出时间。用 `#000000FF` 可以做不透明的黑色遮罩。比如把过渡和淡出各设成 0.5 秒，中间停留 1 秒。试玩时检查画面先被遮住、停留后再恢复。

要在切场时遮住画面，可以把[玩家传送](./player-teleport.md)放在黑幕停留期间。需要在黑幕上显示台词时，使用[黑幕对话样式](../dialogue/performance/text-editing.md#styles)。
