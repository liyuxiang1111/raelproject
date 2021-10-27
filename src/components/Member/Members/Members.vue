<template>
  <div class="members-container">
    <div v-if="false" class="container">
      <h2 style="color:red;height:200px">
        你没有员工！！！！
      </h2>
    </div>
    <div v-else class="result-main container">
      <h2>成员列表</h2>
      <ul>
        <li class="member-simple">
          <div class="member-img">
            <img :src="imag" class="img-circle" />
          </div>
          <div class="member-main">
            <div class="member-name">
              <div>名字:</div>
            </div>
            <div class="member-ziwu">
              <div>权限:</div>
            </div>
            <div class="member-function">
              <router-link to=""><span id="move" class="glyphicon glyphicon-minus"></span></router-link>
              <router-link to=""><span id="upAs" class="glyphicon glyphicon-arrow-up"></span></router-link>
              <router-link to=""><span id="doAs" class="glyphicon glyphicon-arrow-down"></span></router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imag: require(`@/assets/image/type_bg.png`)
    }
  }
}
</script>

<style lang="less" scopde>
.members-container {
  .result-main {
    margin-top: 50px;
    position: relative;
    height: 1000px;
    ul {
      .member-simple {
        position: relative;
        width: 1000px;
        height: 113px;
        background-color: #fff;
        margin-top: 50px;
        div {
          display: inline-block;
        }
        .member-img {
          img {
            height: 60px;
            width: 60px;
          }
        }
        .member-main {
          position: absolute;
          margin-top: 10px;
          margin-left: 10px;
          display: inline-block;
          .member-name {
            font-size: x-large;
            width: 400px;
            position: absolute;
            margin-top: 20px;
            margin-left: 100px;
          }
          .member-ziwu {
            position: absolute;
            font-size: large;
            width: 100px;
            margin-top: 30px;
            margin-left: 525px;
          }
          .member-function {
            width: 400px;
            position: absolute;
            left: 727px;
            top: 30px;
            a {
              font-size: large;
              display: inline-block;
              padding-left: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
