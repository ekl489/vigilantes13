<!-- Template -->
<template>
    <div id="" class="content">
        <div class="columns is-mobile">
                    <div class="column is-two-thirds">
                                    <blockquote>"Walking with a friend in the dark is better than walking alone in the light."</blockquote>
                                    <blockquote class="hidden">"Friends are like dumplings, they look plain from far away but are actually rich inside."</blockquote>

                                    Tongyi fled with his friends, Nick and Jonathan, to Chinatown when severe discrimination began. They remained in Chinatown as it was established as an Asian safe zone.
                                    They stumbled upon the Longying and joined the group. While Nick and Jonathan trained, Tongyi took on an administrative role and helped establish connections for the Longying, preferring it to a combat role.<br><br>
                                    He spent years working in restaurants across Chinatown and eventually opened his own restaurant outside of Chinatown. This restaurant was opened in Surry Hills and named the Lucky Moon.<br><br>
                                    Tongyi then proceeded to link his restaurant to the Longying’s tunnel system allowing his restaurant to act as a base of operations and exit from Chinatown. Tongyi has been very careful to remain in the good graces of authorities and takes extra precautions when helping the Longying.<br>
                                    He is a very close friend of Viper and looks out for his vigilante friend. Tongyi often advises and helps ground Viper though they are known to argue.
                                    <br><br>

                                    <h4 class="subtitle">Capabilities</h4>
                                    <ul>
                                        <li>Owner of the Lucky Moon Restaurant</li>
                                        <li>Accomplished cook</li>
                                        <li>Speaks Mandarin</li>
                                    </ul><br>

                                    <h4 class="subtitle">Qualities</h4>
                                    <ul>
                                        <li>Friendly</li>
                                        <li>Kind-hearted</li>
                                        <li>Easily upset</li>
                                        <li>Reserved</li>
                                        <li>Loyal</li>
                                    </ul>
                                </div>

                                <div class="column">
                                    <img width="400px" height="500px" src="img/character-art/tongyi.jpg" alt="Image"><br><br>
                                    <article class="message is-primary">
                                        <div class="message-header">
                                            Extra Resources
                                        </div>
                                        <div class="message-body">
                                            <i>Some additional links and comments to help appreciate Tongyi Shen:</i><br><br>
                                            <h5 class="subtitle">Notes</h5>
                                            <ul class="img-caption-body">
                                                <li>Tongyi is most important as Nick's moral compass and line of support. He brings out the human side to Viper and asks important questions about what he's doing.</li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                            </div>
        
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