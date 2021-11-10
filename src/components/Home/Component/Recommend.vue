<template>
  <div class="Component-container">
    <div class="Component-box container">
      <div v-for="item in list" :key="item.id" class="col-lg-6">
        <router-link :to="{ path: '/type/' + item.id }">
          <div class="border-flex">
            <div class="card">
              <span></span><span></span><span></span><span></span>
              <div class="content">
                <div class="media">
                  <div class="media-left">
                    <router-link to="">
                      <img class="media-object" :src="require('../../../assets/image/typeImg/' + item.typeImg)" alt="" />
                    </router-link>
                  </div>
                  <div class="media-box main-element">
                    <h4 class="media-heading">
                      <router-link to="">{{ item.typeName }}</router-link>
                    </h4>
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      token: ''
    }
  },
  created() {
    this.token = localStorage.getItem('Authorizatio')
    this.initRecommend()
  },
  methods: {
    async initRecommend() {
      await this.$http({
        method: 'GET',
        url: 'index/hot/type',
        headers: {
          Authorization: this.token
        }
      }).then(({ data: res }) => {
        this.list = res.data
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.Component-box {
  .border-flex {
    padding-top: 15px;
    .media {
      .media-left {
        a {
          img {
            height: 50px;
            width: 50px;
          }
        }
      }
    }
  }
}
</style>
