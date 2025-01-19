import { resolve } from "path";
import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "sv-SE",
    title: "Brunfilm",
    description: "Sagan om Brunfilm.",
    titleTemplate: false,
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    themeConfig: {
        logo: { light: "/logo-dark.svg", dark: "/logo-light.svg", alt: "Brunfilm logo" },
        siteTitle: "Brunfilm",
        nav: [
            { text: "Hem", link: "/" },
            { text: "Historia", link: "/historia/" },
            { text: "Filmer", link: "/filmer/" },
            { text: "Om", link: "/om" },
        ],
        footer: {
            copyright: "Copyright © 1999-present Brunfilm",
        },
        externalLinkIcon: true,
        editLink: {
            pattern: "https://github.com/Brunfilm/brunfilm.github.io/blob/main/src/:path",
            text: "Edit this page on GitHub",
        },
    },
    markdown: {
        image: {
            lazyLoading: true, // image lazy loading is disabled by default
        },
    },
    sitemap: {
        hostname: "https://www.brunfilm.com",
    },
    vite: {
        resolve: {
            alias: {
                "@/*": resolve(__dirname, "./src/.vitepress/*"),
                "@": resolve(__dirname, "./"),
            },
        },
    },
});
