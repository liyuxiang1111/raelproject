<template>
  <div class="rank-container">
    <div class="container" id="rank-list">
      <div class="row">
        <h1 style="margin-left: 530px;">排行榜</h1>
      </div>
      <div class="col-lg-6">
        <div class="panel panel-primary">
          <!-- Default panel contents -->
          <div class="panel-heading">最多访问次数的项目</div>
          <!-- Table -->
          <table class="table">
            <thead>
              <tr>
                <th class="col-lg-4" style="padding-left: 35px;">排名</th>
                <th class="col-lg-4">项目名</th>
                <th class="col-lg-4">访问次数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="padding-top: 30px; padding-left: 40px;">1</th>
                <th>
                  <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img class="img-circle" src="" alt="" />
                      </a>
                    </div>
                    <div class="media-body" style="padding-top: 5px;">
                      <h4 class="media-heading"><router-link to="">idea</router-link></h4>
                      idea模块
                    </div>
                  </div>
                </th>
                <th style="padding-top: 25px; padding-left: 10px;">23</th>
              </tr>
              <tr>
                <th style="padding-top: 30px; padding-left: 40px;">2</th>
                <th>
                  <div class="media">
                    <div class="media-left">
                      <router-link to="">
                        <img class="img-circle" src="" alt="" />
                      </router-link>
                    </div>
                    <div class="media-body" style="padding-top: 5px;">
                      <h4 class="media-heading"><router-link to="">vscode</router-link></h4>
                      vscode模块
                    </div>
                  </div>
                </th>
                <th style="padding-top: 25px; padding-left: 10px;">15</th>
              </tr>
              <tr>
                <th style="padding-top: 30px; padding-left: 40px;">3</th>
                <th>
                  <div class="media">
                    <div class="media-left">
                      <router-link to="">
                        <img class="img-circle" src="" alt="..." />
                      </router-link>
                    </div>
                    <div class="media-body" style="padding-top: 5px;">
                      <h4 class="media-heading"><router-link to="">navicate</router-link></h4>
                      navicate模块
                    </div>
                  </div>
                </th>
                <th style="padding-top: 25px; padding-left: 10px;">10</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="panel panel-success">
          <!-- Default panel contents -->
          <div class="panel-heading">最多创建项目的用户</div>
          <!-- Table -->
          <table class="table">
            <thead>
              <tr>
                <th class="col-lg-4" style="padding-left: 35px;">排名</th>
                <th class="col-lg-4">用户名</th>
                <th class="col-lg-4">创建次数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="padding-top: 30px; padding-left: 40px;">1</th>
                <th>
                  <div class="media">
                    <div class="media-left">
                      <router-link to="">
                        <img class="img-circle" src="" alt="..." />
                      </router-link>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading" style="padding-top: 22px; padding-left: 5px;"><router-link to="">lisa</router-link></h4>
                    </div>
                  </div>
                </th>
                <th style="padding-top: 25px; padding-left: 10px;">23</th>
              </tr>
              <tr>
                <th style="padding-top: 30px; padding-left: 40px;">2</th>
                <th>
                  <div class="media">
                    <div class="media-left">
                      <router-link to="">
                        <img class="img-circle" src="" alt="..." />
                      </router-link>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading" style="padding-top: 22px; padding-left: 5px;"><router-link to="">joker</router-link></h4>
                    </div>
                  </div>
                </th>
                <th style="padding-top: 25px; padding-left: 10px;">15</th>
              </tr>
              <tr>
                <th style="padding-top: 30px; padding-left: 40px;">3</th>
                <th>
                  <div class="media">
                    <div class="media-left">
                      <router-link to="">
                        <img class="img-circle" src="" alt="" />
                      </router-link>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading" style="padding-top: 22px; padding-left: 5px;"><router-link to="">defe</router-link></h4>
                    </div>
                  </div>
                </th>
                <th style="padding-top: 25px; padding-left: 10px;">10</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>
