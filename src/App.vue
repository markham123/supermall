<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar'
import router from '@/router'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "~assets/css/base.css";
  @import "~assets/css/normalize.css";
  #app{
    height: 100vh;
  }
</style>
