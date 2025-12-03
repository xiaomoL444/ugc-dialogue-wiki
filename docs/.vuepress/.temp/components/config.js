import { hasGlobalComponent } from "C:/Code/ugc-dialogue-wiki/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_1392c759c73b77c2a12d532087599da5/node_modules/@vuepress/helper/lib/client/index.js";
import VPCard from "C:/Code/ugc-dialogue-wiki/node_modules/.pnpm/vuepress-plugin-components@_87a4105af1fa0e76a4d2123db619720e/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "C:/Code/ugc-dialogue-wiki/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_1392c759c73b77c2a12d532087599da5/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
