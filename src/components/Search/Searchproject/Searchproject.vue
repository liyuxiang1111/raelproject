<template>
  <div class="searchproject-container">
    <ul>
      <li class="project-simple">
        <div class="project-main">
          <div class="project-img">
            <a>
              <img :src="imag" />
            </a>
          </div>
          <div class="word-top">
            <div class="project-title">
              project.projectName
            </div>
            <div class="project-head">
              project.projectHead
            </div>
          </div>
          <div class="word-button">
            <div class="createName">project.userId</div>
            <div class="projectType">project.projectType</div>
            <div class="projectPeopleNum">人员数量</div>
          </div>
        </div>
        <div class="create-people">
          <div class="csr">创始人</div>
          <div><img src="" alt="" class="create-people-img img-circle" /></div>
          <div class="create-people-name">创始人名字</div>
          <div class="create-people-content">创始人简介</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imag: require(`@/assets/image/person_simple.jpg`)
    }
  }
}
</script>

<style lang="less" scoped>
.searchproject-container {
  transition: all 0.2s;
  ul {
    li {
      background-color: rgb(230, 228, 228);
      margin-top: 20px;
      float: left;
      width: 800px;
      height: 200px;
    }
  }
  .project-main {
    .project-img {
      float: left;
      a {
        img {
          float: left;
          margin-left: 36px;
          margin-top: 20px;
          width: 100px;
          height: 100px;
        }
      }
    }
    .project-title {
      width: 600px;
      height: 20px;
      font-size: large;
      font-weight: 600;
      float: left;
      margin-left: 20px;
      margin-top: 20px;
    }
    .project-head {
      float: left;
      width: 600px;
      height: 66px;
      margin-top: 20px;
      margin-left: 40px;
      font-size: medium;
      overflow: hidden;
    }
    .word-button {
      .createName {
        float: left;
        width: 200px;
      }
      .projectType {
        float: left;
        width: 200px;
      }
      .projectPeopleNum {
        float: left;
        width: 200px;
      }
      float: left;
      padding-top: 30px;
      padding-left: 30px;
      div {
        margin-left: 20px;
      }
    }
  }
  .create-people {
    width: 200px;
    height: 200px;
    border: 1px solid rgb(26, 106, 197);
    position: absolute;
    margin-left: 850px;
    .csr {
      position: absolute;
      margin-top: 9px;
      margin-left: 84px;
      width: 50px;
      height: 30px;
    }
    .create-people-name {
      margin-top: 11px;
      margin-left: 10px;
    }
    .create-people-img {
      margin-left: 72px;
      margin-top: 41px;
    }
    .create-people-content {
      width: 150px;
      height: 60px;
      margin-left: 10px;
      margin-top: 15px;
    }
  }
}
</style>
