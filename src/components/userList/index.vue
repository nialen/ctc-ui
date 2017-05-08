<template>
  <div class="box-1200">
    <div class="categoryList fn-clear">
      <ul>
        <li>
          <a href="javascript:void(0)">
            <div class="nophoto"><img src="./zanwu.jpg" alt=""></div>
            <div class="category-msg" style="display: none;">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="category-img"><img src="./list-img.jpg" alt=""></div>
            <div class="category-msg">
              <div class="category-title">卖乐多</div>
              <div class="category-date">2015-10-02</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categoryList {
  width: 100%;
  overflow: hidden;
}

.categoryList ul {
  width: 105%;
}

.categoryList ul li {
  float: left;
  display: inline-block;
  margin-top: 15px;
  margin-right: 21px;
  width: 282px;
  height: 211px;
  border: 1px solid #dddddd;
  position: relative;
  background: #fafafa;
}

.nophoto {
  width: 257px;
  height: 189px;
  border: 1px dashed #d2d2d2;
  margin: auto;
  margin-top: 10px;
}

.nophoto img {
  width: 257px;
  height: 189px;
}

.category-img img {
  width: 282px;
  height: 211px;
}

.category-msg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 39px;
  line-height: 39px;
  background: #383838;
  z-index: 999;
  filter: alpha(opacity=70);
  -moz-opacity: 0.7;
  opacity: 0.7;
}

.category-title {
  float: left;
  display: inline-block;
  width: 180px;
  color: #fff;
  padding-left: 9px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.category-date {
  float: right;
  display: inline-block;
  font-size: 12px;
  color: #bdbdbd;
  text-align: right;
  margin-right: 7px;
  width: 75px;
}
</style>
