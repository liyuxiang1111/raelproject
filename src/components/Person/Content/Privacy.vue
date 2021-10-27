<template>
  <div class="privacy-container">
    <div class="privacy-box">
      <h1>关于隐私</h1>
      <div class="privacy-content">
        <h2>隐私声明</h2>
        <p>下列是我们团队的关于隐私声明</p>
        <ul>
          <li>不搜集用户个人信息</li>
          <li>IP 地址仅用于统计</li>
          <li>不与第三方分享统计报告</li>
          <li>安全措施防止敏感信息的误用</li>
          <li>不使用 Cookie 跟踪任何个人信息</li>
        </ul>
        <hr />
        <h2>个人用户信息</h2>
        <p>我们不泄露也不利用有关用户或访问者的任何信息。</p>
        <p>可以以游客的身份浏览页面。</p>
        <hr />
        <h2>日志文件</h2>
        <p>我们不会与第三方共享统计报告。</p>
        <p>IP 地址不会关联个人可辨识信息。</p>
        <p>使用 IP 地址来诊断服务器问题、分析趋势、管理站点以及搜集统计信息。</p>
        <p>在防止敏感信息丢失或误用方面拥有标准的安全措施。</p>
        <hr />
        <h2>如有隐私问题请联系我们</h2>
        <p>86-1008611</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.privacy-container {
  .privacy-box {
    height: 730px;
    h1 {
      font-size: 24px;
      margin: 0 25px;
      color: #3f3f3f;
      border-bottom: 1px solid #cfcfcf;
    }
    .privacy-content {
      margin: 1px 25px 0 25px;
      padding: 30px 0 32px;
      height: 240px;
      h2 {
        font-size: 18px;
        color: #3f3f3f;
      }
      p {
        font-size: 14px;
        margin: 15px 0 0;
        color: #000000;
      }
      ul {
        margin: 15px 0 0 35px;
        li {
          margin: 3px 0 0;
          list-style: disc;
          font-size: 14px;
          color: #000000;
        }
      }
    }
  }
}
</style>
