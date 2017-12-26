<template>
    <div class="navigation">

        <nav class="navbar has-shadow">
            <div class="navbar-menu">
                <a class="navbar-item">
                    {{brand}}
                </a>
            </div>
            <div class="navbar-end">
                <account v-show="show_account"></account>
            </div>
        </nav>

    </div>
</template>

<script>

    import account from './account'

    export default {
        name: 'navigation',
        data () {
            return {
                brand: 'Vigilantes',
                show_account: false
            }
        },
        components: {
            account
        }
    }
</script>

<style scoped>

</style>
