<template>
  <div class="box-1200">
    <div class="categoryList fn-clear">
      <ul>
        <li v-if="movies.length===0">
          <div class="nophoto" @click="dialogFormVisible = true"><img src="./zanwu.jpg" alt=""></div>
        </li>
        <li v-for="item in movies">
          <a href="javascript:void(0)">
            <div class="category-img"><img :src="item.url" alt=""></div>
            <div class="category-msg">
              <div class="category-title">{{item.name}}</div>
              <div class="category-date">{{item.updataAt}}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <el-dialog title="添加图片" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
        <el-form-item label="图片标题：" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="图片路径：" prop="name">
          <el-input v-model="ruleForm.url"></el-input>
        </el-form-item>
        <el-form-item label="所属一级目录：" prop="region">
          <el-select v-model="ruleForm.directory" clearable placeholder="请选择一级目录">
            <el-option v-for="item in $store.state.directories" :key="item._id" :label="item.name" :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属二级目录：" prop="region">
          <el-select v-model="ruleForm.category" clearable placeholder="请选择二级目录">
            <el-option v-for="item in $store.state.categories" :key="item._id" :label="item.name" :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
      return {
        dialogFormVisible: false,
        ruleForm: {
          name: '',
          url: '',
          directory: '',
          category: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请填写图片标题',
            trigger: 'blur'
          }, {
            validator: (rule, value, callback) => {
              if (value) {
                var regular = /\s+/g
                if (regular.test(value)) {
                  callback(new Error('图片标题不能包含空格'));
                }
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }],
          url: [{
            required: true,
            message: '请填写图片路径',
            trigger: 'change'
          }],
          directory: [{
            required: true,
            message: '请选择一级目录',
            trigger: 'change'
          }],
          category: [{
            required: true,
            message: '请选择二级目录',
            trigger: 'change'
          }]
        }
      }
    },
    computed: {
      movies() {
        return this.$store.state.movies;
      }
    }
};
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
  cursor: pointer;
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
