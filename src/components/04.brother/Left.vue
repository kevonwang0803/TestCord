<template>
   <div>
    <h3>数据发送方 --- count 的值为：{{ count }}</h3>
    <button type="button" class="btn btn-primary" @click="add">+1</button>
  </div>
</template>

<script>
import bus from './EventBus.js'
export default {
name: 'MyLeft',
data() {
    return {
        count : 0
    }
}, 
methods:{
   add() {
       this.count ++;
       bus.emit("countchange", this.count);
   }
}
}
</script>

<style>

</style>