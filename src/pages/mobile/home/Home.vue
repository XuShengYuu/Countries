<template>
  <div>
    <home-header></home-header>
    <div class="content">
      <home-search @keyword="getKeyword"></home-search>
      <home-region class="home-region" @region="getRegion"></home-region>
      <home-countries class="home-countries" :info="countriesInfo" :keyword="keyword" :region="region"></home-countries>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeRegion from './components/Region'
import HomeCountries from './components/Countries'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSearch,
    HomeRegion,
    HomeCountries
  },
  data () {
    return {
      countriesInfo: [],
      keyword: '',
      region: ''
    }
  },
  methods:{
    getCountriesInfo () {
      axios.get('https://restcountries.eu/rest/v2/all')
        .then(this.getCountriesInfoSucc)
    },
    getCountriesInfoSucc (res) {
      this.countriesInfo = res.data
    },
    getKeyword (keyword) {
        this.keyword = keyword
    },
    getRegion (region) {
      this.region = region
      if (this.region == 'Filter by Region') {
        this.region = ''
      }
    }
  },
  mounted () {
    this.getCountriesInfo()
  }
}
</script>
<style lang="stylus">
.content
  width: 375px
  margin: 0 auto;
  .home-search
    float: left
  .home-countries
    float: left
    clear: left
    margin-top: 15px
</style>