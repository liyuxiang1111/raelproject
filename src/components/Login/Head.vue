<template>
  <div class="login-head-container">
    <div class="head-box">
      <div v-for="item in headList" :key="item.id" class="title-box">
        <router-link :to="item.to">{{ item.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginHead',
  props: ['loginList', 'regiList'],
  data() {
    return {
      headList: ''
    }
  },
  created() {
    if (location.hash === '#/login') {
      this.headList = this.loginList
    } else if (location.hash === '#/register') {
      this.headList = this.regiList
    }
  },
  updated() {}
}
</script>

<style lang="less" scroped>
.title-box {
  position: relative;
  height: 42px;
  line-height: 42px;
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0;
  padding: 0 30px;
  border-bottom: 1px solid #ccc;
  background-color: #ececee;
  a {
    color: black;
  }
  a:hover {
    color: orange;
  }
}
</style>
