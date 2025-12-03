export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/credits.html", { loader: () => import(/* webpackChunkName: "credits.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/credits.html.js"), meta: {"title":"特别鸣谢"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"快速开始"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/%E5%AF%B9%E8%AF%9D%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D.html", { loader: () => import(/* webpackChunkName: "对话功能介绍.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/对话功能介绍.html.js"), meta: {"title":"对话功能介绍"} }],
  ["/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.html", { loader: () => import(/* webpackChunkName: "更新日志.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/更新日志.html.js"), meta: {"title":"更新日志"} }],
  ["/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E4%BB%BB%E5%8A%A1%E7%B3%BB%E7%BB%9F.html", { loader: () => import(/* webpackChunkName: "功能介绍_任务系统.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/功能介绍/任务系统.html.js"), meta: {"title":"任务系统"} }],
  ["/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%AF%9D.html", { loader: () => import(/* webpackChunkName: "功能介绍_创建对话.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/功能介绍/创建对话.html.js"), meta: {"title":"创建对话（基础教程）"} }],
  ["/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E5%B7%B2%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8A%9F%E8%83%BD.html", { loader: () => import(/* webpackChunkName: "功能介绍_已实现的功能.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/功能介绍/已实现的功能.html.js"), meta: {"title":"已实现的功能"} }],
  ["/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html", { loader: () => import(/* webpackChunkName: "功能介绍_性能优化.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/功能介绍/性能优化.html.js"), meta: {"title":"性能优化"} }],
  ["/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E8%8A%82%E7%82%B9%E5%9B%BE%E4%BA%8B%E4%BB%B6%E8%A7%A6%E5%8F%91.html", { loader: () => import(/* webpackChunkName: "功能介绍_节点图事件触发.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/功能介绍/节点图事件触发.html.js"), meta: {"title":"节点图事件触发"} }],
  ["/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E8%B7%B3%E8%BD%AC%E5%AF%B9%E8%AF%9D.html", { loader: () => import(/* webpackChunkName: "功能介绍_跳转对话.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/功能介绍/跳转对话.html.js"), meta: {"title":"跳转对话"} }],
  ["/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E8%BF%90%E9%95%9C.html", { loader: () => import(/* webpackChunkName: "功能介绍_运镜.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/功能介绍/运镜.html.js"), meta: {"title":"运镜（11.25更新）"} }],
  ["/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E9%80%89%E9%A1%B9%E5%8D%A1.html", { loader: () => import(/* webpackChunkName: "功能介绍_选项卡.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/功能介绍/选项卡.html.js"), meta: {"title":"选项卡"} }],
  ["/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E9%80%9A%E7%94%A8%E8%8A%82%E7%82%B9.html", { loader: () => import(/* webpackChunkName: "功能介绍_通用节点.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/功能介绍/通用节点.html.js"), meta: {"title":"通用节点"} }],
  ["/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E9%A2%9D%E5%A4%96%E8%AF%B4%E6%98%8E.html", { loader: () => import(/* webpackChunkName: "功能介绍_额外说明.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/功能介绍/额外说明.html.js"), meta: {"title":"额外说明"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
