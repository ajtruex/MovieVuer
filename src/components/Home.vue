<!-- <template>
    <div>
        <search-bar></search-bar>
        <result></result>
    </div>
</template>
<script>
import Search from './Search.vue'
import Result from './Result.vue'
export default {
    components: {
        searchBar: Search,
        result: Result
    }
}

//     name: 'Home',

//     data() {
//         return {
//             show: false,
//             searchShow: ''
//         }
//     },
//     computed: {
//         switchShow() {
//             this.searchShow = !this.show
//         }
//     }
// };
</script>
<style lang="css" scoped>
</style>
 -->
<!-- <template>
    <div>
        <search-bar></search-bar>
        <result></result>
    </div>
</template>
<script>
import Search from './Search.vue'
import Result from './Result.vue'

import {
    EventBus
} from '../bus.js';

export default {
    components: {
        searchBar: Search,
        result: Result
    },
    data() {
        return {
            clickCount: 0
        }
    },

    methods: {
        emitGlobalClickEvent() {
            this.clickCount++;
            // Send the event on a channel (i-got-clicked) with a payload (the click count.)
            EventBus.$emit('i-got-clicked', this.clickCount);
        }
    },
    // mounted() {

    //     EventBus.$on('i-got-clicked', clickCount => {
    //         console.log("Oh, that's nice. It's gotten "+ this.clickCount+" clicks! :)")
    //     });
    // }
}

// EventBus.$on('i-got-clicked', clickCount => {
//     console.log("Oh, that's nice. It's gotten ${clickCount} clicks! :)")
// });
</script>
 -->
 <template>
 </template>

 <script>
 export default {

   name: 'Home',

   data () {
     return {

     };
   }
 };
 </script>

 <style lang="css" scoped>
 </style>