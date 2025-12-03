import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance';
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'UGC对话框模版教程',
  description: ' ',

  base: '/',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started'],

    // 是否显示右侧页面内标题导航

    sidebarDepth: 2, // 显示 H2 和 H3
    sidebar: [
      'get-started.md',
      // 字符串 - 页面文件路径
      {
        text: '功能介绍',
        link: '对话功能介绍',
        prefix: '/功能介绍/',
        children: [{
          text: '已实现的功能',
          link: '已实现的功能.md'
        },
          '创建对话.md',
          '跳转对话',
          '选项卡',
          '节点图事件触发',
          '运镜',
          '通用节点',
          '性能优化',
          '额外说明',
          '任务系统'
        ]
      },
      'credits.md'
    ],
  }),

  bundler: viteBundler(),

  plugins: [
    mdEnhancePlugin({
      toc: true, // 开启右侧标题导航
    }),
    componentsPlugin({
      components: ["VPCard"], // ← 必须写这个！否则不会注册组件
    }),
  ],
})
