<template>
  <div class="home-container">
    <div class="home-box">
      <Nav></Nav>
    </div>
    <Slideshow></Slideshow>
    <Recommends></Recommends>
    <Recommendprojects></Recommendprojects>
    <Rank></Rank>
    <Shortbar></Shortbar>
    <Message></Message>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav/Nav.vue'
import Slideshow from '@/components/Home/Slideshow.vue'
import Recommends from '@/components/Home/Recommends.vue'
import Recommendprojects from '@/components/Home/Recommendprojects.vue'
import Rank from '@/components/Home/Rank.vue'
import Shortbar from '@/components/Toolbar/Shortbar.vue'
import Footer from '@/components/Footer/Copyright.vue'
import Message from '@/components/Home/Message.vue'
export default {
  name: 'Home',
  components: {
    Nav,
    Slideshow,
    Recommends,
    Shortbar,
    Footer,
    Recommendprojects,
    Rank,
    Message
  }
}
</script>

<style lang="less" scoped>
.home-container {
  position: relative;
}
</style>
