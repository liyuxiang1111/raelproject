<template>
  <div class="longbar-container">
    <div class="subnav">
      <div class="sub-index">
        <ul class="sub-top">
          <router-link to="" data-toggle="modal" data-target="#writeMycontent">
            <li class="glyphicon glyphicon-envelope"></li>
            <p>去投递</p>
          </router-link>

          <router-link to="" data-toggle="modal" data-target="#dontJoin">
            <li class="glyphicon glyphicon-envelope"></li>
            <p>去投递</p>
          </router-link>

          <router-link to="" data-toggle="modal" data-target="#postResource">
            <li class="glyphicon glyphicon-envelope"></li>
            <p>去上传</p>
          </router-link>

          <router-link to="">
            <li class="glyphicon glyphicon-time"></li>
            <p>已投递</p>
          </router-link>
        </ul>
        <ul class="sub-button">
          <router-link to="">
            <li class="glyphicon glyphicon-chevron-up"></li>
          </router-link>

          <router-link to="">
            <li>反馈</li>
          </router-link>

          <router-link to="" data-toggle="modal" data-target="#closedProject">
            <li>结束项目</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
