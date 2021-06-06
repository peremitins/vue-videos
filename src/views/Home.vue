<template>
	<div class="home">
		<div class="feature-card">
      <router-link to="/movie/tt9580138">
        <img src="https://images5.alphacoders.com/515/thumbbig-515358.jpg" class="featured-img" alt="img">
        <div class="detail">
          <h3>Mortal Kombat Legends: Scorpion's Revenge</h3>
          <p>Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones while ...</p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="Enter title in English" v-model="search">
      <input type="submit" value="Search">
    </form>
    <div v-if="movies.length" class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
        <div class="product-image">
          <img :src="movie.Poster" alt="">
          <div class="type">{{ movie.Type }}</div>
        </div>
        <div class="detail">
          <p class="year">{{ movie.Year }}</p>
          <h3>{{ movie.Title }}</h3>
        </div>
        </router-link>
      </div>
    </div>
    <div v-else class="results">No results were found for your search</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import env from '../env'

export default {
  setup () {
    const search = ref('');
    const movies = ref([]);
    
    const SearchMovies = () => {
      if (search.value) {
        fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
        .then(response => response.json())
        .then(data => {
          if (data.Search) {
            
            movies.value = data.Search;
          } else {
            movies.value = [];
          }
          search.value = '';
          console.log(movies.value);
        })
      }
    }
    
    return {
      search,
      movies,
      SearchMovies
    }
  }
};
</script>

<style lang="scss">
  .home {
    .feature-card {
      position: relative;
      .featured-img {
        display: block;
        width: 100%;
        height: 300px;
        object-fit: cover;
        position: relative;
        z-index: 0;
      }
      .detail {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.6);
        padding: 16px;
        z-index: 1;
        h3 {
          color: #fff;
          margin-bottom: 16px;
        }
        p {
          color: #fff;
        }
      }
    }
    .search-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;
      input {
        display: block;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        &[type="text"] {
          width: 100%;
          color: #fff;
          background-color: #496583;
          font-size: 20px;
          padding: 10px 16px;
          border-radius: 8px;
          margin-bottom: 15px;
          transition: .4s;
          &::placeholder {
            color: #f3f3f3;
          }
          &:focus {
            box-shadow: 0px 3px 6px rgba(0,0,0,.2);
          }
        }
        &[type="submit"] {
          width: 100%;
          max-width: 300px;
          background-color: #42b883;
          padding: 16px;
          border-radius: 8px;
          color: #fff;
          font-size: 20px;
          text-transform: uppercase;
          transition: .4s;
          &:active {
            background-color: #3b8070;
          }
        }
      }
    }
    .movies-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 8px;
      .movie {
        max-width: 50%;
        flex: 1 1 20%;
        padding: 16px 8px;
        .movie-link {
          display: flex;
          flex-direction: column;
          height: 100%;
          .product-image {
            position: relative;
            display: block;
            img {
              display: block;
              width: 100%;
              height: 275px;
              object-fit: cover;
            }
            .type {
              position: absolute;
              padding: 8px 16px;
              background-color: #42b883;
              color: #fff;
              bottom: 16px;
              left: 0;
              text-transform: capitalize;
            }
          }
          .detail {
            background-color: #496583;
            padding: 16px 8px;
            flex: 1 1 100%;
            border-radius: 0 0 6px 6px;
            .year {
              color: #aaa;
              font-size: 14px;
            }
            h3 {
              color: #fff;
              font-weight: 600;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  .results {
    text-align: center;
  }
  input:focus::placeholder {
    opacity: 0;
  }
  input[type='submit'] {
    cursor: pointer;
  }
  @media (max-width: 576px) {
      .home .movies-list .movie {
        max-width: 100%;
        flex: 1 1 100%;
      }
    }
</style>