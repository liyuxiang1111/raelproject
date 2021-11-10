<template>
  <div class="modal-container">
    <div ref="modal" class="modal-box">
      <div class="modal-header">
        <p class="title">{{ modalList.title }}</p>
        <p @click="close" class="close">x</p>
      </div>
      <div class="modal_content">
        {{ modalList.content }}
        <textarea v-model="msg" ref="text" v-if="modalList.flag == 6 ? true : false"> </textarea>
        <!-- 上传文件条开始 -->
        <div v-if="modalList.flag == 5 ? true : false">
          <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:8888/upload"
            :on-success="handleAvatarFileSuccess"
            :on-error="handleAvatarFileError"
            :before-upload="beforeAvatarFileUpload"
            :data="{ projectId: this.projectId }"
            :headers="Authorization"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div>
        <!-- 上传文件条结束 -->
      </div>
      <div class="modal-footer">
        <button @click="close" class="close btn">关闭</button>
        <button v-if="modalList.flag == 5 ? false : true" @click="clickbtn($event, modalList.flag)" class="close btn">{{ modalList.btn }}</button>
      </div>
    </div>
    <div ref="mask" class="mask"></div>
  </div>
</template>

<script>
import bus from '@/components/eventbus.js'
export default {
  created() {
    this.Authorization.Authorization = localStorage.getItem('Authorizatio')
    bus.$on('shareToModal', val => {
      this.modalList = val
      if (this.modalList.flag == 5) {
        this.projectId = this.modalList.projectId
      }
    })
    bus.$on('toModalSet', val => {
      this.modalSet = val
      console.log(val)
    })
  },
  beforeUpdate() {
    this.show()
  },
  data() {
    return {
      modalList: [],
      modalSet: {},
      projectId: '',
      Authorization: {
        Authorization: ''
      },
      msg: ''
    }
  },
  methods: {
    show() {
      this.$refs.modal.style.display = 'block'
      this.$refs.mask.style.display = 'block'
    },
    close() {
      this.$refs.modal.style.display = 'none'
      this.$refs.mask.style.display = 'none'
      this.$router.go(0)
    },
    async deleteFile() {
      this.$http({
        url: '/project/resource',
        method: 'delete',
        headers: {
          Authorization: this.Authorization.Authorization
        },
        data: {
          projectId: this.modalSet.projectId,
          resourceName: this.modalSet.resourceName,
          docId: this.modalSet.docId
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
          console.log(res)
        } else {
          console.log(res.data)
        }
      })
    },
    async move() {
      await this.$http({
        url: '/member/remove',
        method: 'POST',
        headers: {
          memberId: this.modalList.memberId,
          Authorizatio: this.Authorization.Authorization
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
          alert(res.msg)
        } else {
          this.$router.go(0)
        }
      })
    },
    async send() {
      console.log(this.$route.params.projectid)
      console.log('123131313')
      console.log(this.msg)
      console.log(this.Authorization.Authorization)
      await this.$http({
        url: '/member/join',
        method: 'POST',
        headers: {
          Authorization: this.Authorization.Authorization
        },
        data: {
          projectId: this.$route.params.projectid,
          userIntroduction: this.msg
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
          alert(res.msg)
        } else {
          this.$router.go(0)
        }
      })
    },
    async delete() {
      await this.$http({
        url: '/project/delete',
        method: 'delete',
        headers: {
          projectId: this.modalList.projectId,
          Authorization: this.Authorization.Authorization
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
          console.log(res)
        } else {
          console.log('ok')
          console.log(res.data)
        }
      })
    },
    clickbtn(e, n) {
      //注销
      if (n === 1) {
        console.log('注销')
        localStorage.removeItem('Authorizatio')
        this.$router.push('/login')
      } else if (n == 2) {
        //删除成员
        this.move()
      } else if (n == 3) {
        //删除个人页面的项目
        console.log('删除个人主页的项目')
        this.delete()
      } else if (n == 4) {
        //删除文件
        console.log(this.modalSet.projectId)
        console.log('删除文件')
        this.deleteFile()
      } else if (n == 6) {
        //加入
        this.send()
      }
    },
    //上传文件
    handleAvatarFileError: function(err, file) {
      alert('文件上传走丢了。。')
    },
    handleAvatarFileSuccess: function(res, file) {
      this.$message.success('上传文件成功！')
    },
    beforeAvatarFileUpload: function(file) {
      //限制的上限为10M
      const isLt10M = file.size / 1024 / 1024 < 10

      if (!isLt10M) {
        this.$message.error('上传文件大小不能超过 10MB!')
      }
      return isLt10M
    }
  }
}
</script>

<style lang="less" scoped>
.toggleModal {
  padding: 10px 20px;
  color: white;
  background: #409eff;
  border: none;
  box-shadow: 2px 3px 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: inherit;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: none;
}
.modal-box {
  position: fixed;
  top: 170px;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: #fff;
  box-shadow: 2px 3px 20px rgba(0, 0, 0, 0.2);
  z-index: 120;
  display: none;
  .modal-header {
    height: 50px;
    border-bottom: 1px solid #f5f5f5;
    padding: 0 15px;
    p {
      line-height: 50px;
      display: inline-block;
    }
    .title {
      font-size: 18px;
      color: #333;
    }
    .close {
      float: right;
      font-size: 26px;
      margin-top: -2px;
      color: #9c9fa4;
      cursor: default;
    }
  }
  .modal_content {
    min-height: 100px;
    border-radius: 0;
  }
  .modal-footer {
    border-top: 1px solid #f5f5f5;
    padding: 15px;
    text-align: right;
    .btn {
      margin-left: 15px;
      padding: 0 20px;
      height: 36px;
      line-height: 36px;
      color: white;
      background: #409eff;
      border: none;
    }
  }
}
</style>
