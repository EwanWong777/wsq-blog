<template>
    <div class="logo">
      <div class="logo-img">
        <img src="../../assets/logo.svg" alt="">
      </div>
      <div class="logo-text">
        少秋的博客
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import '../../styles/variables.less';
.logo
{
    display: flex;

    padding: 25px 0;
}

.logo-img
{
    img
    {
        height: 100%;
    }
}
.logo-text
{
    font-size: 24px;
    line-height: 30px;

    margin-left: 10px;
}

</style>