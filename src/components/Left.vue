<template>
  <div class="m-left">
      <Logo></Logo>
      <Nav></Nav>
      <div class="m-copyright">
        <h5>
          {{ $t("common.copyright") }}
        </h5>
      </div>
  </div>
</template>

<script>
import Logo from "./children/Logo";
import Nav from "./children/Nav";
export default {
  components: {
    Logo,
    Nav
  }
};
</script>

<style lang="less" scoped>
@import "../styles/variables.less";
.m-left {
  width: 38.2%;
  height: 100%;
  background-color: @black0;
  position: relative;
}

.m-copyright{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: @black0;
  h5{
    height: 80px;
    line-height: 80px;
    padding-right: 40px;
    text-align: right;
    color: @font2;
  }
}
</style>


