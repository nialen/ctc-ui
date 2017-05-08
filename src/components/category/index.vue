<template>
  <div class="box-1200">
    <div class="nav-box fn-clear">
      <div class="nav-title">所有分类：</div>
      <div class="nav fn-clear">
        <ul>
          <li class="nav-li nav-li-select"><a href="javascript:void(0)">布局</a></li>
          <li class="nav-li nocategory">
            <a href="javascript:void(0)"><img src="./addclass.png" alt="">添加分类</a>
          </li>
          <li class="nav-li nocategory"><a href="javascript:void(0)">暂无分类</a></li>
          <li class="nav-li"><a href="javascript:void(0)">公共头部</a></li>
          <li class="nav-li"><a href="javascript:void(0)">菜单目录</a></li>
          <li class="nav-li"><a href="javascript:void(0)">Tab</a></li>
          <li class="nav-li"><a href="javascript:void(0)">工具栏</a></li>
          <li class="nav-li"><a href="javascript:void(0)">表格</a></li>
          <li class="nav-li"><a href="javascript:void(0)">表单</a></li>
          <li class="nav-li"><a href="javascript:void(0)">搜索</a></li>
          <li class="nav-li"><a href="javascript:void(0)">翻页</a></li>
          <li class="nav-li"><a href="javascript:void(0)">图表</a></li>
          <li class="nav-li"><a href="javascript:void(0)">步骤导航</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    directoryId: {
      type: String,
      // required: true
    }
  },
  data() {
    return {

    }
  },
  created() {
    this.$http.get('/api/categories', {
      params: {
        'directoryId': this.directoryId
      }
    }).then((res) => {
      this.categories = res.body.data;
    })
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-box {
  width: 100%;
  height: 52px;
  line-height: 52px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  margin-top: 12px;
}

.nav-title {
  float: left;
  display: inline-block;
  width: 80px;
  text-align: right;
  font-size: 14px;
  color: #c9c9c9;
  margin-right: 7px;
}

.nav {
  width: auto;
}

.nav li {
  margin-top: 12px;
  margin-right: 8px;
  float: left;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  position: relative;
  border: 1px solid #e9e9e9;
}

.nav-li-angle {
  width: 0;
  height: 0;
  position: absolute;
  top: 27px;
  left: 50%;
  margin-left: -5px;
  background: #fff;
  border: 10px solid #fff;
  border-radius: 10px;
  border-top-color: #fa4f94;
}

.nav li.nav-li {
  padding: 0px 10px;
  background: #e9e9e9;
  font-size: 14px;
  border-radius: 5px;
}

.nav li.nav-li a {
  color: #5d5d5d;
}

.nav li.nav-li-select {
  background: #fa4f94;
  border: 1px solid #fa4f94;
}

.nav li.nav-li-select a {
  color: #fff;
}

.nav li.nav-li-select::after {
  background: url(./class-angle.png) no-repeat bottom center;
  content: '';
  width: 9px;
  height: 5px;
  position: absolute;
  top: 26px;
  left: 50%;
  margin-left: -5px;
}

.nav li.nocategory {
  background: #f5f4f4;
  border: 1px dashed #bfbfbf;
}

.nav li.nocategory img {
  vertical-align: middle;
  margin-right: 3px;
}
</style>
