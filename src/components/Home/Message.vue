<template>
  <div class="message-container">
    <div class="container">
      <div class="recommend">
        <div class="recommend-head">
          相关资讯
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title" style="color: #a94442;margin-left: 50px;">关于创业的十个小知识<span class="label label-info" style="margin-left: 20px;">推荐</span></h3>
          </div>
          <div class="panel-body">
            <p style="display: inline-block;color: black;">
              在创业的道路上，犹如万人过独木桥，只有一小部分的人能到达终点。创业艰辛，但还是有成功的机会。想要做个出色的生意人,具备活泛的商业头脑是首要的。我们来教你几招!
            </p>
            <div class="move-button">
              <router-link to="" style="color: #ffffff;text-decoration: none;">查看详情</router-link>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title" style="color: #a94442;margin-left: 50px;">互联网创业如何规避风险<span class="label label-info" style="margin-left: 20px;">推荐</span></h3>
          </div>
          <div class="panel-body">
            <p style="display: inline-block;color: black;">随着互联网和电子商务的快速发展，大学生互联网创业既面临巨大的机遇又面临一定的挑战。我们一起来看看创业如何规避风险</p>
            <div class="move-button">
              <router-link to="" style="color: #ffffff;text-decoration: none;">查看详情</router-link>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title" style="color: #a94442;margin-left: 50px;">没有创业经验的人应该如何创业？<span class="label label-info" style="margin-left: 20px;">推荐</span></h3>
          </div>
          <div class="panel-body">
            <p style="display: inline-block;color: black;">
              很多人都想白手起家创业，也经常有人问没有经验怎么创业，其实白手起家或者没有经验也是有可能创业成功的，关键在于创业者是否能够不断地提升自己。
            </p>
            <div class="move-button">
              <router-link to="" style="color: #ffffff;text-decoration: none;">查看详情</router-link>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title" style="color: #a94442;margin-left: 50px;">创业失败的原因有哪些？<span class="label label-info" style="margin-left: 20px;">推荐</span></h3>
          </div>
          <div class="panel-body">
            <p style="display: inline-block;color: black;">
              现在，不管是年轻人还是中年人，都想着自己去创业。今天，我们所处的这个时代，让我们看到了很多创业的机会，那么究竟创业失败的原因有哪些呢?创业者需要注意什么?
            </p>
            <div class="move-button">
              <router-link to="" style="color: #ffffff;text-decoration: none;">查看详情</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.recommend {
  margin-top: 60px;
  .recommend-head {
    height: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 700;
    font-size: large;
  }
  .move_button {
    background-color: rgb(37, 176, 243);
    text-align: center;
    line-height: 21px;
    float: right;
    display: inline-block;
    width: 64px;
    height: 21px;
    border: 1px solid #666;
    border-radius: 10px;
    transition: all 0.5s;
  }
  .move_button:hover {
    width: 128px;
    height: 42px;
    line-height: 42px;
  }
}
</style>
