---
layout: doc
---

# Våra filmiska skatter

Här är en lista över våra banbrytande filmer:

<script setup>
import { data as movies } from '../.vitepress/data/movies.data'
console.log(movies);
</script>

<div v-for="movie of movies" class="movie-container">
    <img :src="'/posters/' + movie.poster" :alt="movie.title + ' movie poster'" class="movie-poster" />
    <div class="movie-details">
        <a :href="movie.url">{{ movie.title }} ({{ movie.release }})</a>
        <p>{{ movie.description }}</p>
    </div>
</div>

<style>
.movie-container {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.movie-poster {
  flex: 0 0 auto;
  height: 150px;
  width: auto;
}

.movie-details {
  flex: 1;
}
</style>
