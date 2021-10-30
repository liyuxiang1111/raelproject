<template>
  <div class="personnav-container">
    <div class="person-header">
      <div class="person-header-left">
        <ul>
          <li>
            <router-link to="/home">志同道和线上交流系统欢迎您</router-link>
          </li>
        </ul>
      </div>
      <div class="person-header-right">
        <ul>
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="">信息</router-link>
          </li>
          <li class="user-head">
            <router-link @mouseenter="show" to="/person">
              <img :src="imag" alt="" />
            </router-link>
            <ul class="white boxshadowcolor user-menu">
              <li class="user-name ">
                <div class="user_name">${user.userName}</div>
              </li>
              <li class=" glyphicon glyphicon-search">
                <router-link to="/search">搜索</router-link>
              </li>
              <li class=" glyphicon glyphicon-pencil">
                <router-link to="">修改个人信息</router-link>
              </li>
              <li class="glyphicon glyphicon-folder-close">
                <router-link to="">我的项目</router-link>
              </li>
              <li class="glyphicon glyphicon-off">
                <router-link to="">退出登录</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data() {
    return {
      imag: require(`@/assets/image/person_simple.jpg`),
      name: '',
      userId: '',
      token: ''
    }
  },
  created() {
    this.token = localStorage.getItem('Authorizatio')
    this.initNavBar()
  },
  methods: {
    async initNavBar() {
      await this.$http({
        method: 'GET',
        url: '/user/currentUser',
        headers: {
          Authorization: this.token
        }
      }).then(({ data: res }) => {
        this.name = res.data.userName
        this.userId = res.data.id
      })
    },
    show() {}
  }
}
</script>

<style lang="less" scroped>
.personnav-container {
  .person-header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;
    height: 50px;
    width: 100%;
    line-height: 50px;
    background-color: #ffffff;
    border-bottom: 1px solid #dedede;
    box-shadow: 0 2px 4px 0 var(--cb-color-shadow, rgba(0, 0, 0, 0.16));
    color: #666666;
    .person-header-left {
      float: left;
      ul {
        li {
          float: left;
          padding: 0 10px;
        }
        a {
          color: #666666;
          text-decoration: none;
        }
      }
    }
    .person-header-right {
      float: right;
      ul {
        li {
          float: left;
          padding: 0 10px;
        }
        a {
          color: #666666;
          text-decoration: none;
        }
      }
      .user-head {
        position: relative;
        width: 50px;
        height: 50px;
        right: 0;
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .user-menu {
          display: none;
          .user-name {
            background-color: #f4f4f4;
          }
        }
        ul {
          position: absolute;
          margin-top: 1px;
          top: 50px;
          right: 0px;
          width: 200px;
          border: 1 solid #e2e2e2;
          li {
            width: 200px;
            height: 50px;
            line-height: 50px;
            text-align: left;
            padding: 0 15px;
          }
        }
      }
    }
  }
}
</style>
