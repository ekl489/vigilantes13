<template>
    <div id="echo59" class="content">
        <a href="#" v-on:click="setPage(pages[0])"><h1>Click Me</h1></a>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                home: {
                    identifier: 'Home',
                    title: 'Home',
                    author: '',
                    content: '',
                    icon: 'fa-home',
                    has_own_component: true,
                    active: true,
                    primary_page: true,
                }, // Home
            }
        },

        props: ['page', 'pages'],

        methods: {
            setPage: function(page){
                this.$emit('page', page)
                //alert('hey')
            }
        },

        components: {

        }
    }
</script>

<style scoped>

</style>
