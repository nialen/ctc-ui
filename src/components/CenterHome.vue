<template>
  <div class="center-content">
    <div class="left-menulist">
      <p class="ptitl">管理中心<span> Manager center</span></p>
      <ul class="item-list">
        <router-link to="/center/menu-management" tag="li">菜单分类管理</router-link>
        <router-link to="/center/menu-item" v-for="item in directories" :key="item.id" tag="li" :class="{on: true}">{{item.name}}</router-link>
      </ul>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    directories() {
      return this.$store.state.directories;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-content {
  background: #fff;
  width: 1198px;
  min-height: 625px;
  margin: 16px auto;
  border: 1px solid #dcdcdc;
  display: flex;
}

.left-menulist {
  width: 176px;
  min-height: 625px;
  background: #f9f8f8;
  border-right: 1px solid #e5e5e5;
}

.left-menulist .ptitl {
  background: #555;
  height: 46px;
  line-height: 46px;
  color: #fff;
  font-size: 16px;
  text-indent: 7px;
}

.left-menulist .ptitl span {
  color: #bebebe;
  font-size: 12px;
}

.item-list li {
  width: 100%;
  line-height: 36px;
  color: #545a5c;
  font-size: 14px;
  position: relative;
  text-indent: 43px;
  cursor: pointer;
}

.item-list li.on {
  color: #f33d7d;
  background: #e7e7e7;
}

.item-list li.on::before {
  content: '';
  position: absolute;
  left: 0;
  border-left: 3px solid #f33d7d;
  top: 0;
  height: 36px;
}

.right-content {
  width: 1022px;
  min-height: 625px;
}
</style>
