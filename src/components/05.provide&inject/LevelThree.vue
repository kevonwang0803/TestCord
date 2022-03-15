<template>
  <div>
    <h5>Level Three 三级组件 --- {{ color }} --- {{ count }}</h5>
  </div>
</template>

<script>
export default {
  name: 'LevelThree',
  data() {
      return {
      }
  },
  inject:['color', 'count']
}
</script>

<style>

</style>