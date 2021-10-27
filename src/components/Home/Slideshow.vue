<template>
  <div class="slideshow-container">
    <div class="slideshow-box">
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="@/assets/image/slider-image1.jpg" alt="..." />
          <div class="carousel-caption">
            <h1>
              胜利是不会向我们走来的，我们必须自己走向胜利。
            </h1>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/image/slider-image2.jpg" alt="..." />
          <div class="carousel-caption">
            <h1>拥有一个健康的体魄将使你的生活更具活力;拥有一个清醒的头脑将使你的人生更具理智;拥有一群朋友将使你的生活更具快乐;拥有一颗爱心将使你的生活更具和谐。</h1>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/image/slider-image3.jpg" alt="..." />
          <div class="carousel-caption">
            <h1>
              一个真正的企业家，不能只靠胆大妄为东奔西撞，也不可能是在学院的课堂里说教出来的。他必须在市场经济的大潮中摸爬滚打，在风雨的锤炼中长大。
            </h1>
          </div>
        </div>
      </div>
      <router-link class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev" to="">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </router-link>
      <router-link class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next" to="">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scroped></style>
