<template>
  <div class="members-container">
    <div v-if="memberList.length == 0 ? false : true" class="result-main container">
      <h2>成员列表</h2>
      <ul>
        <li v-for="item in memberList" :key="item.memberId" class="member-simple">
          <div class="member-img">
            <img :src="require('../../../assets/image/userImg/' + item.memberImg)" class="img-circle" />
          </div>
          <div class="member-main">
            <div class="member-name">
              <div>名字:{{ item.userName }}</div>
            </div>
            <div class="member-ziwu">
              权限:
              <div ref="assionment">{{ item.memberAssionment }}</div>
            </div>
            <div class="member-function">
              <router-link @click.native="move($event, item.memberId)" to=""><span id="move" class="glyphicon glyphicon-minus"></span></router-link>
              <router-link @click.native="up($event, item.memberAssionment, item.memberId)" to=""><span id="upAs" class="glyphicon glyphicon-arrow-up"></span></router-link>
              <router-link @click.native="low($event, item.memberAssionment, item.memberId)" to=""><span id="doAs" class="glyphicon glyphicon-arrow-down"></span></router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="container">
      <h2 style="color:red;height:200px">
        你没有员工！！！！
      </h2>
    </div>
  </div>
</template>

<script>
import bus from '@/components/eventbus.js'
export default {
  data() {
    return {
      memberList: [],
      flag: true,
      proObj: {},
      modalList: {
        flag: 2,
        title: '删除用户',
        content: '请问是否删除该用户',
        btn: '删除',
        memberId: ''
      },
      token: ''
    }
  },
  created() {
    this.token = localStorage.getItem('Authorizatio')
    this.initMenmber()
    console.log('ok')
  },
  updated() {
    this.$nextTick(this.shareToMember())
  },
  methods: {
    initMenmber() {
      console.log(this.$route.params.memberid)
      this.$http({
        url: '/member/' + this.$route.params.memberid,
        method: 'post',
        headers: {
          Authorization: this.token
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
        } else {
          console.log('hhh')
          console.log(res.data)
          this.memberList = res.data.projectMemberList
          this.proObj = res.data.projectVo
        }
      })
    },
    move(e, memberId) {
      this.modalList.memberId = memberId
      bus.$emit('shareToModal', this.modalList)
    },
    async up(e, memberAssionment, memberId) {
      console.log(memberAssionment)
      console.log(memberId)
      await this.$http({
        url: '/member/up',
        method: 'post',
        data: {
          authority: memberAssionment,
          memberId: memberId
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
          console.log(res)
          alert(res.msg)
        } else {
          alert('修改成功权限加1')
          this.$router.go(0)
        }
      })
    },
    async low(e, memberAssionment, memberId) {
      console.log(memberAssionment)
      console.log(memberId)
      await this.$http({
        url: '/member/low',
        method: 'post',
        data: {
          authority: memberAssionment,
          memberId: memberId
        }
      }).then(({ data: res }) => {
        if (res.success == false) {
          console.log(res)
          alert(res.msg)
        } else {
          alert('修改成功权限减1')
          this.$router.go(0)
        }
      })
    },
    shareToMember() {
      console.log('shareToMember')
      console.log(this.proObj)
      this.$emit('imformation', this.proObj)
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
