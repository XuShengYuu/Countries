<template>
  <div>
    <router-link tag="div" :to="'/detail/'+item.name" class="countries" v-for="item of searchOrRegion(keyword,region)" :key="item.id">
      <div class="flag">
        <img  class="flag-svg" :src="item.flag">
      </div>
      <div class="info">
        <div class="info-country">{{item.name}}</div>
        <div class="info-population">
          Population:
          <span class="population-num">
          {{item.population | number_format}}
          </span>
        </div>
        <div class="info-region">
          Region:
          <span class="region">{{item.region}}</span>
        </div>
        <div class="info-capital">
          Capital:
          <span class="capital">{{item.capital}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { number_format } from '@/filters/numbersFormat.js'
export default {
  name: 'HomeCountries',
  props: {
    info: Array,
    keyword: String,
    region: String
  },
  methods: {
    searchOrRegion (keyword,region) {
      return this.info.filter(item => {
        if (item.name.toLowerCase().includes(keyword.toLowerCase()) && item.region.includes(region)) {
          return item
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixin.styl'
.countries
  width: 265px
  height: 340px
  overflow: hidden
  border-radius: 5px
  box-shadow: 0px 0px 10px
  float: left
  margin-left: 80px
  margin-bottom: 60px
  bg_color(elColor)
  box_shadow(shadowColor)
  .flag
    width: 265px
    height: 160px
    border-radius: 5px
    .flag-svg
      width:100%
      height: 100%
      object-fit: cover
  .info
    width: 215px
    height: 180px
    line-height: 20px
    padding: 0px 25px 0px 25px
    font_color(textColor)
    .info-country
      font-size: 16px
      font-weight: 800
      margin-top: 30px
    .info-population
      margin-top: 15px
      font-size: 12px
      .population-num
        font-size: 10px
        font-weight: 300
    .info-region
      font-size: 12px
      .region
        font-size: 10px
        font-weight: 300
    .info-capital
      font-size: 12px
      .capital
        font-size: 10px;
        font-weight: 300
</style>
