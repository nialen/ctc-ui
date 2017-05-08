<template>
  <div>
    <v-header :role=role :directories=directories></v-header>
    <router-view></router-view>
  </div>
</template>
<script>
import header from '@/components/header/';
const ROLE = 'admin'; // 设置用户角色

export default {
  data() {
      return {
        role: ROLE,
        directories: [],
        categories: []
      }
    },
    created() {
      this.$http.get('/api/directories').then((res) => {
        this.directories = res.body.data;
      })
    },
    components: {
      'v-header': header
    }
}
</script>
<style>
</style>
