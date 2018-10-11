<template>
  <div class="m-sidebar">
    <div class="m-sidebar-header">
      <Logo></Logo>
    </div>
    <div class="m-sidebar-body">
      <Nav></Nav>
    </div>
    <div class="m-sidebar-bottom">
      <Copyright></Copyright>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import Copyright from "@/components/Copyright";
export default {
  components: {
    Logo,
    Nav,
    Copyright
  }
};
</script>

<style lang="less" scoped>
@import "../../../styles/variables.less";
.m-sidebar {
  height: 100%;
  position: relative;
  .m-sidebar-header {
    padding: 40px 0;
  }
  .m-sidebar-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 30px 0;
    background-color: @black0;
  }
}
</style>


