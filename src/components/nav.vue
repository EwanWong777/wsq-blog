<template>
    <div class="nav">
        <router-link to="/">{{ $t("common.home") }}</router-link>
        <router-link to="/page">{{ $t("common.diary") }}</router-link>
        <router-link to="/page">{{ $t("common.works") }}</router-link>
        <router-link to="/page">{{ $t("common.message") }}</router-link>
        <router-link to="/page">{{ $t("common.about") }}</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav
{
    a
    {
        padding: 0 20px;
    }
}

</style>


