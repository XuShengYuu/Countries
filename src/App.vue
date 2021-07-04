<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.document.documentElement.setAttribute("data-theme",localStorage.getItem('data-theme')?localStorage.getItem('data-theme') : 'light')
    document.querySelector('body').setAttribute('style', localStorage.getItem('style')?localStorage.getItem('style') : 'background-color:hsl(0, 0%, 98%)')
  }
}
</script>
<style lang="stylus">

</style>
