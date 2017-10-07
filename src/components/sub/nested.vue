<script lang="ts">
    import Component from 'vue-class-component'
    import VueBuefy from "../../ts/buefy";

    @Component({
        template: '<button class="button is-primary" v-on:click="onClick">{{msg}}</button>',
        props: ['myMessage']
    })

    export default class Nested extends VueBuefy {
        msg: string = 'Click to Show Parent Prop';
        myMessage: string;
        mounted () {
        }
        onClick () {
            alert(this.myMessage);
        }
    }
</script>
