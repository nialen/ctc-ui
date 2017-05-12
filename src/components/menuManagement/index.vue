<template>
  <div class="menu-bar">
    <div class="menu-tit"><img src="./icon_menu.png">菜单管理</div>
    <div class="addItem">
      <button class="btn add-btn"><i class="iconfont">&#xe60e;</i> 添加分类</button>
      <div class="search">
        <input type="text" placeholder="输入分类名称搜索"><button class="search-btn">查询</button>
      </div>
    </div>
    <div class="menu-cent">
      <p class="none" style="display: none">暂无菜单，请添加分类！</p>
      <p class="remind">注：删除一级分类，所属的子分类一起删除。</p>
      <div class="lists">
        <div class="listfor">
          <span class="numlist">01</span>
          <ul class="itemlist">
            <li>
              <span class="item-catalog">一级目录：</span>
              <div class="catalog-list">
                <label class="checkboxclass"><input type="checkbox" name=""><span class="bold">元素</span></label>
              </div>
            </li>
            <li>
              <span class="item-catalog">二级目录：</span>
              <div class="catalog-list fn-clear">
                <label class="checkboxclass"><input type="checkbox" name=""><span>布局</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>公共头部</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>菜单目录</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>Tab</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>工具栏</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>表格</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>表单</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>搜索</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>翻页</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>图表</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>步骤</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>导航</span></label>
              </div>
            </li>
          </ul>
        </div>
        <div class="listfor">
          <span class="numlist">02</span>
          <ul class="itemlist">
            <li>
              <span class="item-catalog">一级目录：</span>
              <div class="catalog-list">
                <label class="checkboxclass"><input type="checkbox" name=""><span class="bold">UI</span></label>
              </div>
            </li>
            <li>
              <span class="item-catalog">二级目录：</span>
              <div class="catalog-list fn-clear">
                <label class="checkboxclass"><input type="checkbox" name=""><span>系统界面</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>APP</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>网页设计</span></label>
              </div>
            </li>
          </ul>
        </div>
        <div class="listfor">
          <span class="numlist">03</span>
          <ul class="itemlist">
            <li>
              <span class="item-catalog">一级目录：</span>
              <div class="catalog-list">
                <label class="checkboxclass"><input type="checkbox" name=""><span class="bold">业务模块</span></label>
              </div>
            </li>
            <li>
              <span class="item-catalog">二级目录：</span>
              <div class="catalog-list fn-clear">
                <label class="checkboxclass"><input type="checkbox" name=""><span>注册</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>登录</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>零售收银</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>调拨出入库</span></label>
                <label class="checkboxclass"><input type="checkbox" name=""><span>商户注册</span></label>
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
export default {}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-bar {
  padding: 0 8px;
}

.menu-tit {
  height: 42px;
  width: 100%;
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
  width: 100%;
  height: 62px;
  position: relative;
}

.btn {
  width: 104px;
  height: 32px;
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
  font-size: 20px;
}

.addItem .search {
  position: absolute;
  right: 14px;
  top: 14px;
}

.addItem .search input[type=text] {
  width: 335px;
  height: 22px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  padding: 5px 10px;
  outline: none;
}

.addItem .search .search-btn {
  width: 106px;
  height: 34px;
  margin-left: 6px;
  color: #fff;
  font-size: 16px;
  background: #fa4f94;
  border-radius: 4px;
  border: 0;
}

.menu-cent {
  min-height: 125px;
  margin: 0 auto;
  border: 1px solid #dfe8ed;
  background: #f8fcfe;
  margin: 0 14px;
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

.menu-cent .lists {
  margin: 0 16px;
  border-bottom: 1px solid #dfe8ed;
}

.menu-cent .listfor {
  padding: 14px 0;
  display: flex;
  border-bottom: 1px solid #dfe8ed;
}

.menu-cent .listfor .numlist {
  width: 84px;
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
  width: 772px;
  display: inline-block;
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
  margin: 10px 0 42px 86px;
}

.menu-cent .btns .delete-btn {
  margin-right: 24px;
}
</style>
