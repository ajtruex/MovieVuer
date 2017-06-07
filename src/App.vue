<template>
    <div id="app">
        <div class="container">
            <app-header></app-header>
            <br>
            <search-bar></search-bar>
            <result></result>
            <div class="row">
            <div class="col-md-12">
                <router-view></router-view>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import Result from './components/Result.vue'


export default {
    name: 'app',
    components: {
        appHeader: Header,
        searchBar: Search,
        result: Result
    },
}
</script>
