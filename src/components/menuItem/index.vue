<template>
  <div class="menu-bar">
    <div class="menu-tit"><img src="./icon_menu.png">UI库管理</div>
    <div class="search-kug">
      <div class="kug-name">
        <label class="wrdsleft">名称：</label>
        <el-input v-model="input" placeholder="输入图库名称搜索"></el-input>
      </div>
      <div class="kug-category">
        <label class="wrdsleft">一级分类：</label>
        <template>
          <el-select v-model="value" placeholder="全部">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </div>
      <div class="kug-category">
        <label class="wrdsleft">二级分类：</label>
        <template>
          <el-select v-model="value" placeholder="全部">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </div>
      <el-button type="primary" class="search-btn">查询</el-button>
    </div>
    <div class="btns">
      <el-button type="primary" icon="plus">上传图片</el-button>
      <el-button type="primary">批量删除</el-button>
    </div>
    <div class="menu-cent" style="display: none">
      <p class="none">暂无菜单，请添加分类！</p>
    </div>
    <div class="tab">
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th width="5%">
              <label class="checkboxclass">
                <input type="checkbox"><span></span></label>
            </th>
            <th width="5%">序号</th>
            <th>标题</th>
            <th width="15%">一级分类</th>
            <th width="15%">二级分类</th>
            <th width="15%">发布时间</th>
            <th width="12%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label class="checkboxclass">
                <input type="checkbox"><span></span></label>
            </td>
            <td>1</td>
            <td class="text-left"><img src="./pic1.jpg">卖乐多进销存门户</td>
            <td>元素</td>
            <td>布局</td>
            <td>2017-02-02</td>
            <td>
              <el-button type="primary" icon="delete" class="del-btn"></el-button>
              <el-button type="primary" icon="view" class="check-btn"></el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        input: '',
        value:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options2: [{
          value: '选项1',
          label: '黄金糕1'
        }, {
          value: '选项2',
          label: '双皮奶1'
        }, {
          value: '选项3',
          label: '蚵仔煎1'
        }, {
          value: '选项4',
          label: '龙须面1'
        }, {
          value: '选项5',
          label: '北京烤鸭1'
        }]
      }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-bar {
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

.search-kug {
  height: 56px;
  border: 1px solid #e9eced;
  background: #fafafa;
  margin: 14px 5px 0;
  border-radius: 4px;
  display: flex;
  font-size: 14px;
}

.el-button{
  padding:9px 15px;
  background: #ffe3ee;
  border: 1px solid #f279aa;
  font-size: 14px;
  color: #ef3882;
  border-radius: 4px;
}
.menu-bar .btns {
  margin: 20px 0 14px 5px;
}

.menu-bar .btns .add-btn {
  margin-right: 24px;
}

.menu-bar .btns .add-btn i {
  font-size: 20px;
}

.search-btn {
  width: 106px;
  height: 36px;
  margin: 10px 0 0 36px;
  color: #fff;
  font-size: 16px;
  background: #fa4f94;
  border-radius: 4px;
  border: 0;
}

.kug-name {
  margin: 10px 0 0 19px;
  line-height: 34px;
  font-size:14px;
}
.kug-name .el-input{
  width: 240px;
  font-size:14px;
}
.kug-name .el-input .el-input__inner {
  border: 1px solid #d3d3d3;
  width: 240px;
  height: 32px;
  padding: 0 10px;
  font-size: 14px;
  color: #555;
  border-radius: 4px;
}

.wrdsleft {
  color: #ababab;
}

.kug-category {
  margin: 10px 0 0 37px;
  line-height: 34px;
}
.kug-category .el-select{
  width: 135px;
}
.kug-category select {
  width: 129px;
  height: 34px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  font-size: 14px;
  color: #555;
}

.tab {
  margin: 14px 5px 0
}

.menu-cent {
  min-height: 125px;
  margin: 0 auto;
  border: 1px solid #dfe8ed;
  background: #f8fcfe;
  margin: 14px 5px 0;
  border-radius: 4px;
}

.menu-cent .none {
  color: #ef3882;
  font-size: 14px;
  text-align: center;
  margin-top: 50px;
}

.tab table {
  font-size: 14px;
}
.tab table {
  width: 100%;
}
.tab table thead th {
  background: #ef4e86;
  height: 36px;
  color: #fff;
}
.tab table tbody td {
  border: 1px solid #dfe8ed;
  border-left: 0;
  border-top: 0;
  height: 58px;
  color: #707070;
  text-align: center;
}

.tab table tbody td:last-child {
  border-right: 0;
}

.tab table tbody td.text-left {
  text-align: left;
  text-indent: 8px;
}

.text-left img {
  width: 55px;
  height: 43px;
  border: 1px solid #dedede;
  vertical-align: middle;
  margin-right: 9px;
}

.del-btn {
  color: #f0410b;
  font-size: 24px;
  margin-right: 16px;
  border: 0;
  background: none;
  padding:0;
}

.check-btn {
  color: #49a0d8;
  font-size: 24px;
  border: 0;
  background: none;
  padding:0;
}

.checkboxclass input[type=checkbox] {
  display: none;
}

.checkboxclass input[type=checkbox] + span {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  text-indent: 0;
}

.checkboxclass input[type=checkbox] + span::after {
  content: '';
  position: absolute;
  top: -13px;
  left: 0;
  width: 18px;
  height: 18px;
  background: url(./icon-nocheck.png) no-repeat;
}

.checkboxclass input[type=checkbox]:checked + span::after {
  content: '';
  position: absolute;
  top: -13px;
  left: 0;
  width: 18px;
  height: 18px;
  background: url(./icon-check.png) no-repeat;
}
</style>
