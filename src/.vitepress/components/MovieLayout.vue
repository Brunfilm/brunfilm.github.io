<template>
    <article :class="$style.moviePage">
        <header>
            <h1>{{ movie.title }}</h1>
            <div :class="$style.movieHero">
                <div :class="$style.moviePosterContainer">
                    <img :src="'/posters/' + movie.poster" :alt="movie.title + ' movie poster'"
                        :class="$style.moviePoster" />
                </div>
                <div :class="$style.movieMeta">
                    <blockquote :class="$style.description">
                        <em>{{ movie.description }}</em>
                    </blockquote>
                    <div :class="$style.movieDetails">
                        <div><strong>Utsläppt:</strong> {{ movie.release }}</div>
                        <div><strong>Kategori:</strong> {{ movie.kategori.join(", ") }}</div>
                        <div v-if="movie.dvd">
                            <strong>DVD:</strong> {{ Array.isArray(movie.dvd) ? movie.dvd.join(", ") : movie.dvd }}
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section :class="$style.movieDescription">
            <h2>Beskrivning slot</h2>
            <div :class="$style.content">
                <slot name="beskrivning"></slot>
            </div>
        </section>

        <section v-if="hasContests" :class="$style.movieContests">
            <h2>Tävlingar</h2>
            <ul :class="$style.contestsList">
                <li v-for="(contest, index) in normalizedContests" :key="index" :class="$style.contestItem">
                    <h3>{{ contest.namn }}</h3>
                    <ul :class="$style.contestDetails">
                        <li v-if="contest.år"><strong>År:</strong> {{ contest.år }}</li>
                        <li v-if="contest.upplaga"><strong>Edition:</strong> {{ contest.upplaga }}</li>
                        <li v-if="contest.klass"><strong>Kategori:</strong> {{ contest.klass }}</li>
                        <li v-if="contest.geografiskt"><strong>Region:</strong> {{ contest.geografiskt }}</li>
                        <li v-if="contest.pris"><strong>Placering:</strong> {{ contest.pris }}</li>
                        <li v-if="contest.sammanfattning" :class="$style.summary">{{ contest.sammanfattning }}</li>
                    </ul>
                </li>
            </ul>
        </section>
    </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Movie } from "../data/movies.data";

const props = defineProps({
    movie: {
        type: Object as () => Movie,
        required: true,
    },
});

const hasContests = computed(() => props.movie.tävling && props.movie.tävling.length > 0);

const normalizedContests = computed(() => {
    if (!props.movie.tävling) return [];
    return Array.isArray(props.movie.tävling) ? props.movie.tävling : [props.movie.tävling];
});
</script>

<style module>
.moviePage {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.movieHero {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    margin: 2rem 0;
}

.moviePoster {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.movieMeta {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.description {
    font-size: 1.2rem;
    margin: 0;
    padding: 1rem;
    background: var(--vp-c-bg-soft);
    border-left: 4px solid var(--vp-c-brand);
    border-radius: 0 8px 8px 0;
}

.movieDetails {
    display: grid;
    gap: 0.5rem;
}

.movieDescription {
    margin: 2rem 0;
}

.contestsList {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 2rem;
}

.contestItem {
    background: var(--vp-c-bg-soft);
    padding: 1.5rem;
    border-radius: 8px;
}

.contestDetails {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.summary {
    margin-top: 1rem;
    font-style: italic;
}

@media (max-width: 768px) {
    .movieHero {
        grid-template-columns: 1fr;
    }

    .moviePoster {
        max-width: 100%;
        height: auto;
    }
}
</style>
