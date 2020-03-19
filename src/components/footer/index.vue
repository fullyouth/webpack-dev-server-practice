<template>
  <div class="footer">{{msg}}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这里是footer组件'
    }
  }
}
</script>

<style>
.footer{
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: darkgray;
}
</style>