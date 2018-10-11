<template>
    <div class="m-logo">
      <div class="m-logo-img">
        <img src="../assets/logo.svg" alt="">
      </div>
      <!-- <div class="m-logo-text">
        {{ $t("common.title") }}
      </div> -->
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../styles/variables.less";
.m-logo {
  display: flex;
  padding: 25px 0;
  .m-logo-img {
    height: 30px;
    img {
      height: 100%;
    }
  }
  // .m-logo-text {
  //   color: @white;
  //   line-height: 30px;
  //   margin-left: 10px;
  //   font-size: 24px;
  //   letter-spacing: 2px;
  // }
}
</style>