<template>
  <div id="app">
    <nav-bar/>
    <side-bar/>
    <router-view></router-view>
  </div>
</template>


<script>
import NavBar from '@/common/NavBar/NavBar'
import SideBar from '@/common/SideBar/SideBar'

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f7fb;
}
</style>
