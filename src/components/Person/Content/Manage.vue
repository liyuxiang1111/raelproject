<template>
  <div class="manage-container">
    <div class="manage-box">
      <div class="user-manage-header">
        <div class="count">共<span>7</span>个项目</div>
        <Project></Project>
        <div class="pagebar-box">
          <Pagebar></Pagebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from '@/components/Person/Content/Manage/Project.vue'
import Pagebar from '@/components/Pagebar/Pagebar.vue'
export default {
  components: {
    Project,
    Pagebar
  }
}
</script>

<style lang="less" scoped>
.manage-container {
  .manage-box {
    .user-manage-header {
      .count {
        float: left;
        margin-left: 100px;
        font-size: larger;
        letter-spacing: 20px;
        span {
          font-size: xx-large;
          color: red;
        }
      }
      .pagebar-box {
        margin: 0 210px;
      }
    }
  }
}
</style>
