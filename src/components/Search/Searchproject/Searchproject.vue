<template>
  <div class="searchproject-container">
    <ul>
      <li class="project-simple" v-for="item in list" :key="item.projectId">
        <router-link :to="'/project/' + item.projectId">
          <div class="project-main">
            <div class="project-img">
              <a>
                <img :src="require('../../../assets/image/projectImg/' + item.projectImg)" />
              </a>
            </div>
            <div class="word-top">
              <div class="project-title">
                {{ item.projectName }}
              </div>
              <div class="project-head">
                {{ item.projectBody.projectContent }}
              </div>
            </div>
            <div class="word-button">
              <div class="visitNumber">创始人：{{ item.author.userName }}</div>
              <div class="projectType">{{ item.projectTypeName }}</div>
              <div class="projectPeopleNum">成员数量：{{ item.visitNumber }}</div>
            </div>
          </div>
          <div class="create-people">
            <div class="csr">创始人</div>
            <div><img :src="require(`../../../assets/image/userImg/` + item.author.userId + `.png`)" alt="" class="create-people-img img-circle" style="width:50px;height:50px" /></div>
            <div class="create-people-name">创始人名字：{{ item.author.userName }}</div>
            <div class="create-people-content">创始人简介：{{ item.author.userContent }}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list'],
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
      width: 1000px;
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
      .visitNumber {
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
    margin-left: 1056px;
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
      overflow: hidden;
    }
  }
}
</style>
