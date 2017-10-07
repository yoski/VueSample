<style lang="less">
    @import "../less/sub.less";
    @red: red;
    .mycolor {
        color: @red;
    }
</style>

<template>
  <div>
    <h1 class="mycolor">page 3</h1>
    <p>
      this page is 3!!!
    </p>
    <p>
      msg = {{msg}}
    </p>
    <button class="button block" @click="isActive = !isActive">Toggle</button>
    <b-message title="Default" :active.sync="isActive">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
    </b-message>

  </div>
</template>

<script lang="ts">
    import Component from 'vue-class-component'
    import VueBuefy from "../ts/buefy";

    @Component({
        props: {
            propMessage: String
        }
    })
    export default class Page3 extends VueBuefy {
        // inital data
        isActive:boolean = true;

        msg: string = 'yes page B';
        // lifecycle hook
        mounted () {
        }
    }
</script>