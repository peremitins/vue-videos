<template>
  <div>
    <div class="movie-detail">
      <h2>{{ movie.Title }}</h2>
      <p>{{ movie.Year }}</p>
      <img :src="movie.Poster" alt="poster" class="featured-img">
      <p>{{ movie.Plot }}</p>
    </div>
  </div>
</template>
<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import env from '@/env.js';

export default {
  
  setup() {
    const movie = ref({});
    const route = useRoute();
    
    onBeforeMount(() => {
      fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
      .then(response => response.json())
      .then(data => {
        movie.value = data;
        console.log(movie.value);
        
      })
    })
    
    return {
      movie,
      route
    }
  }
  
}
</script>
<style lang="scss">
  .movie-detail {
    padding: 16px;
    h2 {
      color: #fff;
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 16px;
      text-align: center;
    }
    .featured-img {
      display: block;
      max-width: 200px;
      margin: 0 auto 16px;
    }
    p {
      color: #fff;
      font-size: 18px;
      line-height: 1.4;
      &:first-of-type {
        text-align: center;
      }
    }
  }
</style>