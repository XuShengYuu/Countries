<template>
  <div>
    <home-header></home-header>
    <div class="content">
      <home-search></home-search>
      <home-region class="home-region"></home-region>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeRegion from './components/Region'
export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSearch,
      HomeRegion,
    }
  }
</script>
<style lang="stylus">
.content
  width: 1440px
  margin: 0 auto;
  .home-search
      float: left
  .home-region
      float: right
</style>