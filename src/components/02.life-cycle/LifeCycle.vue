<template>

   <h3>LifeCycle组件 ---- {{count}}</h3>

   <button type="button" class="btn btn-primary" @click="count += 1">+1</button>
</template>

<script>
export default {
    name:'LifeCycle',
    data() {
        return {
            count: 0
        }
    }
    }
</script>

<style lang='less' scoped>

</style>