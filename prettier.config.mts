import type { Config } from "prettier";

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
    trailingComma: "all",
    tabWidth: 4,
    semi: false,
    singleQuote: false,
} satisfies Config;
