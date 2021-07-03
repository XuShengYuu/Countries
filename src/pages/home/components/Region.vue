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
            arrayOfObjects: [{name:'Select an Item'},{name: 'Africa'},{name: 'America'},{name: 'Asia'},{name: 'Europe'},{name: 'Oceania'}],
            object: {
              name: 'Select an Item',
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

.my-dropdown-toggle
  margin-top: -60px
  border-radius: 5px;
  ::v-deep .dropdown-toggle 
    color: hsl(200, 15%, 8%)
    padding: 13px 20px 12px 10px;
    font-size: 14px;
    background: none
    min-width: 160px
    box-shadow: 0px 0px 10px #ccc;
  ::v-deep .dropdown-toggle-placeholder 
    color: #c4c4c4;
::v-deep .dropdown-menu
  min-width: 190px;
::v-deep .btn-group
  height: 45px;
</style>