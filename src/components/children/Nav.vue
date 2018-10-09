<template>
    <div class="m-nav">
        <router-link to="/home">{{ $t("common.home") }}</router-link>
        <router-link to="/page">{{ $t("common.diary") }}</router-link>
        <router-link to="/about">{{ $t("common.about") }}</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../styles/variables.less";
.m-nav {
  text-align: right;
  padding: 40px;
  a{
    line-height: 72px;

    display: block;
    font-size: 18px;

    color: @white0;
    letter-spacing: 2px;
  }
  .router-link-active{
      color: @blue1;
  }
}
</style>


