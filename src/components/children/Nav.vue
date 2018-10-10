<template>
    <div class="m-nav">
        <router-link to="/">{{ $t("common.home") }}</router-link>
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
  text-align: center;
  padding: 40px 0;
  a {
    line-height: 72px;

    display: block;
    font-size: 18px;

    color: @white0;
    letter-spacing: 2px;
  }
  .router-link-active {
    font-weight: bold;
  }
}
</style>


