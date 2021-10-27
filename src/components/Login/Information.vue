<template>
  <div class="information-container">
    <div class="information-box">
      <form action="user" method="post" id="login-information">
        <ul>
          <input type="hidden" name="actionName" value="login" />
          <li>
            <label for="user-name">用户名:</label>
            <input type="text" class="inp" name="username" id="user-name" v-model="userName" />
            <span id="boolean-username"></span>
          </li>
          <li>
            <label for="user-pwd">登录密码:</label>
            <input type="password" class="inp" name="userPwd" id="user-pwd" v-model="password" @keydown.enter="login" />
            <span id="boolean-pwd"></span>
          </li>
          <li class="agree">
            <input type="checkbox" id="rem" name="rem" />
            <p>记住我</p>
          </li>
          <li class="agree">
            <input type="checkbox" checked />
            <p>同意协议并登录</p>
            <router-link to="/1">《知晓用户协议》</router-link>
          </li>
          <li>
            <span id="msg"></span>
          </li>
          <li>
            <input type="button" value="完成登录" class="btn" @click="login" />
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginInformation',
  data() {
    return {
      userName: '',
      password: '',
      token: ''
    }
  },
  methods: {
    /*   reset() {
      this.username = ''
      this.password = ''
    }, */
    /* login() {
      if (this.username === 'admin' && this.password === '666666') {
        // 登录成功
        // 1. 存储 token
        localStorage.setItem('token', 'Bearer xxxx')
        // 2. 跳转到后台主页
        this.$router.push('/home')
      } else {
        // 登录失败
        localStorage.removeItem('token')
      }
    } */
    async login() {
      if (this.userName === '' && this.password === '') {
        alert('请输入有效的账号和密码')
      } else {
        await this.$http
          .post('/user/login', {
            userName: this.userName,
            userPwd: this.password
          })
          .then(({ data: res }) => {
            if (res.data === null) {
              alert(res.msg)
            } else {
              console.log(res.data)
              this.token = res.data
              localStorage.setItem('Authorizatio', res.data)
              this.$router.push('/home')
            }
          })
      }
    }
  }
}
</script>

<style lang="less">
.information-box {
  position: relative;
  width: 600px;
  margin: 50px auto 0;
  ul {
    li {
      margin-bottom: 20px;
      label {
        display: inline-block;
        width: 88px;
        text-align: right;
        height: 20px;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
        font-size: 14px;
      }
      .inp {
        width: 242px;
        height: 37px;
        border: 1px solid #ccc;
      }
      .inp:focus {
        outline: 0;
      }
      .btn {
        width: 200px;
        height: 34px;
        background: #c81523;
        color: #fff;
        margin: 30px 0 0 70px;
      }
    }
    .agree {
      margin-left: 50px;
      padding-left: 95px;
      input {
        vertical-align: middle;
      }
      a {
        color: #1ba1e1;
      }
      p {
        display: inline-block;
      }
    }
  }
}
</style>
