<template>
  <div class="nav-container">
    <div class="nav-box">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" to="/login">更换用户</router-link>
          </div>
          <!--导航主体-->
          <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active">
                <router-link to="/home"> 首页 <span class="sr-only">(current)</span></router-link>
              </li>
              <li><router-link to="/search">搜索</router-link></li>
              <!-- <li class="dropdown">
                <router-link class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="/home">发现<span class="caret"></span></router-link>
                <ul class="dropdown-menu">
                  <li><a href="#">圈子</a></li>
                  <li><a href="#">标签</a></li>
                  <li><a href="#">库工作</a></li>
                  <li><router-link to="/home">排行榜</router-link></li>
                  <li role="separator" class="divider"></li>
                  <li><router-link to="/home">广告投放</router-link></li>
                </ul>
              </li> -->
            </ul>
            <form action="" class="navbar-form navbar-left">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search" />
              </div>
              <button type="submit" class="btn btn-default">搜索关键字</button>
            </form>
            <div class="user-position">
              <router-link to="/person">
                <img :src="imag" class="img-circle user-head" id="user-head" />
                <div class="user-name">{{ name }}</div>
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      name: '',
      token: '',
      imag: ''
    }
  },
  created() {
    this.token = localStorage.getItem('Authorizatio')
    this.initNavBar()
  },
  methods: {
    async initNavBar() {
      console.log('nav的' + this.token)
      await this.$http({
        method: 'GET',
        url: '/user/currentUser',
        headers: {
          Authorization: this.token
        }
      }).then(({ data: res }) => {
        this.name = res.data.userName
        this.imag = require(`../../assets/image/userImg/` + res.data.id + `.png`)
      })
    }
  }
}
</script>

<style lang="less" scroped>
.nav-box {
  .navbar {
    margin-bottom: 0;
  }
  .user-position {
    margin-left: 20px;
    float: right;
    width: 135px;
    height: 50px;
    line-height: 20px;
    .user-head {
      display: inline-block;
      float: left;
      margin-top: 12px;
      height: 30px;
      width: 30px;
    }
    .user-name {
      float: left;
      height: 50px;
      margin-left: 20px;
      line-height: 50px;
    }
  }
}
</style>
