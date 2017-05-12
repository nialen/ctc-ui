<template>
  <div>
    <v-category></v-category>
    <router-view></router-view>
  </div>
</template>
<script>
import category from '@/components/category/';

export default {
  components: {
    'v-category': category
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
