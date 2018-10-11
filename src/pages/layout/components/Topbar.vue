<template>
    <div class="m-topbar">
        <div class="m-topbar-left">
          <Logo/>
        </div>
        <div class="m-topbar-right">
          <Nav/>
          <Language/>
        </div>
    </div>
</template>

<script>
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import Language from "@/components/Language";
export default {
  components: {
    Logo,
    Nav,
    Language,
  }
};
</script>

<style lang="less" scoped>
@import "../../../styles/variables.less";
.m-topbar {
  height: 80px;
  padding: 0 20px;
  max-width: 1280px;
  margin: 0 auto;
  .m-topbar-left {
    float: left;
  }
  .m-topbar-right {
    display: flex;
    float: right;
  }
}
</style>