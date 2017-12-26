<template>
    <div id="sidebar">
        <aside class="menu">

            <!-- Search Bar -->
            <p class="menu-label">
                Search
            </p>

            <textarea class="input" id="search_bar" placeholder="Search here" v-model="query" v-on="{keyup: search}"></textarea>

            <ul class="menu-list">

                <!-- Ground pages -->
                <li v-for="page_link in pages" v-show="page_link.search_display"><a href="#" v-on:click="setPage(page_link)">{{ page_link.title }}</a></li>

                <!-- sub pages -->
                <span v-for="page_link in pages">
                    <li v-for="sub_page_link in page_link.pages" v-show="sub_page_link.search_display">
                        <a href="#" v-on:click="setPage(sub_page_link)">{{ page_link.title }} &gt; {{ sub_page_link.title }}</a>
                    </li>
                </span>

                <!-- sub_sub pages -->
                <span v-for="a in pages">
                    <span v-for="b in a.pages" >
                        <li v-for="c in b.pages" v-show="c.search_display">
                            <a href="#" v-on:click="setPage(c)">{{ a.title }} &gt; {{ b.title }} &gt; {{ c.title }}</a>
                        </li>
                    </span>
                </span>

                <!-- sub_sub_sub pages -->
                <span v-for="a in pages">
                    <span v-for="b in a.pages" >
                        <span v-for="c in b.pages" >
                            <li v-for="d in c.pages" v-show="d.search_display">
                                <a href="#" v-on:click="setPage(d)">{{ a.title }} &gt; {{ b.title }} &gt; {{ c.title }} &gt; {{ d.title }}</a>
                            </li>
                        </span>
                    </span>
                </span>

            </ul>

            <!-- General Menu -->
            <p class="menu-label">
                General
            </p>
            <ul class="menu-list">

                <!-- Ground -->
                <li v-for="a in pages" v-show="a.primary_page">
                    <a v-bind:class="{ 'is-active': a.active }" v-on:click="setPage(a)"><span v-show="a.icon" class="fa title is-5" v-bind:class="a.icon"></span> {{ a.title }}</a>

                    <!-- Sub Pages -->
                    <ul v-show="a.pages" class="ul">
                        <li v-for="b in a.pages" v-show="b.primary_page">
                            <a v-bind:class="{ 'is-active': b.active }" v-on:click="setPage(b)"><span v-show="b.icon" class="fa title is-5" v-bind:class="b.icon"></span> {{ b.title }}</a>

                            <!-- Sub-Sub Pages -->
                            <ul v-if="b.pages" class="ul">
                                <li v-for="c in b.pages" v-show="c.primary_page">
                                    <a v-bind:class="{ 'is-active': c.active }" v-on:click="setPage(c)"><span v-show="c.icon" class="fa title is-5" v-bind:class="c.icon"></span> {{ c.title }}</a>

                                    <!-- Sub-Sub-Sub Pages -->
                                    <ul v-show="c.pages" class="ul">
                                        <li v-for="d in c.pages" v-show="d.primary_page">
                                            <a v-bind:class="{ 'is-active': d.active }" v-on:click="setPage(d)"><span v-show="d.icon" class="fa title is-5" v-bind:class="d.icon"></span> {{ d.title }}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
    var stringSimilarity = require('string-similarity');

    export default {
        data () {
            return {
                query: "",
            }
        },
        props: ['pages', 'page'],

        methods: {

            search: function() {

                // loop through pages
                for(var x = 0; x < this.pages.length; x++){
                    if(stringSimilarity.compareTwoStrings(this.query, this.pages[x].title) > 0){
                        this.pages[x].search_display = true
                    }
                    else{
                        this.pages[x].search_display = false
                    }

                    // if pages exits
                    if(this.pages[x].hasOwnProperty('pages')){

                        // loop through sub-pages
                        for(var y = 0; y < this.pages[x].pages.length; y++){
                            if(stringSimilarity.compareTwoStrings(this.query, this.pages[x].pages[y].title) > 0){
                                this.pages[x].pages[y].search_display = true
                            }
                            else{
                                this.pages[x].pages[y].search_display = false
                            }

                            // if pages exits
                            if(this.pages[x].pages[y].hasOwnProperty('pages')){

                                // loop through pages
                                for(var z = 0; z < this.pages[x].pages[y].pages.length; z++){
                                    if(stringSimilarity.compareTwoStrings(this.query, this.pages[x].pages[y].pages[z].title) > 0){
                                        this.pages[x].pages[y].pages[z].search_display = true
                                    }
                                    else{
                                        this.pages[x].pages[y].pages[z].search_display = false
                                    }

                                    // if sub-sub-sub pages exits
                                    if(this.pages[x].pages[y].pages[z].hasOwnProperty('pages')){

                                        // loop through pages
                                        for(var w = 0; w < this.pages[x].pages[y].pages[z].pages.length; w++){
                                            if(stringSimilarity.compareTwoStrings(this.query, this.pages[x].pages[y].pages[z].pages[w].title) > 0){
                                                this.pages[x].pages[y].pages[z].pages[w].search_display = true
                                            }
                                            else{
                                                this.pages[x].pages[y].pages[z].pages[w].search_display = false
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },

            setPage: function(page){
                this.$emit('page', page)
            }
        }
    }
</script>

<style scoped>
    .ul {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 1.25rem;
        padding: 0;
    }

    .select{
        width: 100%;
    }
    #search_bar{
        margin-bottom: 5px;
    }
    textarea {
        resize: none;
    }

</style>
