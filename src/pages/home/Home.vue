<template>
    <div class="m-home">
      <div class="m-banner" :style="{height: clientHeight+'px'}">
        <div class="m-banner-bg"></div>
        <div class="m-banner-container">
          <div class="m-banner-content">
            <div class="m-banner-text">
              <img src="../../assets/title.svg" alt="">
              <!-- <h1>{{ $t("home.banner_title") }}</h1> -->
              <!-- <h2>{{ $t("home.banner_subtitle") }}</h2> -->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["clientHeight"])
  }
};
</script>

<style lang="less" scoped>
@import '../../styles/variables.less';
.m-banner
{
    position: relative;

    background-color: @black;
}
.m-banner-bg
{
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    opacity: .3;
    background-image: url(../../assets/home-bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.m-banner-container
{
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
}
.m-banner-content
{
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.m-banner-text
{
    color: @white;
    text-align: center;
    img{
      height: 160px;
      margin-bottom: 20px;
    }
    h1
    {
        margin-bottom: 20px;
    }
}

</style>