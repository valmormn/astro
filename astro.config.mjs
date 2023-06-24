import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";

import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
// import image from "@astrojs/image";

import astroI18next from "astro-i18next";


import tailwind from "@astrojs/tailwind";

// import cloudflare from "@astrojs/cloudflare";
import netlify from "@astrojs/netlify/functions";
// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://valmor.dev',
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    remarkPlugins: [],
    rehypePlugins: [],
    remarkRehype: {
      footnoteLabel: 'Footnotes'
    },
    gfm: false
  }), prefetch(),
  // astroI18next(),
  partytown({
    config: {
      //options go here
    }
  }), sitemap(),
  // image({
  //   serviceEntryPoint: '@astrojs/image/sharp'
  // }), 
  tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    applyBaseStyles: false
  })],
  output: "server",
  adapter: netlify()
});