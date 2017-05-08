<template>
  <div>
    <v-category :role=role :categories=categories></v-category>
    <router-view></router-view>
  </div>
</template>
<script>
import category from '@/components/category/';
const ROLE = 'admin'; // 设置用户角色

export default {
  data() {
    return {
      role: ROLE,
      categories: []
    }
  },
  created() {
    this.$http.get('/api/categories').then((res) => {
      this.categories = res.body.data;
    })
  },
  methods: {
    addDirectory() {
      var param = {
        name: '元素'
      };
      this.$http.post('/api/admin/directory', JSON.stringify(param)).then((res) => {
        this.directory = res.body.data;
        console.log(this.directory, 'this.directory');
      })
    },
    addCategory() {
      var param = {
        name: '公共头部'
      };
      this.$http.post('/api/admin/category', JSON.stringify(param)).then((res) => {
        this.category = res.body.data;
        console.log(this.category, 'this.category');
      })
    },
    addMovie() {
      var param = {
        catalog: '元素',
        category: '布局',
        name: '卖乐多',
        url: 'http://img.w3cschool.cn/attachments/image/20160910/1473476960662589.gif'
      };
      this.$http.post('/api/admin/movie', JSON.stringify(param)).then((res) => {
        this.movie = res.body.data;
        console.log(this.movie, 'this.movie');
      })
    }
  },
  components: {
    'v-category': category
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
