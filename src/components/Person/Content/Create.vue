<template>
  <div class="create-container">
    <form action="" method="post" enctype="multipart/form-data" id="createProject">
      <div class="user-resouce">
        <ul>
          <li>
            <span></span>
            <p class="text-projectName">项目名:</p>
            <input type="text" name="projectName" id="projectName" />
          </li>
          <li>
            <span></span>
            <input type="hidden" name="projectType-real" id="projectType-real" />
            <p class="text-projectType">项目标签:</p>
            <select name="projectType" id="projectType">
              <option>前端</option>
              <option>后端</option>
              <option>嵌入式</option>
              <option>移动端开发</option>
              <option>运维</option>
            </select>
          </li>
          <li>
            <span></span>
            <p class="text-projectHead">项目简介:</p>
            <textarea name="projectHead" id="projectHead"></textarea>
          </li>
          <li>
            <span></span>
            <p class="text-projectContent">项目内容:</p>
            <textarea id="projectContent" name="projectContent"></textarea>
            <input type="hidden" name="projectContent-real" id="projectContent-real" />
          </li>
          <li class="row" style="height: 0px">
            <div class="col-lg-6">
              <p>请选中你的省份</p>
              <input type="hidden" name="province" id="province" />
              <select id="select-province">
                <option data-code="10">北京市</option>
                <option data-code="11">天津市</option>
                <option data-code="12">河北省</option>
                <option data-code="13">山西省</option>
                <option data-code="14">内蒙古</option>
                <option data-code="15">辽宁省</option>
                <option data-code="16">吉林省</option>
                <option data-code="17">黑龙江</option>
                <option data-code="18">上海市</option>
                <option data-code="19">江苏省</option>
                <option data-code="20">浙江省</option>
                <option data-code="21">安徽省</option>
                <option data-code="22">福建省</option>
                <option data-code="23">江西省</option>
                <option data-code="24">山东省</option>
                <option data-code="25">河南省</option>
                <option data-code="26">湖北省</option>
                <option data-code="27">湖南省</option>
                <option data-code="28">广东省</option>
                <option data-code="29">广西</option>
                <option data-code="30">海南省</option>
                <option data-code="31">重庆市</option>
                <option data-code="32">四川省</option>
                <option data-code="33">贵州省</option>
                <option data-code="34">云南省</option>
                <option data-code="35">西藏</option>
                <option data-code="36">陕西省</option>
                <option data-code="37">甘肃省</option>
                <option data-code="38">青海省</option>
                <option data-code="39">宁夏</option>
                <option data-code="40">新疆</option>
                <option data-code="41">台湾</option>
                <option data-code="42">香港</option>
                <option data-code="43">澳门</option>
                <option data-code="44">新疆</option>
                <option data-code="45">国外</option>
              </select>
            </div>
            <div class="col-lg-6">
              <span></span>
              <p class="text-projectImg">项目图片:</p>
              <input input type="file" name="myFile" multiple />
            </div>
          </li>
        </ul>
        <p id="show-msg">msg</p>
        <input style="margin-top: 100px;width: 100px;" type="button" onclick="checkCreate()" value="提交" />
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.create-container {
  .user-resouce {
    #projectHead {
      overflow: hidden;
      margin-left: 100px;
      width: 600px;
      height: 80px;
    }
    #projectContent {
      width: 700px;
      height: 200px;
      margin-left: 60px;
    }
    #show-msg {
      position: absolute;
      margin-left: 284px;
      margin-top: 72px;
      color: red;
      font-size: large;
    }
  }
}
</style>
