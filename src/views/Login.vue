<template>
  <div class="login-container">
    <div class="login-box">
      <Head :loginList="loginList"></Head>
      <Information></Information>
    </div>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Head from '@/components/Login/Head.vue'
import Information from '@/components/Login/Information.vue'
import Copyright from '@/components/Footer/Copyright.vue'
export default {
  name: 'Login',
  data() {
    return {
      loginList: [
        { id: 1, title: '回到主站点', to: '/home' },
        { id: 2, title: '去注册', to: '/register' },
        { id: 3, title: '登录', to: '/login' }
      ]
    }
  },
  components: {
    Head,
    Information,
    Copyright
  }
}
</script>

<style lang="less">
.login-container {
  width: 1170px;
  margin-right: auto;
  margin-left: auto;
  padding: 15px;
  .login-box {
    margin-top: 20px;
    height: 550px;
    border: 1px solid #ccc;
  }
}
</style>
