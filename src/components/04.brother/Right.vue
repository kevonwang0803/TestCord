<template>
   <div>
    <h3>数据接收方 --- num 的值为：{{ num }}</h3>
  </div>
</template>

<script>
import bus from './EventBus.js'
export default {
    name: 'MyRight',
    data() {
        return {
            num: 0
        }
    },
    created() {
        bus.on('countchange',(count)=> {
            this.num = count;
        })
    }
}
</script>

<style>

</style>