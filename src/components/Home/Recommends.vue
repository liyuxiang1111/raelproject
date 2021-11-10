<template>
  <div class="components-container">
    <div v-if="1" class="components-box">
      <h2>推荐模块</h2>

      <!--第一列-->
      <Recommend></Recommend>
      <!--第一列end-->
    </div>
    <div v-else class="components-box">
      <h2>推荐类型表中没有对应的数据</h2>
    </div>
  </div>
</template>

<script>
import Recommend from '@/components/Home/Component/Recommend.vue'
export default {
  components: {
    Recommend
  }
}
</script>

<style lang="less" scroped>
.components-box {
  h2 {
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: large;
    text-align: center;
  }
}
</style>
