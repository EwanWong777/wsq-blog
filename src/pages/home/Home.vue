<template>
    <div class="home">
        <div class="home-bg"></div>
        <div class="home-container">
            <div class="header">
                <div class="logo">
                    <img src="../../assets/logo.svg" alt="logo">
                </div>
                <div class="nav">
                    <Nav/>
                </div>
            </div>
            <div class="body">
                <h1>{{ $t("common.title") }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '../../components/nav'
export default {
    components: { Nav }
};
</script>

<style lang="less" scoped>
@import '../../styles/variables.less';
.home
{
    position: relative;

    height: 100%;

    background-color: @black;
}

.home-bg
{
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    opacity: .2;
    background-image: url(../../assets/home-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.home-container
{
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
}

.header
{
    height: 40px;
    padding: 40px;
}
.logo
{
    float: left;

    height: 40px;
    img
    {
        height: 100%;
    }
}
.nav
{
    float: right;

    color: @white;
}
.body
{
    h1
    {
        color: @white;
    }
}

</style>