<template>
<div class="head">
    <Logo></Logo>
    <Nav></Nav>
</div>
</template>

<script>
import Logo from "./children/Logo";
import Nav from "./children/Nav";
export default {
  components: {
    Logo,
    Nav
  }
};
</script>

<style lang="less" scoped>
@import '../styles/variables.less';
.head
{
    display: flex;

    height: 80px;
    padding: 0 20px;

    border-bottom: 1px solid @border0;

    justify-content: space-between;
}

</style>


