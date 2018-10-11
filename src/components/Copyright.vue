<template>
    <div class="m-copyright">
      <h5>
        {{ $t("common.copyright") }}
      </h5>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../styles/variables.less";
.m-copyright {
  h5 {
    text-align: center;
    color: @font2;
  }
}
</style>