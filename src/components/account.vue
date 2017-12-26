<template>

    <a class="navbar-item" v-on:click="toggleShow" v-on:mouseleave="hide">
        <div class="dropdown is-right" v-bind:class="{ 'is-active': show }">
            <div class="dropdown-trigger">
                <a aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Nick</span>
                    <span class="icon is-small">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                        My account
                    </a>
                    <a class="dropdown-item">
                        Find friends
                    </a>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item">
                        <span class="help is-danger">Sign Out</span>
                    </a>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        data () {
            return {
                show: false
            }
        },
        methods: {
            toggleShow: function(){
                this.show = ! this.show
            },
            hide: function(){
                this.show = false
            }
        }
    }
</script>

<style>
    .active{
        background-color: aqua;
    }
</style>
