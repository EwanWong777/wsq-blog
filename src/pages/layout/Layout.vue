<template>
    <div class="m-layout">
        <div class="m-left" :class="showSideBar?'m-left-show':'m-left-hide'">
            <Sidebar></Sidebar>
        </div>
        <div class="m-right" :class="showSideBar?'m-right-short':'m-right-long'">
            <Topbar></Topbar>
            <div class="m-body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { mapState } from "vuex";
export default {
  components: { Sidebar, Topbar },
  computed: {
    ...mapState(["showSideBar"])
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables.less";
.m-layout {
  height: 100%;
  position: relative;
  .m-left {
    position: absolute;
    left: 0;
    top: 0;
    width: 360px;
    height: 100%;
    background-color: @black0;
    z-index: 100;
  }
  .m-left-show {
    left: 0;
    transition: all 0.5s;
  }
  .m-left-hide {
    left: -360px;
    transition: all 0.5s;
  }
  .m-right {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: @blueGrey50;
  }
  .m-right-short {
    padding-left: 360px;
    transition: all 0.5s;
  }
  .m-right-long {
    padding-left: 0;
    transition: all 0.5s;
  }
}
</style>