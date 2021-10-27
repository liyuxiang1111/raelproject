<template>
  <div class="resource-container">
    <div class="resource-box">
      <div class="count">
        <h2>资源总览</h2>
        <ul>
          <li>我加入的</li>
          <li>待完成的</li>
          <li>我参加的</li>
        </ul>
        <ul>
          <li>2</li>
          <li>2</li>
          <li>2</li>
        </ul>
        <div class="count-button">
          <button type="button" class="btn btn-info">创建项目</button>
          <button type="button" class="btn btn-info">资源搜索</button>
        </div>
      </div>
      <div class="chart-box">
        <h2>用户名称</h2>
        <img :src="imag" class="fan-diagram" alt="" />
      </div>
      <div class="newflash">
        <div class="new-header">
          <ul>
            <li class="fl">综合</li>
            <li class="fl">公告</li>
            <li class="fl">社区</li>
            <li class="fl">消息</li>
          </ul>
        </div>
        <div class="move-position">
          <a id="left" class="carousel-control glyphicon glyphicon-chevron-left" v-on:click="prev()"></a>
          <a id="right" class="carousel-control glyphicon glyphicon-chevron-right" v-on:click="next()"></a>
        </div>
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner" role="listbox" id="submit_style" style="position: relative;height: 170px;margin-top: 25px;">
            <div class="item active" v-for="item in requestList" :key="item.id">
              <img src="request.image" />
              <div class="userName">
                {{ item.userName }}
              </div>
              <div class="userSex">
                {{ item.userSex }}
              </div>
              <div class="join_project">
                <a href="project?actionName=showresource&projectId=${list.projectId}">
                  申请的项目
                </a>
                <a href="javascript:;" data-toggle="modal" data-target="#${list.requestId}">
                  查看他的申请
                </a>
              </div>
            </div>
            <ol id="button_ol" class="carousel-indicators" style="position: relative;">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="content-button">
      <span class="change_font glyphicon glyphicon-hand-down real_font"> </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.index++
      if (this.index >= this.requestList) {
        this.index = 0
      }
    },
    prev() {
      this.index--
      if (this.index < 0) {
        this.index = this.requestList
      }
    }
  },
  name: 'Resource',
  data() {
    return {
      imag: require(`@/assets/image/person_simple.jpg`),
      requestList: [
        {
          userName: '李四',
          userSex: '男'
        },
        {
          userName: '张三',
          suerSex: '女'
        }
      ]
    }
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
      height: 300px;
      border-bottom: 1px solid #e0e2e2;
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
