<style lang="less">
    .blue {
        color: #00f;
    }
</style>

<template>
    <div>
        <h1 class="blue">Page 2</h1>
        <p>
            this page is 2!!!
        </p>
        <p>
            msg = {{msg}}
        </p>
    </div>
</template>

<script lang="ts">
    import Component from 'vue-class-component'
    import VueBuefy from "../ts/buefy";

    @Component({
    })

    export default class Page2 extends VueBuefy {
        // inital data
        msg: string = 'page 2';

        // lifecycle hook
        mounted () {
            this.greet();
        }
        // method
        greet () {
            this.$snackbar.open({
                message: 'Yellow button and positioned top-left',
                type: 'is-warning',
                position: 'is-top-left',
                actionText: 'Retry',
                onAction: () => {
                    this.$toast.open('Action pressed')
                }
            })
        }
    }
</script>
