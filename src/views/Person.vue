<template>
  <div class="person-container">
    <Personnav></Personnav>
    <div class="resource-box">
      <Resource></Resource>
    </div>
    <div class="content-box">
      <Contentbar></Contentbar>
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Personnav from '@/components/Nav/Personnav.vue'
import Resource from '@/components/Person/Resource.vue'
import Contentbar from '@/components/Person/Contentbar.vue'
import Content from '@/components/Person/Content.vue'
export default {
  components: {
    Personnav,
    Resource,
    Contentbar,
    Content
  }
}
</script>

<style lang="less" scroped>
.person-container {
  .resource-box {
    margin-top: 100px;
  }
  .content-box {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
