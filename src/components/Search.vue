<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="input-group">
                    <input class="form-control form-control-lg" type="text" v-model="search" placeholder="Search" @keyup.enter.stop="result"><span class="input-group-btn">
                    <button type="submit" @click.prevent="result" class="btn btn-primary">Submit</button>
                    </span>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
    </div>
        <!-- <div v-show="show" class="row justify-content-center">
            <div v-show="show" class="card card-inverse" style="width: 30rem; background-color: #333; border-color: #333;">
                <img class="card-img-top" :src='movies.Poster' alt="img.png">
                <div class="card-block">
                    <h4 class="card-title">{{movies.Title}}</h4>
                    <p class="card-text">{{movies.Plot}}</p>
                </div>
                <div>
                    <ul class="list-group">
                        <icon name="imdb"></icon>
                        <li class="list-group-item list-group-item-info" v-for="rating in movies.Ratings"><span v-if="rating.Source == 'Internet Movie Database'" class="label label-default label-pill"><icon name="imdb" color="black" scale="3" style="margin-right: .5rem"></icon></span> {{rating.Source}}: {{rating.Value}}</li>
                    </ul>
                </div>
                <div class="btn text-left" @click="show=!show" style="padding:0; margin: .25rem .25rem 0 .25rem; width: 4rem; cursor: pointer;">
                    <icon name='times-circle' color="red" scale="1.5"></icon>
                </div>
            </div>
        </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->

</template>
<script>
import Icon from 'vue-awesome/components/Icon.vue'
import {EventBus } from '../bus.js'
export default {
    // props: ['showSearch'],
    components: {
        icon: Icon
    },
    data() {
        return {
            movies: {},
            baseUrl: 'https://www.omdbapi.com/?apikey=98cae6de&t=',
            // home: {},
            search: '',
            // imgUrl: 'https://image.tmdb.org/t/p/original',
            title: "",
            show: false,
        }
    },

    created() {
        this.$http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6c3a605f23df401b0f1a36baa263c71a&language=en-US&page=1')
            .then(response => {
                this.home = response.body.results
            }, response => {});
    },

    methods: {
        result() {
            this.$http.get(this.baseUrl + this.search)
                .then(response => {
                    this.movies = response.body
                    this.show = !this.show
                    EventBus.$emit('update', this.movies)
                }, response => {
                    // error callback
                });
        },
        checkMovies() {
            for (var i = 0; i < this.movies.length; i++) {
                this.movies[i]
            }
        },
    },
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    text-decoration: none;
    color: #42b983;
}
</style>
