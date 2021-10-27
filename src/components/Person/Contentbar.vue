<template>
  <div class="contentbar-container">
    <div class="contentbar">
      <ul>
        <router-link to="/person/manage">
          <li>
            <span class="glyphicon glyphicon-send"></span>
            我创建的
          </li>
        </router-link>
        <router-link to="/person/manage">
          <li>
            <span class="glyphicon glyphicon-hdd"></span>
            加入的项目
          </li>
        </router-link>
        <router-link to="/person/information">
          <li>
            <span class="glyphicon glyphicon-cog"></span>
            个人设置
          </li>
        </router-link>
        <hr style="background-color: #e5e5e5;" />
        <router-link to="/person/create">
          <li>
            <span class="glyphicon glyphicon-plus"></span>
            创建项目
          </li>
        </router-link>
        <router-link to="/person/privacy">
          <li>
            <span class="glyphicon glyphicon-thumbs-up"></span>
            关于隐私
          </li>
        </router-link>
        <router-link data-toggle="modal" data-target="#deleteUser" to="" @click="logout">
          <li>
            <span class="glyphicon glyphicon-off"></span>
            注销用户
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      console.log(90)
    }
  }
}
</script>

<style lang="less" scroped>
.contentbar-container {
  .contentbar {
    float: left;
    position: relative;
    border: 1px solid #ccc;
    margin-top: 100px;
    width: 300px;
    height: 800px;
    ul {
      a {
        text-decoration: none;
        font-size: 15px;
        font-weight: 700;
        color: #919191;
        li {
          padding-left: 50px;
          width: 240px;
          height: 100px;
          line-height: 100px;
          font-size: 14px;
          font-weight: 400;
          border-radius: 10px;
          color: #8c8c8c;
          span {
            margin-right: 8px;
          }
        }
        li:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
