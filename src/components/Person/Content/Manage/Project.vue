<template>
  <div class="project-container">
    <div class="project-box">
      <div class="project-head">
        <span>{{ project.projectName }}</span>
        <div>发布于{{ project.createTime }}</div>
      </div>
      <div class="project-introduce">{{ project.projectHead }}</div>
      <div class="visitNum">
        参与人数12人
      </div>
      <div class="button-container">
        <div class="button-box">
          <li>
            <router-link to=""><span class="glyphicon glyphicon-edit">编辑</span></router-link>
          </li>
          <li>
            <router-link to="/project"><span class="glyphicon glyphicon-book">管理</span></router-link>
          </li>
          <li>
            <router-link to="/member"><span class="glyphicon glyphicon-user">成员</span></router-link>
          </li>
          <li>
            <router-link to=""><span class="glyphicon glyphicon-minus-sign">删除</span></router-link>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {
        projectName: '项目名称',
        createTime: '发布时间',
        projectHead: '项目题目',
        projectId: '项目id'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.project-container {
  .project-box {
    float: left;
    width: 768px;
    height: 206px;
    padding: 62px 0;
    border-bottom: 1px solid #ebebeb;
    div {
      height: 25px;
      padding: 0;
      line-height: 25px;
    }
    .project-head {
      span {
        float: left;
        height: 25px;
        text-align: center;
        line-height: 25px;
        margin-right: 10px;
        padding: 0 5px;
        background-color: skyblue;
        color: blue;
        border-radius: 5px;
      }
      div {
        float: right;
        margin-right: 20px;
        height: 25px;
        padding: 0;
        line-height: 25px;
      }
    }
    .project-introduce {
      margin: 20px 5px;
      width: 700px;
      overflow: hidden;
      font-size: 12px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .visitNum {
      font-size: 12px;
      float: left;
    }
    .button-container {
      float: right;
      margin-right: 20px;
      .button-box {
        li {
          float: left;
          margin-left: 20px;
        }
        a {
          display: block;
          text-align: center;
          line-height: 30px;
          width: 80px;
          height: 30px;
          padding: 0 12px;
          border: 1px solid #8590a6;
          border-radius: 10px;
          text-decoration: none;
          color: #8590a6;
        }
        a:hover {
          background-color: #f8f8fa;
        }
        span {
          margin-bottom: 8px;
          margin-right: 7px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
