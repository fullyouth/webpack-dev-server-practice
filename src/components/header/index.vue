<template>
  <div class="header">{{msg}}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这里是header组件'
    }
  }
}
</script>

<style>
.header{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: darkgray;
}
</style>