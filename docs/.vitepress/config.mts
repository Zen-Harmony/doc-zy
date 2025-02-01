import { defineConfig } from 'vitepress';
import { RssPlugin } from 'vitepress-plugin-rss';
import type { RSSOptions } from 'vitepress-plugin-rss';

// Define baseURL
const baseUrl = 'https://doc.zen-harmony.top';

// RSS feed configuration
const RSS: RSSOptions = {
  title: 'Linux Knowledge Base',
  baseUrl: baseUrl,
  icon: false,
  copyright: 'Copyright (c) 2025-present, Linux Knowledge Base',
  renderExpect: (fileContent, frontmatter) => {
    // The logic for generating an article abstract, such as returning the first 140 characters
    const excerpt = fileContent.substring(0, 140) + '...';
    return excerpt;
  },
  // Limit the number of articles included in the output file
  limit: 20 
}

// VitePress site configuration
export default defineConfig({
  vite: {
    plugins: [RssPlugin(RSS)]
  },
  head: [
    ['link', { rel: 'icon', href: '/img/inbox-solid.webp' }]
  ],
  cleanUrls: true,
  sitemap: {
    hostname: baseUrl,
    lastmodDateOnly: false
  },
  base: "/",
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Linux觅知园",
      description: "Linux觅知园",
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '官网', link: 'https://www.zen-harmony.top' },
          { text: 'QQ群组', link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MSUXualaov6ATpPWtUBay_CPRmSw9lcV&authKey=q3nqdThXrsPMfOZowqT20RKnKoGVW%2FY29Bn%2BwEJGd5Tb8Akzu6zz1gmeyQr4DMX8&noverify=0&group_code=985191565' },
        ],
        sidebar: {
          '/': [
            {
              text: '',
              items: [
                { text: '关于项目', link: '/about' },
                { text: 'Linux 资源整理', link: '/resources-collated' },
                { text: 'Linux 教程站', link: 'https://tutorial.zen-harmony.top' },
                { text: '致谢', link: '/thanks' }
              ]
            }
          ]
        },
        lastUpdatedText: '上次更新',
        editLink: {
          pattern: 'https://github.com/zen-harmony/doc-zy/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        darkModeSwitchLabel: '外观',
        outlineTitle: '在此页上',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
        lastUpdated: true,
        footer: {
          message: "<a href=\"https://icp.gov.moe/?keyword=20250668\" target=\"_blank\">萌ICP备20250668号</a><br/>发布在 <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans\" target=\"_blank\">CC BY-SA 4.0</a> 许可证下。",
          copyright: "版权所有 © 2025-present <a href=\"https://github.com/Zen-Harmony\" target=\"_blank\">志海融新</a>"
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: "Linux Knowledge Base",
      description: "A project to collect Linux tutorial resources",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Zen Harmony', link: 'https://www.zen-harmony.top/en' },
          { text: 'QQ Group', link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MSUXualaov6ATpPWtUBay_CPRmSw9lcV&authKey=q3nqdThXrsPMfOZowqT20RKnKoGVW%2FY29Bn%2BwEJGd5Tb8Akzu6zz1gmeyQr4DMX8&noverify=0&group_code=985191565' },
        ],
        sidebar: [
          { text: 'Home', link: '/home' },
          { text: 'Get involved', link: '/en/instructions' },
          {
            text: 'Deepin Common Q&A',
            items: [
              { text: 'Frequently Asked', link: '/en/Linux-solutions/frequently-asked' },
              { text: 'Common Problems', link: '/en/Linux-solutions/common' },
              { text: 'Collections', link: '/en/Linux-solutions/collect' },
              { text: 'Thanks', link: '/en/Linux-solutions/thanks' }
            ]
          }
        ],
        sidebarMenuLabel: 'Contents',
        lastUpdated: true,
        editLink: {
          pattern: 'https://github.com/zen-harmony/doc-zy/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        footer: {
          message: "Released under the <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.en\" target=\"_blank\">CC BY-SA 4.0</a> license.",
          copyright: "Copyright © 2025-present <a href=\"https://github.com/Zen-Harmony\" target=\"_blank\">Zen-Harmony</a>"
        }
      }
    }
  },
  themeConfig: {
    outline: [2, 6],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zen-Harmony' },
      { icon: 'rss', link: `${baseUrl}/feed.rss` }
    ],
    search: {
      provider: 'local'
    },
    lastUpdated: true,
  }
})
