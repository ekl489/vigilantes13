<template>
    <div id="article" class="container">

        <!-- Title & Author -->
        <h1 class="title">
            <span v-show="page.icon" class="fa" v-bind:class="page.icon"></span>
            {{ page.title }}
        </h1>

        <!-- Own Component Page -->
        <component
        v-bind:is="page.identifier"
        v-show="page.has_own_component"

        v-on:page="pageChange"
        v-bind:page="page"
        v-bind:pages="pages">
        <!-- Show separate page -->
        </component>
    </div>
</template>

<script>

    // General Pages
    import Home from './pages/home'
    import AnotherPage from './pages/another_page'
    import SubUniverses from './pages/sub_universes'
    import Quiz from './pages/quiz'
    import Podcasts from './pages/podcasts'
    import TheTeam from './pages/team'
    import DiscoverMore from './pages/discover'
    import UpdateLog from './pages/updates'
    import WorldHistory from './pages/history'
    import Timeline from './pages/timeline'
    import Storylines from './pages/storylines'

    // Sub Universes
    import Viper from './pages/viper'
    import ViperViper from './pages/viper-viper'

    import Echo59 from './pages/echo59'

    export default {

        data () {
            return {
            }
        },

        props: ['page', 'pages'],

        components: {
            Home, SubUniverses, AnotherPage, Quiz, Podcasts, TheTeam,
            DiscoverMore, UpdateLog, WorldHistory, Timeline, Storylines,
            Viper, ViperViper,

            Echo59,
        },

        methods: {
            setPage: function(page){
                this.$emit('page', page)
            },

            pageChange: function(value){
                this.setPage(value) // show the correct page
            },
        },

    }
</script>

<style scoped>
    #article {
        padding: 10px;
    }

    h1, h2, p{
        margin: 0px;
    }
</style>
