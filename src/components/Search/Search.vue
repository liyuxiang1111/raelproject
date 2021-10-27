<template>
  <div class="search-container">
    <Personnav></Personnav>
    <div class="container" style="">
      <div class="row">
        <div class="serch_top">
          <div class="search_content">
            <form action="project" id="search_data">
              <input name="actionName" type="hidden" value="searchLimit" />
              <input name="pageNum" type="hidden" value="1" />
              <ul>
                <!-- 搜索的主体区域 -->
                <li class="search_font">
                  <p class="glyphicon glyphicon-chevron-right"></p>
                </li>
                <li>
                  <input class="search_name" type="text" name="title" placeholder="${title}" id="search_by_name" />
                </li>
                <li>
                  <button type="button" class="btn btn-primary search_submit" onclick="checksearch()">提交查询</button>
                </li>
                <li class="hidden search_main container-fluid panel panel-danger">
                  <!-- 下拉多选 -->
                  <div class="panel-body">
                    <div style="font-size: large;position: absolute;margin-left: 30px;margin-top: 50px;">项目开始时间</div>
                    <div class="begin_time search_button">
                      <input name="date" id="date" type="hidden" />
                      <div class="year">
                        <select name="begin_year" id="begin_year">
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
                        <select name="begin_month" id="begin_month">
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
                        <select name="begin_day" id="begin_day">
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
                        <input name="type" type="hidden" id="type" />
                        <li><a href="javascript:;" data-code-type="0">任意</a></li>
                        <li><a href="javascript:;" data-code-type="人工智能">人工智能</a></li>
                        <li><a href="javascript:;" data-code-type="教育培训">教育培训</a></li>
                        <li><a href="javascript:;" data-code-type="智能家具">智能家具</a></li>
                        <li><a href="javascript:;" data-code-type="特色餐饮">特色餐饮</a></li>
                        <li><a href="javascript:;" data-code-type="汽车服务">汽车服务</a></li>
                        <li><a href="javascript:;" data-code-type="互联网+服务">互联网+服务</a></li>
                      </ul>
                    </div>
                  </div>
                  <div style="font-size: large;position: absolute;margin-left: 45px;margin-top: 60px;">人员数量</div>
                  <div class="panel-body search_people">
                    <span>小型项目</span>
                    <input type="radio" name="peopleNumber" value="small" />
                    <span>中等项目</span>
                    <input type="radio" name="peopleNumber" value="middle" />
                    <span>大型项目</span>
                    <input type="radio" name="peopleNumber" value="big" />
                    <span>超大型项目</span>
                    <input type="radio" name="peopleNumber" value="largest" />
                  </div>
                  <div class="panel-body search_sex">
                    <div style="font-size: large;position: absolute;margin-left: -45px">创建者性别</div>
                    <span>女</span>
                    <input type="radio" name="createSex" value="0" />
                    <span>男</span>
                    <input type="radio" name="createSex" value="1" />
                  </div>
                  <div style="font-size: large;position: absolute;margin-left: 45px;margin-top: 50px;">你的学历</div>
                  <div class="panel-body">
                    <div class="study_position">
                      <input name="study" type="hidden" id="study" />
                      <select name="lastStudy" id="lastStudy">
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
                        <input name="where" type="hidden" id="where" />
                        <li class="map-item-all-btn"><a href="javascript:;" data-code_where="-1">全部</a></li>
                        <li><a href="javascript:;" data-code-where="10">北京市</a></li>
                        <li><a href="javascript:;" data-code-where="11">天津市</a></li>
                        <li><a href="javascript:;" data-code-where="12">河北省</a></li>
                        <li><a href="javascript:;" data-code-where="13">山西省</a></li>
                        <li><a href="javascript:;" data-code-where="14">内蒙古</a></li>
                        <li><a href="javascript:;" data-code-where="15">辽宁省</a></li>
                        <li><a href="javascript:;" data-code-where="16">吉林省</a></li>
                        <li><a href="javascript:;" data-code-where="17">黑龙江</a></li>
                        <li><a href="javascript:;" data-code-where="18">上海市</a></li>
                        <li><a href="javascript:;" data-code-where="19">江苏省</a></li>
                        <li><a href="javascript:;" data-code-where="20">浙江省</a></li>
                        <li><a href="javascript:;" data-code-where="21">安徽省</a></li>
                        <li><a href="javascript:;" data-code-where="22">福建省</a></li>
                        <li><a href="javascript:;" data-code-where="23">江西省</a></li>
                        <li><a href="javascript:;" data-code-where="24">山东省</a></li>
                        <li><a href="javascript:;" data-code-where="25">河南省</a></li>
                        <li><a href="javascript:;" data-code-where="26">湖北省</a></li>
                        <li><a href="javascript:;" data-code-where="27">湖南省</a></li>
                        <li><a href="javascript:;" data-code-where="28">广东省</a></li>
                        <li><a href="javascript:;" data-code-where="29">广西</a></li>
                        <li><a href="javascript:;" data-code-where="30">海南省</a></li>
                        <li><a href="javascript:;" data-code-where="31">重庆市</a></li>
                        <li><a href="javascript:;" data-code-where="32">四川省</a></li>
                        <li><a href="javascript:;" data-code-where="33">贵州省</a></li>
                        <li><a href="javascript:;" data-code-where="34">云南省</a></li>
                        <li><a href="javascript:;" data-code-where="35">西藏</a></li>
                        <li><a href="javascript:;" data-code-where="36">陕西省</a></li>
                        <li><a href="javascript:;" data-code-where="37">甘肃省</a></li>
                        <li><a href="javascript:;" data-code-where="38">青海省</a></li>
                        <li><a href="javascript:;" data-code-where="39">宁夏</a></li>
                        <li><a href="javascript:;" data-code-where="40">新疆</a></li>
                        <li><a href="javascript:;" data-code-where="41">台湾</a></li>
                        <li><a href="javascript:;" data-code-where="42">香港</a></li>
                        <li><a href="javascript:;" data-code-where="43">澳门</a></li>
                        <li><a href="javascript:;" data-code-where="44">新疆</a></li>
                        <li><a href="javascript:;" data-code-where="45">国外</a></li>
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
    <div style="height:700px;margin-top: 100px;margin-left: 255px;">
      <Searchproject></Searchproject>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Personnav from '@/components/Nav/Personnav.vue'
import Searchproject from '@/components/Search/Searchproject/Searchproject.vue'
import Footer from '@/components/Footer/Copyright.vue'
export default {
  components: {
    Personnav,
    Searchproject,
    Footer
  }
}
</script>

<style lang="less" scoped>
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
</style>
