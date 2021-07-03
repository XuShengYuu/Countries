<template>
  <div>
    <home-header></home-header>
    <div class="content">
      <home-search></home-search>
      <home-region class="home-region"></home-region>
      <home-countries class="home-countries"></home-countries>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeRegion from './components/Region'
import HomeCountries from './components/Countries'
export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSearch,
      HomeRegion,
      HomeCountries
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
  .home-countries
    float: left
    clear: left
    margin-top: 48px
</style>