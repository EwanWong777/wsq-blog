<template>
    <div class="m-about">
        <div class="m-left" :class="showSideBar?'m-left-show':'m-left-hide'">
            <SideBar></SideBar>
        </div>
        <div class="m-right" :class="showSideBar?'m-right-short':'m-right-long'">
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
    ...mapState(["showSideBar"])
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables.less";
.m-about {
  height: 100%;
  position: relative;
}
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
</style>