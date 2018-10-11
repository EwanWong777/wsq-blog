<template>
    <div class="m-layout">
        <div class="m-layout-header">
          <Topbar></Topbar>
        </div>
        <div class="m-layout-body">
          <router-view></router-view>
        </div>
        <div class="m-layout-bottom">
          <Copyright></Copyright>
        </div>
    </div>
</template>

<script>
import Topbar from "./components/Topbar";
import Copyright from "@/components/Copyright";
export default {
  components: { Topbar, Copyright }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables.less";
.m-layout-header {
  z-index: 100;
  position: relative;
}
.m-layout-body {
  margin-top: -80px;
}
.m-layout-bottom{
  padding: 20px;
}
</style>