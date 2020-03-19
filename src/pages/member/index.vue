<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
import Header  from "../../components/header/index.vue"
import Footer  from "../../components/footer/index.vue"

export default {
  components:{ Header,Footer },
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