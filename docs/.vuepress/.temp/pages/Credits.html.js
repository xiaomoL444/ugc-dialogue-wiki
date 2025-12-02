import comp from "C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/credits.html.vue"
const data = JSON.parse("{\"path\":\"/credits.html\",\"title\":\"特别鸣谢\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1764689006000,\"contributors\":[{\"name\":\"xiaomoL444\",\"username\":\"xiaomoL444\",\"email\":\"2802273114@qq.com\",\"commits\":1,\"url\":\"https://github.com/xiaomoL444\"}],\"changelog\":[{\"hash\":\"b61b0b5974d7a8d23ca7a8a3a9d3b6c4954ba8de\",\"time\":1764689006000,\"email\":\"2802273114@qq.com\",\"author\":\"xiaomoL444\",\"message\":\"先添加了部分文档页面\"}]},\"filePathRelative\":\"credits.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
