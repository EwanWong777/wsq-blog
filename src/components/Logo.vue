<template>
    <div class="m-logo">
      <div class="m-logo-img">
        <img src="../assets/logo.svg" alt="">
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import '../styles/variables.less';
.m-logo
{
    display: flex;

    padding: 24px 0;
    .m-logo-img
    {
        height: 32px;
        img
        {
            height: 100%;
        }
    }
}

</style>