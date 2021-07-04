<template>
  <div>
    <home-header></home-header>
    <div class="detail-country">
      <detail-country
      :contryName="contryName"
      :contryFlag="contryFlag"
      :contryNativeName="contryNativeName"
      :contryRegion="contryRegion"
      :contrySubRegion="contrySubRegion"
      :contryPopulation="contryPopulation"
      :contryCapital="contryCapital"
      :contryTopLevelDomain="contryTopLevelDomain"
      :contryCurrencies="contryCurrencies"
      :contryLanguages="contryLanguages"
      :contryBorders="contryBorders"
      :bordersContries="bordersContries"
      ><router-view/></detail-country>
    </div>
  </div>
  
</template>

<script>
import HomeHeader from '@/pages/mobile/home/components/Header.vue'
import DetailCountry from './components/Country.vue'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    HomeHeader,
    DetailCountry
  },
  data () {
    return {
      contryName: '',
      contryFlag: '',
      contryNativeName: '',
      contryRegion: '',
      contrySubRegion: '',
      contryPopulation: 0,
      contryCapital: '',
      contryTopLevelDomain: [],
      contryCurrencies: [],
      contryLanguages: [],
      contryBorders: [],
      bordersContries: []
    }
  },
  methods: {
    getInfo() {
      axios.all([
        axios.get('https://restcountries.eu/rest/v2/name/' + this.$route.params.name, {
        params: {
          fields:'name;flag;nativeName;population;region;capital;subregion;topLevelDomain;currencies;languages;borders'
        }}),
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code')
      ]).then(axios.spread((res,codeRes) => {
          this.getDetailInfoSucc(res),
          this.getCodeAndSwitchName(codeRes)
        }))
    },
    getDetailInfoSucc (res) {
      this.detailInfo = res.data
      this.contryName = this.detailInfo[0].name
      this.contryFlag = this.detailInfo[0].flag
      this.contryNativeName = this.detailInfo[0].nativeName
      this.contryRegion = this.detailInfo[0].region
      this.contrySubRegion = this.detailInfo[0].subregion
      this.contryPopulation = this.detailInfo[0].population
      this.contryCapital = this.detailInfo[0].capital
      this.contryTopLevelDomain = this.detailInfo[0].topLevelDomain
      this.contryCurrencies = this.detailInfo[0].currencies
      this.contryLanguages = this.detailInfo[0].languages
      this.contryBorders = this.detailInfo[0].borders
    },
    getCodeAndSwitchName(codeRes) {
      this.codeInfo = codeRes.data
      for (let i in this.contryBorders) {
        for (let j in this.codeInfo) {
          this.contryBordersCode = this.codeInfo[j].alpha3Code
          this.contryBordersName = this.codeInfo[j].name
          if (this.contryBorders[i] == this.contryBordersCode) {
            this.bordersContries.push(this.contryBordersName.replace(/\(.*?\)/g, '' ))
          }
        }
      }
    },
  },
  mounted () {
    this.getInfo()
  }
}
</script>
<style lang="stylus">
.detail-country
  width: 375px
  margin: 0 auto;
</style>