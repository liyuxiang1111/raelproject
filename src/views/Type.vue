<template>
  <div class="type-container">
    <Nav></Nav>
    <section>
      <div class="container-fluid">
        <div class="container type">
          <!-- 左侧的图片 -->
          <div class="type-img-position">
            <img class="type-img" style="display: inline-block;" :src="imag" />
          </div>
          <!-- 图片end -->
          <div class="type-main-position">
            <div class="type-main-title">
              <h2>{{ type.typeName }}</h2>
            </div>
            <div class="type-main-content">
              <p style="color:gray;">内容介绍 :</p>
              <div class="type-content">
                {{ type.description }}
              </div>
            </div>
          </div>
          <!-- 类型右侧的盒子 -->
          <!-- 类型右侧end -->
        </div>
      </div>
    </section>
    <div class="container type-project-main">
      <div>
        <h2>主要的项目</h2>
      </div>
      <Project v-if="true" :list="type.list"></Project>
      <h2 v-else style="color: #b1191a">该类型数据库中并没有对应的数据!!!</h2>
      <div class="pagebar-box">
        <Pagebar></Pagebar>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav/Personnav.vue'
import Project from '@/components/Search/Searchproject/Searchproject.vue'
import Footer from '@/components/Footer/Copyright.vue'
import Pagebar from '@/components/Pagebar/Pagebar.vue'
export default {
  created() {
    this.token = localStorage.getItem('Authorizatio')
    this.initrecommends()
  },
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      type: {
        description: '',
        list: [],
        typeImg: '',
        typeName: ''
      },
      imag: require(`@/assets/image/person_simple.jpg`),
      token: ''
    }
  },
  components: {
    Nav,
    Project,
    Footer,
    Pagebar
  },
  methods: {
    async initrecommends() {
      await this.$http({
        method: 'POST',
        url: '/type/' + this.$route.params.recommendid,
        headers: {
          Authorization: this.token
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
          alert(res.message)
        } else {
          console.log(res.data)
          this.type.list = res.data.projectList
          this.type.description = res.data.description
          this.type.typeImg = res.data.typeImg
          this.type.typeName = res.data.typeName
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.type-container {
  section {
    margin-top: 50px;
    .type {
      .type-img-position {
        position: absolute;
        margin-top: 50px;
        .type-img {
          width: 300px;
          height: 300px;
          border-radius: 50px;
        }
      }
      .type-main-position {
        position: absolute;
        margin-left: 350px;
        padding-top: 80px;
      }
      .type-main-content {
        position: relative;
        margin-top: 50px;
        margin-left: 50px;
        .type-content {
          color: #ccc;
          text-indent: 50px;
          position: relative;
          overflow: hidden;
          margin-top: 30px;
          width: 745px;
          height: 100px;
        }
      }
    }
  }
  .type-project-main {
    position: relative;
    background-color: rgb(255, 255, 255);
    margin-top: 400px;
    border: 1px solid black;
    height: 1000px;
    .pagebar-box {
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -160.5px;
    }
  }
}
</style>
