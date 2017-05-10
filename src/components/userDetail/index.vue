<template>
  <div class="box-1200">
    <div class="classDetail-box">
      <div class="classDetail">
        <div class="detail-title">{{movie.name}}</div>
        <div class="detail-time"><img src="./icon-time.jpg" alt="">{{moment(movie.updataAt).format('YYYY-MM-DD')}}</div>
        <div class="detail-img"><img :src="movie.url" alt=""></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movie: this.$store.state.movie
    }
  },
  created() {
    var movieId = this.$route.query.movieId;
    this.$store.dispatch('fetchDetail', movieId);
  },
  beforeUpdate() {
    this.movie = this.$store.state.movie;
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classDetail-box {
  width: 100%;
  background: #fff;
  border: 1px solid #dcdcdc;
  margin-top: 12px;
}

.classDetail {
  padding: 30px 18px 50px;
}

.detail-title {
  font-size: 30px;
  color: #333333;
  font-weight: bold;
  height: 34px;
  line-height: 34px;
}

.detail-time {
  font-size: 14px;
  color: #999999;
  height: 16px;
  line-height: 16px;
  margin-top: 13px;
  vertical-align: middle;
}

.detail-time img {
  vertical-align: top;
  margin-right: 5px;
}

.detail-img {
  margin-top: 15px;
  width: 100%;
  height: auto;
  border: 1px solid #e5e5e5;
  text-align: center;
}

.detail-img img {
  min-width: 100%;
  height: auto;
}
</style>
