import { GitContributors } from "C:/Code/ugc-dialogue-wiki/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_cc3dc9f727285d453a0d8a1c115b98bd/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Code/ugc-dialogue-wiki/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_cc3dc9f727285d453a0d8a1c115b98bd/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
