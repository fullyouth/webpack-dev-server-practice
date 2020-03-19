<template>
  <div>
    <Header/>
    <router-view></router-view>
    <router-link to="/">index</router-link>
    <router-link to="/member">member</router-link>
    <Footer/>
  </div>
</template>

<script>
import Header  from "@/components/header/index.vue"
import Footer  from "@/components/footer/index.vue"

export default {
  components:{Header,Footer}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.router-link-active{
  /* color: red; */
}
.router-link-exact-active{
  color: red;
}
</style>