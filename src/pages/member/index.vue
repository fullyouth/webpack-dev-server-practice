<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  computed:{
    count () {
      return this.$store.state.count
    }
  },
  data () {
    return {
      msg: '这里是member页面'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>