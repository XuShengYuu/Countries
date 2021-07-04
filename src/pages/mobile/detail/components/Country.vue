<template>
  <div>
    <router-link tag="div" class="button" to="/">
      <span class="iconfont">&#xe6d8;</span>
      <span class="back">Back</span>
    </router-link>
    <div class="info">
      <div class="country-flag">
        <img class="flag-svg" :src="contryFlag">
      </div>
      <div class="country-name">{{this.contryName}}</div>
      <div class="country-info">
        <div class="country-native-name">
          Native Name:
          <span class="native-name">{{this.contryNativeName}}</span>
        </div>
        <div class="country-population">
          Population:
          <span class="population">{{this.contryPopulation | number_format}}</span>
        </div>
        <div class="country-region">
          Region:
          <span class="region">{{this.contryRegion}}</span>
        </div>
        <div class="country-sub-region">
          Sub Region:
          <span class="sub-region">{{this.contrySubRegion}}</span>
        </div>
        <div class="country-capital">
          Capital:
          <span class="capital">{{this.contryCapital}}</span>
        </div>
        <div class="country-top-level-domain" >
          Top Level Domain:
          <span class="top-level-domain" v-for="item of this.contryTopLevelDomain" :key='item.id'>{{item}}</span>
        </div> 
        <div class="country-currencies">
          Currencies:
          <span class="currencies" v-for="item of this.contryCurrencies" :key='item.id'>{{item.name}}</span>
        </div>
        <div class="contry-languages">
          Languages:
          <span class="languages" v-for="item of this.contryLanguages" :key='item.id'>{{item.name}}</span>
        </div>
      </div>
      <div class="country-border">
        <div class="country-border-title">Border Countries(Region):</div>
        <router-link tag="div" :to="'/detail/'+ item" class="border-countries-button" v-for="item of this.bordersContries" :key="item.id">
          <span class="border-countries">{{item}}</span>
        </router-link> 
      </div>
    </div>
  </div>
  
</template>

<script>
import { number_format } from '@/filters/numbersFormat'
export default {
  name: 'DetailCountry',
  props: {
    contryName: String,
    contryFlag: String,
    contryNativeName: String,
    contryRegion: String,
    contrySubRegion: String,
    contryPopulation: Number,
    contryCapital: String,
    contryTopLevelDomain: Array,
    contryCurrencies: Array,
    contryLanguages: Array,
    contryBorders: Array,
    bordersContries: Array,
  },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixin.styl'
.button
  width: 140px
  height: 40px
  line-height: 40px
  border-radius: 5px
  box-shadow: 0px 0px 10px
  margin: 40px 0px 65px 28px
  text-align: center
  box_shadow(shadowColor)
  bg_color(elColor)
  .iconfont
    margin-right: 10px
    font_color(textColor)
  .back
    font_color(textColor)
.country-flag
  float: left
  width: 320px
  height: 230px
  margin: 0px 0px 0px 28px
  overflow: hidden
  .flag-svg
    width:100%
    height: 100%
    object-fit: cover
.country-name
  float: left
  margin: 50px 0px 30px 28px
  font-size: 1.25rem
  width: 100%
  font-weight: 800
  font_color(textColor)
.country-info
  float: left
  width: 200px
  margin-left: 28px
  line-height: 2
  display: flex;
  flex-direction: column
  flex-wrap: wrap
  font_color(textColor)
  .country-native-name
    float: left
    font-size: .75rem
    .native-name
      font-weight: 300
  .country-top-level-domain
    float: left
    font-size: .75rem
    .top-level-domain
      font-weight: 300
  .country-population
    float: left
    font-size: .75rem
    .population
      font-weight: 300
  .country-currencies
    float: left
    font-size: .75rem
    .currencies
      font-weight: 300
  .country-region
    float: left
    font-size: .75rem
    .region
      font-weight: 300
  .contry-languages
    float: left
    font-size: .75rem
    .languages
      font-weight: 300
  .country-sub-region
    float: left
    font-size: .75rem
    .sub-region
      font-weight: 300
  .country-capital
    float: left
    font-size: .75rem
    .capital
      font-weight: 300
.country-border
  float: left
  width: 330px
  margin: 0px 28px
  padding: 45px 0px 60px 0px
  font-size: 1rem
  font_color(textColor)
  .country-border-title
    float: left
    margin-bottom: 30px
    width: 100%
  .border-countries-button
    float: left
    font-weight: 300
    padding: 0px 10px 0px 10px
    min-width: 80px
    height: 30px
    line-height: 30px
    text-align: center
    box-shadow: 0px 0px 5px
    margin: 0px 10px 10px 0px
    box_shadow(shadowColor)
    bg_color(elColor)
    .border-countries
      font-size: .75rem
      font-weight: 300
      font_color(textColor)
</style>