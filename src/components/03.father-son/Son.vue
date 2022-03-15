<template>
  <div>
      <h3>son子组件---> {{num}}</h3>

      <button @click="add"> + 1</button>
  </div>
</template>

<script>
export default {
    name:'MySon',
    props:['num'],
    // emits:['numchanage'],
    emits:['update:num'],
    methods:{
        add() {
            // this.$emit('numchanage', this.num + 1)
            this.$emit('update:num', this.num+1)
        }
    }
}
</script>

<style>

</style>