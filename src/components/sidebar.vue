<template>
    <div id="sidebar">
        <aside class="menu">

            <!-- Search Bar -->
            <p class="menu-label">
                Search
            </p>
            <SearchBar
            v-on:page="pageChange"
            v-bind:page="page"
            v-bind:pages="pages">
            </SearchBar>

            <!-- General Menu -->
            <div v-for="group in groups">
                <span></span>
                <p class="menu-label">
                    {{ group }}
                </p>

                <ul class="menu-list">

                    <!-- Ground -->
                    <li v-for="a in pages" v-show="" v-show="a.group == group && a.primary_page">
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
            </div>
        </aside>
    </div>
</template>

<script>

    import SearchBar from './search_bar'

    export default {
        components: {
            SearchBar,
        },

        data () {
            return {
                query: "",
            }
        },
        props: ['pages', 'page'],

        computed: {

            groups: function(){
                var pages = this.pages
                var ind_labels = []

                for(var x = 0; x < pages.length; x++){
                    if(!ind_labels.includes(pages[x].group)){
                        ind_labels.push(pages[x].group)
                    }

                }

                return ind_labels
            }
        },

        methods: {

            setPage: function(page){
                this.$emit('page', page)
            },

            pageChange: function(value){
                this.setPage(value)
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
