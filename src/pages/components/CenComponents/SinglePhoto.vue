<template>
  <div class="phone-show-top">
      <img :src="datasrc" alt />
    </div>
</template>

<script>
export default {
    props:["datasrc"],
    created(){
        console.log(this.datasrc);
    }
}
</script>

<style lang='less'>
.phone-show-top {
    padding-top: 1.475rem;
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>