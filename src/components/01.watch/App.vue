<template>
    <h1>App 根组件</h1>
    <hr />
    <my-watch></my-watch>
</template>

<script>
import MyWatch from './MyWatch.vue'
export default {
    name:'MyApp',
    data() {
        return {

        }
    },
    components:{
     MyWatch
    }
       
    
}
</script>

<style>

</style>