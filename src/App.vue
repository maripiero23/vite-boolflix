<template>
    
  <TheHeader></TheHeader>
  <div class="container">
    <TheMain></TheMain>
    <TheFooterVue></TheFooterVue>

  </div>
      
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooterVue from './components/TheFooter.vue';

export default{
  components:{TheHeader, TheFooterVue},
  data() {
    return{

    }
  }
}
</script>


<style lang="scss">

</style>
