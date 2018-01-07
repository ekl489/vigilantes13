<template>
    <div id="searchbar">
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

                // Loop through pages
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

                // Reset Query
                this.query = ''
                this.search()
            },
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
