<template>
  <div class="pagebar-container">
    <div class="pagebar-box">
      <ul>
        <!-- <router-link to="" >
          <li class="glyphicon glyphicon-backward"></li>
        </router-link> -->
        <router-link to="" v-for="item in need.pageSet" :key="item" @click.native="pageMove(item)">
          <li class="page" :class="{ nowBar: pageNow == item }">{{ item }}</li>
        </router-link>
        <router-link to="" @click.native="pageMove(need.nextPage)">
          <li class="glyphicon glyphicon-chevron-right"></li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['need'],
  methods: {
    pageMove(pageNum) {
      this.$emit('pageNumChange', pageNum)
      this.pageNow = pageNum
    }
  },
  data() {
    return {
      pageNow: this.need.pageNum
    }
  }
}
</script>

<style lang="less" scoped>
.pagebar-container {
  .pagebar-box {
    width: 350px;
    height: 50px;
    line-height: 50px;
    ul {
      a {
        float: left;
        .page {
          float: left;
          width: 30px;
          height: 30px;
          border: 1px solid pink;
          margin: 10px;
          text-align: center;
          line-height: 30px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.4s;
        }
        .page:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
.nowBar {
  background-color: rgb(44, 107, 168);
  color: white;
}
</style>
