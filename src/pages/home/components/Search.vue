<template>
  <div class="search">
    <span class="iconfont">
      &#xe725;
      <input class="search-input" results="s" type="text" placeholder="Search for a country……">
    </span>    
  </div>
</template>

<script>
export default {
    name: 'HomeSearch',
  }
</script>

<style lang="stylus" scoped>
  .search
    height:45px
    line-height:45px
    width: 400px
    margin-top: 40px
    border-radius: 5px
    box-shadow: 0px 0px 10px #ccc;
    .iconfont
      margin-left: 20px
      .search-input
        margin-left: 10px
        line-height:35px
        border: 0px
</style>