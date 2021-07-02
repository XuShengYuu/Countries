<template>
  <div>
    <home-header></home-header>
    <div class="content">
      <home-search></home-search>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSearch
    }
  }
</script>
<style lang="stylus">
.content
  width: 1440px
  margin: 0 auto;
</style>