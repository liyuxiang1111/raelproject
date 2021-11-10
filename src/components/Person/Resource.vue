<template>
  <div class="resource-container">
    <div ref="resource" class="resource-box">
      <div class="count">
        <h2>资源总览</h2>
        <ul>
          <li>我加入的</li>
          <li>我创建的</li>
          <li>我参加的</li>
        </ul>
        <ul>
          <li>{{ totalCount }}</li>
          <li>{{ createProject }}</li>
          <li>{{ joinedProject }}</li>
        </ul>
        <div class="count-button">
          <button type="button" class="btn btn-info" @click="create">创建项目</button>
          <button type="button" class="btn btn-info" @click="search">资源搜索</button>
        </div>
      </div>
      <div class="chart-box">
        <h2>{{ name }}</h2>
        <img :src="userimag" class="fan-diagram" alt="" />
      </div>
      <div class="newflash">
        <div style="height:50px;padding-top: 15px">
          <h2 style="border-bottom: 1px solid #dedede;">请求快讯</h2>
        </div>
        <swiper :options="swiperOption" class="swiper-container swiper-pagination1" ref="mySwiper">
          <!-- 添加的图片 -->
          <swiper-slide v-for="item in requestList" :key="item.requestId">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" role="listbox" id="submit_style" style="position: relative;height: 170px;margin-top: 25px;">
                <div class="item active">
                  <img :src="require('../../assets/image/userImg/' + item.userId + '.png')" alt="" style="height:100px" />
                  <div class="userName">
                    {{ item.userName }}
                  </div>
                  <div class="userSex">
                    {{ item.userLargestStudy }}
                  </div>
                  <div class="join_project">
                    <router-link to="">
                      申请的项目
                    </router-link>
                    <router-link to="" style="margin-left:30px">
                      查看他的申请
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- 指示点 -->
          <div class="swiper-pagination" slot="pagination"></div>

          <!-- 左右导航栏 -->
          <div v-if="requestList.length == 1 ? false : true" class="swiper-button-prev" slot="button-prev"></div>
          <div v-if="requestList.length == 1 ? false : true" class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="content-button" @click="hide">
      <span class="change_font glyphicon glyphicon-hand-down real_font"> </span>
    </div>
  </div>
</template>

<script>
import bus from '@/components/eventbus.js'
require('@/assets/css/swiper.css')
import '@/assets/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['requestList', 'createProject', 'joinedProject', 'totalCount'],
  created() {
    bus.$on('shareName', val => {
      this.name = val
    })
    bus.$on('shareId', val => {
      this.userimag = require(`../../assets/image/userImg/` + val + `.png`)
    })
  },
  methods: {
    create() {
      this.$router.push('/person/create')
    },
    search() {
      this.$router.push('/search')
    },
    hide() {
      if (this.flag) {
        this.$refs.resource.style.display = 'none'
        this.flag = false
      } else {
        this.$refs.resource.style.display = 'block'
        this.flag = true
      }
    }
  },
  data() {
    return {
      flag: true,
      name: '',
      userimag: '',
      //轮播图
      imag1: require(`@/assets/image/slider-image1.jpg`),
      imag2: require(`@/assets/image/slider-image2.jpg`),
      imag3: require(`@/assets/image/slider-image3.jpg`),
      swiperOption: {
        pagination: '.swiper-pagination1',
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        spaceBetween: 0,
        onSlideChangeEnd: swiper => {
          //放swiper的回调方法
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        },
        //左右导航栏
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        //自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        //指示点
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        //循环
        loop: true
      },
      //定义swiper对象
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      //当Vue时实例被挂载时，调用slideTo方法
      mounted() {
        this.swiper.slideTo(0, 0, false)
      }
      //轮播图结束
    }
  },
  components: {
    //轮播图组件
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scroped>
.resource-container {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  .resource-box {
    padding: 0 15px;
    height: 261px;
    border: 1px solid #e0e2e2;
    border-radius: 0 0 10px 10px;
    .count {
      float: left;
      padding-top: 15px;
      width: 570px;
      height: 250px;
      h2 {
        border-bottom: 1px solid #dedede;
      }
      ul {
        height: 50px;
        line-height: 50px;
        li {
          float: left;
          font-size: 14px;
          font-weight: 700;
          color: #5bc0de;
          width: 150px;
          margin-right: 40px;
        }
      }
      .count-button {
        position: relative;
        height: 50px;
        button:first-of-type {
          position: absolute;
          left: 0;
          top: 25px;
          margin-top: -15px;
        }
        button:last-of-type {
          position: absolute;
          left: 100px;
          top: 25px;
          margin-top: -15px;
        }
      }
    }
    .chart-box {
      float: left;
      width: 298px;
      height: 250px;
      padding-top: 15px;
      h2 {
        border-bottom: 1px solid #dedede;
      }
      .fan-diagram {
        width: 140px;
        height: 140px;
        border-radius: 50%;
      }
    }
    .newflash {
      float: right;
      padding: 0 0 0 10px;
      height: 260px;
      width: 300px;
      .new-header {
        padding: 0 14px 0 14px;
        height: 60px;
        border-bottom: 1px solid #e0e2e2;
        ul {
          li {
            float: left;
          }
        }
      }
    }
  }
  .new-header li {
    margin-right: 30px;
    line-height: 38px;
    font-size: 15px;
    font-weight: 900;
    color: #676767;
  }
  .change_turn {
    transform: rotate(-180deg) !important;
  }
  #left {
    color: #007ccb;
  }
  #right {
    color: #007ccb;
    margin-left: 170px;
  }
  #button_ol > .active {
    background-color: rgb(49, 140, 175);
  }
  #button_ol > li {
    border: 1px solid #cccccc;
  }
  .move-position {
    position: relative;
    margin-top: 8px;
  }
  .item {
    position: absolute;
    left: 200px;
    display: block;
    width: 270px;
    margin-left: 20px;
    margin-top: 20px;
    height: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    img {
      position: absolute;
      display: inline-block;
      width: 100px;
      height: 180px;
    }
    .userName {
      position: absolute;
      margin-left: 150px;
    }

    .userSex {
      position: absolute;
      margin-left: 150px;
      margin-top: 30px;
    }

    .join_project {
      position: absolute;
      margin-left: 20px;
      margin-top: 80px;
    }

    .user_main {
      position: absolute;
      margin-left: 200px;
      margin-top: 80px;
    }
  }

  .carousel-control {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 15%;
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    background-color: rgba(0, 0, 0, 0);
    filter: alpha(opacity=50);
    opacity: 0.5;
  }
  .content-button {
    position: absolute;
    left: 50%;
    margin-left: -50px;
    width: 100px;
    height: 20px;
    text-align: center;
    cursor: pointer;
    background-color: #ebebeb;
  }
  .content-button::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
    border-left: 10px solid #ffffff;
  }
  .content-button::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid #ffffff;
    border-bottom: 10px solid #ffffff;
    border-left: 10px solid transparent;
  }
}
</style>
