<template>
    <div class="m-page">
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
.m-page{
    height: 100%;
}
</style>