<template>
  <div class="search">
    <span class="iconfont">
      &#xe725;
      <input v-model="keyword" class="search-input" type="text" placeholder="Search for a country……">
    </span>    
  </div>
</template>

<script>
export default {
    name: 'HomeSearch',
    data () {
      return {
        keyword: '',
      }
    },
    watch: {
      keyword () {
/*        console.log(this.keyword)*/
        this.$emit('keyword',this.keyword)
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixin.styl'
.search
  height:45px
  line-height:45px
  width: 400px
  margin: 40px 80px 0px 80px
  border-radius: 5px
  box-shadow: 0px 0px 10px
  box_shadow(shadowColor)
  bg_color(elColor)
  .iconfont
    margin-left: 20px
    font_color(textColor) 
    .search-input
      margin-left: 10px
      line-height:35px
      border: 0px
      background: none
      font_color(textColor) 
    .search-input::placeholder
      font_color(textColor) 
</style>