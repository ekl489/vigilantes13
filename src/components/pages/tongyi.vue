<!-- Template -->
<template>
    <div id="" class="content">

    </div>
</template>

<!-- Scripts -->
<script>
    export default {
        data () {
            return {
                home: {
                    identifier: 'Tongyi',
                    title: 'Tongyi Shen',
                    author: '',
                    content: '',
                    icon: 'fa-user',
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

<!-- Style -->
<style scoped>

</style>