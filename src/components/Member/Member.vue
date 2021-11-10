<template>
  <div class="member-container">
    <Nav></Nav>
    <section class="member-head container">
      <div class="container-fluid">
        <div class="container type">
          <!-- 左侧的图片 -->
          <div class="type-img-position">
            <img class="type-img" :src="imag" alt="" />
          </div>
          <!-- 图片end -->
          <div class="type-main-position">
            <div class="type-main-title">
              <h2>{{ member.projectName }}</h2>
            </div>
            {{ userLabel }}
            <div class="type-main-content">
              <p style="color:gray;">项目内容：</p>
              <div class="type-content">
                {{ projectContent }}
              </div>
            </div>
          </div>
          <!-- 类型右侧的盒子 -->
          <!-- 类型右侧end -->
        </div>
      </div>
    </section>
    <Members @imformation="getInformation"></Members>
    <Footer></Footer>
    <Modal></Modal>
  </div>
</template>

<script>
import Nav from '@/components/Nav/Personnav.vue'
import Members from '@/components/Member/Members/Members.vue'
import Footer from '@/components/Footer/Copyright.vue'
import Modal from '@/components/Modal/Modal.vue'
export default {
  data() {
    return {
      imag: '',
      member: {},
      userLabel: '',
      projectContent: ''
    }
  },
  components: {
    Nav,
    Members,
    Footer,
    Modal
  },
  methods: {
    getInformation(val) {
      this.member = val
      this.userLabel = this.member.author.userLabel
      this.projectContent = this.member.projectBody.projectContent
      this.imag = require(`../../assets/image/projectImg/` + this.member.projectImg)
    }
  }
}
</script>

<style lang="less" scoped>
.member-head {
  position: relative;
  top: 0;
  height: 400px;
  margin-top: 100px;
  .type-img-position {
    position: absolute;
    .type-img {
      display: inline-block;
      width: 300px;
      height: 300px;
      border-radius: 50px;
    }
  }
  .type-main-position {
    position: absolute;
    margin-left: 350px;
    .type-main-content {
      position: relative;
      margin-top: 50px;
      margin-left: 50px;
    }
  }
}
</style>
