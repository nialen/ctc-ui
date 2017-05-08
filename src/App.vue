<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '@/components/header/';

export default {
  data() {
    return {

    }
  },
  created() {
    this.$store.dispatch('fetchData');
    console.log(this.$store.state, 'this.$store.state');
  },
  components: {
    'v-header': header
  }
}
</script>

<style>

</style>
