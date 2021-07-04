<template>
  <div class="filter">
    <dropdown class="my-dropdown-toggle"
          :options="arrayOfObjects" 
          :selected="object" 
          v-on:updateOption="methodToRunOnSelect" 
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="true">
    </dropdown>
  </div>
</template>

<script>
import dropdown from 'vue-dropdowns';
export default {
    name: 'HomeRegion',
    data() {
          return {
            arrayOfObjects: [{name:'Filter by Region'},{name: 'Africa'},{name: 'America'},{name: 'Asia'},{name: 'Europe'},{name: 'Oceania'}],
            object: {
              name: 'Filter by Region',
            }
          }
        },
  components: {
      'dropdown': dropdown,
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    }
  },
  watch: {
    object () {
      this.$emit('region',this.object.name)
    }
  }
}
  

</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixin.styl'
.filter
  float: right
  clear: right
  margin: 0px 60px 0px 0px
.my-dropdown-toggle
  margin-top: -60px
  height: 45px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px
  box_shadow(shadowColor)
  ::v-deep .dropdown-toggle
    padding: 13px 20px 12px 10px;
    font-size: 14px;
    background: none;
    bg_color(elColor)
    font_color(textColor)
  ::v-deep .dropdown-menu
    min-width: 190px;
    border:none
    bg_color(elColor)
  ::v-deep .dropdown-menu > li > a
    font_color(textColor)
  ::v-deep .dropdown-menu > li > a:hover
    bg_color(toggleColor)
</style>