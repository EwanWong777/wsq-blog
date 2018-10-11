<template>
    <div class="m-topbar">
        <div class="m-topbar-left">
          <Logo></Logo>
        </div>
        <div class="m-topbar-right">
          <Nav></Nav>
        </div>
    </div>
</template>

<script>
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
export default {
  components: {
    Logo,
    Nav,
  }
};
</script>

<style lang="less" scoped>
@import "../../../styles/variables.less";
.m-topbar {
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
}
</style>