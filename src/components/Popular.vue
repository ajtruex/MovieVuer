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
                        <!-- <icon name="imdb" scale="10"></icon> -->
                    </ul>
                    <ul class="list-group">
                        <!-- <icon name="imdb"></icon> -->
                        <li class="list-group-item list-group-item-info" v-for="rating in movies.Ratings"><span v-if="rating.Source == 'Internet Movie Database'" class="label label-default label-pill"><icon name="imdb" color="black" scale="3" style="margin-right: .5rem"></icon></span> {{rating.Source}}: {{rating.Value}}</li>
                    </ul>
                </div>
                <div class="btn text-left" @click="show=false" style="padding:0; margin: .25rem .25rem 0 .25rem; width: 4rem; cursor: pointer;">
                    <icon name='times-circle' color="red" scale="1.5"></icon>
                </div>
            </div>
        </div>
        <div class="row card-group" style="cursor: pointer;">
            <div style="font-family: 'Source Sans Pro';" v-if="search.length < 1" class="col-sm-3 card" v-for="res in home" @mousedown="title = res.title" @mouseup="result">
                <img class="card-img-top" style="width: 200px; height: 250px" :src='imgUrl + res.poster_path'>
                <div class="card-block">
                    <h3 class="card-title">{{res.title}}</h3>
                    <p class="card-text">{{res.overview}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon.vue'
import {EventBus } from '../bus.js'
export default {
    components: {
            Icon
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
            this.$http.get('https://api.themoviedb.org/3/movie/popular?api_key=6c3a605f23df401b0f1a36baa263c71a&language=en-US&page=1')
                .then(response => {
                    this.home = response.body.results
                    // for (var i in this.home) {
                    //     console.log(this.home[i].title)
                    //     this.names.push(this.home[i].title.split(' ').join('+'))
                    // }
                }, response => {});
        },
        methods: {
            result() {
                this.$http.get(this.baseUrl + this.title)
                    .then(response => {
                        this.movies = response.body
                        EventBus.$emit('update', this.movies)
                            // this.getRatings()
                            // mounted ()
                            // this.rating.push = response.body.Ratings
                    }, response => {
                        // error callback
                    });
            }
        },
        computed: {
            getRatings() {
                // for (var j in this.home) {
                return this.rating = this.movies.Ratings
                    // }
            }
        }
        // for (var k in this.rating) {
        //     this.source[this.rating[j][k].Source] = this.rating[j][k].Value
        // }
}
// this.rating.push(rate.Source)
// },
// getTitles() {
//     for (var i in this.home) {
//         console.log(this.home[i].title)
//             // this.rating['name'] = this.home[i].title.split(' ').join('+')
//         this.names.push(this.home[i].title.split(' ').join('+'))
//     }
// },
</script>
