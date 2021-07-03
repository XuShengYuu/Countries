<template>
  <div>
    <div class="countries" v-for="item of countriesList" :key="item.id">
      <div class="flag">{{item.country}}</div>
      <div class="info">
        <div class="info-country">{{item.country}}</div>
        <div class="info-population">
          Population:
          <span class="population-num">{{item.population}}</span>
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
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomeCountries',
    data () {
      return {
        countriesList: [{
          id: '0001',
          flag:'Germany',
          country:'Germany',
          population:'27,657,15',
          region:'Europe',
          capital:'Berlin'
        },{
          id: '0002',
          flag:'United States of America',
          country:'United States of America',
          population:'323,947,000',
          region:'Americas',
          capital:'Washington,D.C'
        },{
          id: '0003',
          flag:'Brazi',
          country:'Brazi',
          population:'206,135,893',
          region:'Americas',
          capital:'Brasifia'
        },{
          id: '0004',
          flag:'Iceland',
          country:'Iceland',
          population:'334,300',
          region:'Europe',
          capital:'Reykjavik'
        },{
          id: '0005',
          flag:'Afghanistan',
          country:'Afghanistan',
          population:'27,657,145',
          region:'Asia',
          capital:'Kabul'
        },{
          id: '0006',
          flag:'Aland Islands',
          country:'Aland Islands',
          population:'28,875',
          region:'Europe',
          capital:'Mariehman'
        },{
          id: '0007',
          flag:'Albania',
          country:'Albania',
          population:'2,886,026',
          region:'Europe',
          capital:'Tirana'
        },{
          id: '0008',
          flag:'Algeria',
          country:'Algeria',
          population:'40,400,000',
          region:'Africa',
          capital:'Algiers'
        }]
      }
    }
}
</script>
<style lang="stylus" scoped>
  .countries
    width: 265px
    height: 340px
    overflow: hidden
    border-radius: 5px
    box-shadow: 0px 0px 10px #ccc;
    float: left
    margin-right: 60px
    margin-bottom: 60px
    .flag
      width: 265px
      height: 160px
      background: green
      border-radius: 5px
    .info
      width: 265px
      height: 180px
      line-height: 20px
      margin-left: 25px
      .info-country
        font-size: 16px
        font-weight: 800
        margin-top: 30px
      .info-population
        margin-top: 15px
        font-size: 12px
        font-weight: 600
        .population-num
          font-size: 10px
          font-weight: 300
      .info-region
        font-size: 12px
        font-weight: 600
        .region
          font-size: 10px
          font-weight: 300
      .info-capital
        font-size: 12px
        font-weight: 600
        .capital
          font-size: 10px
          font-weight: 300       
</style>
