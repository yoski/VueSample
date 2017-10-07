<template>
    <div>
        <input class="input" v-model="msg">
        <p>prop: {{propMessage}}</p>
        <p>msg: {{msg}}</p>
        <p>helloMsg: {{helloMsg}}</p>
        <p>computed msg: {{computedMsg}}</p>
        <button class="button" @click="greet">Greet</button>
        <nested v-bind:my-message="computedMsg"></nested>
    </div>
</template>

<script lang="ts">
    import Component from 'vue-class-component'
    import VueBuefy from "../ts/buefy";
    import Nested from './sub/nested.vue'

    @Component({
        props: {
            propMessage: String
        },
        components: {
            Nested
        }
    })
    export default class Page1 extends VueBuefy {
        propMessage: string;
        // inital data
        msg: number = 123;
        // use prop values for initial data
        helloMsg: string = 'Hello, ' + this.propMessage;
        // lifecycle hook
        mounted () {
        }
        // computed
        get computedMsg () {
            return 'computed ' + this.msg
        }
        // method
        greet () {
            alert('greeting: ' + this.msg)
        }
    }
</script>