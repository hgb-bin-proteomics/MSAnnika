import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/MSAnnika/",
  srcDir: "md",
  title: "MS Annika",
  description: "A crosslink search engine for high resolution mass spectra.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/logo/annika_logo.png",
      },
    ],
  ],
  markdown: {
   theme: {
     light: "catppuccin-latte",
     dark: "catppuccin-mocha",
    },
  },
  themeConfig: {
    logo: {
      src: "https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/logo/annika_logo.png",
      alt: "MS Annika logo",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Download", link: "/download" },
      { text: "Usage", link: "/usage" },
      { text: "Help", link: "/help" },
    ],
    sidebar: [
      {
        items: [
          { text: "About", link: "/about" },
          { text: "Download", link: "/download" },
          { text: "Installation", link: "/install" },
          { text: "Usage", link: "/usage" },
          { text: "Tutorial", link: "/tutorial" },
          { text: "Example Data", link: "/example" },
          { text: "Example Workflows", link: "/workflows" },
          { text: "Astral Data", link: "/astral" },
          { text: "MGF and timsTOF Data", link: "/tims" },
          { text: "Getting Help", link: "/help" },
          { text: "Known Issues", link: "/issues" },
          { text: "Contributing", link: "/contrib" },
          { text: "Citing", link: "/citing" },
          { text: "Contact", link: "/contact" },
        ],
      },
    ],
    footer: {
      copyright: "Copyright © 2026 Micha J. Birklbauer"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/hgb-bin-proteomics/MSAnnika" }],
    search: {
        provider: 'local'
    },
  },
})
