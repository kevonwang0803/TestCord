<template>
   <h1>App 根组件</h1>
    <hr />

    <button class="btn btn-secondary" @click="flag = !flag">Toggle</button>

    <!-- 3. 以标签形式使用组件 -->
    <life-cycle v-if="flag"></life-cycle>
</template>

<script>
import LifeCycle from './LifeCycle.vue'
export default {
    name:'MyApp',
    data(){
        return {
            flag : true
        }
    },
    components:{
        LifeCycle
    },
    beforeCreate() {
        console.log('beforecreated: 组件在内存中被创建完毕了')
    },
    created() {
            console.log('created: 组件在内存中被创建完毕了')
            console.log(this.count)
    }, 
    mounted() {
            console.log('mounted: 组件第一次被渲染到了页面上')
    },
    unmounted() {
            console.log('unmounted: 组件被销毁完毕了')
    },
    updated() {
            console.log('updated: 组件被重新渲染完毕了')
    }
}
</script>

<style>

</style>