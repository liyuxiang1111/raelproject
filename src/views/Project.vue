<template>
  <div class="project-container">
    <Nav></Nav>
    <Modal></Modal>
    <div class="main-box container">
      <div class="row">
        <div class="main col-md-7">
          <!-- 标题区域 -->
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-body">
                <h1 class="text-title">{{ projectObject.projectName }}</h1>
                <div class="row text-information">
                  <div class="project-type col-md-3">
                    <button type="button" class="btn btn-info">
                      {{ projectType }}
                    </button>
                  </div>
                  <div class="writer col-md-offset-0 col-md-1">
                    <router-link to="">{{ userName }} </router-link>
                  </div>
                  <div class="time-visited col-md-offset-3 col-md-2 ">
                    <span class="glyphicon glyphicon-eye-open eye"></span>
                    {{ projectObject.visitNumber }}
                  </div>
                  <div class="time-create col-md-offset-10">{{ projectObject.createTime }}</div>
                </div>
              </div>
              <!-- 简介 -->
              <div class="panel-footer">
                <div class="text-small"></div>
              </div>
              <!-- 简介end -->
            </div>
          </div>
          <!-- 标题区域end -->

          <div class="container">
            <div class="head-position">
              <h2>项目的简介:</h2>
              <hr />
              <div class="project-head">
                <p v-if="true">{{ projectContent }}</p>
                <p v-else>这个组长很懒没有写简介</p>
              </div>
            </div>
          </div>
          <!-- 主体区域 -->
          <h2 v-if="memberAssionment == -1 && authorId != userId ? true : false" style="color: red;margin: 50px">抱歉你没有对应的权限</h2>

          <div v-else class="container">
            <div class="filedList">
              <h3 v-if="resourceList.length === 0 ? true : false" style="margin-left: 350px;margin-top: 68px">你没有存数据到数据库中!!</h3>
              <ul v-for="item in resourceList" :key="item.docId" v-else>
                <router-link to="">
                  <li @click="download($event, item.resourceName, item.projectId)" class="simple_resource">
                    <div class="fildFont glyphicon glyphicon-save-file"></div>
                    <div class="fildName">文件名：{{ item.resourceName }}</div>
                    <div class="fildUserName">用户id：{{ item.userId }}</div>
                    <div class="fildTime">上传时间：{{ item.postTime }}</div>
                    <div class="clickNum">下载次数：{{ item.uploadNum }}</div>
                  </li>
                </router-link>
                <router-link to="" @click.native="remove($event, item.docId, item.userId, item.resourceName)">
                  <span class="glyphicon glyphicon-minus"></span>
                </router-link>
              </ul>
            </div>
            <div class="text-main">
              <p v-html="projectHtml" id="projectContent"></p>
            </div>
            <div class="map-img">
              <h2>地点：</h2>
              <img :src="provinceImag" style="width:1140px" />
            </div>
          </div>
          <!-- 主体区域end -->
        </div>
      </div>
    </div>
    <Longbar :memberAssionment="memberAssionment" :authorId="authorId" :userId="userId"></Longbar>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav/Personnav.vue'
import Longbar from '@/components/Toolbar/Longbar.vue'
import Footer from '@/components/Footer/Copyright.vue'
import Modal from '@/components/Modal/Modal.vue'
import bus from '@/components/eventbus.js'
export default {
  created() {
    this.token = localStorage.getItem('Authorizatio')
    this.initrecommends()
    this.initNavBar()
  },
  data() {
    return {
      projectObject: {},
      token: '',
      userName: '',
      userId: '',
      authorId: '',
      projectContent: '',
      projectType: '',
      resourceList: [],
      province: '',
      projectHtml: '',
      memberAssionment: '',
      modalList: {
        title: '文件删除',
        content: '是否删除该文件',
        btn: '确定',
        flag: 4
      },
      provinceImag: ''
    }
  },
  components: {
    Nav,
    Footer,
    Longbar,
    Modal
  },
  methods: {
    async initrecommends() {
      await this.$http({
        method: 'POST',
        url: 'project/view/' + this.$route.params.projectid,
        headers: {
          Authorization: this.token
        }
      }).then(({ data: res }) => {
        console.log(res)
        this.projectObject = res.data
        this.userName = res.data.author.userName
        this.authorId = res.data.author.userId
        console.log('authorId')
        console.log(this.authorId)
        this.projectContent = res.data.projectBody.projectContent
        this.projectHtml = res.data.projectBody.projectHtml
        this.provinceImag = require(`../assets/image/province/` + res.data.province + `.png`)
        this.projectType = res.data.author.userLabel
        console.log(this.projectObject)
        this.resourceList = res.data.resourceList
        this.province = res.data.province
        console.log(this.resourceList.length)
        this.memberAssionment = res.data.memberAssionment
        console.log('memberAssionment')
        console.log(this.memberAssionment)
      })
    },
    async initNavBar() {
      await this.$http({
        method: 'GET',
        url: '/user/currentUser',
        headers: {
          Authorization: this.token
        }
      }).then(({ data: res }) => {
        console.log('nav')
        console.log(res.data)
        this.userName = res.data.userName
        console.log(this.userName)
        this.userId = res.data.id
        console.log('userID')
        console.log(this.userId)
      })
    },
    remove(e, docId, userId, resourceName) {
      var set = { docId: docId, userId: userId, resourceName: resourceName, projectId: this.$route.params.projectid }
      bus.$emit('shareToModal', this.modalList)
      bus.$emit('toModalSet', set)
    },
    download(e, name, projectId) {
      window.location.href = 'http://127.0.0.1:8888/download?name=' + name + '&projectId=' + projectId
    }
  }
}
</script>

<style lang="less" scoped>
.project-container {
  .main-box {
    margin-top: 100px;
    .simple_resource {
      height: 40px;
      position: relative;
      margin-top: 10px;
      border: 1px solid rgb(225, 228, 232);
      div {
        line-height: 40px;
        position: absolute;
      }
      .fildFont {
        margin-left: 25px;
        font-size: larger;
      }
      .fildName {
        margin-left: 200px;
      }
      .fildUserName {
        margin-left: 500px;
      }
      .fildTime {
        margin-left: 800px;
      }
      .clickNum {
        margin-left: 1000px;
      }
    }
    .simple_resource:hover {
      background-color: rgb(246, 248, 250);
    }
  }
}
</style>
