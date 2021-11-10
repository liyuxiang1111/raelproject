<template>
  <div class="manage-container">
    <div class="manage-box">
      <div class="user-manage-header">
        <div class="count">
          共<span>{{ length }}</span
          >个项目
        </div>
        <Project></Project>
        <!-- <div class="pagebar-box">
          <Pagebar></Pagebar>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Project from '@/components/Person/Content/Manage/Project.vue'
import Pagebar from '@/components/Pagebar/Pagebar.vue'
import bus from '@/components/eventbus.js'
/* import bus from '@/components/eventbus.js' */
export default {
  /*   created() {
    bus.$on('share', val => {
      this.listManage = val
      console.log('ok')
      console.log(this.listManage)
    })
  }, */
  data() {
    return {
      listManage: [],
      length: 0
    }
  },
  components: {
    Project,
    Pagebar
  },
  created() {
    bus.$on('shareTotal', val => {
      console.log('recive')
      this.length = val
    })
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
