<template>
    <div class="m-home">
        <div class="m-left" v-if="openSideBar">
            <SideBar></SideBar>
        </div>
        <div class="m-right">
            <TopBar></TopBar>
            <div class="m-body">
                
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { mapState } from "vuex";
export default {
  components: { SideBar, TopBar },
  computed: {
    ...mapState(["openSideBar"])
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables.less";
.m-home {
  height: 100%;
  position: relative;
}
.m-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 38.2%;
  height: 100%;
  background-color: @black0;
}
.m-right {
  position: absolute;
  right: 0;
  top: 0;
  width: 61.8%;
  height: 100%;
  background-color: @blueGrey50;
}
</style>