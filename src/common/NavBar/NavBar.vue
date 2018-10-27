<template>
  <div class="centerx">
    <vs-navbar
      v-model="indexActive"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar">

      <vs-navbar-title>
        Navbar Color
      </vs-navbar-title>

      <vs-navbar-item index="0" >
        <router-link to="/home">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/news">News</router-link>
      </vs-navbar-item>

      <vs-spacer></vs-spacer>

      <vs-button color-text="rgb(255, 255, 255)" color="rgba(255, 255, 255, 0.3)" vs-type="flat" vs-radius="50%" vs-icon="more_horiz"></vs-button>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: ()=>({
    colorx:'#1db952',
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