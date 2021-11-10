<template>
  <div class="search-container">
    <Personnav></Personnav>
    <div class="container" style="">
      <div class="row">
        <div class="serch_top">
          <div class="search_content">
            <form action="project" id="search_data">
              <ul>
                <!-- 搜索的主体区域 -->
                <li ref="label" class="search_font">
                  <p class="glyphicon glyphicon-chevron-right" @click="hide"></p>
                </li>
                <li>
                  <input class="search_name" type="text" name="title" :placeholder="projectName" id="search_by_name" v-model="projectName" />
                </li>
                <li>
                  <button type="button" class="btn btn-primary search_submit" @click="checksearch">提交查询</button>
                </li>
                <li ref="searchbar" class="hidden search_main container-fluid panel panel-danger">
                  <!-- 下拉多选 -->
                  <div class="panel-body">
                    <div style="font-size: large;position: absolute;margin-left: 30px;margin-top: 50px;">项目开始时间</div>
                    <div class="begin_time search_button">
                      <input name="date" id="date" type="hidden" />
                      <div class="year">
                        <select name="begin_year" id="begin_year" v-model="year">
                          <option>---请选择年份---</option>
                          <option>2000</option>
                          <option>2001</option>
                          <option>2002</option>
                          <option>2003</option>
                          <option>2004</option>
                          <option>2005</option>
                          <option>2006</option>
                          <option>2007</option>
                          <option>2008</option>
                          <option>2009</option>
                          <option>2010</option>
                          <option>2011</option>
                          <option>2012</option>
                          <option>2013</option>
                          <option>2014</option>
                          <option>2015</option>
                          <option>2016</option>
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                          <option>2021</option>
                        </select>
                      </div>
                      <div class="month">
                        <select name="begin_month" id="begin_month" v-model="month">
                          <option>---请选择月份---</option>
                          <option>12</option>
                          <option>11</option>
                          <option>10</option>
                          <option>09</option>
                          <option>08</option>
                          <option>07</option>
                          <option>06</option>
                          <option>05</option>
                          <option>04</option>
                          <option>03</option>
                          <option>02</option>
                          <option>01</option>
                        </select>
                      </div>
                      <div class="day">
                        <select name="begin_day" id="begin_day" v-model="day">
                          <option>---请选择几号---</option>
                          <option>31</option>
                          <option>30</option>
                          <option>29</option>
                          <option>28</option>
                          <option>27</option>
                          <option>26</option>
                          <option>25</option>
                          <option>24</option>
                          <option>23</option>
                          <option>22</option>
                          <option>21</option>
                          <option>20</option>
                          <option>19</option>
                          <option>18</option>
                          <option>17</option>
                          <option>16</option>
                          <option>15</option>
                          <option>14</option>
                          <option>13</option>
                          <option>12</option>
                          <option>11</option>
                          <option>10</option>
                          <option>09</option>
                          <option>08</option>
                          <option>07</option>
                          <option>06</option>
                          <option>05</option>
                          <option>04</option>
                          <option>03</option>
                          <option>02</option>
                          <option>01</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div style="font-size: large;position: absolute;margin-left: 45px;margin-top: 100px;">所属标签</div>
                  <div class="panel-body">
                    <div class="search_position">
                      <ul class="position_ul_type">
                        <li @click="type($event, -1)"><router-link to="">任意</router-link></li>
                        <li @click="type($event, 1)"><router-link to="">人工智能</router-link></li>
                        <li @click="type($event, 2)"><router-link to="">教育培训</router-link></li>
                        <li @click="type($event, 3)"><router-link to="">智能家具</router-link></li>
                        <li @click="type($event, 4)"><router-link to="">特色餐饮</router-link></li>
                        <li @click="type($event, 5)"><router-link to="">汽车服务</router-link></li>
                        <li @click="type($event, 6)"><router-link to="">互联网+服务</router-link></li>
                      </ul>
                    </div>
                  </div>
                  <div style="font-size: large;position: absolute;margin-left: 45px;margin-top: 60px;">人员数量</div>
                  <div class="panel-body search_people">
                    <span>小型项目</span>
                    <input type="radio" name="peopleNumber" value="small" v-model="memberNum" />
                    <span>中等项目</span>
                    <input type="radio" name="peopleNumber" value="middle" v-model="memberNum" />
                    <span>大型项目</span>
                    <input type="radio" name="peopleNumber" value="big" v-model="memberNum" />
                    <span>超大型项目</span>
                    <input type="radio" name="peopleNumber" value="largest" v-model="memberNum" />
                  </div>
                  <div class="panel-body search_sex">
                    <div style="font-size: large;position: absolute;margin-left: -45px">创建者性别</div>
                    <span>女</span>
                    <input type="radio" name="createSex" value="0" v-model="userSex" />
                    <span>男</span>
                    <input type="radio" name="createSex" value="1" v-model="userSex" />
                  </div>
                  <div style="font-size: large;position: absolute;margin-left: 45px;margin-top: 50px;">你的学历</div>
                  <div class="panel-body">
                    <div class="study_position">
                      <input name="study" type="hidden" id="study" />
                      <select name="lastStudy" id="lastStudy" v-model="userStudy">
                        <option>小学</option>
                        <option>中学</option>
                        <option>高中</option>
                        <option>专科</option>
                        <option>本科</option>
                        <option>硕士</option>
                        <option>博士</option>
                      </select>
                    </div>
                  </div>
                  <div style="font-size: large;position: absolute;margin-left: 47px;margin-top: 85px">项目省份</div>
                  <div class="panel-body">
                    <div class="search_position">
                      <ul class="position_ul_where">
                        <li class="map-item-all-btn"><router-link to="">全部</router-link></li>
                        <li><router-link to="">北京市</router-link></li>
                        <li><router-link to="">天津市</router-link></li>
                        <li><router-link to="">河北省</router-link></li>
                        <li><router-link to="">山西省</router-link></li>
                        <li><router-link to="">内蒙古</router-link></li>
                        <li><router-link to="">辽宁省</router-link></li>
                        <li><router-link to="">吉林省</router-link></li>
                        <li><router-link to="">黑龙江</router-link></li>
                        <li><router-link to="">上海市</router-link></li>
                        <li><router-link to="">江苏省</router-link></li>
                        <li><router-link to="">浙江省</router-link></li>
                        <li><router-link to="">安徽省</router-link></li>
                        <li><router-link to="">福建省</router-link></li>
                        <li><router-link to="">江西省</router-link></li>
                        <li><router-link to="">山东省</router-link></li>
                        <li><router-link to="">河南省</router-link></li>
                        <li><router-link to="">湖北省</router-link></li>
                        <li><router-link to="">湖南省</router-link></li>
                        <li><router-link to="">广东省</router-link></li>
                        <li><router-link to="">广西</router-link></li>
                        <li><router-link to="">海南省</router-link></li>
                        <li><router-link to="">重庆市</router-link></li>
                        <li><router-link to="">四川省</router-link></li>
                        <li><router-link to="">贵州省</router-link></li>
                        <li><router-link to="">云南省</router-link></li>
                        <li><router-link to="">西藏</router-link></li>
                        <li><router-link to="">陕西省</router-link></li>
                        <li><router-link to="">甘肃省</router-link></li>
                        <li><router-link to="">青海省</router-link></li>
                        <li><router-link to="">宁夏</router-link></li>
                        <li><router-link to="">新疆</router-link></li>
                        <li><router-link to="">台湾</router-link></li>
                        <li><router-link to="">香港</router-link></li>
                        <li><router-link to="">澳门</router-link></li>
                        <li><router-link to="">新疆</router-link></li>
                        <li><router-link to="">国外</router-link></li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
          <div class="search_font"></div>
        </div>
      </div>
    </div>
    <div ref="project" style="height:1400px;margin-top: 100px;margin-left: 255px;">
      <Searchproject :list="search.list"></Searchproject>
      <div class="pagebar-box">
        <Pagebar :need="pageNeed" @pageNumChange="getNewPage"></Pagebar>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Personnav from '@/components/Nav/Personnav.vue'
import Searchproject from '@/components/Search/Searchproject/Searchproject.vue'
import Footer from '@/components/Footer/Copyright.vue'
import Pagebar from '@/components/Pagebar/Pagebar.vue'
export default {
  created() {
    this.token = localStorage.getItem('Authorizatio')
    console.log(this.token)
    this.searchProject()
  },
  props: {
    pageSize: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      projectTypeId: -1,
      userSex: 0,
      userStudy: '本科',
      year: '2001',
      month: '01',
      day: '01',
      flag: true,
      pageNum: 1,
      projectName: '',
      memberNum: 0,
      province: 0,
      search: {
        list: []
      },
      pageNeed: {
        pageSet: [],
        nextPage: 0,
        prePage: 0
      },
      token: ''
    }
  },
  components: {
    Personnav,
    Searchproject,
    Footer,
    Pagebar
  },
  methods: {
    async searchProject() {
      console.log(this.token)
      await this.$http({
        method: 'POST',
        url: '/project/view',
        data: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          projectName: this.projectName,
          searchDay: this.year + this.month + this.day,
          province: this.province,
          projectTypeId: this.projectTypeId,
          userSex: parseInt(this.userSex),
          userStudy: this.userStudy,
          memberNum: this.memberNum
        },
        headers: {
          Authorization: this.token
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
          console.log(res.message)
        } else {
          console.log(res.data)
          this.search.list = res.data.dataList
          this.pageNeed.nextPage = res.data.nextPage
          this.pageNeed.pageNum = res.data.pageNum
          this.pageNeed.pageSize = res.data.pageSize
          this.pageNeed.prePage = res.data.prePage
          this.pageNeed.totalPages = res.data.totalPages
          this.pageNeed.pageSet = res.data.pageSet
          console.log('111')
          console.log(res.data.pageSet)
        }
      })
    },
    select(n) {
      this.province = n
    },
    type(e, n) {
      for (var i = 0; i < e.srcElement.parentNode.parentNode.children.length; i++) {
        e.srcElement.parentNode.parentNode.children[i].children[0].style.backgroundColor = ''
      }
      e.srcElement.style.backgroundColor = 'skyblue'
      this.projectTypeId = n
    },
    checksearch() {
      this.searchProject()
    },
    hide() {
      if (this.flag) {
        this.$refs.searchbar.className = ' search_main container-fluid panel panel-danger'
        this.$refs.label.style.transform = 'rotate(90deg)'
        this.$refs.project.style.marginTop = '800px'
        this.flag = false
      } else {
        this.$refs.searchbar.className = 'hidden search_main container-fluid panel panel-danger'
        this.$refs.label.style.transform = 'rotate(0deg)'
        this.$refs.project.style.marginTop = '100px'
        this.flag = true
      }
    },
    getNewPage(val) {
      this.pageNum = val
      this.searchProject()
    }
  }
}
</script>

<style lang="less" scoped>
.change {
  rotate: (90deg);
}
.search-container {
  .container {
    position: relative;
    z-index: 2;
    margin-top: 50px;
    .search_main {
      height: 700px;
      width: 1200px;
      background-color: #fff;
      margin-top: 100px;
      position: absolute;
      transition: all 1s;
    }
    .search_font {
      position: absolute;
      margin-left: 120px;
      margin-top: 14px;
      font-size: large;
      transition: all 0.5s;
    }
    .search_submit {
      color: #fff;
      width: 100px;
      height: 50px;
      line-height: 50px;
      position: absolute;
      margin-left: 820px;
    }
    .search_name {
      position: absolute;
      margin-left: 255px;
      color: gray;
      width: 500px;
      height: 50px;
      border: 3px solid gray;
    }
    .search_button {
      position: absolute;
      margin-left: 200px;
      margin-top: 50px;
    }
    .panel-body {
      .year {
        display: inline-block;
        position: absolute;
        #begin_year {
          width: 150px;
          height: 30px;
        }
      }
      .month {
        display: inline-block;
        margin-left: 200px;
        position: absolute;
        #begin_month {
          width: 150px;
          height: 30px;
        }
      }
      .day {
        display: inline-block;
        margin-left: 400px;
        position: absolute;
        #begin_day {
          width: 150px;
          height: 30px;
        }
      }
      .position_ul_where {
        position: relative;
        margin-left: 50px;
        margin-top: 100px;
        li {
          a {
            width: 50px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            color: black;
            display: inline-block;
            margin-top: 20px;
            margin-left: 10px;
            float: left;
          }
          a:hover {
            color: rgb(73, 120, 238);
          }
        }
      }
      .position_ul_type {
        position: relative;
        margin-left: 50px;
        margin-top: 100px;
        li {
          a {
            width: 100px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            color: black;
            display: inline-block;
            margin-top: 20px;
            margin-left: 10px;
            float: left;
          }
        }
      }
      .study_position {
        #lastStudy {
          position: absolute;
          margin-top: 36px;
          margin-left: 125px;
          width: 200px;
        }
      }
    }
    .search_people {
      width: 1200px;
      position: relative;
      margin-top: 43px;
      margin-left: 14px;
      span {
        font-size: large;
        margin-left: 126px;
      }
      input {
        position: absolute;
        width: 16px;
        height: 16px;
        margin-left: 30px;
      }
    }
    .search_sex {
      width: 1000px;
      position: relative;
      margin-top: 43px;
      margin-left: 170px;
      span {
        font-size: large;
        margin-left: 126px;
      }
      input {
        position: absolute;
        width: 16px;
        height: 16px;
        margin-left: 30px;
      }
    }
  }
  .pagebar-box {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
