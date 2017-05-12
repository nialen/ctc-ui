<template>
  <div class="menu-bar">
    <div class="menu-tit"><img src="./icon_menu.png">菜单管理</div>
    <div class="addItem">
      <button class="btn add-btn"><i class="el-icon-plus"></i> 添加分类</button>
      <div class="search">
        <el-input class="search-input" placeholder="输入分类名称搜索"></el-input><el-button class="search-btn">查询</el-button>
      </div>
    </div>
    <div class="menu-cent">
      <p class="none" style="display: none">暂无菜单，请添加分类！</p>
      <p class="remind">注：删除一级分类，所属的子分类一起删除。</p>
      <div class="lists">
        <div class="listfor" v-for="(item, index) in directories">
          <span class="numlist">{{(index + 1).toString().replace(/^(\d)$/, "0$1")}}</span>
          <ul class="itemlist">
            <li>
              <span class="item-catalog">一级目录：</span>
              <div class="catalog-list">
                <label class="checkboxclass"><input type="checkbox" name=""><span class="bold">{{item.name}}</span></label>
              </div>
            </li>
            <li>
              <span class="item-catalog">二级目录：</span>
              <div class="catalog-list fn-clear">
                <label v-for="sub in item.categories" class="checkboxclass"><input type="checkbox"><span>{{sub.name}}</span></label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="btns">
        <button class="btn delete-btn">删除</button>
        <button class="btn reset-btn">重置</button>
      </div>
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
.menu-bar {
  width: 1006px;
  padding: 0 8px;
}

.menu-tit {
  height: 42px;
  padding-left: 14px;
  line-height: 42px;
  font-size: 16px;
  color: #363636;
  border-bottom: 1px solid #d9d9d9;
}

.menu-tit img {
  vertical-align: middle;
  margin:-2px 3px 0 0;
}

.addItem {
  height: 62px;
  position: relative;
}

.btn {
  width: 104px;
  height: 36px;
  background: #ffe3ee;
  border: 1px solid #f279aa;
  font-size: 14px;
  color: #ef3882;
  border-radius: 4px;
}

.addItem .add-btn {
  position: absolute;
  left: 14px;
  top: 14px;
}

.addItem .add-btn i {
  font-size: 14px;
}

.addItem .search {
  position: absolute;
  right: 14px;
  top: 14px;
}

.addItem .search-input {
  width: 335px;
}

.addItem .search .search-btn {
  width: 106px;
  margin-left: 6px;
  color: #fff;
  background: #fa4f94;
  border-radius: 4px;
  border-color: #fa4f94;
}

.menu-cent {
  width: 978px;
  min-height: 125px;
  margin: 0 auto;
  border: 1px solid #dfe8ed;
  background: #f8fcfe;
  border-radius: 4px;
}

.none {
  color: #ef3882;
  font-size: 14px;
  text-align: center;
  margin-top: 50px;
}

.menu-cent .remind {
  line-height: 29px;
  border-bottom: 1px solid #fad6e5;
  background: #ffeef5;
  color: #898989;
  font-size: 14px;
  text-indent: 15px;
}

.menu-cent .listfor {
  padding: 14px 0;
  display: flex;
  border-bottom: 1px solid #dfe8ed;
}

.menu-cent .listfor .numlist {
  display: inline-block;
  width: 100px;
  color: #8b969c;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 17px;
}

.menu-cent .itemlist {
  border-left: 1px dashed #dfe8ed;
  line-height: 30px;
}

.menu-cent .itemlist .item-catalog {
  display: inline-block;
  width: 98px;
  text-align: right;
  color: #8da7b1;
  font-size: 16px;
  vertical-align: top;
}

.menu-cent .itemlist .catalog-list {
  display: inline-block;
  width: 748px;
  margin-left: 10px;
}

.checkboxclass {
  float: left;
  font-size: 14px;
  margin-right: 24px;
}

.checkboxclass input[type=checkbox] {
  display: none;
}

.checkboxclass input[type=checkbox] + span {
  position: relative;
  display: inline-block;
  padding-left: 26px;
  text-indent: 0;
  color: #646869;
}

.checkboxclass input[type=checkbox] + span.bold {
  font-weight: bold;
  font-size: 16px;
  color: #1a1e20;
}

.checkboxclass input[type=checkbox] + span::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 0;
  width: 18px;
  height: 18px;
  background: url(./icon-nocheck.png) no-repeat;
}

.checkboxclass input[type=checkbox]:checked + span::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 0;
  width: 18px;
  height: 18px;
  background: url(./icon-check.png) no-repeat;
}

.menu-cent .btns {
  margin: 10px 0 42px 100px;
}

.menu-cent .btns .delete-btn {
  margin-right: 20px;
}
</style>
