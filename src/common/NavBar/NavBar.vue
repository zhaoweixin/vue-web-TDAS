<template>
  <div class="centerx">
    <vs-navbar
      v-model="indexActive"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar">

      <vs-navbar-title>
        OpenVis
      </vs-navbar-title>

      <vs-navbar-item index="0" >
        <router-link to="/home">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/news">News</router-link>
      </vs-navbar-item>

      <vs-spacer></vs-spacer>

    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'grey',
    indexActive: 0
  })
}
</script>

<style lang="stylus">
.input-color
  margin-bottom 10px
  position relative
  display block
.myNavbar
  color rgb(255,255,255)
</style>