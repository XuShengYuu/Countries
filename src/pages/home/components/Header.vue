<template>
  <div class="header">
    <div class="header-title">Where in the world?</div>
    <div class="header-butter">
      <span class="iconfont">&#xe7d3;</span>
      Dark Mode</div>
  </div>
</template>

<script>
export default {
    name: 'HomeHeader',
  }
</script>

<style lang="stylus" scoped>
  .header
    line-height: 75px
    height: 75px
    box-shadow: 0px 2px 5px #ccc;
    .header-title
      float: left
      margin-left: 65px
      font-size: 25px
      font-weight: bold
    .header-butter
      float: right
      margin-right: 65px
      font-size: 600
</style>