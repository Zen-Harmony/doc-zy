import { RssPlugin, RSSOptions } from 'vitepress-plugin-rss'
import { defineConfig } from 'vitepress'

// Base URL for the site
const baseUrl = 'https://doc.zen-harmony.top'

// RSS feed configuration
const RSS: RSSOptions = {
  title: 'Linux Knowledge Base', // Title of the RSS feed
  baseUrl, // Base URL for the feed
  copyright: 'Copyright (c) 2024-present, Linux Knowledge Base', // Copyright information
}

// VitePress site configuration
export default defineConfig({
  // vite: {
    // plugins: [RssPlugin(RSS)] // Add RSS plugin to Vite
  // },
  head: [
    ['link', { rel: 'icon', href: '/img/inbox-solid.webp' }] // Add favicon
  ],
  cleanUrls: true, // Enable clean URLs
  sitemap: {
    hostname: 'https://doc.zen-harmony.top', // Sitemap hostname
    lastmodDateOnly: false // Include full date for last modification
  },
  base: "/", // Base URL for the site
  markdown: {
    theme: {
      light: 'catppuccin-latte', // Light theme
      dark: 'catppuccin-mocha', // Dark theme
    },
  },
  locales: {
    root: {
      label: '简体中文', // Label for Simplified Chinese locale
      lang: 'zh-CN', // Language code for Simplified Chinese
      title: "Linux觅知园", // Site title for Simplified Chinese
      description: "Linux觅知园", // Site description for Simplified Chinese
      themeConfig: {
        nav: [
          { text: '主页', link: '/' }, // Home link
          { text: '官网', link: 'https://www.zen-harmony.top' }, // Official website link
          { text: 'QQ群组', link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MSUXualaov6ATpPWtUBay_CPRmSw9lcV&authKey=q3nqdThXrsPMfOZowqT20RKnKoGVW%2FY29Bn%2BwEJGd5Tb8Akzu6zz1gmeyQr4DMX8&noverify=0&group_code=985191565' } // QQ group link
        ],
        sidebar: {
          '/': [
            {
              text: '',
              items: [
                { text: '关于项目', link: '/about' }, // About the project
                { text: 'Linux 资源整理', link: '/resources-collated' }, // Linux resources
                { text: 'Linux 教程站', link: 'https://tutorial.zen-harmony.top' }, // Linux tutorial site
                { text: '致谢', link: '/thanks' } // Thanks page
              ]
            }
          ]
        },
        lastUpdatedText: '上次更新', // Last updated text
        editLink: {
          pattern: 'https://github.com/zen-harmony/doc-zy/edit/main/docs/:path', // Edit link pattern
          text: '在 GitHub 上编辑此页' // Edit link text
        },
        docFooter: {
          prev: '上一页', // Previous page text
          next: '下一页' // Next page text
        },
        darkModeSwitchLabel: '外观', // Dark mode switch label
        outlineTitle: '在此页上', // Outline title
        sidebarMenuLabel: '目录', // Sidebar menu label
        returnToTopLabel: '返回顶部', // Return to top label
      }
    },
    en: {
      label: 'English', // Label for English locale
      lang: 'en', // Language code for English
      link: '/en/', // Link for English locale
      title: "Linux Knowledge Base", // Site title for English
      description: "A project to collect Linux tutorial resources", // Site description for English
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' }, // Home link
          { text: 'Zen Harmony', link: 'https://www.zen-harmony.top/en' }, // Zen Harmony link
          { text: 'QQ Group', link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MSUXualaov6ATpPWtUBay_CPRmSw9lcV&authKey=q3nqdThXrsPMfOZowqT20RKnKoGVW%2FY29Bn%2BwEJGd5Tb8Akzu6zz1gmeyQr4DMX8&noverify=0&group_code=985191565' } // QQ group link
        ],
        sidebar: [
          { text: 'Home', link: '/home' }, // Sidebar home link
          { text: 'Get involved', link: '/en/instructions' }, // Get involved link
          {
            text: 'Deepin Common Q&A',
            items: [
              { text: 'Frequently Asked', link: '/en/Linux-solutions/frequently-asked' }, // Frequently asked questions
              { text: 'Common Problems', link: '/en/Linux-solutions/common' }, // Common problems
              { text: 'Collections', link: '/en/Linux-solutions/collect' }, // Collections
              { text: 'Thanks', link: '/en/Linux-solutions/thanks' } // Thanks page
            ]
          }
        ],
        sidebarMenuLabel: 'Contents' // Sidebar menu label
      },
    }
  },
  themeConfig: {
    outline: [2, 6], // Outline levels
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zen-Harmony' }, // GitHub link
      { icon: 'rss', link: `${baseUrl}/feed.rss` } // RSS link
    ],
    search: {
      provider: 'local' // Local search provider
    }
  }
})
