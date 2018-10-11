<template>
    <div class="m-logo">
      <div class="m-logo-img">
        <img src="../assets/logo.svg" alt="">
      </div>
      <h1 class="m-logo-text">
        {{ $t("common.title") }}
      </h1>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../styles/variables.less";
.m-logo {
  text-align: center;
  .m-logo-img {
    height: 60px;
    margin-bottom: 40px;
    img {
      height: 100%;
    }
  }
  .m-logo-text {
    color: @white0;
    letter-spacing: 2px;
  }
}
</style>