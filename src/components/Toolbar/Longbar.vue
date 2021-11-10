<template>
  <div class="longbar-container">
    <div class="subnav">
      <div class="sub-index">
        <ul class="sub-top">
          <router-link v-if="1" to="" data-toggle="modal" data-target="#writeMycontent" @click.native="send">
            <li @mousemove="show($event)" @mouseout="hide($event)" class="glyphicon glyphicon-envelope" title="去投递"></li>
            <p>去投递</p>
          </router-link>

          <router-link v-if="0" to="" data-toggle="modal" data-target="#dontJoin">
            <li @mousemove="show($event)" @mouseout="hide($event)" class="glyphicon glyphicon-envelope"></li>
            <p>去投递</p>
          </router-link>

          <router-link to="" data-toggle="modal" data-target="#postResource" @click.native="upload">
            <li @mousemove="show($event)" @mouseout="hide($event)" class="glyphicon glyphicon-envelope"></li>
            <p>去上传</p>
          </router-link>

          <router-link to="">
            <li @mousemove="show($event)" @mouseout="hide($event)" class="glyphicon glyphicon-time"></li>
            <p>已投递</p>
          </router-link>
        </ul>
        <ul class="sub-button">
          <router-link to="" @click.native="flush">
            <li class="glyphicon glyphicon-chevron-up"></li>
          </router-link>

          <router-link to="">
            <li>反馈</li>
          </router-link>

          <router-link to="" data-toggle="modal" data-target="#closedProject" @click.native="end">
            <li>结束项目</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/components/eventbus.js'
export default {
  data() {
    return {
      noSendModalList: {
        content: '你是创建者不可以加入这个项目!!!',
        btn: '确定'
      },
      sendModalList: {
        title: '投递',
        content: '投递内容',
        btn: '发送',
        flag: 6
      },
      endModalList: {
        title: '结束',
        content: '是否结束该项目',
        btn: '确定'
      },
      uploadModalList: {
        title: '上传',
        content: '请确定上传文件',
        btn: '上传',
        projectId: this.$route.params.projectid,
        flag: 5
      }
    }
  },
  props: ['memberAssionment', 'authorId', 'userId'],
  methods: {
    send() {
      if (this.authorId == this.userId) {
        alert('您是创建者不需要投递')
      } else {
        bus.$emit('shareToModal', this.sendModalList)
      }
    },
    upload() {
      if (this.memberAssionment >= 1) {
        bus.$emit('shareToModal', this.uploadModalList)
      } else {
        alert('您的权限不足')
      }
    },
    end() {
      if (this.memberAssionment == 2) {
        bus.$emit('shareToModal', this.endModalList)
      } else {
        alert('您的权限不足')
      }
    },
    flush() {},
    show(e) {
      e.currentTarget.nextElementSibling.style.display = 'block'
    },
    hide(e) {
      e.currentTarget.nextElementSibling.style.display = 'none'
    }
  }
}
</script>

<style lang="less" scoped>
.subnav {
  position: fixed;
  top: 49px;
  right: 0;
  background-color: #fff;
  box-shadow: -1px 0 8px rgba(0, 0, 0, 0.03);
  height: 100%;
  z-index: 2;
  .sub-index {
    width: 40px;
    height: 100%;
    float: left;
    position: relative;
    transition: 0.2s width;
    .sub-top {
      width: 100%;
      padding-top: 15px;
      text-align: center;
      a {
        text-decoration: none;
        transition: 0.2s width;
        text-align: center;
        width: 40px;
        height: 65px;
        display: block;
        li {
          display: block;
          position: relative;
          font-size: 12px;
          color: #9fa3b0;
          line-height: 14px;
        }
        p {
          margin-top: 10px;
          display: none;
        }
      }
      a:hover {
        width: 60px;
      }
    }
    .sub-button {
      position: absolute;
      text-align: center;
      width: 100%;
      top: 80%;
      a {
        text-decoration: none;
        transition: 0.2s width;
        text-align: center;
        width: 40px;
        height: 33px;
        display: block;
        li {
          display: block;
          position: relative;
          font-size: 12px;
          color: #9fa3b0;
          line-height: 14px;
        }
        p {
          margin-top: 10px;
          display: none;
        }
      }
    }
  }
  .sub-index:hover {
    width: 60px;
  }
}
</style>
