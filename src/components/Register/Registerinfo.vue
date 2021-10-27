<template>
  <div class="registerInfo-container">
    <div class="registerInfo-box">
      <form action="/home" method="post" id="register-info">
        <ul>
          <input type="hidden" name="actionName" />
          <li>
            <label for="user-telephone">手机号:</label>
            <input type="text" class="inp" name="userTelephone" id="user-telephone" v-model="userTelephone" />
            <span id="boolean-telephone"></span>
          </li>
          <li>
            <label for="user-name">用户名:</label>
            <input type="text" class="inp" name="userName" id="user-name" v-model="userName" />
            <span id="boolean-username"></span>
          </li>
          <li>
            <label for="user-pwd">登录密码:</label>
            <input type="password" class="inp" name="userPwd" id="user-pwd" v-model="userPwd" />
            <span id="boolean-pwd"></span>
          </li>
          <li>
            <label for="user-pwd-twice">确认登录密码:</label>
            <input type="password" class="inp" name="userPwd" id="user-pwd-twice" v-model="userPwdTwice" />
            <span id="boolean-pwd-twice"></span>
          </li>
          <li>
            <label for="user-real-name">真实姓名:</label>
            <input type="text" class="inp" name="userRealName" id="user-real-name" v-model="userRealName" />
          </li>
          <li class="sex">
            <label for="user-sex-man">性别:</label>
            <span class="man">男</span>
            <input type="radio" class="inp" name="userSex" id="user-sex-man" value="1" v-model="userSex" />
            <span class="woman">女</span>
            <input type="radio" class="inp" name="userSex" id="user-sex-woman" value="0" v-model="userSex" />
          </li>
          <li>
            <label for="birthday">生日:</label>
            <input type="hidden" name="birthday" id="birthday" />
            <select name="year" id="year" v-model="year">
              <option selected>2000</option>
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
            <select name="month" id="month" v-model="month">
              <option selected>12</option>
              <option>11</option>
              <option>10</option>
              <option>9</option>
              <option>8</option>
              <option>8</option>
              <option>6</option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
            <select name="day" id="day" v-model="day">
              <option selected>31</option>
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
              <option>9</option>
              <option>8</option>
              <option>7</option>
              <option>6</option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
            <span id="boolean-span-birthday"></span>
          </li>
          <li>
            <label for="user-education-background" class="education">请选择你的最高学历</label>
            <select name="userEducationBackground" id="user-education-background" v-model="userLargestStudy">
              <option selected>小学</option>
              <option>中学</option>
              <option>大学</option>
              <option>研究生</option>
              <option>小学</option>
              <option>博士</option>
              <option>博士后</option>
            </select>
          </li>
          <li class="agree">
            <input type="checkbox" name="" id="" v-model="checked" />同意协议并注册
            <router-link to="/">《知晓用户协议》</router-link>
          </li>
          <li>
            <span id="msg"></span>
          </li>
          <li>
            <input type="button" class="btn" value="完成注册" @click="register" />
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userSex: {
      type: Number,
      default: 1
    },
    userLargestStudy: {
      type: String,
      default: '大学'
    },
    year: {
      type: String,
      default: '2000'
    },
    month: {
      type: String,
      default: '1'
    },
    day: {
      type: String,
      default: '1'
    },
    checked: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      userName: '',
      userPwd: '',
      userTelephone: '',
      userRealName: '',
      userBirthday: '',
      userPwdTwice: ''
    }
  },
  methods: {
    async register() {
      if (this.checked === false) {
        alert('请勾选相关协议')
      } else {
        await this.$http
          .post('/user/register', {
            userName: this.userName,
            userPwd: this.userPwd,
            userTelephone: this.userTelephone,
            userRealName: this.userRealName,
            userSex: this.userSex,
            userBirthday: this.year + this.month + this.day,
            userLargestStudy: this.userLargestStudy
          })
          .then(({ data: res }) => {
            console.log(res)
            if (res.success) {
              alert('注册成功')
              this.$router.push('/login')
            } else {
              alert(res.msg)
            }
          })
      }
    }
  }
}
</script>

<style lang="less" scroped>
.registerInfo-box {
  width: 600px;
  margin: 50px auto 0;
  ul {
    li {
      margin-bottom: 20px;
      label {
        display: inline-block;
        width: 88px;
        text-align: right;
        margin-bottom: 5px;
        font-weight: 700;
        font-size: 14px;
      }
      .inp {
        width: 242px;
        height: 37px;
        border: 1px solid #ccc;
      }
      .btn {
        width: 200px;
        height: 34px;
        background: #c81523;
        color: #fff;
        margin: 30px 0 0 70px;
      }
      #year,
      #month,
      #day {
        margin-left: 30px;
      }
      .education {
        margin-right: 50px;
        width: 140px;
      }
    }
    .agree {
      padding-left: 95px;
      input {
        vertical-align: middle;
      }
      a {
        color: #1ba1e1;
      }
    }
    .sex {
      margin-top: 20px;
      .man {
        margin-left: 30px;
      }
      .woman {
        margin-left: 30px;
      }
      input {
        width: 15px;
        height: 15px;
        margin-left: 30px;
        vertical-align: middle;
      }
    }
  }
}
</style>
