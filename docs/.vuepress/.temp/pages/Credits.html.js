import comp from "C:/Code/ugc-dialogue-wiki/docs/.vuepress/.temp/pages/credits.html.vue"
const data = JSON.parse("{\"path\":\"/credits.html\",\"title\":\"特别鸣谢\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1764779014000,\"contributors\":[{\"name\":\"xiaomoL444\",\"username\":\"xiaomoL444\",\"email\":\"2802273114@qq.com\",\"commits\":4,\"url\":\"https://github.com/xiaomoL444\"}],\"changelog\":[{\"hash\":\"46c2ee5c4633ce8282800641e4328a7d3b2c266a\",\"time\":1764779014000,\"email\":\"2802273114@qq.com\",\"author\":\"xiaomoL444\",\"message\":\"初版完成\"},{\"hash\":\"67e1f7c6c5b1135109888aeb50cfe28ac4bb7191\",\"time\":1764772765000,\"email\":\"2802273114@qq.com\",\"author\":\"xiaomoL444\",\"message\":\"添加了运镜、性能优化、通用节点、额外说明的功能说明，并在已实现的功能中添加了Tip的说明\"},{\"hash\":\"668052d4aaf2ec80b5d9a20bd0b226dbae9341a2\",\"time\":1764692766000,\"email\":\"2802273114@qq.com\",\"author\":\"xiaomoL444\",\"message\":\"添加了鸣谢\"},{\"hash\":\"b61b0b5974d7a8d23ca7a8a3a9d3b6c4954ba8de\",\"time\":1764689006000,\"email\":\"2802273114@qq.com\",\"author\":\"xiaomoL444\",\"message\":\"先添加了部分文档页面\"}]},\"filePathRelative\":\"credits.md\"}")
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
