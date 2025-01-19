import { createContentLoader } from "vitepress";

const Geografiskt = {
    Sverige: 0,
    Västernorrland: 1,
} as const;
export type Geografiskt = (typeof Geografiskt)[keyof typeof Geografiskt];

const Pris = {
    PublicChoice: 0,
    First: 1,
    Second: 2,
    Third: 3,
} as const;
export type Pris = (typeof Pris)[keyof typeof Pris];
export interface Tavling {
    namn: string;
    sammanfattning: string;
    år: number;
    upplaga: string;
    klass: string;
    geografiskt: Geografiskt;
    pris?: Pris | Pris[];
    tema?: string;
    platser?: string;
    föremål?: string;
    motivering?: string;
    övrigt?: string;
}

const Kategori = {
    Mokumentär: 0,
    Tecknat: 1,
} as const;
export type Kategori = (typeof Kategori)[keyof typeof Kategori];

const Dvd = {
    None: 0,
    "Brunfilm Classics I": 1,
    "Brunfilm Classics II": 2,
    "Brunfilm Classics III": 3,
    "Brunfilm Classics IV": 4,
    "Brunfilm Classics V": 5,
} as const;
export type Dvd = (typeof Dvd)[keyof typeof Dvd];

export interface Movie {
    url: string;
    typ: string;
    title: string;
    release: number;
    description: string;
    poster: string;
    kategori: Kategori[];
    dvd: Dvd[];
    tävling?: Tavling[];
}

declare const data: Movie[];
export { data };

export default createContentLoader("filmer/**/index.md", {
    transform(rawData): Movie[] {
        return rawData
            .filter((page) => !page.url.endsWith("/filmer/"))
            .sort((a, b) => {
                return b.frontmatter.release - a.frontmatter.release;
            })
            .map((page) => {
                return {
                    url: page.url,
                    typ: page.frontmatter.typ,
                    title: page.frontmatter.title,
                    release: page.frontmatter.release,
                    description: page.frontmatter.description,
                    poster: page.frontmatter.poster,
                    kategori: page.frontmatter.kategori,
                    dvd: page.frontmatter.dvd,
                    tävling: page.frontmatter.tävling satisfies Tavling,
                } satisfies Movie;
            });
    },
});
