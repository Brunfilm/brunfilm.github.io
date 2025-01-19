import MovieLayout from "@/components/MovieLayout.vue";
import "iconify-icon";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("MovieLayout", MovieLayout);
    },
} satisfies Theme;
