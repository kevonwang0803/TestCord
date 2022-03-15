<template>
  <h3>App根组件----》 {{count}}</h3>
  <hr/>
  <button @click="count += 1"> + 1</button>
   <!-- <my-son :num="count" @numchanage="getNum"></my-son> -->
      <my-son v-model:num="count" ></my-son>
</template>

<script>
import MySon from './Son.vue'
export default {
  name:'MyApp',
    data(){
        return {
            count : 0
        }
    },
    components:{
         MySon
    },
    methods:{
        // getNum(num) {
        //    this.count = num;
        // }
    }
}
</script>

<style>

</style>