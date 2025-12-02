import { CodeTabs } from "C:/Code/ugc-dialogue-wiki/node_modules/.pnpm/@vuepress+plugin-markdown-t_31d7f6291fe3638fcf69b6ed681c146b/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Code/ugc-dialogue-wiki/node_modules/.pnpm/@vuepress+plugin-markdown-t_31d7f6291fe3638fcf69b6ed681c146b/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Code/ugc-dialogue-wiki/node_modules/.pnpm/@vuepress+plugin-markdown-t_31d7f6291fe3638fcf69b6ed681c146b/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
