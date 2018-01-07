<template>
    <div id="app">
        <navigation :pages="pages"></navigation>
        <div class="container">
            <div class="columns">
                <div class="column is-one-quarter">
                    <sidebar
                    v-on:page="pageChange"
                    v-bind:page="page"
                    v-bind:pages="pages">
                    </sidebar>
                </div>
                <div class="column">
                    <article_view
                    v-on:page="pageChange"
                    v-bind:page="page"
                    v-bind:pages="pages">
                    </article_view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import navigation from './components/navigation'
import sidebar from './components/sidebar'
import article_view from './components/article_view'

export default {
    name: 'app',

    components: {
        navigation,
        sidebar,
        article_view,
    },

    data () {

        return {
            pages: [
                {
                    identifier: 'Home',
                    title: 'Home',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'fa-home',
                    has_own_component: true,
                    active: true,
                    primary_page: true,
                }, // Home

                {
                    identifier: 'Podcasts',
                    title: 'Podcasts',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'fa-podcast',
                    has_own_component: true,
                    active: true,
                    primary_page: true,
                }, // Podcasts

                {
                    identifier: 'Quiz',
                    title: 'Quiz',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'fa-question',
                    has_own_component: true,
                    active: true,
                    primary_page: true,
                }, // Quiz

                {
                    identifier: 'TheTeam',
                    title: 'The Team',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'fa-pencil-square',
                    has_own_component: true,
                    active: true,
                    primary_page: true,
                }, // The Team

                {
                    identifier: 'DiscoverMore',
                    title: 'Discover More',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'fa-info-circle',
                    has_own_component: true,
                    active: true,
                    primary_page: true,
                }, // Discover More

                {
                    identifier: 'UpdateLog',
                    title: 'Update Log',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'fa-cog',
                    has_own_component: true,
                    active: true,
                    primary_page: true,
                }, // Update Log


                {
                    identifier: 'WorldHistory',
                    title: 'World History',
                    group: 'Vigilantes',
                    author: '',
                    content: '',
                    icon: 'fa-university',
                    has_own_component: true,
                    active: true,
                    primary_page: true,
                }, // World History

                {
                    identifier: 'Territory',
                    title: 'Territory',
                    group: 'Vigilantes',
                    author: '',
                    content: '',
                    icon: 'fa-flag',
                    has_own_component: true,
                    active: true,
                    primary_page: false,
                }, // Territory

                {
                    identifier: 'SubUniverses',
                    title: 'Sub-Universes',
                    group: 'Vigilantes',
                    author: '',
                    content: '',
                    icon: 'fa-address-book',
                    has_own_component: true,
                    active: false,
                    primary_page: true,
                    search_display: false,
                    pages: [
                        {
                            identifier: 'Viper', title: 'Viper', author: '', content: '',
                            icon: 'fa-users', has_own_component: true, active: false, primary_page: true, search_display: false,
                            pages: [
                                {
                                    identifier: 'ViperViper', title: 'Viper', author: '', content: '',
                                    icon: 'fa-user', has_own_component: true, active: false, primary_page: false, search_display: false,
                                },

                                {
                                    identifier: 'Tongyi', title: 'Tongyi', author: '', content: '',
                                    icon: 'fa-user', has_own_component: true, active: false, primary_page: false, search_display: false,
                                },

                                {
                                    identifier: 'JonathanPan', title: 'Three Eyed Warrior', author: '', content: '',
                                    icon: 'fa-user', has_own_component: true, active: false, primary_page: false, search_display: false,
                                },

                                {
                                    identifier: 'Longying', title: 'Longying', author: '', content: '',
                                    icon: 'fa-user', has_own_component: true, active: false, primary_page: false, search_display: false,
                                },

                                {
                                    identifier: 'MajorPatton', title: 'Major Patton', author: '', content: '',
                                    icon: 'fa-user', has_own_component: true, active: false, primary_page: false, search_display: false,
                                },
                            ]
                        },

                        {
                            identifier: 'SilverSpectre', title: 'Silver Spectre', author: '', content: '',
                            icon: 'fa-users', has_own_component: true, active: false, primary_page: true,
                        },

                        {
                            identifier: 'Echo59', title: 'Echo59', author: '', content: '',
                            icon: 'fa-users', has_own_component: true, active: false, primary_page: true,
                        },

                        {
                            identifier: 'BurningHand', title: 'BurningHand', author: '', content: '',
                            icon: 'fa-users', has_own_component: true, active: false, primary_page: true,
                        },

                        {
                            identifier: 'JackKitchin', title: 'Jack Kitchin', author: '', content: '',
                            icon: 'fa-users', has_own_component: true, active: false, primary_page: true,
                        },

                        {
                            identifier: 'Hannah', title: 'Hannah', author: '', content: '',
                            icon: 'fa-users', has_own_component: true, active: false, primary_page: true,
                        },
                    ]
                }, // Sub Universes

                {
                    identifier: 'Timeline',
                    title: 'Timeline',
                    group: 'Vigilantes',
                    author: '',
                    content: '',
                    icon: 'fa-clock-o',
                    has_own_component: true,
                    active: false,
                    primary_page: true,
                    search_display: false
                }, // Timeline

                {
                    identifier: 'Storylines',
                    title: 'Storylines',
                    group: 'Vigilantes',
                    author: '',
                    content: '',
                    icon: 'fa-book',
                    has_own_component: true,
                    active: true,
                    primary_page: true,
                }, // Storylines

                {
                    identifier: 'Gallery',
                    title: 'Gallery',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'fa-picture-o',
                    has_own_component: true,
                    active: true,
                    primary_page: false,
                }, // Gallery

            ],

            page: {},
        }
    },

    methods: {

        setPage: function(page){

            this.page = page // set the page data

            this.clearActive() // remove active from all pages

            // Loop through GROUND pages
            for(var x = 0; x < this.pages.length; x++){
                if(this.pages[x] == page){
                    this.pages[x].active = true
                }

                // if SUB exists
                if(this.pages[x].hasOwnProperty('pages')){

                    // Loop through SUB pages
                    for(var y = 0; y < this.pages[x].pages.length; y++){

                        if(this.pages[x].pages[y] == page){
                            this.pages[x].pages[y].active = true
                        }

                        // If SUB_SUB exists
                        if(this.pages[x].pages[y].hasOwnProperty('pages')){

                            // Loop through SUB_SUB pages
                            for(var z = 0; z < this.pages[x].pages[y].pages.length; z++){
                                if(this.pages[x].pages[y].pages[z] == page){
                                    this.pages[x].pages[y].pages[z].active = true
                                }

                                // If SUB_SUB_SUB exists
                                if(this.pages[x].pages[y].pages[z].hasOwnProperty('pages')){

                                    // Loop through SUB_SUB pages
                                    for(var w = 0; w < this.pages[x].pages[y].pages[z].pages.length; w++){

                                        if(this.pages[x].pages[y].pages[z].pages[w] == page){
                                            this.pages[x].pages[y].pages[z].pages[w].active = true
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }
        },

        clearActive: function(){

            //loop through pages
            for(var x = 0; x < this.pages.length; x++){

                // remove active
                this.pages[x].active = false

                // if subpages exist
                if(this.pages[x].hasOwnProperty('pages')){

                    // loop through sub-pages
                    for(var y = 0; y < this.pages[x].pages.length; y++){
                        this.pages[x].pages[y].active = false

                        // if subpages exist
                        if(this.pages[x].pages[y].hasOwnProperty('pages')){

                            // loop through sub-sub-pages
                            for(var z = 0; z < this.pages[x].pages[y].pages.length; z++){
                                this.pages[x].pages[y].pages[z].active = false

                                // if subsubsubpages exist
                                if(this.pages[x].pages[y].pages[z].hasOwnProperty('pages')){

                                    // loop through sub-sub-sub-pages
                                    for(var w = 0; w < this.pages[x].pages[y].pages[z].pages.length; w++){
                                        this.pages[x].pages[y].pages[z].pages[w].active = false
                                    }
                                }
                            }
                        }
                    }
                }
            }

        },

        pageChange: function(value){
            this.setPage(value) // show the correct page
        },
    },

    beforeMount(){
        this.setPage(this.pages[0])
    },
}
</script>

<style scoped>
    .container{
        margin: 10px;
        width: 100%;
    }
</style>
