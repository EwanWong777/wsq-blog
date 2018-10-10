<template>
    <div class="m-topbar">
        <div class="m-toggle-btn">
          <i class="fas fa-bars" @click="openSideBar"></i>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      openSideBar: "OPEN_SIDEBAR"
    })
  }
};
</script>

<style lang="less" scoped>
@import "../styles/variables.less";
.m-topbar {
  height: 80px;
  background-color: @white0;
  border: 1px solid @border0;
}
.m-toggle-btn {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  i {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>