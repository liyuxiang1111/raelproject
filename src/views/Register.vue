<template>
  <div class="register-container">
    <div class="register-box">
      <Head :regiList="rigisterList"></Head>
      <RegisterInfo></RegisterInfo>
    </div>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Head from '@/components/Login/Head.vue'
import RegisterInfo from '@/components/Register/Registerinfo.vue'
import Copyright from '@/components/Footer/Copyright.vue'
export default {
  name: 'Register',
  data() {
    return {
      rigisterList: [
        { id: 1, title: '注册', to: '/register' },
        { id: 2, title: '去登录', to: '/login' }
      ]
    }
  },
  components: {
    Head,
    Copyright,
    RegisterInfo
  }
}
</script>

<style lang="less" scoped>
.register-container {
  margin: 0 126.667px;
  padding: 15px;
  .register-box {
    margin-top: 20px;
    height: 780px;
    border: 1px solid #ccc;
  }
}
</style>
