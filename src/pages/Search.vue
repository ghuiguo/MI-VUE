<template>
  <div class="Search">
    <searchlist/>
    <!-- <searchBefore/> -->
    <router-view></router-view>
  </div>
</template>


<script>
import searchlist from './Search/Searchlist';
// import searchBefore from './Search/SearchBefore';
export default {
  components:{
    searchlist,
    // searchBefore
  }
};
</script>

<style>
</style>