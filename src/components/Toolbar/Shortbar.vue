<template>
  <div class="shortbar-container">
    <div class="shortbar-box">
      <div class="top-box">
        <router-link to="">置顶</router-link>
      </div>
      <div class="person-button">
        <router-link to="/person">个人</router-link>
      </div>
      <div class="fast-match">
        <router-link to="">匹配</router-link>
      </div>
      <div class="change-box">
        收起
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.shortbar-box {
  z-index: 100;
  position: fixed;
  right: 0;
  bottom: 15%;
  width: 40px;
  height: 130px;
  padding: 0 8px 0 0;
  .top-box {
    position: absolute;
    bottom: 135px;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    line-height: 40px;
    background-color: #ccc;
  }
  .person-button {
    position: absolute;
    bottom: 90px;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    line-height: 40px;
    background-color: #ccc;
  }
  .fast-match {
    position: absolute;
    bottom: 45px;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    line-height: 40px;
    background-color: #ccc;
  }
  .change-box {
    position: absolute;
    z-index: 10;
    bottom: 0;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    line-height: 40px;
    font-size: 12px;
    background-color: #ccc;
  }
}
</style>
