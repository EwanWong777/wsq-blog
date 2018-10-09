<template>
    <div class="m-about">
        <Left></Left>
    </div>
</template>

<script>
import Left from "../../components/Left";
export default {
  components: { Left }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables.less";
.m-about{
    height: 100%;
}
</style>