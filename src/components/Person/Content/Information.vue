<template>
  <div class="information-container">
    <div class="information-box">
      <div class="user-information-top">个人信息</div>
      <form action="" method="post" enctype="multipart/form-data" id="changeUser">
        <div class="user-information-img ">
          <img src="" />
          <span>图片:</span>
          <input type="file" name="file" multiple="multiple" />
          <div class="user-title">
            <span>
              <input type="hidden" id="userLabel" name="userLabel" />
              <select id="user-select-label">
                <option>人工智能</option>
                <option>教育专业</option>
                <option>设计专业</option>
                <option>食品专业</option>
                <option>保险专业</option>
                <option>大数据专业</option>
                <option>汽修专业</option>
                <option>软件工程</option>
              </select>
            </span>
          </div>
        </div>
        <div class="user-basis-information-header">
          基本信息
        </div>
        <div class="user-name-box">
          <label>昵称</label>
          <input class="user-name" type="text" value="" name="userName" />
        </div>
        <div class="sex-box">
          <label>性别</label>
          <input name="sex" type="radio" value="0" checked />男 &nbsp;&nbsp; <input name="sex" type="radio" value="1" />女 &nbsp;&nbsp;
        </div>
        <div class="living-box">
          <label>邮箱</label>
          <input type="text" name="userEmail" value="" />
        </div>
        <div class="position-telephone">
          <label>电话</label>
          <input type="text" name="userTelephone" value="" />
        </div>
        <div class="birthday-box">
          <div>出生日期</div>
          <input name="userBirthday" id="date" type="hidden" />
          <div class="year">
            <select name="year" id="year">
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
            <select name="month" id="month">
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
            <select name="day" id="day">
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
        <div class="person-introduction">
          <label>个人介绍</label>
          <textarea name="userContent" id="userContent" cols="80" rows="3" placeholder=""></textarea>
        </div>
        <div>
          <input type="button" value="提交" onclick="checkChange()" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.information-container {
  .information-box {
    height: 500px;
    margin: 0;
    .user-information-top {
      line-height: 48px;
      height: 48px;
      color: rgba(var(--grey-9-rgb), 1);
      font-size: 16px;
      font-weight: bold;
      border-bottom: 1px solid #cfcfcf;
    }
    .user-information-img {
      margin: 1px 0 32px 0;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 5px;
      }
      span {
        display: inline-block;
      }
      input {
        display: inline-block;
        width: 160px;
      }
      .user-title {
        position: relative;
        height: 80px;
        width: 200px;
        span {
          display: block;
          margin-top: 10px;
          padding: 0 10px;
          width: 80px;
          height: 40px;
        }
      }
    }
    .user-basis-information-header {
      color: rgba(var(--grey-8-rgb), 1);
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      margin-bottom: 32px;
      border-bottom: 1px solid #cfcfcf;
    }
  }
}
</style>
