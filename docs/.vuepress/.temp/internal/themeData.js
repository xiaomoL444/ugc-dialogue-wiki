export const themeData = JSON.parse("{\"logo\":\"https://bilibili-user-avatar.2802273114.workers.dev/?url=https://i1.hdslb.com/bfs/face/b94d505e6be9b2504f6fa23c0030751b23f54e5f.jpg\",\"navbar\":[\"/\",\"/get-started\",\"/千星沙箱各种数量上限\"],\"sidebarDepth\":2,\"sidebar\":{\"/\":[\"get-started.md\",{\"text\":\"功能介绍\",\"link\":\"对话功能介绍\",\"prefix\":\"/功能介绍/\",\"children\":[{\"text\":\"已实现的功能\",\"link\":\"已实现的功能.md\"},\"创建对话.md\",\"跳转对话\",\"选项卡\",\"节点图事件触发\",\"运镜\",\"通用节点\",\"性能优化\",\"额外说明\",\"任务系统\"]},\"更新日志.md\",\"credits.md\"],\"/千星沙箱各种数量上限\":[\"/千星沙箱各种数量上限\"]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
