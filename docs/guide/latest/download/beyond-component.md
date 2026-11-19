---
order: 1
---


# 超限模式-元件版

![奇域资产中心的超限模式元件版下载页面](/images/tutorial-v2/beyond-component-asset-center.png)

视频参考：[2.0 导入教程 04:45](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=285)

自动修复索引另见 [2.1 更新视频 07:53](https://www.bilibili.com/video/BV19W4v6oE3L/?t=473)。


## 1. 下载元件资产

进入[奇域资产中心](https://act.mihoyo.com/ys/prod/ugc/component-store/index.html#/item/1992936426160795648)，下载对应资产。

::: warning 导入前先备份
先备份自己的地图存档。元件转存不会覆盖更新已有节点图，不要**反复导入**整套模板来升级，旧项目的更新方式见[版本与升级](../upgrade.md)。
:::

## 2. 转存元件资产 {#transfer-assets}

1. 在自己的地图内打开「资产导入导出管理」，点击「加载外部资产」并「打开目录」。
2. 将 `.gia` 复制到打开的外部资产目录。
3. 回到游戏，再次「加载外部资产」，选中模板资产包，点击「转存所选资产」。
4. 选择导入目标页签并确认。可以把导入页签改名为「演出模板」，方便区分自己原来的资产。

::: important 元件导入后还没有配置完成
转存后请检查 UI 索引。千星会为转存的资产分配新索引，客户端脚本中的旧索引需要校对。可以用下文的自动修复工具。
:::

## 3. 应用演出玩家模板

进入「战斗预设 → 玩家模板」，找到导入的「演出模板」，将它应用到需要使用演出的玩家。

这个模板承载演出所需的自定义变量和节点图。已有自定义玩家模板的项目，也可以自行迁移这些变量和节点图，但要完整保留依赖；首次接入建议先使用模板自带的玩家模板验证。

![将演出模板应用到玩家](/images/tutorial-v2/player-template.jpg)

*图：视频 [05:37](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=337)，玩家模板设置。*

## 4. 自动修复 UI 索引 {#ui-index-repair}

元件转存后，UI 索引会发生变化。当前编辑器已经支持直接修复导出的地图存档：

1. 将已经导入元件的地图导出为 `.gil`。
2. 打开[在线编辑器](https://tool.xiaomol444.xyz/DSFGStudio)，进入「工作区设置」。即为工作区右侧「…」。
3. 在「自动修复索引」中点击「读取 GIL 并修复」。
4. 选择刚导出的地图存档，检查处理结果，下载修复后的新存档。
5. 在「我的奇域」中导入这份新 `.gil`，进入新存档，使用示例火炬验证是否可正常播放。

<!-- ![当前在线编辑器的工作区设置，包含 GIL 识别与索引修复入口](/images/tutorial-v2/workspace-settings-current.jpg)

*图：在线编辑器于 2026-11-10 的工作区设置。基准版本请按自己的模板选择，截图中的默认值不是统一要求。* -->

### 手动核对索引（可选）

2.0 视频 [05:35—06:09](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=335) 演示了旧的手动方法：从界面控件组找到「确认提示」和「对话 UI」的实际索引，再修改五个客户端脚本的对应索引变量。

五个脚本为 `Black_Screen_Script`、`Dialog_Bottom_CG`、`Bottom_Dialog_Script`、`Dialogue_Default_UI_Script`，以及`Default`（实际路径为：`Message_Dialog/styles/Default.lua`）。

![手动修复脚本中的 UI 索引变量](/images/tutorial-v2/manual-ui-index.jpg)

*图：视频 [06:05](https://www.bilibili.com/video/BV1ZCng6LEKV/?t=365)。

## 5. 导入多语言文本

按[多语言文本管理](../presets/presets.md#multilingual-text)下载并导入模板文本。索引修复和语言文件导入各有一步。完成后检查自动播放、历史和隐藏 UI 等按钮。

接下来打开[编辑器入门](../editor.md)，在工作区选择与你的资产相符的元件版类型。
