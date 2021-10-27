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
              <h2>智腾教育</h2>
            </div>
            凤凰
            <div class="type-main-content">
              <p style="color:gray;">内容介绍 :</p>
              <div class="type-content">
                project.projectHead
              </div>
            </div>
          </div>
          <!-- 类型右侧的盒子 -->
          <!-- 类型右侧end -->
        </div>
      </div>
    </section>
    <Members></Members>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav/Personnav.vue'
import Members from '@/components/Member/Members/Members.vue'
import Footer from '@/components/Footer/Copyright.vue'
export default {
  data() {
    return {
      imag: require(`@/assets/image/type_bg.png`)
    }
  },
  components: {
    Nav,
    Members,
    Footer
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
