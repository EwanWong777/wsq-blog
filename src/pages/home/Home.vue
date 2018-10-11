<template>
    <div class="m-home">
      <div class="m-banner">
        <div class="m-banner-container">
          <div class="m-banner-text">
            <h1>{{ $t("home.banner_title") }}</h1>
            <h2>{{ $t("home.banner_subtitle") }}</h2>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../styles/variables.less";
.m-banner {
  background-color: @deepPurple900;
  padding-top: 80px;
  // background-image: url(../../assets/home-bg.jpg);
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;
  .m-banner-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 0;
  }
}
.m-banner-text {
  color: @white;
  h1 {
    margin-bottom: 20px;
  }
}
</style>