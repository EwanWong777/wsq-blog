<template>
    <div class="m-nav">
        <router-link to="/home">{{ $t("common.home") }}</router-link>
        <router-link to="/article">{{ $t("common.article") }}</router-link>
        <router-link to="/works">{{ $t("common.works") }}</router-link>
        <router-link to="/message">{{ $t("common.message") }}</router-link>
        <router-link to="/about">{{ $t("common.about") }}</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../styles/variables.less";
.m-nav {
  display: flex;
  a {
    line-height: 80px;

    display: block;
    font-size: 18px;

    color: @white;
    letter-spacing: 2px;
    padding: 0 20px;
  }
  .router-link-active {
    font-weight: bold;
  }
}
</style>


