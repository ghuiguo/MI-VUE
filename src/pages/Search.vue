<template>
  <div class="Search">
    <searchlist  v-on:showComponent="showComponent" />
    <searchmain v-if="showComponentdata"/>
    <router-view></router-view>
  </div>
</template>


<script>
import searchlist from "./Search/Searchlist";
import searchmain from "./Search/Searchmain";
export default {
  data() {
    return {
      showComponentdata: true
    };
  },
  components: {
    searchlist,
    searchmain
  },
  methods: {
    showComponent(type) {
      console.log(type);
      this.showComponentdata = false;
    }
  },
  mounted(){
    let string = window.location.href;
    console.log(string);
        if(string.includes('searchreault')){
          this.showComponentdata = false;
        }else{
          this.showComponentdata = true;
        }
  }
};
</script>

<style>
</style>