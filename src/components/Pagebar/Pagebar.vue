<template>
  <div class="pagebar-container">
    <div class="pagebar-box">
      <ul>
        <router-link to="">
          <li class="glyphicon glyphicon-backward"></li>
        </router-link>
        <router-link to="">
          <li class="page">1</li>
        </router-link>
        <router-link to="">
          <li class="page">2</li>
        </router-link>
        <router-link to="">
          <li class="page">3</li>
        </router-link>
        <router-link to="">
          <li class="page">4</li>
        </router-link>
        <router-link to="">
          <li class="glyphicon glyphicon-chevron-right"></li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.pagebar-container {
  .pagebar-box {
    float: left;
    width: 350px;
    height: 50px;
    line-height: 50px;
    ul {
      a {
        float: left;
        .page {
          float: left;
          width: 30px;
          height: 30px;
          border: 1px solid pink;
          margin: 10px;
          text-align: center;
          line-height: 30px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.4s;
        }
        .page:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
