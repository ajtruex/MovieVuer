<template>
    <div class="container">
        <div v-show="show" class="row justify-content-center">
            <div class="card card-inverse" style="width: 30rem; background-color: #333; border-color: #333;">
                <img class="card-img-top" :src='movies.Poster' alt="img.png">
                <div class="card-block">
                    <h4 class="card-title">{{movies.Title}}</h4>
                    <p class="card-text">{{movies.Plot}}</p>
                </div>
                <div>
                    <ul class="list-group-item-text">
                    </ul>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-info" v-for="rating in movies.Ratings"><span v-if="rating.Source == 'Internet Movie Database'" class="label label-default label-pill"><icon name="imdb" color="black" scale="3" style="margin-right: .5rem"></icon></span> {{rating.Source}}: {{rating.Value}}</li>
                    </ul>
                </div>
                <div class="btn text-left" @click="show=false" style="padding:0; margin: .25rem .25rem 0 .25rem; width: 4rem; cursor: pointer;">
                    <icon name='times-circle' color="red" scale="1.5"></icon>
                </div>
            </div>
        </div>
        <br>
        <div class="row card-group" style="cursor: pointer;">
            <div style="font-family: 'Source Sans Pro';" class="col-sm-3 card" v-for="res in home" @mousedown="title = res.title" @mouseup="result" >
                <img class="card-img-top" style="width: 200px; height: 250px" :src='imgUrl + res.poster_path'>
                <div class="card-block">
                    <h3 class="card-title">{{res.title}}</h3>
                    <p class="card-text">{{res.overview}}</p>
                </div>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon.vue'
import {EventBus } from '../bus.js'
export default {
    components: {
        Icon,
    },
    data() {
        return {
            movies: [],
            baseUrl: 'https://www.omdbapi.com/?apikey=75c7e9fb&t=',
            home: {},
            search: '',
            imgUrl: 'https://image.tmdb.org/t/p/w640',
            title: '',
            show: false
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
            this.$http.get(this.baseUrl + this.title.toString())
                .then(response => {
                    this.movies = response.body
                    EventBus.$emit('update', this.movies)
                }, response => {
                    // error callback
                });
        },
        // reset() {
        //     searchShow: false
        // }
    },
    // computed: {
    //     setShow () {
    //         return !this.show
    //     }
    // }
}
</script>
