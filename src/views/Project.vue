<template>
  <div class="project-container">
    <Nav></Nav>
    <div class="main-box container">
      <div class="row">
        <div class="main col-md-7">
          <!-- 标题区域 -->
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-body">
                <h1 class="text-title">projectName</h1>
                <div class="row text-information">
                  <div class="project-type col-md-3">
                    <button type="button" class="btn btn-info">
                      projectType
                    </button>
                  </div>
                  <div class="writer col-md-offset-0 col-md-1"><router-link to="">userName</router-link></div>
                  <div class="time-visited col-md-offset-3 col-md-2 ">
                    <span class="glyphicon glyphicon-eye-open eye"></span>
                    visitNumber
                  </div>
                  <div class="time-create col-md-offset-10">createTime</div>
                </div>
              </div>
              <!-- 简介 -->
              <div class="panel-footer">
                <div class="text-small"></div>
              </div>
              <!-- 简介end -->
            </div>
          </div>
          <!-- 标题区域end -->

          <div class="container">
            <div class="head-position">
              <h2>项目的简介:</h2>
              <hr />
              <div class="project-head">
                <p>这个组长很懒没有写简介</p>
                ${project.projectHead}
              </div>
            </div>
          </div>
          <!-- 主体区域 -->
          <h2 style="color: red;margin: 50px">抱歉你没有对应的权限</h2>

          <div class="container">
            <div class="filedList">
              <h3 style="margin-left: 350px;margin-top: 68px">你没有存数据到数据库中!!</h3>
              <hr />

              <ul>
                <router-link to="">
                  <li class="simple_resource">
                    <div class="fildFont glyphicon glyphicon-save-file"></div>
                    <div class="fildName">${resource.resourceName}</div>
                    <div class="fildUserName">${resource.userId}</div>
                    <div class="fildTime">${resource.postTime}</div>
                    <div class="clickNum">${resource.uploadNum}</div>
                  </li>
                </router-link>
                <router-link data-toggle="modal" data-target="#${resource.docId}" to="">
                  <span class="glyphicon glyphicon-minus"></span>
                </router-link>

                <div class="modal fade" id="${resource.docId}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div class="modal-body">
                        <h4>你确定要删除这个资源吗?</h4>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <router-link style="border: 1px solid #ccc" type="button" to="">确定</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
            <div class="text-main">
              <p id="projectContent"></p>
              ${project.projectContent}
            </div>
            <div class="map-img">
              <img src="" />
            </div>
          </div>

          <!-- 主体区域end -->
        </div>
      </div>
    </div>
    <Longbar></Longbar>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav/Personnav.vue'
import Longbar from '@/components/Toolbar/Longbar.vue'
import Footer from '@/components/Footer/Copyright.vue'
export default {
  data() {
    return {}
  },
  components: {
    Nav,
    Footer,
    Longbar
  }
}
</script>

<style lang="less" scoped>
.project-container {
  .main-box {
    margin-top: 100px;
  }
}
</style>
