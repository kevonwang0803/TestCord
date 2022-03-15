<template>
<div>
    <h3>MyApp 根组件-- {{color}}</h3>
    <button type="button" class="btn btn-primary" @click="color='blue'"> Toggle Blue</button>
    <hr>
    <level-two></level-two>
</div>
  
</template>

<script>
import LevelTwo from './LevelTwo.vue'
import {computed} from 'vue'
export default {
    name:'MyApp',
    data() {
        return {
            color:'red'
        }
    },
    provide() {
        return{
            color: computed(()=>this.color),
            count:1
        }
    },
    components:{
     LevelTwo
    }

}
</script>

<style>

</style>