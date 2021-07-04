<template>
  <div class="header">
    <div class="header-bg">
      <div class="header-title">Where in the world?</div>
      <div class="header-butter" @click="switchMode">
        <span class="iconfont" v-if="!this.dark">&#xe7d3;</span>
        <span class="iconfont" v-if="this.dark">&#xe67c;</span>
      Dark Mode</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      dark:false,
    }
  },
  methods: {
    switchMode () {
      this.dark = !this.dark;
      if (this.dark) {
        window.document.documentElement.setAttribute( "data-theme", 'dark');
        document.querySelector('body').setAttribute('style', 'background-color:hsl(207, 26%, 17%)')
        localStorage.setItem('data-theme',"dark")
        localStorage.setItem('style',"background-color:hsl(207, 26%, 17%)")
      }else{
        window.document.documentElement.setAttribute( "data-theme", 'light' );
        document.querySelector('body').setAttribute('style', 'background-color:hsl(0, 0%, 98%)')
        localStorage.setItem('data-theme',"light")
        localStorage.setItem('style',"background-color:hsl(0, 0%, 98%)")
      }
    }
  },
  mounted() {
    if (localStorage.getItem('data-theme')=='dark') {
      this.dark = true
    } else {
      this.dark = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixin.styl'
.header
  line-height: 80px
  height: 80px
  box-shadow: 0px 2px 5px
  bg_color(elColor)
  box_shadow(shadowColor)
  .header-bg
    margin: 0 auto;
    .header-title
      float: left
      padding: 0 15px
      font-size: .75rem
      font-weight: bold
      font_color(textColor)
    .header-butter
      float: right
      padding: 0 15px
      margin-right: 15px
      font-size: .75rem
      font_color(textColor)
</style>