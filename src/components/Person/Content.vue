<template>
  <div class="content-container">
    <router-view></router-view>
  </div>
</template>

<script>
import Privacy from '@/components/Person/Content/Privacy.vue'
export default {
  data() {
    return {
      comName: Privacy
    }
  },
  components: {
    Privacy
  }
}
</script>

<style lang="less" scroped>
.content-container {
  float: right;
  padding: 30px 15px;
  margin-top: 100px;
  width: 800px;
  border: 1px solid #bebebe;
  border-radius: 10px;
  background-color: #ffffff;
}
</style>
