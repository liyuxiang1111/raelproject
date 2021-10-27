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
            <router-link to="">
              <img :src="imag" alt="" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imag: require(`@/assets/image/person_simple.jpg`)
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
      })
    }
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
      }
    }
  }
}
</style>
