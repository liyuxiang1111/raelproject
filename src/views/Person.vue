<template>
  <div class="person-container">
    <Modal></Modal>
    <Personnav></Personnav>
    <div class="resource-box">
      <Resource :requestList="requestList" :createProject="createProject" :joinedProject="joinedProject" :totalCount="totalCount"></Resource>
    </div>
    <div class="content-box">
      <Contentbar :projectList="listManage"></Contentbar>
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Personnav from '@/components/Nav/Personnav.vue'
import Resource from '@/components/Person/Resource.vue'
import Contentbar from '@/components/Person/Contentbar.vue'
import Content from '@/components/Person/Content.vue'
import Modal from '@/components/Modal/Modal.vue'
import bus from '@/components/eventbus.js'
export default {
  props: {
    pageSize: {
      type: Number,
      default: 4
    }
  },
  components: {
    Personnav,
    Resource,
    Contentbar,
    Content,
    Modal
  },
  data() {
    return {
      token: '',
      pageNum: 1,
      pagesize: 0,
      listManage: [],
      createProject: 0,
      joinedProject: 0,
      totalCount: 0,
      requestList: {}
    }
  },
  created() {
    this.token = localStorage.getItem('Authorizatio')
    this.initPerson()
    this.initPerson2()
  },
  methods: {
    async initPerson() {
      await this.$http({
        url: 'person/receive',
        method: 'POST',
        headers: {
          Authorization: this.token
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
          alter(res.message)
        } else {
          console.log(res.data)
          this.requestList = res.data
        }
      })
    },
    async initPerson2() {
      await this.$http({
        url: 'person/affect',
        method: 'POST',
        headers: {
          Authorization: this.token
        },
        data: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
          alter(res.message)
        } else {
          console.log('page')
          console.log(res.data)
          this.listManage = res.data.dataList
          bus.$emit('share', this.listManage)
          this.createProject = res.data.createProject
          this.joinedProject = res.data.joinedProject
          this.totalCount = res.data.totalCount
          bus.$emit('shareTotal', this.totalCount)
        }
      })
    }
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
